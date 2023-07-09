---
sidebar_position: 2
---


WindowsGSM Gameserver installieren
======================================

**Mithilfe des kostenlosen Programms WindowsGSM lassen sich mit wenigen Klicks beliebige Gameserver auf einem Windows Rootserver installieren.**


Im folgenden Beispiel installieren wir einen 7 Days to Die Gameserver mit WindowsGSM, das Vorgehen ist bei anderen Spielen identisch.

> WICHTIG: Für einige Spiele müssen Programme wie .Net Framework zuerst manuell in Windows installiert werden, da der Gameserver sonst nicht starten kann. Ob und welche zusätzlichen Programme benötigt werden, lässt sich oft leicht herausfinden. Für 7 Days to Die finden wir dazu direkt über Google einen Eintrag bei Steam:

![](https://native-servers.com/customer/images/kb/48_chrome_GLjvbDk3QZ.png)

![](https://native-servers.com/customer/images/kb/49_chrome_IGWjZ5c0f6.png)

Dort finden wir beispielsweise unter Windows Requirement den passenden Link zum Download.

### **WindowsGSM installieren**

Hier kannst Du WindowsGSM kostenlos herunterladen: [Download WindowsGSM](https://windowsgsm.com/products/windowsgsm-desktop)

![](https://native-servers.com/customer/images/kb/34_mstsc_StiYlHe1gX.png)

Je nach verwendetem Browser, kann es vorkommen dass der Download blockiert wird. In Chrome kann man diesen trotzdem wie folgt zulassen:  
  
 

![](https://native-servers.com/customer/images/kb/35_mstsc_6BRiGjcZpf.png)

Im Anschluss verschieben wir die **WindowsGSM.exe** in ein Verzeichnis, in welchem wir unsere Gameserver installieren möchten. Hier wurde dazu das Verzeichnis **C:/Programme/Gameserver/** angelegt:

![](https://native-servers.com/customer/images/kb/36_mstsc_lOMwasuOrg.png)

In diesem Verzeichnis kannst du die **WindowsGSM.exe** nun ausführen, abhängig von der Windows Version wird auch hier die Ausführung blockiert.

Wir wissen jedoch dass die Anwendung sicher ist, uns lassen diese daher zu:

![](https://native-servers.com/customer/images/kb/38_mstsc_jVp3TOVB7I.png)

Im Anschluss landen wir bereits direkt in **WindowsGSM**, und können dort den ersten Gameserver anlegen. 

Hierzu klicken wir auf **Servers**, und im Anschluss auf **Install GameServer.** Dort können wir ein Spiel auswählen und dem Server einen Namen geben. Im Anschluss kann die Installation gestartet werden:

![](https://native-servers.com/customer/images/kb/39_mstsc_avuXIztOyB.png)

![](https://native-servers.com/customer/images/kb/40_mstsc_2AioN7si32.png)

![](https://native-servers.com/customer/images/kb/41_mstsc_MYZC29i47J.png)

Nach dem Start der Installation kann es einige Minuten, oder manchmal auch etwas länger dauern. Dies ist unter anderem von der Auslastung der Steam Downloadserver abhängig.

![](https://native-servers.com/customer/images/kb/42_mstsc_q8AxtBphAH.png)

Nach Abschluss der Installation, kannst du den Server entweder direkt starten, oder zuerst weitere Einstellungen vornehmen.

Grundlegende Einstellungen findest du wenn du auf den Server klickst, und dann **Edit Config** wählst:

![](https://native-servers.com/customer/images/kb/43_mstsc_o3mGJABj54.png)

![](https://native-servers.com/customer/images/kb/44_mstsc_xI8kNtFn3x.png)

Um alle Einstellungen bearbeiten zu können, muss bei 7 Days to Die die Konfigurationsdatei direkt aufgerufen und bearbeitet werden. Das geht mit einem Klick auf den Server, dann auf **Browse** und **Server Files**:

![](https://native-servers.com/customer/images/kb/45_mstsc_tKDh77ChPy.png)

![](https://native-servers.com/customer/images/kb/46_mstsc_10qDFSnbIY.png)

Hier kann dann direkt die **serverconfig.xml** bearbeitet werden. Achte jedoch darauf, dass der Server gestoppt ist bevor du Änderungen an einer Konfiguration vornimmst.

Danach kannst du den Server starten:

![](https://native-servers.com/customer/images/kb/47_mstsc_IVpxrzTcPX.png)

Beachte dass es bei 7 Days to Die einige Zeit dauern kann, bis die Welt beim ersten Start generiert wurde, dies ist unter anderem von der eingestellten Größe der Welt abhängig. Die Dauer der Startzeit kann sich abhängig vom Spiel unterscheiden.