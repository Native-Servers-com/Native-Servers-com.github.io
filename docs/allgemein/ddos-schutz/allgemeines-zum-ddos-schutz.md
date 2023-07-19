---
title: Allgemeines zum DDoS-Schutz
description: Informationen zum DDoS Schutz von Native-Servers.com
keywords: [ddos, ddos protection, ffm, frankfurt, combahton]
---

Was bedeutet DDoS?
=================================

Ein DDoS-Angriff (Distributed Denial of Service) ist eine Art von Cyberangriff, bei dem eine große Anzahl von Computern oder Geräten verwendet wird, um gleichzeitig den Zugriff auf einen bestimmten Dienst, eine Website oder ein Netzwerk zu überlasten und zu blockieren. Das Ziel eines solchen Angriffs besteht darin, den normalen Betrieb des Zielservers oder Netzwerks zu stören und es für legitime Benutzer unzugänglich zu machen.

Der Name "Distributed Denial of Service" bezieht sich darauf, dass der Angriff von einer Vielzahl von Quellen aus durchgeführt wird, anstatt von einem einzelnen Computer oder einer begrenzten Anzahl von Geräten. Oft werden Botnets verwendet, um einen DDoS-Angriff durchzuführen. Ein Botnet ist ein Netzwerk von infizierten Computern, die unter der Kontrolle des Angreifers stehen und ferngesteuert werden können.

Es gibt verschiedene Arten von DDoS-Angriffen, darunter:

- Volumenbasierte Angriffe: Diese zielen darauf ab, die Netzwerkbandbreite des Ziels zu überlasten, indem sie eine große Menge an Datenverkehr erzeugen. Dazu gehören zum Beispiel UDP Floods oder ICMP Floods.

- Angriffe auf die Netzwerkressourcen: Diese Angriffe zielen auf Schwachstellen in der Netzwerkinfrastruktur ab, wie z.B. Router, Firewalls oder Load Balancer. Durch gezielte Angriffe auf diese Komponenten kann der Angreifer den Datenverkehr blockieren oder umleiten.

- Angriffe auf Anwendungsebene: Diese Art von Angriffen zielt auf Schwachstellen in spezifischen Anwendungen oder Diensten ab. Der Angreifer versucht, den Webserver oder die Anwendung zu überlasten, indem er eine große Anzahl von Anfragen sendet oder durch gezielte Exploits Sicherheitslücken ausnutzt.

Ein DDoS-Schutz ist eine Maßnahme oder eine Reihe von Maßnahmen, die ergriffen werden, um ein Netzwerk, eine Website oder einen Dienst vor DDoS-Angriffen zu schützen. Der DDoS-Schutz zielt darauf ab, den normalen Betrieb aufrechtzuerhalten, indem er den schädlichen Datenverkehr filtert und blockiert, bevor er das Ziel erreicht.

Es gibt verschiedene Methoden und Technologien, die im Rahmen eines DDoS-Schutzes eingesetzt werden können:

- Traffic-Filtering: Diese Methode basiert auf der Analyse des eingehenden Datenverkehrs und der Identifizierung schädlicher Muster. Der schädliche Datenverkehr wird dann von den legitimen Anfragen getrennt und blockiert.

- Load Balancing: Load Balancer verteilen den eingehenden Datenverkehr auf mehrere Server, um die Last zu verteilen und eine Überlastung zu vermeiden. Dadurch wird verhindert, dass der Angriffsverkehr einen einzelnen Server überlastet.

- Rate Limiting: Diese Technik setzt Grenzwerte für den Datenverkehr von einzelnen IP-Adressen oder Benutzern, um die Auswirkungen eines Angriffs zu begrenzen. Indem die Anzahl der erlaubten Anfragen pro Sekunde begrenzt wird, kann der schädliche Datenverkehr kontrolliert werden.

- Cloud-basierte DDoS-Mitigation: Bei dieser Methode wird der Datenverkehr über Cloud-Plattformen umgeleitet und analysiert. Die Cloud-Infrastruktur kann den schädlichen Datenverkehr erkennen und blockieren, bevor er das Ziel erreicht.

- Intrusion Detection/Prevention Systems (IDS/IPS): Diese Systeme überwachen den Datenverkehr in Echtzeit und identifizieren Anomalien oder verdächtige Muster. Sie können den schädlichen Datenverkehr erkennen und entsprechende Maßnahmen ergreifen, um ihn zu blockieren.

Ein effektiver DDoS-Schutz erfordert eine Kombination aus Hardware, Software und Netzwerkarchitektur, um die Sicherheit und Verfügbarkeit von Diensten und Infrastrukturen zu gewährleisten. Es ist wichtig, dass Organisationen geeignete DDoS-Schutzlösungen implementieren, um ihre Systeme vor diesen Angriffen zu schützen und den Geschäftsbetrieb aufrechtzuerhalten.



DDoS-Schutz bei Native Servers
=================================

**Allgemeine Informationen zu unserem DDoS Schutz in Frankfurt am Main**

Durch den Einsatz verschiedener Erkennungssoftware und Vorfilter, ist ein effektiver Schutz unserer Infrastruktur gegen DDoS Angriffe gewährleistet. Es erfolgt eine automatische Erkennung von "Bad Traffic", welcher problemlos bis zu einer Bandbreite von 800Gbit klassifiziert und gefiltert werden kann.

Wird ein Angriff erkannt, bleibt der angegriffene Server weiterhin online und erreichbar, so dass dieser wie gewohnt genutzt werden kann. Nicht relevante Ports werden für die Dauer des Angriff blockiert, um Angriffe auf diese direkt zu unterbinden.

Beispielsweise werden hier alle ICMP (Ping) Anfragen verworfen.

Was passiert bei einem Angriff
------------------------------

*     ICMP / IGMP (u.a. PING) wird verworfen
*     UDP Source-Port 19, 69, 111, 123, 137, 161, 389, 520, 1434, 1900, 9987, 11211 werden limitiert (10Mbit)
*     TCP / UDP Fragemente (Pakete größer als 1500 byte) werden verworfen
*     UDP Destination Port 9000 bis 9999 wird strikt gegen Teamspeak3 Pakete gefiltert
*     UDP Destination Port 27000 bis 29000 wird strikt gegen Source Engine Pakete gefiltert
*     UDP Destination Port 53 wird strikt gegen DNS Pakete gefiltert und erzwingt TCP Truncation
*     Bei aktiver HTTP Layer7 Mitigation wird sämtlicher TCP Traffic auf Port 80 und 443 durch einen Reverse Proxy geroutet
*     Bei aktiver HTTP Layer7 Mitigation muss Cloudflare deaktiviert werden, da sonst eine Schleife der DNS Auflösung entsteht
*     Jeglicher Traffic (außer TCP / UDP) und wird blockiert

**Aller weiterer Traffic (TCP / UDP) wird strikt validiert:**

*     TCP Verbindungen sind nur möglich, sofern zuvor ein TCP SYN oder SYN-ACK Paket gesendet und akzeptiert wurde, die Filter verhalten sich hierbei wie eine Art asynchrone Stateful Firewall für Serveranwendungen. Der Aufbau einer ersten Verbindung (SYN bzw. SYN-ACK) dauert womöglich deutlich länger oder wird erstmalig unterbrochen, Webpräsenzen laden ggf. etwas langsamer
*     UDP Verbindungen sind nur möglich, sofern diese von einem „validen Client“ durchgeführt werden, Spoofing wird durch einen intelligenten Abgleich aller Verbindungsparameter unterbunden

Port für den Betrieb von Gameservern
------------------------------------

Die folgenden Ports wurden speziell für den Betrieb von Gameservern implementiert:

*     2300-2400: DayZ and Arma 3, as well as Arma 3 Query
*     5761-5794: Atlas
*     7000-8999: Generic Games
*     9000-9999: Teamspeak3
*     12800-13100: Hurtworld
*     19132: Minecraft Pocket Edition
*     22000-22020: Rage-MP / MTA
*     22126: Rage-MP / MTA
*     23000-23200: Battlefield
*     27000-28000: Alle Source Engine / Query Games wie Counter Strike 1.6, Counter Strike Source, Counter Strike GO, The Ship, Garrys Mod, Nuclear Dawn, Call of Duty Modern Warfare 3, Starbound, Space Engineers, 7 Days to Die, Rust, Quake Live, ARK: Survival Entwickelt, Valheim, Mordhau
*     30000-32000: FiveM GTA-MP
*     36123-36128: Stormworks