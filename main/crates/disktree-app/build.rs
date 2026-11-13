#[cfg(windows)]
fn main() {
    use std::{env, fs, path::PathBuf, process::Command};

    let icon = PathBuf::from(env::var_os("CARGO_MANIFEST_DIR").unwrap())
        .join("../../assets/disktree.ico")
        .canonicalize()
        .expect("Windows icon asset is missing");
    let out = PathBuf::from(env::var_os("OUT_DIR").unwrap());
    let rc = out.join("disktree.rc");
    let res = out.join("disktree.res");

    // rc.exe treats backslashes inside quoted paths as separators, not escapes.
    let icon_path = icon.to_string_lossy().replace('\\', "/");
    let pkg_ver = env::var("CARGO_PKG_VERSION").unwrap_or_else(|_| "1.0.0".to_string());
    let mut parts: Vec<u16> = pkg_ver
        .split('.')
        .filter_map(|p| p.parse::<u16>().ok())
        .take(4)
        .collect();
    while parts.len() < 4 {
        parts.push(0);
    }
    let ver_commas = format!("{},{},{},{}", parts[0], parts[1], parts[2], parts[3]);
    let rc_content = format!(
        "1 ICON \"{icon_path}\"\n\
         1 VERSIONINFO\n\
         FILEVERSION {ver_commas}\n\
         PRODUCTVERSION {ver_commas}\n\
         FILEFLAGSMASK 0x3fL\n\
         FILEFLAGS 0x0L\n\
         FILEOS 0x40004L\n\
         FILETYPE 0x1L\n\
         FILESUBTYPE 0x0L\n\
         BEGIN\n\
           BLOCK \"StringFileInfo\"\n\
           BEGIN\n\
             BLOCK \"040904b0\"\n\
             BEGIN\n\
               VALUE \"CompanyName\", \"HaYTooL\"\n\
               VALUE \"FileDescription\", \"DiskHaY - GPU-Accelerated Disk Space Visualizer & Cleaner\"\n\
               VALUE \"FileVersion\", \"{pkg_ver}\"\n\
               VALUE \"InternalName\", \"diskhay\"\n\
               VALUE \"LegalCopyright\", \"Copyright (C) HaYTooL\"\n\
               VALUE \"OriginalFilename\", \"diskhay.exe\"\n\
               VALUE \"ProductName\", \"DiskHaY\"\n\
               VALUE \"ProductVersion\", \"{pkg_ver}\"\n\
             END\n\
           END\n\
           BLOCK \"VarFileInfo\"\n\
           BEGIN\n\
             VALUE \"Translation\", 0x0409, 1200\n\
           END\n\
         END\n"
    );
    fs::write(&rc, rc_content)
        .expect("could not write Windows resource script");

    // Cargo can run outside a Visual Studio prompt, where the SDK bin is not
    // on PATH even though the MSVC linker and Windows SDK are installed.
    let rc_exe = env::var_os("DISKTREE_RC").map_or_else(
        || {
            let sdk_bin = env::var_os("WindowsSdkDir")
                .map(PathBuf::from)
                .or_else(|| {
                    env::var_os("ProgramFiles(x86)")
                        .map(|root| PathBuf::from(root).join("Windows Kits/10"))
                })
                .expect("Windows SDK is required to embed the icon")
                .join("bin");
            let host = match env::consts::ARCH {
                "x86_64" => "x64",
                "aarch64" => "arm64",
                "x86" => "x86",
                other => panic!("unsupported Windows build host: {other}"),
            };
            let mut versions: Vec<_> = fs::read_dir(&sdk_bin)
                .expect("Windows SDK bin directory is missing")
                .filter_map(Result::ok)
                .map(|entry| entry.path().join(host).join("rc.exe"))
                .filter(|path| path.is_file())
                .collect();
            versions.sort();
            versions
                .pop()
                .expect("rc.exe is missing from the Windows SDK")
        },
        PathBuf::from,
    );
    let status = Command::new(rc_exe)
        .arg("/nologo")
        .arg(format!("/fo{}", res.display()))
        .arg(&rc)
        .status()
        .expect("could not start rc.exe to embed the Windows icon");
    assert!(
        status.success(),
        "rc.exe failed to compile the Windows icon"
    );

    println!("cargo:rerun-if-changed={}", icon.display());
    println!("cargo:rustc-link-arg-bin=diskhay={}", res.display());
}

#[cfg(not(windows))]
fn main() {}
