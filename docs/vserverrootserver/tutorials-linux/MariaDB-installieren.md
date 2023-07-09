---
sidebar_position: 3
---

MariaDB installieren
======================

Im folgenden lernst du wie du einen MariaDB (MySQL) Server auf deinem Linux vServer oder Rootserver installieren kannst. In den Beispielen wird Debian 10 als Betriebssystem verwendet, die Befehle können bei anderen Linux Distributionen abweichen. Verbinde dich nun via SSH mit deinem Server, wie das funktioniert erfähst du hier: [Erstzugriff (SSH) unter Linux](https://zap-hosting.com/guides/docs/de/vserver_linux_ssh)

**Aktualisieren der Pakete**
----------------------------

Zuerst müssen vorhandene Pakete aktualisiert werden, dies geschieht mithilfe des folgenden Befehls: **apt update**

![](/mariadb-install/applicationframehost_7q2muwtide.png)

Dadurch werden nun alle Paketquellen aktualisiert, im Anschluss kannst du die Aktualisierungen mit folgendem Befehl installieren, sofern welche vorhanden sind: 

    apt upgrade -y

**Starten der Installation**
----------------------------

Die Installation von MariaDB (MySQL) startest du mit folgendem Befehl: 

    apt install mariadb-server mariadb-client -y

**Konfiguration**
-----------------

Nachdem die Installation abgeschlossen ist gibst du folgenden Befehl ein um die Konfiguration des Servers zu starten: **mysql\_secure\_installation**

### **Passwort setzen**

Führe nun die Konfiguration deines MariaDB (MySQL) Servers durch, im folgenden legen wir auch ein Passwort für deinen Server fest.

Dort übersprichst du die Eingabe vorerst durch das drücken auf **Enter**, das Passwort für den root User legen wir im gleich fest.

![](/mariadb-install/chrome_2uwfvyuodq.png)

> ⚠️ Bei dem User root handelt es sich um den Hauptbenutzer deines MariaDB (MySQL) Servers!

Nun wirst du gefragt ob du ein Passwort für den Benutzer root setzen möchtest, dieses bestätigst du mit **y** für yes, also ja.

Im Anschluss gibst du dort das neue Passwort für den Benutzer root ein.

> ⚠️ Während der Eingabe des Passwortest kannst du dieses zwar nicht sehen, das ist jedoch normal und dein Passwort wird trotzdem hinterlegt. Achte unbedingt darauf ein sicheres Passwort für deinen root Benutzer zu wählen und verwahre dieses an einem sicheren Ort.

### Anonyme Benutzer entfernen

Nun wirst du gefragt ob du anonyme Benutzer von deinem Server entfernen möchtest, dies solltest du aus Sicherheitsgründen auf jeden Fall tun, daher bestätigst du auch dies mit einem **y** für yes, also ja.

![](/mariadb-install/159171942-82667636-b148-4248-a95d-ad3d9ed3ab47.png)

### Login von Außen verbieten oder erlauben

In der folgenden Abfrage legst du fest ob der Benutzer root von Außen zum Server verbinden darf, dies solltest du aus Sicherheitsgründen ebenfalls deaktivieren und bestätigst dies daher mit **y.**

![](/mariadb-install/159171944-d897a99a-a0f4-421b-bfb9-92c0640f2db0.png)

### Testdatenbank entfernen

Im nächsten Schritt bestätigst du ebenfalls mit **y** um die von MariaDB (MySQL) mitgelieferte Testdatenbank zu entfernen, diese benötigst du nicht und daher kann diese einfach gelöscht werden:

![](/mariadb-install/159171945-e7b4f9ef-1ec0-409f-ad5f-dff05f42c561.png)

### Berechtigungen aktualisieren 

Zum Abschluss der Konfiguration wirst du gefragt ob du die gesetzten Berechtigungen der Datenbank aktualisieren möchtest, dies bestätigst du ebenfalls mit **y** damit unter anderem das zuvor gesetzte Passwort für den root Benutzer aktiv wird:

![](/mariadb-install/159171953-8a6cb526-6fac-47fd-be04-eb752f57b1a1.png)

> Dein MariaDB (MySQL) Server ist nun einsatzbereit!

![](/mariadb-install/165694424-34436049-d798-49b4-ad95-4e4a73a6a76a.png)