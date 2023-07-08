DNS Einträge (Erweitert)
======================================

Im folgenden findest du alle DNS Eintragstypen welche für jede Domain bei Native-Servers.com verfügbar sind, mit zusätzlichen Beispielen zur korrekten Verwendung.

> Bitte beachte dass sich diese Auflistung eher an erfahrene Benutzer richtet, eine vereinfachte Auflistung mit Beispielen findest du hier: [DNS Einträge (Vereinfacht)](https://wiki.native-servers.com/de/webhosting-domain/dns-records-easy)

A (Address Record)
------------------

Ein **A-Eintrag** weist einer Domain oder Subdomain eine IPv4-Adresse zu. 

Beispiel: `example.com. IN A 192.0.2.1`

In diesem Beispiel zeigt der A-Eintrag an, dass die Domain "example.com" auf die IPv4-Adresse 192.0.2.1 verweist.

AAAA (IPv6 Address Record)
--------------------------

Ein **AAAA-Eintrag** weist einer Domain oder Subdomain eine IPv6-Adresse zu. 

Beispiel: `example.com. IN AAAA 2001:0db8:85a3::8a2e:0370:7334`

Hier verweist der AAAA-Eintrag die Domain "example.com" auf die IPv6-Adresse 2001:0db8:85a3::8a2e:0370:7334.

AFSDB (Andrew File System Database Record)
------------------------------------------

Ein **AFSDB-Eintrag** verweist auf einen Andrew File System (AFS) Datenbankserver oder einen Distributed Computing Environment (DCE) Cell Directory Service (CDS) Server. 

Beispiel: `example.com. IN AFSDB 1 afsdb.example.com.`

In diesem Beispiel gibt der AFSDB-Eintrag an, dass der AFS-Datenbankserver "afsdb.example.com" für die Domain "example.com" zuständig ist.

ALIAS
-----

Ein **ALIAS-Eintrag** ist ähnlich wie ein CNAME-Eintrag, erlaubt jedoch die Verwendung von Aliasen für die Root-Domain. 

Beispiel: `example.com. IN ALIAS example-alias.com.`

Hier zeigt der ALIAS-Eintrag an, dass "example.com" ein Alias für "example-alias.com" ist.

CAA (Certification Authority Authorization) 
--------------------------------------------

Ein **CAA-Eintrag** gibt an, welche Certificate Authorities (CAs) SSL/TLS-Zertifikate für eine Domain ausstellen dürfen. 

Beispiel: `example.com. IN CAA 0 issue "letsencrypt.org"`

In diesem Beispiel besagt der CAA-Eintrag, dass nur Let's Encrypt ("letsencrypt.org") SSL/TLS-Zertifikate für "example.com" ausstellen darf.

CERT (Certificate Record) 
--------------------------

Ein **CERT-Eintrag** enthält Informationen über ein öffentliches Schlüsselzertifikat, das mit einer Domain oder einer E-Mail-Adresse verbunden ist. 

Beispiel: `example.com. IN CERT PKIX 1 0 ( MIICqjCCAk+gAwIBAgIBADANBgkqhkiG9w0BAQUFADA7MQswCQYDVQQGEwJOTzEQ )`

In diesem Beispiel enthält der CERT-Eintrag das öffentliche Schlüsselzertifikat für "example.com" im Base64-Format.

CNAME (Canonical Name Record)
-----------------------------

Ein **CNAME-Eintrag** erstellt einen Alias für eine Domain oder Subdomain und verweist auf eine andere Domain. 

Beispiel: [`www.example.com`](http://www.example.com/)`. IN CNAME example.com.`

Hier zeigt der CNAME-Eintrag an, dass "[www.example.com](http://www.example.com/)" ein Alias für "example.com" ist.

HINFO (Host Information)
------------------------

Ein **HINFO-Eintrag** enthält Informationen über den Host, wie z. B. das Betriebssystem und die Hardware, die für einen bestimmten Domainnamen verwendet werden. Diese Informationen können für Netzwerkadministratoren und Diagnosezwecke nützlich sein.

Beispiel: `example.com. IN HINFO "Linux" "x86_64"`

In diesem Beispiel gibt der HINFO-Eintrag an, dass der Host, der mit "example.com" verknüpft ist, ein Linux-Betriebssystem und eine x86\_64-Hardwarearchitektur verwendet. 

> Beachte, dass HINFO-Einträge heutzutage aufgrund von Sicherheitsbedenken selten verwendet werden, da sie potenziell sensible Informationen über den Host preisgeben können.

HTTPS (HTTPS Service Binding)
-----------------------------

Ein **HTTPS-Eintrag** ist ein Service-Binding-Eintrag für HTTPS-Protokoll und ermöglicht es, zusätzliche Informationen für den Service anzugeben. 

Beispiel: `example.com. IN HTTPS 1 . alpn=h2,h3 echconfig="123..."`

In diesem Beispiel gibt der HTTPS-Eintrag für "example.com" an, dass die unterstützten ALPN-Token (Application-Layer Protocol Negotiation) "h2" und "h3" sind, und es stellt die Encrypted ClientHello (ECH)-Konfiguration bereit.

IPSECKEY (IPsec Key Record)
---------------------------

Ein **IPSECKEY-Eintrag** enthält öffentliche Schlüssel für IPsec (Internet Protocol Security). 

Beispiel: `example.com. IN IPSECKEY ( 10 1 2 17202310e9a4807631829201a3016721 )`

In diesem Beispiel enthält der IPSECKEY-Eintrag den öffentlichen Schlüssel für die Domain "example.com".

LOC (Location Record)
---------------------

Ein **LOC-Eintrag** enthält geografische Standortinformationen für einen Host. 

Beispiel: `example.com. IN LOC ( 37 23 30.000 N 122 01 30.000 W 10m 5m 100m 10m )`

In diesem Beispiel gibt der LOC-Eintrag den geografischen Standort von "example.com" in Breiten- und Längengrad sowie Höhe und Genauigkeit an.

MX (Mail Exchanger Record)
--------------------------

Ein **MX-Eintrag** gibt den Mailserver für eine Domain an, der für das Empfangen von E-Mails verantwortlich ist. 

Beispiel: `example.com. IN MX 10 mail.example.com.`

In diesem Beispiel zeigt der MX-Eintrag an, dass E-Mails für "example.com" an den Mailserver "mail.example.com" gesendet werden sollen.

NAPTR (Naming Authority Pointer)
--------------------------------

Ein **NAPTR-Eintrag** dient zur Umwandlung von Domänennamen in URI-ähnliche Ressourcen und zur Bereitstellung von Regeln für diese Umwandlung. 

Beispiel: `example.com. IN NAPTR 100 10 "u" "E2U+sip" "!^.*$!sip:`[`info@example.com`](mailto:info@example.com)`!" .`

In diesem Beispiel enthält der NAPTR-Eintrag eine Regel, die einen SIP-Dienst (Session Initiation Protocol) für die Domain "example.com" bereitstellt.

NS (Name Server Record)
-----------------------

Ein **NS-Eintrag** gibt die Nameserver an, die für eine Domain zuständig sind. 

Beispiel: `example.com. IN NS ns1.example.com.`

In diesem Beispiel zeigt der NS-Eintrag an, dass der Nameserver "ns1.example.com" für die Domain "example.com" zuständig ist.

OPENPGPKEY (OpenPGP Public Key Record)
--------------------------------------

Ein **OPENPGPKEY-Eintrag** enthält den öffentlichen OpenPGP-Schlüssel für eine E-Mail-Adresse, die einer Domain zugeordnet ist. 

Beispiel: `abc._openpgpkey.example.com. IN OPENPGPKEY ( mQINBFk5d5UBEADfWs...)`

In diesem Beispiel enthält der OPENPGPKEY-Eintrag den öffentlichen OpenPGP-Schlüssel für die E-Mail-Adresse "[abc@example.com](mailto:abc@example.com)".

PTR (Pointer Record)
--------------------

Ein **PTR-Eintrag** ermöglicht die Reverse-DNS-Suche (auch bekannt als "Reverse Mapping"), indem er eine IP-Adresse einer Domain oder Subdomain zuordnet. 

Beispiel: `1.2.0.192.in-addr.arpa. IN PTR example.com.`

In diesem Beispiel verweist der PTR-Eintrag die IP-Adresse "192.0.2.1" zurück auf die Domain "example.com". Der PTR-Eintrag wird normalerweise in einer speziellen Reverse-Zone konfiguriert.

RP (Responsible Person Record)
------------------------------

Ein **RP-Eintrag** gibt Informationen über eine für eine Domain verantwortliche Person an. 

Beispiel: `example.com. IN RP admin.example.com. info.example.com.`

In diesem Beispiel gibt der RP-Eintrag an, dass "admin.example.com" die verantwortliche Person für "example.com" ist, und "info.example.com" ist eine Kontaktseite oder E-Mail-Adresse.

SMIMEA (S/MIME Certificate Association Record)
----------------------------------------------

Ein SMIMEA-Eintrag enthält ein S/MIME (Secure/Multipurpose Internet Mail Extensions) Zertifikat für eine E-Mail-Adresse, die einer Domain zugeordnet ist. 

Beispiel: `abcdefg12345.smimea.example.com. IN SMIMEA ( 3 0 1 308203933082... )`

In diesem Beispiel enthält der SMIMEA-Eintrag das S/MIME-Zertifikat für die E-Mail-Adresse, die der Domain "example.com" zugeordnet ist.

SOA (Start of Authority Record)
-------------------------------

Ein **SOA-Eintrag** gibt grundlegende Informationen über eine DNS-Zone, wie den primären Nameserver und den E-Mail-Kontakt für die Zone, an. 

Beispiel: `example.com. IN SOA ns1.example.com. hostmaster.example.com. ( 2022042001 ; Serial 7200 ; Refresh 3600 ; Retry 1209600 ; Expire 86400 ) ; Minimum TTL`

In diesem Beispiel enthält der SOA-Eintrag Informationen über die DNS-Zone "example.com", wie den primären Nameserver "ns1.example.com" und den E-Mail-Kontakt "[hostmaster@example.com](mailto:hostmaster@example.com)".

SRV (Service Record)
--------------------

Ein **SRV-Eintrag** gibt den Hostnamen und Port für einen speziellen Dienst an, der von einer Domain angeboten wird. 

Beispiel: `_sip._tcp.example.com. IN SRV 10 5 5060 sipserver.example.com.`

In diesem Beispiel gibt der SRV-Eintrag an, dass der SIP-Dienst (Session Initiation Protocol) für "example.com" auf dem Host "sipserver.example.com" und Port 5060 verfügbar ist.

SSHFP (SSH Fingerprint Record)
------------------------------

Ein **SSHFP-Eintrag** enthält den Fingerabdruck des öffentlichen Schlüssels für einen SSH-Server (Secure Shell). 

Beispiel: `ssh.example.com. IN SSHFP 1 1 450c7d19d5f8b2e22d5e9606aa8c99f1e6eaf62d`

In diesem Beispiel enthält der SSHFP-Eintrag den SHA-1-Fingerabdruck des öffentlichen Schlüssels für den SSH-Server "ssh.example.com".

SVCB (Service Binding Record)
-----------------------------

Ein **SVCB-Eintrag** ermöglicht es, Serviceinformationen für einen bestimmten Dienst bereitzustellen, ähnlich wie ein SRV-Eintrag, jedoch mit erweiterten Funktionen und Flexibilität. 

Beispiel: `_https._tcp.example.com. IN SVCB 1 example.com. alpn=h2,h3`

In diesem Beispiel gibt der SVCB-Eintrag an, dass der HTTPS-Dienst für "example.com" auf dem Host "example.com" verfügbar ist und die unterstützten ALPN-Token (Application-Layer Protocol Negotiation) "h2" und "h3" sind.

TLSA (Transport Layer Security Authentication Record)
-----------------------------------------------------

Ein **TLSA-Eintrag** wird verwendet, um TLS-Server (Transport Layer Security) zu authentifizieren, indem er Informationen über das TLS-Zertifikat oder den öffentlichen Schlüssel des Servers bereitstellt. 

Beispiel: `_443._tcp.`[`www.example.com`](http://www.example.com/)`. IN TLSA 3 0 1 9a6a5c6b0b7e4e6a4c7e0f6a4c7d0e6b3c7d0f6a2c7a0e6b0a7c0e6b`

In diesem Beispiel enthält der TLSA-Eintrag den SHA-256-Hash des TLS-Zertifikats oder des öffentlichen Schlüssels für den HTTPS-Server "[www.example.com](http://www.example.com/)" auf Port 443.

TXT (Text Record)
-----------------

Ein **TXT-Eintrag** wird verwendet, um textbasierte Informationen für eine Domain bereitzustellen, z. B. zur Verifizierung von Domainbesitz oder zur Veröffentlichung von SPF-Regeln. Beispiel: `example.com. IN TXT "v=spf1 include:_spf.example.com ~all"`

In diesem Beispiel gibt der TXT-Eintrag die SPF-Regel für "example.com" an, die besagt, dass die im "\_spf.example.com" aufgeführten Server zum Versenden von E-Mails für die Domain berechtigt sind.

URL (URL Redirect Record)
-------------------------

Ein URL-Eintrag wird verwendet, um eine Domain oder Subdomain auf eine andere URL weiterzuleiten. 

Beispiel: `URL-Eintrag: example.com ->` [`https://www.example.com`](https://www.example.com/)

In diesem Beispiel leitet der URL-Eintrag "example.com" auf die URL "[https://www.example.com](https://www.example.com/)" weiter. 

> Beachte, dass URL-Einträge keine Standard-DNS-Einträge sind, sondern von einigen DNS-Anbietern als benutzerfreundliche Funktion bereitgestellt werden.

URI (Uniform Resource Identifier Record)
----------------------------------------

Ein **URI-Eintrag** wird verwendet, um Informationen über Dienste bereitzustellen, die über eine Domain verfügbar sind, und ist flexibler als ein SRV-Eintrag.

Beispiel: `example.com. IN URI 10 1 "sip:example.com;transport=tcp"`

In diesem Beispiel gibt der URI-Eintrag an, dass ein SIP-Dienst (Session Initiation Protocol) für "example.com" über TCP verfügbar ist.