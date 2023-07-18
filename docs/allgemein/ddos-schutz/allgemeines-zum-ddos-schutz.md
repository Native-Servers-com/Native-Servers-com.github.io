---
title: Allgemeines zum DDoS-Schutz
description: Informationen zum DDoS Schutz von Native-Servers.com
keywords: [ddos, ddos protection, ffm, frankfurt, combahton]
---

Allgemeines zum DDoS-Schutz
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