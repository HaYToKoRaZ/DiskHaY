const I18N = {
    tr: {
        nav_screenshots: "Ekran Görüntüleri",
        nav_features: "Özellikler",
        nav_download: "İndir",
        nav_controls: "Kısayollar",
        hero_badge: "Rust + GPUI GPU Hızlandırma",
        hero_title: 'Diskinizi neyin tükettiğini <span class="gradient-text">anında görün</span> ve güvenle temizleyin.',
        hero_sub: "DiskHaY, gerçek disk blok tahsisatına (st_blocks × 512) göre çalışan, GPUI tabanlı ultra hızlı mozaik (treemap) disk analiz ve temizleme aracıdır.",
        cta_download: "Son Sürümü İndir",
        cta_preview: "Ekran Görüntüleri",
        meta_windows: "Windows x64 (Setup & Portable)",
        meta_linux: "Linux x86_64",
        meta_langs: "10 Dil",
        shot_zoom: "Tam boyutu gör ⤢",
        shots_title: "Arayüzden Kareler",
        shots_desc: "Koyu ve açık tema desteğiyle 60+ FPS akıcı GPUI arayüzü. Büyütmek için görsellere tıklayın.",
        shot_treemap_title: "Mozaik • Koyu Tema",
        shot_treemap_cap: "İnteraktif treemap haritası ve gerçek zamanlı boyut analizi",
        shot_details_title: "Ayrıntılar • Açık Tema",
        shot_details_cap: "Sıralanabilir liste görünümü ve dosya işaretleyerek temizleme",
        shot_options_title: "Seçenekler • 10 Dil",
        shot_options_cap: "Bayraklı dil seçici, tema ayarları ve performans profilleri",
        feat_title: "Öne Çıkan Özellikler",
        feat_desc: "Milyonlarca dosyayı saniyeler içinde tarayın, görselleştirin ve sıfır riskle yer açın.",
        f1_title: "60+ FPS GPU Arayüz",
        f1_desc: "Rust ve GPUI motoru ile DOM veya WebView yükü olmadan doğrudan ekran kartı üzerinde akıcı çizim.",
        f2_title: "Çift Görünüm (Mozaik & Ayrıntılar)",
        f2_desc: "Üst çubuktan tek tıkla interaktif treemap mozaiği ile sıralanabilir ayrıntılar tablosu arasında geçiş yapın.",
        f3_title: "Gerçek Disk Maliyeti",
        f3_desc: "Dosya boyutlarını yüzeysel uzunluğa göre değil, diskte kapladığı gerçek blok tahsisatına (st_blocks × 512) göre ölçer.",
        f4_title: "Güvenli Aşamalı Silme",
        f4_desc: "Onay vermeden hiçbir dosya silinmez. Kök sürücüler, sistem bağlama noktaları ve kullanıcı profilleri koruma altındadır.",
        f5_title: "10 Dil & Koyu/Açık Tema",
        f5_desc: "Vektörel bayraklı 10 dil desteği ve diskhay.ini içinde saklanan kalıcı tema ve dil tercihleri.",
        f6_title: "Otomatik Güncelleme & SSH",
        f6_desc: "Başlangıçta arka planda yeni sürümleri kontrol eder; ayrıca uzak Linux sunucularını SSH üzerinden yerel arayüzde tarar.",
        dl_title: "İndirme ve Kurulum",
        dl_desc: "Tüm paketler ve SHA256 doğrulama dosyaları GitHub Releases sayfasından indirilebilir.",
        dl_rec: "Önerilen",
        dl_win_setup: "Masaüstü kısayolu ve standart kaldırma yöneticisi içeren Windows kurulum paketi.",
        dl_win_port: "Kurulum gerektirmez. ZIP arşivini çıkarıp doğrudan diskhay.exe dosyasını çalıştırın.",
        dl_linux: "Arşivi açıp ./install.sh çalıştırarak uygulamayı, ikonu ve masaüstü girişini kurun.",
        dl_btn: "GitHub Releases'tan İndir",
        ctrl_title: "Klavye ve Fare Kısayolları",
        ctrl_desc: "Büyük dizinlerde fare veya klavyeyle ışık hızında gezinin.",
        ctrl_col_input: "Girdi",
        ctrl_col_action: "İşlem",
        c1: "Klasör veya dosyayı seçip yan panelde ayrıntılarını görüntüleme",
        c2: "Seçili klasörün içine odaklanma (Zoom in)",
        c3: "Bir üst klasöre çıkma (Zoom out)",
        c4: "Dosya veya klasörü silinmek üzere işaretleme / kaldırma",
        c5: "Silinecek öğeleri gözden geçirme penceresini açma",
        c6: "Diski veya mevcut dizini yeniden tarama",
        c7: "Tüm klavye kısayollarını gösterme",
        footer_copy: "© 2026 HaYTooL. MIT Lisansı ile açık kaynak.",
        footer_releases: "Sürümler",
        footer_issues: "Hata Bildir",
        uc_title: "Gerçek Kullanım Senaryoları ve Depolama Optimizasyonu",
        uc_desc: "DiskHaY'in gereksiz dosyaları, derleme önbelleklerini nasıl temizlediğini ve performans artışı sağladığını görün.",
        uc1_badge: "10–40 GB+ Cache Temizliği",
        uc1_t: "Geliştirici ve Gereksiz Dosya Temizliği",
        uc1_d: "Büyüyen target/, node_modules/ ve paket önbelleklerini saniyeler içinde bulun; klasör klasör aramadan SSD alanı açın.",
        uc2_badge: "Doğru Blok Ölçümü",
        uc2_t: "Gerçek Disk Tahsisi Neden Önemli?",
        uc2_d: "Dosya boyutu yerine diskte gerçekten kaplanan fiziksel blokları göstererek daha doğru analiz sunar ve gereksiz temizlik riskini azaltır.",
        uc3_badge: "Performans Artışı",
        uc3_t: "Tam Sürücü Analizi ve Uzak SSH",
        uc3_d: "Windows SSD'lerde ve uzak Linux sunucularda boş alanı koruyarak disk doluluğu ve disk fragmentasyonu kaynaklı yavaşlamaları önleyin.",
        faq_title: "Sıkça Sorulan Sorular",
        faq_desc: "Gerçek blok tahsisi, güvenli silme, desteklenen sistemler ve uzak SSH taraması hakkında yanıtlar.",
        faq1_q: "Gerçek Disk Tahsisi ile Görünür Boyut arasındaki fark nedir?",
        faq1_a: "Görünür boyut mantıksal bayt uzunluğunu gösterirken Gerçek Disk Tahsisi diskteki fiziksel blokları (st_blocks * 512 veya NTFS küme boyutu) ölçer; böylece seyrek dosyalarda doğru sonuç verir ve yanlış silme riskini önler.",
        faq2_q: "DiskHaY ile dosya silmek güvenli mi?",
        faq2_a: "Evet. Önce Space veya Sağ Tık ile dosyaları işaretlersiniz, onay özetini görürsünüz; taranan kök, ev dizini ve sistem profili klasörleri donanımsal koruma altındadır.",
        faq3_q: "Hangi işletim sistemleri ve dosya sistemleri destekleniyor?",
        faq3_a: "DiskHaY, hızlı NTFS MFT taramasıyla Windows 10/11 (x64) üzerinde ve ext4, btrfs, xfs destekli Linux (x86_64) üzerinde yerel çalışır.",
        faq4_q: "Uzak Linux sunucuları SSH üzerinden tarayabilir miyim?",
        faq4_a: "Evet. user@host:/yol girerek uzak sunucudaki disk kullanımını canlı olarak yerel arayüzde 60+ FPS inceleyebilirsiniz.",
        faq5_q: "DiskHaY ücretsiz ve açık kaynak mı?",
        faq5_a: "Evet, DiskHaY MIT Lisansı altında %100 ücretsiz ve açık kaynaklıdır; telemetri veya reklam içermez."
    },
    en: {
        nav_screenshots: "Screenshots",
        nav_features: "Features",
        nav_download: "Download",
        nav_controls: "Shortcuts",
        hero_badge: "Rust + GPUI GPU Acceleration",
        hero_title: 'See what is eating your disk <span class="gradient-text">instantly</span> and clean safely.',
        hero_sub: "DiskHaY is a GPU-accelerated treemap disk space analyzer and cleaner built with Rust and GPUI, sized strictly by real disk allocation (st_blocks × 512).",
        cta_download: "Download Latest",
        cta_preview: "Screenshots",
        meta_windows: "Windows x64 (Setup & Portable)",
        meta_linux: "Linux x86_64",
        meta_langs: "10 Languages",
        shot_zoom: "View full size ⤢",
        shots_title: "Interface Preview",
        shots_desc: "Smooth 60+ FPS GPUI rendering with Dark and Light themes. Click any screenshot to enlarge.",
        shot_treemap_title: "Treemap • Dark Theme",
        shot_treemap_cap: "Interactive treemap mosaic with real-time space analysis",
        shot_details_title: "Details • Light Theme",
        shot_details_cap: "Sortable details table and safe staged cleanup",
        shot_options_title: "Options • 10 Languages",
        shot_options_cap: "Flag language switcher, themes, and worker performance profiles",
        feat_title: "Key Features",
        feat_desc: "Scan millions of files in seconds, visualize usage clearly, and reclaim space with zero risk.",
        f1_title: "60+ FPS GPU Interface",
        f1_desc: "Built in Rust with GPUI hardware-accelerated rendering—zero DOM or WebView overhead.",
        f2_title: "Dual Views (Treemap & Details)",
        f2_desc: "Switch instantly between the interactive treemap mosaic and sortable details list from the top bar.",
        f3_title: "Real Disk Allocation",
        f3_desc: "Measures actual filesystem block usage (st_blocks × 512) rather than superficial file lengths.",
        f4_title: "Safe Staged Cleanup",
        f4_desc: "Nothing is deleted until you review and confirm. Root drives, mounts, and user profiles are protected.",
        f5_title: "10 Languages & Themes",
        f5_desc: "Built-in localization with vector flags and persistent Dark/Light theme settings stored in diskhay.ini.",
        f6_title: "Auto Update Check & SSH",
        f6_desc: "Non-blocking startup update check plus remote Linux server scanning over SSH in the local UI.",
        dl_title: "Download & Installation",
        dl_desc: "All packages and SHA256 checksums are available on the GitHub Releases page.",
        dl_rec: "Recommended",
        dl_win_setup: "Standard Windows installer with desktop shortcut and uninstall support.",
        dl_win_port: "No installation required. Extract the ZIP archive and launch diskhay.exe.",
        dl_linux: "Extract the tarball and run ./install.sh to install the binary, icon, and desktop entry.",
        dl_btn: "Download from GitHub",
        ctrl_title: "Keyboard & Mouse Controls",
        ctrl_desc: "Navigate huge directory trees effortlessly using mouse or keyboard.",
        ctrl_col_input: "Input",
        ctrl_col_action: "Action",
        c1: "Select and inspect directory or file details in the side panel",
        c2: "Zoom into the selected directory",
        c3: "Zoom out to the parent directory",
        c4: "Mark or unmark a file or folder for deletion",
        c5: "Open the staged cleanup review modal",
        c6: "Rescan the current drive or directory",
        c7: "Show all keyboard shortcuts",
        footer_copy: "© 2026 HaYTooL. Open source under the MIT License.",
        footer_releases: "Releases",
        footer_issues: "Report Issue",
        uc_title: "Real-World Scenarios & Storage Optimization",
        uc_desc: "See how DiskHaY helps recover wasted gigabytes, clean up build caches, and improve system performance safely.",
        uc1_badge: "10–40 GB+ Cache Cleanup",
        uc1_t: "Developer & Build Junk Removal",
        uc1_d: "Spot oversized target/, node_modules/, and package caches in seconds. Reclaim SSD space without hunting through nested folders manually.",
        uc2_badge: "Accurate Block Sizing",
        uc2_t: "Why Real Disk Allocation Matters",
        uc2_d: "Instead of misleading logical sizes, DiskHaY measures physical blocks allocated on disk—giving a truer storage audit and reducing unnecessary cleanup risk.",
        uc3_badge: "Performance Boost",
        uc3_t: "Full-Drive Audit & Remote SSH",
        uc3_d: "Keep free space healthy on Windows SSDs and remote Linux servers alike to prevent low-space slowdowns and disk fragmentation.",
        faq_title: "Frequently Asked Questions",
        faq_desc: "Answers about real block allocation, cleanup safety, OS support, and remote SSH scanning.",
        faq1_q: "What is the difference between Real Disk Allocation and Apparent Size?",
        faq1_a: "Apparent size shows logical byte length, while Real Disk Allocation measures actual filesystem blocks (st_blocks * 512 or NTFS cluster allocation). This gives a more accurate storage optimization picture for sparse files and prevents unnecessary deletion.",
        faq2_q: "Is cleaning up files with DiskHaY safe?",
        faq2_a: "Yes. You stage files and folders first with Space or Right Click, inspect the exact review summary, and hard safety guards block deletion of the scanned root, home folder, mount points, or system profile directories.",
        faq3_q: "Which operating systems and filesystems are supported?",
        faq3_a: "DiskHaY runs natively on Windows 10/11 (x64) with fast NTFS MFT scanning and on Linux (x86_64) across ext4, btrfs, xfs, and other POSIX filesystems.",
        faq4_q: "Can DiskHaY scan remote Linux servers over SSH?",
        faq4_a: "Yes. Enter any user@host:/path SSH target to stream real-time snapshots from a remote server and explore disk usage locally at 60+ FPS.",
        faq5_q: "Is DiskHaY free and open source?",
        faq5_a: "Yes, DiskHaY is 100% free and open source under the MIT License with zero telemetry or ads."
    },
    es: {
        nav_screenshots: "Capturas",
        nav_features: "Funciones",
        nav_download: "Descargar",
        nav_controls: "Atajos",
        hero_badge: "Aceleración GPU Rust + GPUI",
        hero_title: 'Descubre qué consume tu disco <span class="gradient-text">al instante</span> y limpia con seguridad.',
        hero_sub: "DiskHaY es un analizador y limpiador de espacio en disco basado en GPUI con mapa de árbol interactivo y cálculo real de bloques (st_blocks × 512).",
        cta_download: "Descargar Última",
        cta_preview: "Ver Capturas",
        meta_windows: "Windows x64 (Instalador y Portable)",
        meta_linux: "Linux x86_64",
        meta_langs: "10 Idiomas",
        shot_zoom: "Ampliar ⤢",
        shots_title: "Vista Previa",
        shots_desc: "Interfaz fluida a 60+ FPS con temas oscuro y claro. Haz clic para ampliar.",
        shot_treemap_title: "Mosaico • Tema Oscuro",
        shot_treemap_cap: "Mapa de árbol interactivo con análisis en tiempo real",
        shot_details_title: "Detalles • Tema Claro",
        shot_details_cap: "Lista ordenable y limpieza segura por etapas",
        shot_options_title: "Opciones • 10 Idiomas",
        shot_options_cap: "Selector de idioma con banderas, temas y perfiles de rendimiento",
        feat_title: "Características Clave",
        feat_desc: "Escanea millones de archivos en segundos y recupera espacio sin riesgos.",
        f1_title: "Interfaz GPU 60+ FPS",
        f1_desc: "Construido en Rust con renderizado GPUI acelerado por hardware sin carga WebView.",
        f2_title: "Vista Dual",
        f2_desc: "Alterna con un clic entre el mosaico treemap y la tabla de detalles ordenable.",
        f3_title: "Costo Real en Disco",
        f3_desc: "Mide el uso real de bloques del sistema de archivos (st_blocks × 512).",
        f4_title: "Limpieza Segura",
        f4_desc: "Nada se borra sin confirmación. Unidades raíz y perfiles de usuario protegidos.",
        f5_title: "10 Idiomas y Temas",
        f5_desc: "Idiomas integrados con banderas vectoriales y configuración guardada en diskhay.ini.",
        f6_title: "Actualizaciones y SSH",
        f6_desc: "Comprobación automática de versiones y escaneo remoto Linux por SSH.",
        dl_title: "Descarga e Instalación",
        dl_desc: "Todos los paquetes y sumas SHA256 están disponibles en GitHub Releases.",
        dl_rec: "Recomendado",
        dl_win_setup: "Instalador estándar de Windows con acceso directo y desinstalador.",
        dl_win_port: "Sin instalación. Extrae el ZIP y ejecuta diskhay.exe.",
        dl_linux: "Extrae el archivo y ejecuta ./install.sh para instalar binario e icono.",
        dl_btn: "Descargar en GitHub",
        ctrl_title: "Controles de Teclado y Ratón",
        ctrl_desc: "Navega por directorios enormes al instante.",
        ctrl_col_input: "Entrada",
        ctrl_col_action: "Acción",
        c1: "Seleccionar e inspeccionar detalles en el panel lateral",
        c2: "Entrar en la carpeta seleccionada",
        c3: "Subir a la carpeta superior",
        c4: "Marcar o desmarcar para eliminar",
        c5: "Abrir revisión de limpieza",
        c6: "Volver a escanear la unidad o carpeta",
        c7: "Mostrar todos los atajos",
        footer_copy: "© 2026 HaYTooL. Código abierto bajo licencia MIT.",
        footer_releases: "Versiones",
        footer_issues: "Problemas",
        uc_title: "Casos reales y optimización del almacenamiento",
        uc_desc: "Descubre cómo DiskHaY elimina archivos innecesarios, limpia cachés y mejora el rendimiento de forma segura.",
        uc1_badge: "Limpieza de 10–40 GB+",
        uc1_t: "Limpieza de caché de desarrollo",
        uc1_d: "Detecta carpetas target/, node_modules/ y cachés enormes en segundos para liberar espacio SSD sin buscar manualmente.",
        uc2_badge: "Bloques reales",
        uc2_t: "Por qué importa la asignación real",
        uc2_d: "En lugar del tamaño lógico, mide los bloques físicos reales en disco, ofreciendo un análisis preciso y reduciendo el riesgo de borrar de más.",
        uc3_badge: "Más rendimiento",
        uc3_t: "Auditoría completa y SSH remoto",
        uc3_d: "Mantén espacio libre saludable en SSD de Windows y servidores Linux para evitar lentitud y fragmentación de disco.",
        faq_title: "Preguntas frecuentes",
        faq_desc: "Respuestas sobre asignación real, seguridad al limpiar, sistemas compatibles y escaneo SSH.",
        faq1_q: "¿Cuál es la diferencia entre asignación real y tamaño aparente?",
        faq1_a: "El tamaño aparente muestra bytes lógicos; la asignación real mide bloques físicos reales en disco (st_blocks * 512 o clústeres NTFS), evitando errores con archivos dispersos.",
        faq2_q: "¿Es seguro eliminar archivos con DiskHaY?",
        faq2_a: "Sí. Primero marcas archivos con Espacio o Clic derecho, revisas el resumen y protecciones estrictas impiden borrar la raíz o carpetas del sistema.",
        faq3_q: "¿Qué sistemas operativos y sistemas de archivos soporta?",
        faq3_a: "Funciona de forma nativa en Windows 10/11 (x64) con escaneo rápido NTFS MFT y en Linux (x86_64) con ext4, btrfs y xfs.",
        faq4_q: "¿Puede escanear servidores Linux remotos por SSH?",
        faq4_a: "Sí. Introduce usuario@host:/ruta para recibir instantáneas en tiempo real y navegar en local a más de 60 FPS.",
        faq5_q: "¿DiskHaY es gratuito y de código abierto?",
        faq5_a: "Sí, 100% gratuito y bajo licencia MIT, sin telemetría ni anuncios."
    },
    de: {
        nav_screenshots: "Screenshots",
        nav_features: "Funktionen",
        nav_download: "Download",
        nav_controls: "Tastenkürzel",
        hero_badge: "Rust + GPUI GPU-Beschleunigung",
        hero_title: 'Sehen Sie <span class="gradient-text">sofort</span>, was Ihren Speicher belegt, und räumen Sie sicher auf.',
        hero_sub: "DiskHaY ist ein GPU-beschleunigter Treemap-Speicheranalysator auf Rust- und GPUI-Basis mit echter Blockberechnung (st_blocks × 512).",
        cta_download: "Neueste Version",
        cta_preview: "Screenshots",
        meta_windows: "Windows x64 (Setup & Portable)",
        meta_linux: "Linux x86_64",
        meta_langs: "10 Sprachen",
        shot_zoom: "Vergrößern ⤢",
        shots_title: "Oberflächenvorschau",
        shots_desc: "Flüssige 60+ FPS GPUI-Oberfläche im dunklen und hellen Design.",
        shot_treemap_title: "Treemap • Dunkel",
        shot_treemap_cap: "Interaktive Treemap-Ansicht mit Echtzeit-Analyse",
        shot_details_title: "Details • Hell",
        shot_details_cap: "Sortierbare Detailtabelle und sichere Löschprüfung",
        shot_options_title: "Optionen • 10 Sprachen",
        shot_options_cap: "Sprachauswahl mit Flaggen, Themes und Leistungsprofilen",
        feat_title: "Hauptfunktionen",
        feat_desc: "Millionen Dateien in Sekunden scannen und Speicher sicher freigeben.",
        f1_title: "60+ FPS GPU-Oberfläche",
        f1_desc: "Direktes GPU-Rendering mit Rust und GPUI ohne WebView-Ballast.",
        f2_title: "Doppelansicht",
        f2_desc: "Wechseln Sie mit einem Klick zwischen Treemap-Mosaik und Detailtabelle.",
        f3_title: "Echte Blockgröße",
        f3_desc: "Berechnet den tatsächlichen Speicherverbrauch über st_blocks × 512.",
        f4_title: "Sicherer Löschschutz",
        f4_desc: "Keine Löschung ohne Bestätigung. System- und Benutzerordner sind geschützt.",
        f5_title: "10 Sprachen & Themes",
        f5_desc: "Integrierte Lokalisierung mit Vektorflaggen, gespeichert in diskhay.ini.",
        f6_title: "Auto-Update & SSH",
        f6_desc: "Automatische Update-Prüfung und Linux-Remote-Scans über SSH.",
        dl_title: "Download & Installation",
        dl_desc: "Alle Pakete und SHA256-Prüfsummen finden Sie auf GitHub Releases.",
        dl_rec: "Empfohlen",
        dl_win_setup: "Standard-Windows-Installer mit Desktop-Verknüpfung.",
        dl_win_port: "Keine Installation nötig. ZIP entpacken und diskhay.exe starten.",
        dl_linux: "Archiv entpacken und ./install.sh ausführen.",
        dl_btn: "Auf GitHub laden",
        ctrl_title: "Tastatur- & Maussteuerung",
        ctrl_desc: "Schnelle Navigation in großen Verzeichnissen.",
        ctrl_col_input: "Eingabe",
        ctrl_col_action: "Aktion",
        c1: "Ordner oder Datei auswählen und Details prüfen",
        c2: "In ausgewählten Ordner hineinzoomen",
        c3: "Eine Ebene nach oben gehen",
        c4: "Zum Löschen vormerken / abwählen",
        c5: "Löschliste überprüfen",
        c6: "Laufwerk oder Ordner neu scannen",
        c7: "Alle Tastenkürzel anzeigen",
        footer_copy: "© 2026 HaYTooL. Open Source unter MIT-Lizenz.",
        footer_releases: "Releases",
        footer_issues: "Fehler melden",
        uc_title: "Praxisszenarien & Speicheroptimierung",
        uc_desc: "So findet DiskHaY unnötige Dateien, bereinigt Build-Caches und steigert die Systemleistung sicher.",
        uc1_badge: "10–40 GB+ Cache-Bereinigung",
        uc1_t: "Entwickler- & Cache-Bereinigung",
        uc1_d: "Große target/-, node_modules/- und Paket-Caches in Sekunden aufspüren und SSD-Speicher ohne manuelles Suchen freigeben.",
        uc2_badge: "Präzise Blockmessung",
        uc2_t: "Warum reale Blockbelegung zählt",
        uc2_d: "Statt irreführender logischer Größen misst DiskHaY echte physische Disk-Blöcke und senkt so das Risiko unnötiger Löschungen.",
        uc3_badge: "Leistungssteigerung",
        uc3_t: "Laufwerksprüfung & Remote-SSH",
        uc3_d: "Halten Sie genügend freien Speicher auf Windows-SSDs und Linux-Servern frei, um Verlangsamungen und Fragmentierung vorzubeugen.",
        faq_title: "Häufig gestellte Fragen",
        faq_desc: "Antworten zu realer Blockbelegung, Löschsicherheit, Systemunterstützung und Remote-SSH.",
        faq1_q: "Was ist der Unterschied zwischen realer Belegung und scheinbarer Größe?",
        faq1_a: "Die scheinbare Größe zeigt die logische Byte-Länge, während reale Belegung echte Dateisystemblöcke (st_blocks * 512 bzw. NTFS-Cluster) misst.",
        faq2_q: "Ist das Löschen mit DiskHaY sicher?",
        faq2_a: "Ja. Sie markieren Elemente vorab mit Leertaste oder Rechtsklick, prüfen die Zusammenfassung, und Schutzregeln blockieren Wurzel- und Systemordner.",
        faq3_q: "Welche Betriebssysteme werden unterstützt?",
        faq3_a: "DiskHaY läuft nativ auf Windows 10/11 (x64) mit schnellem NTFS-MFT-Scan sowie auf Linux (x86_64) mit ext4, btrfs und xfs.",
        faq4_q: "Kann DiskHaY entfernte Linux-Server per SSH scannen?",
        faq4_a: "Ja. Geben Sie user@host:/pfad ein, um Live-Snapshots lokal mit über 60 FPS zu erkunden.",
        faq5_q: "Ist DiskHaY kostenlos und Open Source?",
        faq5_a: "Ja, 100 % kostenlos unter der MIT-Lizenz, komplett ohne Telemetrie oder Werbung."
    },
    fr: {
        nav_screenshots: "Captures",
        nav_features: "Fonctionnalités",
        nav_download: "Télécharger",
        nav_controls: "Raccourcis",
        hero_badge: "Accélération GPU Rust + GPUI",
        hero_title: 'Visualisez <span class="gradient-text">instantanément</span> votre disque et nettoyez en toute sécurité.',
        hero_sub: "DiskHaY est un analyseur d'espace disque ultra-rapide en Rust et GPUI, basé sur l'allocation réelle des blocs (st_blocks × 512).",
        cta_download: "Télécharger",
        cta_preview: "Captures d'écran",
        meta_windows: "Windows x64 (Setup & Portable)",
        meta_linux: "Linux x86_64",
        meta_langs: "10 Langues",
        shot_zoom: "Agrandir ⤢",
        shots_title: "Aperçu de l'interface",
        shots_desc: "Rendu GPUI fluide à 60+ FPS avec thèmes sombre et clair.",
        shot_treemap_title: "Mosaïque • Thème Sombre",
        shot_treemap_cap: "Treemap interactif avec analyse en temps réel",
        shot_details_title: "Détails • Thème Clair",
        shot_details_cap: "Tableau triable et suppression sécurisée par étapes",
        shot_options_title: "Options • 10 Langues",
        shot_options_cap: "Sélecteur de langue avec drapeaux, thèmes et profils CPU",
        feat_title: "Points Forts",
        feat_desc: "Analysez des millions de fichiers en quelques secondes sans risque.",
        f1_title: "Interface GPU 60+ FPS",
        f1_desc: "Moteur Rust + GPUI sans surcharge DOM ni WebView.",
        f2_title: "Double Vue",
        f2_desc: "Basculez en un clic entre la mosaïque treemap et la liste détaillée.",
        f3_title: "Coût Réel sur Disque",
        f3_desc: "Calcule l'espace réellement alloué par blocs (st_blocks × 512).",
        f4_title: "Protection Anti-Erreur",
        f4_desc: "Aucune suppression sans confirmation. Les répertoires système sont protégés.",
        f5_title: "10 Langues & Thèmes",
        f5_desc: "Localisation intégrée avec drapeaux vectoriels dans diskhay.ini.",
        f6_title: "Mises à jour & SSH",
        f6_desc: "Vérification de version en arrière-plan et scan Linux distant via SSH.",
        dl_title: "Téléchargement et Installation",
        dl_desc: "Tous les paquets et sommes SHA256 sont sur GitHub Releases.",
        dl_rec: "Recommandé",
        dl_win_setup: "Installateur Windows standard avec raccourci bureau.",
        dl_win_port: "Sans installation. Extrayez le ZIP et lancez diskhay.exe.",
        dl_linux: "Extrayez l'archive et lancez ./install.sh.",
        dl_btn: "Télécharger sur GitHub",
        ctrl_title: "Raccourcis Clavier et Souris",
        ctrl_desc: "Naviguez rapidement dans vos dossiers.",
        ctrl_col_input: "Entrée",
        ctrl_col_action: "Action",
        c1: "Sélectionner et inspecter les détails",
        c2: "Entrer dans le dossier sélectionné",
        c3: "Revenir au dossier parent",
        c4: "Marquer ou démarquer pour suppression",
        c5: "Ouvrir la fenêtre de confirmation",
        c6: "Re-scanner le disque ou dossier",
        c7: "Afficher tous les raccourcis",
        footer_copy: "© 2026 HaYTooL. Open source sous licence MIT.",
        footer_releases: "Versions",
        footer_issues: "Signaler un bug",
        uc_title: "Cas d'usage réels et optimisation du stockage",
        uc_desc: "Découvrez comment DiskHaY supprime les fichiers inutiles, nettoie les caches et améliore les performances.",
        uc1_badge: "10–40 Go+ de cache nettoyé",
        uc1_t: "Nettoyage des caches de build",
        uc1_d: "Repérez en quelques secondes les dossiers target/, node_modules/ et caches volumineux sans fouiller manuellement.",
        uc2_badge: "Blocs physiques réels",
        uc2_t: "Pourquoi l'allocation réelle compte",
        uc2_d: "Au lieu de la taille logique, DiskHaY mesure les blocs réellement occupés sur le disque, réduisant le risque de suppression inutile.",
        uc3_badge: "Gain de performance",
        uc3_t: "Audit complet et SSH distant",
        uc3_d: "Préservez l'espace libre sur vos SSD Windows et serveurs Linux pour éviter les ralentissements et la fragmentation.",
        faq_title: "Foire aux questions",
        faq_desc: "Réponses sur l'allocation réelle, la sécurité, la compatibilité et l'analyse SSH.",
        faq1_q: "Quelle différence entre allocation réelle et taille apparente ?",
        faq1_a: "La taille apparente indique les octets logiques ; l'allocation réelle mesure les blocs physiques (st_blocks * 512 ou clusters NTFS).",
        faq2_q: "Est-il sûr de nettoyer ses fichiers avec DiskHaY ?",
        faq2_a: "Oui. Vous marquez d'abord avec Espace ou Clic droit, vérifiez le résumé et des garde-fous bloquent la suppression des dossiers système.",
        faq3_q: "Quels systèmes sont pris en charge ?",
        faq3_a: "DiskHaY fonctionne nativement sous Windows 10/11 (x64, NTFS MFT rapide) et Linux (x86_64 : ext4, btrfs, xfs).",
        faq4_q: "Peut-on analyser un serveur Linux distant via SSH ?",
        faq4_a: "Oui. Saisissez user@host:/chemin pour explorer l'espace disque distant localement à plus de 60 FPS.",
        faq5_q: "DiskHaY est-il gratuit et open source ?",
        faq5_a: "Oui, 100 % gratuit sous licence MIT, sans télémétrie ni publicité."
    },
    ru: {
        nav_screenshots: "Скриншоты",
        nav_features: "Функции",
        nav_download: "Скачать",
        nav_controls: "Управление",
        hero_badge: "Ускорение GPU Rust + GPUI",
        hero_title: 'Узнайте <span class="gradient-text">мгновенно</span>, что занимает диск, и безопасно очистите место.',
        hero_sub: "DiskHaY — быстрый анализатор дискового пространства на Rust и GPUI с расчетом реального выделения блоков (st_blocks × 512).",
        cta_download: "Скачать релиз",
        cta_preview: "Скриншоты",
        meta_windows: "Windows x64 (Setup & Portable)",
        meta_linux: "Linux x86_64",
        meta_langs: "10 Языков",
        shot_zoom: "Увеличить ⤢",
        shots_title: "Скриншоты интерфейса",
        shots_desc: "Плавный GPU-интерфейс 60+ FPS со светлой и темной темой.",
        shot_treemap_title: "Мозаика • Темная тема",
        shot_treemap_cap: "Интерактивная карта диска в реальном времени",
        shot_details_title: "Детали • Светлая тема",
        shot_details_cap: "Сортируемый список и безопасное удаление",
        shot_options_title: "Настройки • 10 языков",
        shot_options_cap: "Выбор языка с флагами, темы и профили производительности",
        feat_title: "Ключевые возможности",
        feat_desc: "Сканируйте миллионы файлов за секунды и освобождайте место без риска.",
        f1_title: "60+ FPS GPU-интерфейс",
        f1_desc: "Нативный рендеринг на Rust и GPUI без WebView.",
        f2_title: "Два режима просмотра",
        f2_desc: "Переключайтесь между картой treemap и таблицей деталей в один клик.",
        f3_title: "Реальный размер на диске",
        f3_desc: "Учитывает реальные блоки файловой системы (st_blocks × 512).",
        f4_title: "Безопасное удаление",
        f4_desc: "Системные диски и профили пользователей надежно защищены от случайного удаления.",
        f5_title: "10 языков и темы",
        f5_desc: "Встроенная локализация с векторными флагами в diskhay.ini.",
        f6_title: "Автообновления и SSH",
        f6_desc: "Фоновая проверка обновлений и сканирование Linux-серверов по SSH.",
        dl_title: "Загрузка и установка",
        dl_desc: "Все сборки и контрольные суммы SHA256 доступны на GitHub Releases.",
        dl_rec: "Рекомендуется",
        dl_win_setup: "Стандартный установщик Windows с ярлыком и удалением.",
        dl_win_port: "Без установки. Распакуйте ZIP и запустите diskhay.exe.",
        dl_linux: "Распакуйте архив и выполните ./install.sh.",
        dl_btn: "Скачать с GitHub",
        ctrl_title: "Горячие клавиши и мышь",
        ctrl_desc: "Быстрая навигация по большим каталогам.",
        ctrl_col_input: "Ввод",
        ctrl_col_action: "Действие",
        c1: "Выбрать и просмотреть сведения",
        c2: "Открыть выбранную папку",
        c3: "Перейти на уровень вверх",
        c4: "Отметить или снять отметку на удаление",
        c5: "Открыть список на удаление",
        c6: "Пересканировать диск или папку",
        c7: "Показать все горячие клавиши",
        footer_copy: "© 2026 HaYTooL. Открытый код под лицензией MIT.",
        footer_releases: "Релизы",
        footer_issues: "Сообщить об ошибке",
        uc_title: "Реальные сценарии и оптимизация хранилища",
        uc_desc: "Как DiskHaY удаляет ненужные файлы, очищает кэш сборки и повышает производительность системы.",
        uc1_badge: "Очистка кэша 10–40 ГБ+",
        uc1_t: "Очистка кэша разработки",
        uc1_d: "Мгновенно находите разросшиеся target/, node_modules/ и кэш пакетов, освобождая место на SSD без ручного поиска.",
        uc2_badge: "Точный подсчет блоков",
        uc2_t: "Зачем нужно реальное выделение",
        uc2_d: "Вместо логического размера DiskHaY измеряет физические блоки на диске, снижая риск случайного удаления нужных данных.",
        uc3_badge: "Рост производительности",
        uc3_t: "Аудит дисков и удаленный SSH",
        uc3_d: "Поддерживайте свободное место на SSD Windows и серверах Linux, предотвращая замедление и фрагментацию диска.",
        faq_title: "Частые вопросы",
        faq_desc: "Ответы о реальных блоках, безопасности удаления, поддержке ОС и SSH-сканировании.",
        faq1_q: "В чем разница между реальным выделением и видимым размером?",
        faq1_a: "Видимый размер показывает логическую длину в байтах, а реальное выделение — физические блоки ФС (st_blocks * 512 или кластеры NTFS).",
        faq2_q: "Безопасно ли удалять файлы через DiskHaY?",
        faq2_a: "Да. Сначала файлы отмечаются пробелом или ПКМ, проверяется сводка, а защита блокирует удаление корня и системных каталогов.",
        faq3_q: "Какие ОС и файловые системы поддерживаются?",
        faq3_a: "Windows 10/11 (x64) с быстрым сканированием NTFS MFT и Linux (x86_64) для ext4, btrfs и xfs.",
        faq4_q: "Можно ли сканировать удаленные Linux-серверы по SSH?",
        faq4_a: "Да. Введите user@host:/путь и изучайте диск сервера локально при 60+ FPS.",
        faq5_q: "DiskHaY бесплатен и с открытым исходным кодом?",
        faq5_a: "Да, на 100% бесплатен по лицензии MIT без телеметрии и рекламы."
    },
    pt: {
        nav_screenshots: "Capturas",
        nav_features: "Recursos",
        nav_download: "Baixar",
        nav_controls: "Atalhos",
        hero_badge: "Aceleração GPU Rust + GPUI",
        hero_title: 'Veja o que consome seu disco <span class="gradient-text">na hora</span> e limpe com segurança.',
        hero_sub: "DiskHaY é um analisador de espaço em disco em Rust e GPUI com mapa treemap interativo e cálculo real de blocos (st_blocks × 512).",
        cta_download: "Baixar Última Versão",
        cta_preview: "Ver Capturas",
        meta_windows: "Windows x64 (Setup & Portable)",
        meta_linux: "Linux x86_64",
        meta_langs: "10 Idiomas",
        shot_zoom: "Ampliar ⤢",
        shots_title: "Prévia da Interface",
        shots_desc: "Interface GPUI fluida a 60+ FPS com temas escuro e claro.",
        shot_treemap_title: "Mosaico • Tema Escuro",
        shot_treemap_cap: "Treemap interativo com análise em tempo real",
        shot_details_title: "Detalhes • Tema Claro",
        shot_details_cap: "Tabela ordenável e limpeza segura por etapas",
        shot_options_title: "Opções • 10 Idiomas",
        shot_options_cap: "Seletor de idioma com bandeiras, temas e desempenho",
        feat_title: "Principais Recursos",
        feat_desc: "Analise milhões de arquivos em segundos sem riscos.",
        f1_title: "Interface GPU 60+ FPS",
        f1_desc: "Construído em Rust e GPUI sem sobrecarga de WebView.",
        f2_title: "Visualização Dupla",
        f2_desc: "Alterne entre o mosaico treemap e a tabela de detalhes em um clique.",
        f3_title: "Custo Real em Disco",
        f3_desc: "Mede a alocação real de blocos do sistema (st_blocks × 512).",
        f4_title: "Limpeza Segura",
        f4_desc: "Nada é excluído sem confirmação. Pastas do sistema são protegidas.",
        f5_title: "10 Idiomas e Temas",
        f5_desc: "Localização com bandeiras vetoriais salva em diskhay.ini.",
        f6_title: "Atualizações e SSH",
        f6_desc: "Verificação automática de versão e análise remota Linux via SSH.",
        dl_title: "Download e Instalação",
        dl_desc: "Todos os pacotes e hashes SHA256 estão no GitHub Releases.",
        dl_rec: "Recomendado",
        dl_win_setup: "Instalador padrão do Windows com atalho na área de trabalho.",
        dl_win_port: "Sem instalação. Extraia o ZIP e execute diskhay.exe.",
        dl_linux: "Extraia o arquivo e execute ./install.sh.",
        dl_btn: "Baixar no GitHub",
        ctrl_title: "Atalhos de Teclado e Mouse",
        ctrl_desc: "Navegue rapidamente por diretórios grandes.",
        ctrl_col_input: "Entrada",
        ctrl_col_action: "Ação",
        c1: "Selecionar e inspecionar detalhes",
        c2: "Entrar na pasta selecionada",
        c3: "Voltar para a pasta anterior",
        c4: "Marcar ou desmarcar para exclusão",
        c5: "Abrir revisão de limpeza",
        c6: "Reescanear unidade ou pasta",
        c7: "Mostrar todos os atalhos",
        footer_copy: "© 2026 HaYTooL. Código aberto sob licença MIT.",
        footer_releases: "Versões",
        footer_issues: "Relatar Erro",
        uc_title: "Cenários reais e otimização de armazenamento",
        uc_desc: "Veja como o DiskHaY remove arquivos inúteis, limpa caches de compilação e melhora o desempenho com segurança.",
        uc1_badge: "Limpeza de 10–40 GB+",
        uc1_t: "Limpeza de caches de desenvolvimento",
        uc1_d: "Encontre pastas target/, node_modules/ e caches gigantes em segundos e recupere espaço SSD sem procurar manualmente.",
        uc2_badge: "Blocos físicos reais",
        uc2_t: "Por que a alocação real importa",
        uc2_d: "Em vez do tamanho lógico, o DiskHaY mede os blocos reais alocados no disco, reduzindo riscos de exclusão desnecessária.",
        uc3_badge: "Ganho de desempenho",
        uc3_t: "Auditoria completa e SSH remoto",
        uc3_d: "Mantenha espaço livre saudável em SSDs Windows e servidores Linux para evitar lentidão e fragmentação de disco.",
        faq_title: "Perguntas frequentes",
        faq_desc: "Respostas sobre alocação real, segurança na limpeza, suporte de sistema e SSH remoto.",
        faq1_q: "Qual a diferença entre alocação real e tamanho aparente?",
        faq1_a: "O tamanho aparente mostra bytes lógicos; a alocação real mede blocos físicos no disco (st_blocks * 512 ou clusters NTFS).",
        faq2_q: "É seguro apagar arquivos com o DiskHaY?",
        faq2_a: "Sim. Você marca com Espaço ou Botão direito, revisa o resumo e travas impedem apagar a raiz ou pastas do sistema.",
        faq3_q: "Quais sistemas são suportados?",
        faq3_a: "Windows 10/11 (x64) com leitura rápida NTFS MFT e Linux (x86_64) com ext4, btrfs e xfs.",
        faq4_q: "Posso analisar servidores Linux remotos via SSH?",
        faq4_a: "Sim. Informe user@host:/caminho e navegue localmente a 60+ FPS.",
        faq5_q: "O DiskHaY é gratuito e open source?",
        faq5_a: "Sim, 100% gratuito sob licença MIT, sem telemetria nem anúncios."
    },
    zh: {
        nav_screenshots: "界面截图",
        nav_features: "核心特性",
        nav_download: "下载",
        nav_controls: "快捷键",
        hero_badge: "Rust + GPUI GPU 硬件加速",
        hero_title: '<span class="gradient-text">瞬间看清</span>磁盘占用并安全清理多余文件。',
        hero_sub: "DiskHaY 是一款基于 Rust 和 GPUI 构建的 GPU 加速矩形树状图磁盘分析与清理工具，严格按实际块分配（st_blocks × 512）计算空间。",
        cta_download: "下载最新版本",
        cta_preview: "查看截图",
        meta_windows: "Windows x64 (安装版 & 便携版)",
        meta_linux: "Linux x86_64",
        meta_langs: "10 种语言",
        shot_zoom: "查看大图 ⤢",
        shots_title: "界面预览",
        shots_desc: "支持深色与浅色主题，60+ FPS 流畅 GPU 渲染。点击图片放大。",
        shot_treemap_title: "矩形树状图 • 深色主题",
        shot_treemap_cap: "交互式磁盘占用全景视图与实时分析",
        shot_details_title: "详细信息 • 浅色主题",
        shot_details_cap: "可排序列表视图与安全分步清理",
        shot_options_title: "选项 • 10 种语言",
        shot_options_cap: "国旗语言切换、主题设置与性能配置",
        feat_title: "核心特性",
        feat_desc: "数秒内扫描数百万文件，零风险释放存储空间。",
        f1_title: "60+ FPS GPU 渲染",
        f1_desc: "基于 Rust 与 GPUI 原生绘制，无任何 DOM 或 WebView 开销。",
        f2_title: "双视图切换",
        f2_desc: "顶部栏一键在矩形树状图与详细信息列表之间切换。",
        f3_title: "真实磁盘占用",
        f3_desc: "按实际文件系统块占用（st_blocks × 512）统计，而非表面大小。",
        f4_title: "安全分步清理",
        f4_desc: "确认前绝不删除文件，系统根目录与用户配置目录受严格保护。",
        f5_title: "10 种语言与主题",
        f5_desc: "内置矢量国旗多语言支持，配置保存于 diskhay.ini。",
        f6_title: "自动更新与 SSH 扫描",
        f6_desc: "启动时后台检测更新，并支持通过 SSH 扫描远程 Linux 服务器。",
        dl_title: "下载与安装",
        dl_desc: "所有安装包及 SHA256 校验文件均可在 GitHub Releases 下载。",
        dl_rec: "推荐",
        dl_win_setup: "标准 Windows 安装包，含桌面快捷方式与卸载支持。",
        dl_win_port: "免安装便携版，解压后直接运行 diskhay.exe。",
        dl_linux: "解压归档并运行 ./install.sh 完成安装。",
        dl_btn: "前往 GitHub 下载",
        ctrl_title: "键盘与鼠标快捷键",
        ctrl_desc: "在海量目录中快速导航。",
        ctrl_col_input: "操作",
        ctrl_col_action: "功能",
        c1: "选中并在侧边栏查看详细信息",
        c2: "进入选中的文件夹",
        c3: "返回上一级文件夹",
        c4: "标记或取消标记待删除项",
        c5: "打开待删除列表确认窗口",
        c6: "重新扫描磁盘或目录",
        c7: "显示所有快捷键",
        footer_copy: "© 2026 HaYTooL. 基于 MIT 协议开源。",
        footer_releases: "发布版本",
        footer_issues: "反馈问题",
        uc_title: "实际使用场景与存储优化",
        uc_desc: "了解 DiskHaY 如何安全清理冗余文件、构建缓存并提升系统性能。",
        uc1_badge: "清理 10–40 GB+ 缓存",
        uc1_t: "开发者与构建缓存清理",
        uc1_d: "几秒内定位过大的 target/、node_modules/ 和包缓存，无需手动翻找多层目录即可释放 SSD 空间。",
        uc2_badge: "精确物理块计量",
        uc2_t: "为何真实磁盘分配很重要",
        uc2_d: "不同于易误导的逻辑大小，DiskHaY 测量磁盘实际占用的物理块，提供更真实的存储审计并降低误删风险。",
        uc3_badge: "性能提升",
        uc3_t: "全盘审计与远程 SSH",
        uc3_d: "保持 Windows SSD 与远程 Linux 服务器拥有健康剩余空间，避免空间不足导致的卡顿与磁盘碎片。",
        faq_title: "常见问题",
        faq_desc: "关于真实块分配、清理安全、系统兼容性及远程 SSH 扫描的解答。",
        faq1_q: "真实磁盘分配与表观大小有什么区别？",
        faq1_a: "表观大小显示逻辑字节长度，而真实磁盘分配测量文件系统实际物理块（st_blocks * 512 或 NTFS 簇），在稀疏文件上更准确。",
        faq2_q: "使用 DiskHaY 删除文件安全吗？",
        faq2_a: "安全。先用空格或右键暂存标记并核对摘要，内置安全护栏会阻止删除扫描根目录、主目录和系统配置目录。",
        faq3_q: "支持哪些操作系统和文件系统？",
        faq3_a: "原生支持 Windows 10/11 (x64，快速 NTFS MFT 扫描) 及 Linux (x86_64，ext4、btrfs、xfs 等)。",
        faq4_q: "可以通过 SSH 扫描远程 Linux 服务器吗？",
        faq4_a: "可以。输入 user@host:/path 即可在本地界面以 60+ FPS 实时浏览远程磁盘占用。",
        faq5_q: "DiskHaY 是免费开源的吗？",
        faq5_a: "是的，基于 MIT 协议 100% 免费开源，无任何遥测或广告。"
    },
    ar: {
        nav_screenshots: "لقطات الشاشة",
        nav_features: "المميزات",
        nav_download: "تنزيل",
        nav_controls: "الاختصارات",
        hero_badge: "تسريع GPU عبر Rust + GPUI",
        hero_title: 'اكتشف ما يستهلك القرص <span class="gradient-text">فوراً</span> ونظّف بأمان.',
        hero_sub: "DiskHaY أداة فائقة السرعة لتحليل وتنظيف مساحة القرص مبنية بلغة Rust ومحرك GPUI، تقيس المساحة حسب التخصيص الفعلي للكتل (st_blocks × 512).",
        cta_download: "تنزيل أحدث إصدار",
        cta_preview: "لقطات الشاشة",
        meta_windows: "Windows x64 (مثبت ومحمول)",
        meta_linux: "Linux x86_64",
        meta_langs: "10 لغات",
        shot_zoom: "عرض بالحجم الكامل ⤢",
        shots_title: "معاينة الواجهة",
        shots_desc: "واجهة GPUI سلسة بسرعة 60+ إطاراً في الثانية مع الوضع الداكن والفاتح.",
        shot_treemap_title: "خريطة شجرية • الوضع الداكن",
        shot_treemap_cap: "خريطة تفاعلية لتحليل المساحة في الوقت الفعلي",
        shot_details_title: "التفاصيل • الوضع الفاتح",
        shot_details_cap: "جدول قابل للفرز وتنظيف آمن على مراحل",
        shot_options_title: "الخيارات • 10 لغات",
        shot_options_cap: "مبدل لغة بالأعلام وإعدادات المظهر والأداء",
        feat_title: "أبرز المميزات",
        feat_desc: "افحص ملايين الملفات في ثوانٍ وحرر المساحة دون أي مخاطرة.",
        f1_title: "واجهة GPU بسرعة 60+ FPS",
        f1_desc: "مبنية بلغة Rust ومحرك GPUI دون عبء المتصفح أو WebView.",
        f2_title: "عرض مزدوج",
        f2_desc: "بدّل بنقرة واحدة بين الخريطة الشجرية وجدول التفاصيل.",
        f3_title: "التكلفة الفعلية للقرص",
        f3_desc: "تقيس استهلاك الكتل الفعلي في نظام الملفات (st_blocks × 512).",
        f4_title: "حماية ذكية من الحذف",
        f4_desc: "لا يتم حذف أي ملف قبل مراجعتك، مع حماية كاملة لمجلدات النظام.",
        f5_title: "10 لغات وسمات مخصصة",
        f5_desc: "دعم مدمج لعشر لغات مع أعلام وإعدادات محفوظة في diskhay.ini.",
        f6_title: "تحديث تلقائي وفحص SSH",
        f6_desc: "تحقق من التحديثات في الخلفية وفحص خوادم Linux عبر SSH.",
        dl_title: "التنزيل والتثبيت",
        dl_desc: "جميع الحزم وملفات التحقق SHA256 متوفرة على صفحة GitHub Releases.",
        dl_rec: "موصى به",
        dl_win_setup: "مثبت ويندوز قياسي مع اختصار سطح المكتب وإلغاء التثبيت.",
        dl_win_port: "لا يتطلب تثبيتاً. فك ضغط الملف وشغّل diskhay.exe مباشرة.",
        dl_linux: "فك ضغط الأرشيف وشغّل ./install.sh للتثبيت.",
        dl_btn: "تنزيل من GitHub",
        ctrl_title: "اختصارات لوحة المفاتيح والفأرة",
        ctrl_desc: "تنقل بسرعة فائقة عبر المجلدات الكبيرة.",
        ctrl_col_input: "الإدخال",
        ctrl_col_action: "الإجراء",
        c1: "تحديد المجلد أو الملف وعرض تفاصيله",
        c2: "الدخول إلى المجلد المحدد",
        c3: "الرجوع إلى المجلد الأعلى",
        c4: "تحديد أو إلغاء تحديد العنصر للحذف",
        c5: "فتح نافذة مراجعة العناصر المحددة للحذف",
        c6: "إعادة فحص القرص أو المجلد",
        c7: "عرض جميع اختصارات لوحة المفاتيح",
        footer_copy: "© 2026 HaYTooL. مشروع مفتوح المصدر برخصة MIT.",
        footer_releases: "الإصدارات",
        footer_issues: "الإبلاغ عن مشكلة",
        uc_title: "سيناريوهات واقعية وتحسين التخزين",
        uc_desc: "اكتشف كيف يساعد DiskHaY في تنظيف الملفات غير الضرورية وذاكرة التخزين المؤقت وتحسين الأداء بأمان.",
        uc1_badge: "تنظيف 10–40 جيجابايت+",
        uc1_t: "تنظيف مخلفات البناء والكاش",
        uc1_d: "اعثر على مجلدات target/ و node_modules/ الكبيرة خلال ثوانٍ لاستعادة مساحة SSD دون بحث يدوي.",
        uc2_badge: "قياس الكتل الفعلي",
        uc2_t: "أهمية التخصيص الفعلي للقرص",
        uc2_d: "بدلاً من الحجم المنطقي، يقيس DiskHaY الكتل الفيزيائية المحجوزة فعلياً على القرص مما يقلل خطر الحذف غير الضروري.",
        uc3_badge: "تعزيز الأداء",
        uc3_t: "فحص كامل للأقراص وSSH البعيد",
        uc3_d: "حافظ على مساحة حرة كافية في أقراص Windows SSD وخوادم Linux لتجنب البطء وتجزئة القرص.",
        faq_title: "الأسئلة الشائعة",
        faq_desc: "إجابات حول قياس الكتل الفعلي، أمان الحذف، الأنظمة المدعومة وفحص SSH.",
        faq1_q: "ما الفرق بين التخصيص الفعلي للقرص والحجم الظاهري؟",
        faq1_a: "الحجم الظاهري يعرض الطول المنطقي بالبايت، بينما التخصيص الفعلي يقيس الكتل الحقيقية على القرص (st_blocks * 512 أو NTFS).",
        faq2_q: "هل حذف الملفات عبر DiskHaY آمن؟",
        faq2_a: "نعم. تقوم بتحديد الملفات أولاً ومراجعة الملخص، وتمنع الحماية الصلبة حذف الجذر أو مجلدات النظام.",
        faq3_q: "ما الأنظمة المدعومة؟",
        faq3_a: "يعمل أصلياً على Windows 10/11 (x64) مع مسح NTFS MFT السريع، وعلى Linux (x86_64) لأنظمة ext4 وbtrfs وxfs.",
        faq4_q: "هل يدعم فحص خوادم Linux البعيدة عبر SSH؟",
        faq4_a: "نعم. أدخل user@host:/path لاستعراض مساحة الخادم محلياً بسرعة 60+ FPS.",
        faq5_q: "هل DiskHaY مجاني ومفتوح المصدر؟",
        faq5_a: "نعم، مجاني 100% بموجب رخصة MIT بدون أي تتبع أو إعلانات."
    },
    hi: {
        nav_screenshots: "स्क्रीनशॉट",
        nav_features: "विशेषताएँ",
        nav_download: "डाउनलोड",
        nav_controls: "शॉर्टकट",
        hero_badge: "Rust + GPUI GPU त्वरण",
        hero_title: 'तुरंत देखें कि आपका डिस्क <span class="gradient-text">कहाँ भर रहा है</span> और सुरक्षित रूप से साफ़ करें।',
        hero_sub: "DiskHaY Rust और GPUI से बना एक तेज़ ट्री-मैप डिस्क स्पेस विश्लेषक और क्लीनर है जो वास्तविक ब्लॉक आवंटन (st_blocks × 512) मापता है।",
        cta_download: "नवीनतम डाउनलोड करें",
        cta_preview: "स्क्रीनशॉट देखें",
        meta_windows: "Windows x64 (Setup & Portable)",
        meta_linux: "Linux x86_64",
        meta_langs: "10 भाषाएँ",
        shot_zoom: "बड़ा देखें ⤢",
        shots_title: "इंटरफ़ेस झलक",
        shots_desc: "डार्क और लाइट थीम के साथ स्मूथ 60+ FPS GPUI रेंडरिंग।",
        shot_treemap_title: "ट्री-मैप • डार्क थीम",
        shot_treemap_cap: "रीयल-टाइम स्पेस विश्लेषण के साथ इंटरैक्टिव ट्री-मैप",
        shot_details_title: "विवरण • लाइट थीम",
        shot_details_cap: "सॉर्ट करने योग्य सूची और सुरक्षित चरणबद्ध सफाई",
        shot_options_title: "विकल्प • 10 भाषाएँ",
        shot_options_cap: "ध्वज भाषा चयनकर्ता, थीम और प्रदर्शन प्रोफ़ाइल",
        feat_title: "मुख्य विशेषताएँ",
        feat_desc: "सेकंडों में लाखों फ़ाइलें स्कैन करें और बिना किसी जोखिम के जगह खाली करें।",
        f1_title: "60+ FPS GPU इंटरफ़ेस",
        f1_desc: "बिना DOM या WebView भार के Rust और GPUI पर नेटिव GPU रेंडरिंग।",
        f2_title: "दोहरा दृश्य",
        f2_desc: "एक क्लिक में ट्री-मैप और विवरण तालिका के बीच स्विच करें।",
        f3_title: "वास्तविक डिस्क लागत",
        f3_desc: "वास्तविक फ़ाइल सिस्टम ब्लॉक उपयोग (st_blocks × 512) मापता है।",
        f4_title: "सुरक्षित सफाई सुरक्षा",
        f4_desc: "आपकी पुष्टि के बिना कुछ भी नहीं हटाया जाता; सिस्टम फ़ोल्डर सुरक्षित रहते हैं।",
        f5_title: "10 भाषाएँ और थीम",
        f5_desc: "वेक्टर ध्वज के साथ 10 भाषाएँ और diskhay.ini में सहेजी गई सेटिंग्स।",
        f6_title: "ऑटो अपडेट और SSH",
        f6_desc: "बैकग्राउंड अपडेट जांच और SSH के माध्यम से रिमोट Linux स्कैनिंग।",
        dl_title: "डाउनलोड और इंस्टॉलेशन",
        dl_desc: "सभी पैकेज और SHA256 चेकसम GitHub Releases पर उपलब्ध हैं।",
        dl_rec: "अनुशंसित",
        dl_win_setup: "डेस्कटॉप शॉर्टकट के साथ मानक Windows इंस्टॉलर।",
        dl_win_port: "इंस्टॉलेशन की आवश्यकता नहीं। ZIP निकालें और diskhay.exe चलाएँ।",
        dl_linux: "टारबॉल निकालें और ./install.sh चलाएँ।",
        dl_btn: "GitHub से डाउनलोड करें",
        ctrl_title: "कीबोर्ड और माउस नियंत्रण",
        ctrl_desc: "बड़े फ़ोल्डरों में आसानी से नेविगेट करें।",
        ctrl_col_input: "इनपुट",
        ctrl_col_action: "क्रिया",
        c1: "फ़ोल्डर या फ़ाइल चुनें और विवरण देखें",
        c2: "चयनित फ़ोल्डर के अंदर जाएँ",
        c3: "ऊपरी फ़ोल्डर में वापस जाएँ",
        c4: "हटाने के लिए चिह्नित / अचिह्नित करें",
        c5: "सफाई समीक्षा विंडो खोलें",
        c6: "ड्राइव या फ़ोल्डर को फिर से स्कैन करें",
        c7: "सभी कीबोर्ड शॉर्टकट दिखाएँ",
        footer_copy: "© 2026 HaYTooL. MIT लाइसेंस के तहत ओपन सोर्स।",
        footer_releases: "रिलीज़",
        footer_issues: "समस्या रिपोर्ट करें",
        uc_title: "वास्तविक उपयोग और स्टोरेज अनुकूलन",
        uc_desc: "जानें कि DiskHaY अनावश्यक फ़ाइलें और बिल्ड कैश साफ़ करके सिस्टम प्रदर्शन को सुरक्षित रूप से कैसे बढ़ाता है।",
        uc1_badge: "10–40 GB+ कैश क्लीनअप",
        uc1_t: "डेवलपर और बिल्ड जंक क्लीनअप",
        uc1_d: "बड़े target/, node_modules/ और पैकेज कैश को सेकंडों में खोजें और बिना मैनुअल खोज के SSD स्थान खाली करें।",
        uc2_badge: "सटीक ब्लॉक मापन",
        uc2_t: "वास्तविक डिस्क आवंटन क्यों महत्वपूर्ण है",
        uc2_d: "तार्किक आकार के बजाय DiskHaY डिस्क पर वास्तविक भौतिक ब्लॉक मापता है, जिससे गलत या अनावश्यक डिलीट का जोखिम कम होता है।",
        uc3_badge: "प्रदर्शन में सुधार",
        uc3_t: "पूर्ण ड्राइव ऑडिट और रिमोट SSH",
        uc3_d: "धीमेपन और डिस्क फ़्रैगमेंटेशन से बचने के लिए Windows SSD और Linux सर्वर पर पर्याप्त खाली स्थान बनाए रखें।",
        faq_title: "अक्सर पूछे जाने वाले प्रश्न",
        faq_desc: "ब्लॉक आवंटन, सुरक्षित क्लीनअप, OS समर्थन और रिमोट SSH स्कैनिंग के उत्तर।",
        faq1_q: "वास्तविक डिस्क आवंटन और स्पष्ट आकार में क्या अंतर है?",
        faq1_a: "स्पष्ट आकार तार्किक बाइट दिखाता है, जबकि वास्तविक आवंटन डिस्क के भौतिक ब्लॉक (st_blocks * 512 या NTFS क्लस्टर) मापता है।",
        faq2_q: "क्या DiskHaY से फ़ाइलें हटाना सुरक्षित है?",
        faq2_a: "हाँ। पहले स्पेस या राइट क्लिक से फ़ाइलें चिह्नित करें, सारांश देखें, और सुरक्षा नियम रूट या सिस्टम फ़ोल्डर हटाने से रोकते हैं।",
        faq3_q: "कौन से ऑपरेटिंग सिस्टम समर्थित हैं?",
        faq3_a: "Windows 10/11 (x64, तेज़ NTFS MFT स्कैन) और Linux (x86_64: ext4, btrfs, xfs) पर नेटिव रूप से चलता है।",
        faq4_q: "क्या DiskHaY SSH के ज़रिए रिमोट Linux सर्वर स्कैन कर सकता है?",
        faq4_a: "हाँ। user@host:/path दर्ज करें और 60+ FPS पर स्थानीय इंटरफ़ेस में डिस्क उपयोग देखें।",
        faq5_q: "क्या DiskHaY मुफ़्त और ओपन सोर्स है?",
        faq5_a: "हाँ, MIT लाइसेंस के तहत 100% मुफ़्त और ओपन सोर्स है, बिना किसी टेलीमेट्री या विज्ञापन के।"
    }
};

const MASCOT_I18N = {
    tr: {
        name: "HaYra • DiskHaY Rehberi",
        next: "Sonraki ipucu →",
        tips: [
            "İpucu: Dosyaları silmeden önce güvenle işaretlemek için Boşluk tuşuna basın veya sağ tıklayın.",
            "İpucu: DiskHaY gerçek disk blok boyutunu (st_blocks × 512) ölçer, böylece gerçek alanı görürsünüz.",
            "İpucu: Mozaik ve Ayrıntılar görünümü arasında tek tıkla geçin; C tuşuyla silme listesini gözden geçirin."
        ]
    },
    en: {
        name: "HaYra • DiskHaY Guide",
        next: "Next tip →",
        tips: [
            "Tip: Press Space or Right Click to mark files safely before deleting anything.",
            "Tip: DiskHaY measures real filesystem block allocation (st_blocks × 512) so you see true disk cost.",
            "Tip: Switch between Treemap and Details in one click, and press C to review staged cleanup."
        ]
    },
    es: {
        name: "HaYra • Guía DiskHaY",
        next: "Siguiente consejo →",
        tips: [
            "Consejo: Pulsa Espacio o clic derecho para marcar archivos con seguridad antes de borrar.",
            "Consejo: DiskHaY mide bloques reales (st_blocks × 512) para mostrar el uso real del disco.",
            "Consejo: Cambia entre Mosaico y Detalles en un clic y pulsa C para revisar la limpieza."
        ]
    },
    de: {
        name: "HaYra • DiskHaY-Assistentin",
        next: "Nächster Tipp →",
        tips: [
            "Tipp: Drücken Sie Leertaste oder Rechtsklick, um Dateien vor dem Löschen sicher vorzumerken.",
            "Tipp: DiskHaY misst echte Blockgrößen (st_blocks × 512) für präzisen Speicherverbrauch.",
            "Tipp: Wechseln Sie per Klick zwischen Treemap und Details; C öffnet die Löschprüfung."
        ]
    },
    fr: {
        name: "HaYra • Guide DiskHaY",
        next: "Astuce suivante →",
        tips: [
            "Astuce : Appuyez sur Espace ou clic droit pour marquer vos fichiers avant toute suppression.",
            "Astuce : DiskHaY mesure l'allocation réelle des blocs (st_blocks × 512) sur votre disque.",
            "Astuce : Passez de la mosaïque aux détails en un clic et appuyez sur C pour vérifier la liste."
        ]
    },
    ru: {
        name: "HaYra • Гид DiskHaY",
        next: "Следующий совет →",
        tips: [
            "Совет: Нажмите Пробел или правую кнопку мыши, чтобы безопасно отметить файлы перед удалением.",
            "Совет: DiskHaY учитывает реальные блоки (st_blocks × 512), показывая точный расход места.",
            "Совет: Переключайтесь между Мозаикой и Деталями в один клик; клавиша C открывает список очистки."
        ]
    },
    pt: {
        name: "HaYra • Guia DiskHaY",
        next: "Próxima dica →",
        tips: [
            "Dica: Pressione Espaço ou clique com o botão direito para marcar arquivos com segurança.",
            "Dica: DiskHaY mede a alocação real de blocos (st_blocks × 512) para precisão total.",
            "Dica: Alterne entre Mosaico e Detalhes em um clique e pressione C para revisar a limpeza."
        ]
    },
    zh: {
        name: "HaYra • DiskHaY 助手",
        next: "下一条提示 →",
        tips: [
            "提示：按空格键或右键单击，即可在删除前安全标记文件或文件夹。",
            "提示：DiskHaY 按真实块分配（st_blocks × 512）统计占用空间。",
            "提示：一键切换矩形树状图与详细信息视图，按 C 键打开待清理确认列表。"
        ]
    },
    ar: {
        name: "HaYra • مرشدة DiskHaY",
        next: "النصيحة التالية ←",
        tips: [
            "نصيحة: اضغط مسافة أو زر الفأرة الأيمن لتحديد الملفات بأمان قبل الحذف.",
            "نصيحة: يقيس DiskHaY التخصيص الفعلي للكتل (st_blocks × 512) لعرض الحجم الحقيقي.",
            "نصيحة: بدّل بين الخريطة والتفاصيل بنقرة واحدة واضغط C لمراجعة قائمة التنظيف."
        ]
    },
    hi: {
        name: "HaYra • DiskHaY गाइड",
        next: "अगला सुझाव →",
        tips: [
            "सुझाव: हटाने से पहले फ़ाइलों को सुरक्षित रूप से चिह्नित करने के लिए Space या राइट-क्लिक दबाएँ।",
            "सुझाव: DiskHaY वास्तविक ब्लॉक आवंटन (st_blocks × 512) मापता है ताकि आपको सटीक उपयोग दिखे।",
            "सुझाव: एक क्लिक में ट्री-मैप और विवरण बदलें, और सफाई समीक्षा के लिए C दबाएँ।"
        ]
    }
};

let mascotTipIndex = 0;

function updateMascotText(lang) {
    const m = MASCOT_I18N[lang] || MASCOT_I18N.en;
    const nameEl = document.querySelector('[data-i18n="mascot_name"]');
    const nextEl = document.getElementById("mascotNext");
    const tipEl = document.getElementById("mascotTip");
    if (nameEl) nameEl.textContent = m.name;
    if (nextEl) nextEl.textContent = m.next;
    if (tipEl) tipEl.textContent = m.tips[mascotTipIndex % m.tips.length];
}

const LANG_META = {
    tr: { code: "TR", dir: "ltr" },
    en: { code: "EN", dir: "ltr" },
    es: { code: "ES", dir: "ltr" },
    de: { code: "DE", dir: "ltr" },
    fr: { code: "FR", dir: "ltr" },
    ru: { code: "RU", dir: "ltr" },
    pt: { code: "PT", dir: "ltr" },
    zh: { code: "ZH", dir: "ltr" },
    ar: { code: "AR", dir: "rtl" },
    hi: { code: "HI", dir: "ltr" }
};

function applyLanguage(lang) {
    const chosen = I18N[lang] ? lang : "en";
    const dict = I18N[chosen];
    const meta = LANG_META[chosen];

    if (document.documentElement.lang !== chosen) {
        document.documentElement.lang = chosen;
    }
    if (document.documentElement.dir !== meta.dir) {
        document.documentElement.dir = meta.dir;
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined && el.innerHTML !== dict[key]) {
            el.innerHTML = dict[key];
        }
    });

    const flagEl = document.getElementById("currentFlag");
    const codeEl = document.getElementById("currentLangCode");
    if (flagEl) {
        flagEl.src = `assets/flags/${chosen}.svg`;
        flagEl.alt = meta.code;
    }
    if (codeEl) {
        codeEl.textContent = meta.code;
    }

    document.querySelectorAll("#langMenu button").forEach((btn) => {
        btn.classList.toggle("active", btn.getAttribute("data-lang") === chosen);
    });

    updateMascotText(chosen);

    try {
        localStorage.setItem("diskhay_lang", chosen);
    } catch (_) {
        // Ignore storage restrictions
    }

    try {
        const url = new URL(window.location.href);
        if (url.searchParams.get("lang") !== chosen) {
            url.searchParams.set("lang", chosen);
            window.history.replaceState(null, "", url.toString());
        }
    } catch (_) {
        // Ignore history restrictions
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let initial = "en";
    try {
        const urlLang = new URLSearchParams(window.location.search).get("lang");
        const normalizedUrlLang = urlLang ? urlLang.trim().toLowerCase() : "";
        const saved = localStorage.getItem("diskhay_lang");
        if (normalizedUrlLang && I18N[normalizedUrlLang]) {
            initial = normalizedUrlLang;
        } else if (saved && I18N[saved]) {
            initial = saved;
        } else {
            const navLang = (navigator.language || "en").slice(0, 2).toLowerCase();
            if (I18N[navLang]) initial = navLang;
        }
    } catch (_) {}
    applyLanguage(initial);

    const langBtn = document.getElementById("langBtn");
    const langMenu = document.getElementById("langMenu");

    langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = langMenu.classList.toggle("open");
        langBtn.setAttribute("aria-expanded", String(isOpen));
    });

    langMenu.querySelectorAll("button[data-lang]").forEach((btn) => {
        btn.addEventListener("click", () => {
            applyLanguage(btn.getAttribute("data-lang"));
            langMenu.classList.remove("open");
            langBtn.setAttribute("aria-expanded", "false");
        });
    });

    document.addEventListener("click", () => {
        langMenu.classList.remove("open");
        langBtn.setAttribute("aria-expanded", "false");
    });

    // Lightbox
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxClose = document.getElementById("lightboxClose");

    document.querySelectorAll("[data-lightbox]").forEach((card) => {
        card.addEventListener("click", () => {
            const src = card.getAttribute("data-lightbox");
            const capKey = card.getAttribute("data-caption-key");
            const lang = document.documentElement.lang || "tr";
            lightboxImg.src = src;
            lightboxCaption.textContent = (I18N[lang] && I18N[lang][capKey]) || "";
            lightbox.hidden = false;
        });
    });

    function closeLightbox() {
        lightbox.hidden = true;
        lightboxImg.src = "";
    }

    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
    });

    // Lady Mascot Guide
    const mascotBubble = document.getElementById("mascotBubble");
    const mascotToggle = document.getElementById("mascotToggle");
    const mascotClose = document.getElementById("mascotClose");
    const mascotNext = document.getElementById("mascotNext");

    if (mascotNext) {
        mascotNext.addEventListener("click", () => {
            mascotTipIndex = (mascotTipIndex + 1) % 3;
            updateMascotText(document.documentElement.lang || "en");
        });
    }
    if (mascotClose && mascotBubble) {
        mascotClose.addEventListener("click", () => {
            mascotBubble.hidden = true;
        });
    }
    if (mascotToggle && mascotBubble) {
        mascotToggle.addEventListener("click", () => {
            mascotBubble.hidden = !mascotBubble.hidden;
        });
    }
});
