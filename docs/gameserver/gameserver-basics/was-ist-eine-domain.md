---
sidebar_position: 1
---

(S)FTP Verbindung herstellen
=======================================================

**Herstellen einer (S)FTP Verbindung zu deinem Gameserver**

### Zugangsdaten abrufen

Logge Dich in die Gameserver-Cloud ein, und klicke bei deinem Gameserver auf den Tab **Settings**. Hier findest du die Adresse für die (S)FTP Verbindung, so wie deinen Nutzernamen. Das Passwort ist das selbe, wie für deinen Login in die Gameserver Cloud. 

### Automatisch Verbindung via (S)FTP herstellen

Am einfachsten kannst Du nun via (S)FTP zu deinem Gameserver verbinden, indem du auf **Launch SFTP** klickst:

![](/gameserver/ftp_settings_1.png)

![](/gameserver/ftp_settings_1_confirm.png)

### Manuell eine Verbindung via (S)FTP herstellen

 Sollte die automatische Verbindung nicht funktionieren, kannst du die Zugangsdaten auch manuell in FileZilla oder ein anderes FTP Programm deiner Wahl eintragen. Achte dabei darauf, dass der Port aus `sftp://spike6.native-servers.com:2022` (In diesem Fall **2022**) aus dem Link entfernt und stattdessen in das Feld **Port** eingetragen werden muss:

![](/gameserver/filezilla_connect_1.png)

Im Anschluss wirst du gebeten, den Server-Schlüssel zu akzeptieren. Dies kannst du ohne Bedenken tun: 

![](/gameserver/filezilla_connect_2.png)

Danach ist die Verbindung aufgebaut, und du kannst deinen Server via **SFTP** verwalten. 

![](/gameserver/filezilla_connect_3.png)