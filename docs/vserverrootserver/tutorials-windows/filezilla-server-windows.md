---
sidebar_position: 1
---

<head>
  <meta name="FileZilla-Server installieren" content="filezilla, ftp, windows, anleitung, tutorial"></meta>
</head>

FileZilla-Server installieren
===================================

**In dieser Anleitung erfährst du, wie du den Filezilla Server auf einem Windows-Server installierst und einrichtest. Filezilla Server ist ein kostenloser und Open-Source-FTP-Server, der es ermöglicht, Dateien einfach und sicher zwischen Computern auszutauschen.**

### 1\. Filezilla Server herunterladen

Gehe auf die offizielle Filezilla-Website ([https://filezilla-project.org/download.php?type=server](https://filezilla-project.org/download.php?type=server)) und lade die neueste Version des Filezilla Servers für Windows herunter.

### 2\. Installationsdatei ausführen: 

Suche die heruntergeladene Installationsdatei (meist im "Downloads"-Ordner) und führe sie durch einen Doppelklick aus.

### 3\. Installationsprozess starten: 

Wenn das Installationsfenster erscheint, klicke auf "I agree" (Ich stimme zu), um die Lizenzvereinbarung zu akzeptieren und den Installationsprozess zu starten.

### 4\. Komponenten auswählen: 

Wähle die gewünschten Komponenten aus, die du installieren möchtest. Für die meisten Anwender sind die Standardkomponenten ausreichend. Klicke auf "Next" (Weiter), um fortzufahren.

### 5\. Installationsverzeichnis wählen: 

Wähle das Verzeichnis, in dem der Filezilla Server installiert werden soll. Du kannst das vorgeschlagene Standardverzeichnis beibehalten oder ein anderes Verzeichnis auswählen. Klicke auf "Next" (Weiter), um fortzufahren.

### 6\. Startoptionen: 

Wähle, ob der Filezilla Server beim Windows-Start automatisch gestartet werden soll. Für die meisten Anwender ist es empfehlenswert, diese Option zu aktivieren. Klicke auf "Next" (Weiter), um fortzufahren.

### 7\. Firewall-Einstellungen: 

Stelle sicher, dass die Windows-Firewall die Kommunikation des Filezilla Servers zulässt. Andernfalls musst du die entsprechenden Firewall-Regeln manuell erstellen.

### 8\. Installation abschließen: 

Klicke auf "Install" (Installieren), um die Installation zu starten. Sobald die Installation abgeschlossen ist, klicke auf "Close" (Schließen), um das Installationsfenster zu schließen.

### 9\. Filezilla Server starten: 

Starte den Filezilla Server über das Startmenü oder die Desktop-Verknüpfung.

### 10\. Filezilla Server Interface öffnen: 

Öffne das Filezilla Server Interface, indem du auf das entsprechende Symbol im System-Tray klickst.

### 11\. Benutzer und Berechtigungen einrichten: 

Um Benutzer und deren Berechtigungen für den Zugriff auf den Filezilla Server festzulegen, klicke im Hauptmenü auf "Edit" (Bearbeiten) und dann auf "Users" (Benutzer). Füge einen neuen Benutzer hinzu, indem du auf "Add" (Hinzufügen) klickst, und vergebe einen Benutzernamen und ein Passwort. Klicke auf "OK", um den Benutzer zu speichern.

### 12\. Verzeichnisse und Rechte festlegen: 

Wähle den neu erstellten Benutzer aus und klicke auf "Add" (Hinzufügen) unter "Shared folders" (Freigegebene Verzeichnisse), um ein Verzeichnis hinzuzufügen, auf das der Benutzer zugreifen darf. Durchsuche den Datei-Explorer, um den gewünschten Ordner auszuwählen. Klicke auf "OK", um das Verzeichnis hinzuzufügen.

### 13\. Berechtigungen vergeben: 

Lege für den ausgewählten Benutzer und das hinzugefügte Verzeichnis die gewünschten Berechtigungen fest. Du kannst Lese-, Schreib-, Löschen- und weitere Rechte vergeben. Setze die entsprechenden Häkchen bei den gewünschten Berechtigungen und klicke auf "OK", um die Einstellungen zu speichern.

### 14\. Server- und Verbindungseinstellungen: 

Klicke im Hauptmenü auf "Edit" (Bearbeiten) und dann auf "Settings" (Einstellungen), um die allgemeinen Server- und Verbindungseinstellungen anzupassen. Du kannst hier zum Beispiel den Standard-Port ändern, eine SSL/TLS-Verschlüsselung einrichten oder die Anzahl der gleichzeitigen Verbindungen festlegen. Ändere die gewünschten Einstellungen und klicke auf "OK", um sie zu speichern.

### 15\. Server starten: 

Klicke im Hauptfenster des Filezilla Server Interfaces auf den "Start" (Starten)-Button, um den Server zu starten. Du solltest nun eine Bestätigungsnachricht sehen, die besagt, dass der Server erfolgreich gestartet wurde.

### 16\. Verbindung testen: 

Um die Verbindung zum Filezilla Server zu testen, kannst du den Filezilla Client ([https://filezilla-project.org/download.php?type=client](https://filezilla-project.org/download.php?type=client)) auf demselben oder einem anderen Computer installieren und eine Verbindung mit den eingerichteten Benutzerdaten und der IP-Adresse des Servers herstellen. Wenn die Verbindung erfolgreich hergestellt wurde, kannst du Dateien zwischen den Computern übertragen.