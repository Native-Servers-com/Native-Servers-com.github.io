"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8081],{3905:(e,n,i)=>{i.d(n,{Zo:()=>u,kt:()=>b});var t=i(7294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)i=a[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=t.createContext({}),m=function(e){var n=t.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},u=function(e){var n=m(e.components);return t.createElement(d.Provider,{value:n},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=m(i),p=r,b=l["".concat(d,".").concat(p)]||l[p]||c[p]||a;return i?t.createElement(b,o(o({ref:n},u),{},{components:i})):t.createElement(b,o({ref:n},u))}));function b(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s[l]="string"==typeof e?e:r,o[1]=s;for(var m=2;m<a;m++)o[m]=i[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}p.displayName="MDXCreateElement"},987:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var t=i(7462),r=(i(7294),i(3905));const a={id:"webhosting-domains",sidebar_position:1},o="Was ist eigentlich eine Domain?",s={unversionedId:"webhostingdomains/webhosting-domains",id:"webhostingdomains/webhosting-domains",title:"Was ist eigentlich eine Domain?",description:"Eine Domain dient dazu, deinen Namen oder dein Projekt im Internet darzustellen und global zug\xe4nglich zu machen. Mit einer Domain kannst du beispielsweise eine Webseite verf\xfcgbar machen oder sie auf einen Game- oder TeamSpeak 3-Server verweisen, um diesen unter einem leicht zu merkenden Namen online zug\xe4nglich zu machen.",source:"@site/docs/webhostingdomains/intro.md",sourceDirName:"webhostingdomains",slug:"/webhostingdomains/webhosting-domains",permalink:"/docs/webhostingdomains/webhosting-domains",draft:!1,editUrl:"https://github.com/Native-Servers-com/Native-Servers-com.github.io/tree/main/docs/webhostingdomains/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"webhosting-domains",sidebar_position:1},sidebar:"webdomainsidebar",next:{title:"Webhosting Basics",permalink:"/docs/category/webhosting-basics"}},d={},m=[{value:"Subdomains\xa0",id:"subdomains",level:2},{value:"Domains und IP-Adressen\xa0",id:"domains-und-ip-adressen",level:2}],u={toc:m},l="wrapper";function c(e){let{components:n,...i}=e;return(0,r.kt)(l,(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"was-ist-eigentlich-eine-domain"},"Was ist eigentlich eine Domain?\xa0"),(0,r.kt)("p",null,"Eine Domain dient dazu, deinen Namen oder dein Projekt im Internet darzustellen und global zug\xe4nglich zu machen. Mit einer Domain kannst du beispielsweise eine Webseite verf\xfcgbar machen oder sie auf einen Game- oder TeamSpeak 3-Server verweisen, um diesen unter einem leicht zu merkenden Namen online zug\xe4nglich zu machen."),(0,r.kt)("h2",{id:"subdomains"},"Subdomains\xa0"),(0,r.kt)("p",null,"Eine Subdomain stellt eine sekund\xe4re Domain innerhalb deiner Hauptdomain dar und kann jederzeit kostenlos f\xfcr deine bestehende Domain erstellt werden. Dies erfolgt \xfcber die DNS-Einstellungen und eine Subdomain k\xf6nnte beispielsweise wie folgt aussehen: server.deinedomain.de"),(0,r.kt)("p",null,'In diesem Fall ist "server" deine Subdomain und "deinedomain.de" der Name der Hauptdomain. Normalerweise verweist eine Subdomain auf eine andere Adresse als die Hauptdomain. So k\xf6nntest du beispielsweise deine Webseite unter deinedomain.de zug\xe4nglich machen, w\xe4hrend du mit server.deinedomain.de auf deinen Game- oder einen anderen Server zugreifen kannst.'),(0,r.kt)("h2",{id:"domains-und-ip-adressen"},"Domains und IP-Adressen\xa0"),(0,r.kt)("p",null,'Eine Domain muss separat angemietet werden und ist nicht automatisch bei einem Gameserver, Rootserver, vServer oder Voiceserver enthalten, anders als eine IP-Adresse. Eine Domain unterscheidet sich optisch von einer IP-Adresse: W\xe4hrend eine IP-Adresse aus Zahlen besteht, wie zum Beispiel 140.82.118.3, besitzt eine Domain einen eigentlichen Namen und eine zugeh\xf6rige Domainendung, etwa fivem.net. In diesem Fall ist "fivem" der Domainname und ".net" die Domainendung. Es gibt nat\xfcrlich viele weitere Domainendungen wie .com oder .de.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Hier kannst Du eine eigene Domain mieten:")," ",(0,r.kt)("a",{parentName:"p",href:"https://native-servers.com/customer/cart.php?a=add&domain=register"},(0,r.kt)("strong",{parentName:"a"},"Domain Bestellen")))))}c.isMDXComponent=!0}}]);