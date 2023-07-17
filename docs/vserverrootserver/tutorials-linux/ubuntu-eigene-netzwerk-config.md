---
sidebar_position: 4
---
<head>
  <meta name="Ubuntu eigene Netzwerkkonfiguration" content="ubuntu, netzwerk, network, cloudinit"></meta>
</head>
Ubuntu | Eigene Netzwerkkonfiguration nutzen
================================================

> Dieses Tutorial richtet sich an erfahrene Linux-Nutzer! Sollten fehlerhafte Änderungen durchgeführt werden, kann es passieren, dass das Netzwerk des Servers nicht mehr startet!

Um unter Ubuntu eine eigene Netzwerkkonfiguration zu verwenden, sind einige Anpassungen nötig, da diese beim Start bzw. Neustart des Server überschrieben werden.

Erstelle zunächst eine neue **.cfg**\-Datei unter **/etc/cloud/cloud.cfg.d/**:

    touch /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg

Füge in dieser Datei dann die Zeile "**{config: disabled}**” hinzu:

    echo "{config: disabled}" >> /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg

Dies überschreibt die automatische Netzwerkanpassung beim Start des Systems.

Um dann Anpassungen an bspw. den DNS-Servern vorzunehmen, editiere die Datei “**/etc/netplan/50-cloud-init.yaml**”:

![](/ubuntu-network/network_cloudinit.png)  ![](/ubuntu-network/network_cloudinit2.png)


Mit folgendem Befehl kannst du die Konfiguration im Anschluss testen:

    netplan try -timeout 180 

Hierdurch wird die neue Konfiguration aktiviert, jedoch nach 180 Sekunden wieder zurückgesetzt. So kannst du beispielsweise testen, ob der Server mit der neuen Konfiguration erreichbar ist und korrekt funktioniert.

Mit folgendem Befehl kannst du die Konfiguration dauerhaft aktivieren:

    netplan apply