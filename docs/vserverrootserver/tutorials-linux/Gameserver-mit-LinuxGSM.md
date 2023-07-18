---
sidebar_position: 1
title: Gameserver mit LinuxGSM
description: LinuxGSM Installieren
keywords: [linuxgsm, gsm, linux, gameserver, hosting]
---


Gameserver mit LinuxGSM
======================================

Im folgenden erfährst du, wie du mit wenig Aufwand einen Gameserver auf deinem vServer installieren kannst.

> Auf deinem vServer ist bereits **LinuxGSM** vorinstalliert, welches für die Verwaltung und Erstellung von Gameservern genutzt wird. Alle Informationen zu **LinuxGSM** findest du hier: [https://docs.linuxgsm.com](https://docs.linuxgsm.com)/
> 
> Eine Liste mit allen derzeit unterstützten Gameservern ist hier zu finden: [https://linuxgsm.com/servers](https://linuxgsm.com/servers)/

> **Hardware Anforderungen:** _Wir empfehlen für den Betrieb eines Gameservers mindestens **4 CPU Kerne**, so wie **mindestens 4GB RAM** und **64GB SSD Speicher**. Bitte beachte, dass abhängig davon welcher Gameserver im Anschluss installiert werden soll, auch mehr Arbeitsspeicher so wie SSD Speicher erforderlich sein kann. Wenn du dir unsicher bist, kannst du beides jederzeit Upgraden sollte dein Server aktuell über zu wenig SSD Speicher oder RAM verfügen._ 

Du kannst deinen vServer und das darauf befindliche LinuxGSM jederzeit neu installieren, beispielsweise wenn du den Server komplett neu erstellen möchtest oder dein Passwort vergessen hast:

![](https://native-servers.com/customer/images/kb/31_chrome_uAnusSH2rP.png)

![](https://native-servers.com/customer/images/kb/32_chrome_AlxlsDZ7du.png)

> **Nutze ein sicheres Passwort:** _Zur Neuinstallation des Servers musst du ein Passwort für deinen Server eintragen. Nutze hierbei Groß- so wie Kleinbuchstaben, so wie Zahlen und mindestens ein Sonderzeichen. Beachte bitte auch, dass du dieses Passwort in den folgenden Schritten manuell in die VNC Konsole eintippen musst, es sollte also auch nicht zu lang oder kompliziert sein. Du kannst das Passwort auch später noch ändern._

![](https://native-servers.com/customer/images/kb/14_chrome_A5FO6MkLpa.png)

Nach Abschluss der Installation, musst du dich zuerst über die VNC Konsole einloggen, da der root Login via SSH vorerst deaktiviert ist. Wie du diesen später aktivieren kannst, erfährst du hier: [Login für root Benutzer aktivieren](https://native-servers.com/customer/knowledgebase/5/Login-fur-root-Benutzer-aktivieren-Linux.html)

Richte jedoch zuerst den Server wie im folgenden beschrieben vollständig ein, bevor du den root Login aktivierst:

![](https://native-servers.com/customer/images/kb/33_chrome_pGW2PnpKpm.png)

![](https://native-servers.com/customer/images/kb/16_chrome_vu2bHJ5t0L.png)

Trage dort den Login Namen root ein, und das Passwort welches du bei der Installation des Servers gesetzt hast. Sofern du Turnkey Gameserver bereits im Bestellvorgang gewählt hast, wurde dir dein Passwort via E-Mail zugesandt. 

> **Beachte:** _Alle Eingaben im Feld Password werden in Linux ausgeblendet, du kannst also nicht sehen was du dort schreibst und musst deshalb bei der Eingabe des Passwortes aufmerksam vorgehen._

Nachdem du dich über die VNC Konsole eingeloggt hast, wirst du aufgefordert ein Passwort für den **gameuser Account** des Servers festzulegen, im Anschluss bestätigst du mit **ENTER**. Das Password musst im Anschluss noch einmal bestätigt werden: 

![](https://native-servers.com/customer/images/kb/17_chrome_jGTCvnEVIh.png)

![](https://native-servers.com/customer/images/kb/18_chrome_Cb7mLOpeYU.png)

Der folgende Punkt Initialize **Hub services kann** übersprungen werden und ist nicht zwingend erforderlich. Mit einem Druck auf **TAB** wird die **Skip** option selektiert, welche du mit **ENTER** bestätigen kannst:

![](https://native-servers.com/customer/images/kb/19_chrome_6JHbX2UqaR.png)

**System Notifications and Critical Security Alerts:** Hier kannst du deine E-Mail Adresse eintragen, wenn du per E-Mail darüber informiert werden möchtest wenn wichtige Sicherheits Updates für deinen Server verfügbar sind. Im folgenden Beispiels überspringen wir diesen Schritt jedoch:

![](https://native-servers.com/customer/images/kb/20_chrome_hmJudDF9RL.png)

Im nächsten Schritt solltest du **INSTALL** wählen, damit aktuell verfügbare Sicherheits Updates direkt installiert werden und dein System auf dem aktuellsten Stand ist: 

![](https://native-servers.com/customer/images/kb/21_chrome_n1fEhCL2aW.png)

**Fast geschafft!** Notiere dir nun die Daten für die Verbindung zur Web Console (Web shell) und zum Webmin (Webinterface für deinen vServer).

Falls du vergessen hast die Adresse zu notieren, findest du diese hier:

**Web shell:** [https://IP-DEINES-SERVERS:12320](https://IP-DEINES-SERVERS:12320)

**Webmin:** [https://IP-DEINES-SERVERS:12321](https://IP-DEINES-SERVERS:12321)

Ersetze dort einfach **IP-DEINES-SERVERS** mit der IP Adresse deines vServers und öffne die Links in einem beliebigen Web Browser.

![](https://native-servers.com/customer/images/kb/22_chrome_xbYJCIxZsc.png)

Bestätige nun mit ENTER und du gelangst zum **Advanced Menu**.

Hier kannst du alle wichtigen Einstellungen vornehmen und auch deinen Gameserver installieren. Navigiere hierzu mit der **Pfeiltaste nach unten** zum Punkt **Game server** und drücke auf **ENTER**:

![](https://native-servers.com/customer/images/kb/23_chrome_ppAWTtfSTJ.png)

Dort wählst du **Select game** und erhälst dann einen Hinweis, dass einige Gameserver während der Installation weitere Einstellungen erfordern. Es kann also sein dass du abhängig vom Spiel während der Installation einige Dinge wie einen Servernamen eingeben musst. Achte während der Installation darauf. Nun bestätigst du mit Enter und wählst dann das Spiel für den Gameserver, auch hier kannst du mit den Pfeiltasten nach oben und unten navigieren, die Installation eines Spiels startest du mit **ENTER**. Wir nehmen für unser Beispiel **7 Days to Die**:

![](https://native-servers.com/customer/images/kb/26_chrome_7QZrfs23Rr.png)

Nach der Bestätigung mit **ENTER** startet die Installation, welche einige Minuten in Anspruch nehmen kann:   
  
 

![](https://native-servers.com/customer/images/kb/27_chrome_tSYfmh2X64.png)

![](https://native-servers.com/customer/images/kb/28_chrome_PvbB2560e9.png)

![](https://native-servers.com/customer/images/kb/29_chrome_rdaRdpMX6I.png)

Damit ist dein Gameserver installiert und einsatzbereit.

Bereits nach der Installation startet der Gameserver von alleine.

Der Pfad zum Gameserver lautet: **/home/gameuser/gameserver/**

In unserem Beispiel mit 7 Days to Die befindet sich darin die Datei **sdtdserver**, mit welcher wir verschiedene Befehle ausführen können.

So listest du die aktuellen Server Details auf (begib dich zuerst in den Pfad des Gameservers!): **./sdtdserver details** 

Eine Liste mit Befehlen und weiteren Informationen findest du hier: [https://docs.linuxgsm.com/command](https://docs.linuxgsm.com/command)s