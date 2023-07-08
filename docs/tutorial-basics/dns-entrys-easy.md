DNS Einträge Vereinfacht - Bedeutung und Beispiele
==================================================

DNS steht für Domain Name System und ist ein grundlegender Bestandteil des Internets. Es fungiert als eine Art Telefonbuch, das Domainnamen (wie z.B. [www.google.com](http://www.google.com/)) in IP-Adressen übersetzt, die Computer verstehen können. Ein DNS-Eintrag ist eine Anweisung, die in diesem "Telefonbuch" hinterlegt ist und die den Verkehr für eine bestimmte Domain oder einen bestimmten Subdomain-Namen lenkt.

Hier findest Du die gängigsten Arten von DNS-Einträgen, die Du für deine Domain konfigurieren kannst:

A-Eintrag (Address Record)
--------------------------

Dies ist wahrscheinlich der häufigste DNS-Eintrag. Er verbindet einen Hostnamen mit einer IPv4-Adresse. Wenn zum Beispiel Ihr Domainname "meinebeispielwebsite.de" ist und Sie einen Server mit der IP-Adresse "192.0.2.1" haben, könnte Ihr A-Eintrag so aussehen:

Beispiel: `meinebeispielwebsite.de.    IN    A    192.0.2.1`

**AAAA-Eintrag (Quad A Record)**
--------------------------------

Dieser Eintrag ist ähnlich wie der A-Eintrag, aber für IPv6-Adressen. Angenommen, Ihre IPv6-Adresse ist "2001:db8::1", dann könnte Ihr AAAA-Eintrag so aussehen:

Beispiel: `meinebeispielwebsite.de.    IN    AAAA    2001:db8::1`

**CNAME-Eintrag (Canonical Name Record)**
-----------------------------------------

Dieser Eintrag wird verwendet, um einen Domainnamen auf einen anderen Domainnamen zu verweisen, anstatt direkt auf eine IP-Adresse. Wenn Sie beispielsweise "[www.meinebeispielwebsite.de](http://www.meinebeispielwebsite.de/)" auf "meinebeispielwebsite.de" verweisen möchten, könnte Ihr CNAME-Eintrag so aussehen:

Beispiel: `www.meinebeispielwebsite.de.    IN    CNAME    meinebeispielwebsite.de.`

**MX-Eintrag (Mail Exchange Record)**
-------------------------------------

Dieser Eintrag gibt an, welcher Mailserver für das Empfangen von E-Mails für Ihre Domain zuständig ist. Jeder MX-Eintrag hat eine Priorität, die angibt, welcher Server zuerst kontaktiert werden sollte. Ein Beispiel für einen MX-Eintrag könnte so aussehen:

Beispiel: `meinebeispielwebsite.de.    IN    MX    10 mail.meinebeispielwebsite.de.`

**MX-Eintrag (Mail Exchange Record)**
-------------------------------------

Dieser Eintrag gibt an, welcher Mailserver für das Empfangen von E-Mails für Ihre Domain zuständig ist. Jeder MX-Eintrag hat eine Priorität, die angibt, welcher Server zuerst kontaktiert werden sollte. Ein Beispiel für einen MX-Eintrag könnte so aussehen:

Beispiel: `meinebeispielwebsite.de.    IN    MX    10 mail.meinebeispielwebsite.de.`

Hier ist "10" die Priorität und "mail.meinebeispielwebsite.de" ist der Mailserver.

**PTR-Eintrag (Pointer Record)**
--------------------------------

Dieser Eintrag wird hauptsächlich für Reverse-DNS-Lookups verwendet, um den Hostnamen zu einer gegebenen IP-Adresse zu finden. Diese werden meistens von Internet Service Providern verwaltet. Ein Beispiel für einen PTR-Eintrag könnte so aussehen:

Beispiel: `1.2.0.192.in-addr.arpa.    IN    PTR    meinebeispielwebsite.de.`

**SRV-Eintrag (Service Record)**
--------------------------------

Dieser Eintrag wird verwendet, um spezifische Dienste wie VOIP, IMAP, HTTP usw. zu lokalisieren und zu definieren. Ein SRV-Eintrag könnte so aussehen:

Beispiel: `_sip._tcp.meinebeispielwebsite.de.    IN    SRV    0 5 5060 mail.meinebeispielwebsite.de.`

In diesem Beispiel ist "\_sip.\_tcp" der Dienst und das Protokoll, "0" ist die Priorität, "5" ist das Gewicht, "5060" ist der Port und "mail.meinebeispielwebsite.de" ist der Zielhost​​.

**TXT-Eintrag (Text Record)**
-----------------------------

Dieser Eintrag ermöglicht es Ihnen, beliebige Textinformationen in Ihrer DNS-Zone zu speichern. Sie werden häufig für verschiedene Verifizierungszwecke verwendet, wie z.B. SPF-Einträge zur Verhinderung von E-Mail-Spoofing. Ein Beispiel für einen TXT-Eintrag könnte so aussehen:

Beispiel: `meinebeispielwebsite.de.    IN    TXT    "v=spf1 ip4:192.0.2.0/24 ip4:198.51.100.0/24 -all"`

Hierbei gibt der Eintrag an, dass nur die IP-Adressen in den Bereichen 192.0.2.0/24 und 198.51.100.0/24 berechtigt sind, E-Mails von "meinebeispielwebsite.de" zu senden.