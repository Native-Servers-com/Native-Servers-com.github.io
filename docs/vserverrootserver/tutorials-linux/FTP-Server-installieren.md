---
sidebar_position: 2
---

<head>
  <meta name="ProFTPD auf einem Linux-Server" content="ftp, proftp, linux"></meta>
</head>

ProFTPD auf einem Linux-Server
===============================

In dieser Anleitung zeigen wir dir, wie du ProFTPD, einen beliebten und leistungsstarken FTP-Server, auf einem Linux-Server installieren und konfigurieren kannst. Die Anleitung ist einfach gehalten, sodass auch Anfänger diese Schritte ausführen können.

**HINWEIS: Solltest du mit dem root Benutzer auf deinem Server arbeiten, kannst du den sudo Befehl am Anfang jeder Eingabe entfernen.**

Schritt 1: Aktualisiere die Paketlisten
---------------------------------------

Öffne zunächst ein Terminal auf deinem Linux-Server und führe den folgenden Befehl aus, um die Paketlisten zu aktualisieren:

    sudo apt-get update

Schritt 2: Installiere ProFTPD
------------------------------

Gib den folgenden Befehl ein, um ProFTPD zu installieren:

    sudo apt-get install proftpd

Während der Installation wirst du aufgefordert, den gewünschten Server-Typ auszuwählen. Wähle "standalone" für eine eigenständige ProFTPD-Installation.

Schritt 3: Konfiguriere ProFTPD
-------------------------------

Die Hauptkonfigurationsdatei von ProFTPD befindet sich unter `/etc/proftpd/proftpd.conf`. Öffne diese Datei mit einem Texteditor deiner Wahl, z. B. `nano`:

    sudo nano /etc/proftpd/proftpd.conf

In dieser Datei kannst du verschiedene Einstellungen anpassen. Hier sind einige grundlegende Änderungen, die du vornehmen solltest:

*   Ändere den Servernamen:  
    Suche die Zeile `ServerName` und ersetze den Standardwert durch den gewünschten Namen, z. B.:

    ServerName "Mein FTP-Server"

*   Aktiviere die passive FTP-Übertragung:  
    Füge die folgenden Zeilen am Ende der Datei hinzu, um den passiven Modus zu aktivieren und den verwendeten Portbereich festzulegen:

    PassivePorts 49152 65534

*   Begrenze den Benutzerzugriff:  
    Um den Zugriff auf den FTP-Server auf bestimmte Benutzer oder Gruppen zu beschränken, füge die folgenden Zeilen am Ende der Datei hinzu und ersetze `meinegruppe` durch den Namen der Gruppe, die Zugriff haben soll:

    <Limit LOGIN>
        AllowGroup meinegruppe
        DenyAll
    </Limit>

*   Wenn du stattdessen den Zugriff auf bestimmte Benutzer beschränken möchtest, ersetze

    AllowGroup meinegruppe

*   durch `AllowUser meinbenutzer` und füge für jeden erlaubten Benutzer eine eigene Zeile hinzu.

Schritt 4: Änderungen speichern und ProFTPD neustarten
------------------------------------------------------

Speichere die Änderungen in der Konfigurationsdatei und schließe den Texteditor. Starte anschließend den ProFTPD-Dienst neu, um die Änderungen zu übernehmen:

    sudo systemctl restart proftpd

Schritt 5: ProFTPD-Status überprüfen
------------------------------------

Überprüfe den Status des ProFTPD-Dienstes, um sicherzustellen, dass er ordnungsgemäß läuft:

    sudo systemctl status proftpd

Wenn der Dienst aktiv und fehlerfrei läuft, sollte die Ausgabe etwa so aussehen:

    ● proftpd.service - LSB: Starts ProFTPD daemon Loaded: loaded (/etc/init.d/proftpd; generated)
    Active: active (running) since Mon 2023-04-17 15:24:30 UTC; 1min 20s ago
    Docs: man:systemd-sysv-generator(8)
    Process: 12345 ExecStart=/etc/init.d/proftpd start (code=exited, status=0/SUCCESS)
    Tasks: 6 (limit: 4915)
    Memory: 8.2M
    CGroup: /system.slice/proftpd.service
    └─12346 proftpd: (accepting connections)
    

Fertig! Du hast jetzt ProFTPD auf deinem Linux-Server installiert und konfiguriert. Du kannst nun FTP-Clients verwenden, um Dateien auf deinem Server hoch- und herunterzuladen. Achte darauf, die richtigen Anmeldeinformationen für die Benutzer oder Gruppen zu verwenden, die du in der Konfigurationsdatei festgelegt hast.