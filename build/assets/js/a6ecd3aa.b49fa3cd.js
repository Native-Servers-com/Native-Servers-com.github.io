"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:i,a[1]=u;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:4},a=void 0,u={unversionedId:"vserverrootserver/tutorials-linux/ubuntu-eigene-netzwerk-config",id:"vserverrootserver/tutorials-linux/ubuntu-eigene-netzwerk-config",title:"ubuntu-eigene-netzwerk-config",description:"Ubuntu | Eigene Netzwerkkonfiguration nutzen",source:"@site/docs/vserverrootserver/tutorials-linux/ubuntu-eigene-netzwerk-config.md",sourceDirName:"vserverrootserver/tutorials-linux",slug:"/vserverrootserver/tutorials-linux/ubuntu-eigene-netzwerk-config",permalink:"/docs/vserverrootserver/tutorials-linux/ubuntu-eigene-netzwerk-config",draft:!1,editUrl:"https://github.com/Native-Servers-com/Native-Servers-com.github.io/tree/main/docs/vserverrootserver/tutorials-linux/ubuntu-eigene-netzwerk-config.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"vserverrootserversidebar",previous:{title:"MariaDB-installieren",permalink:"/docs/vserverrootserver/tutorials-linux/MariaDB-installieren"},next:{title:"Tutorials - Windows",permalink:"/docs/category/tutorials---windows"}},s={},l=[],c={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"Ubuntu eigene Netzwerkkonfiguration",content:"ubuntu, netzwerk, network, cloudinit"})),"Ubuntu | Eigene Netzwerkkonfiguration nutzen ================================================",(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Dieses Tutorial richtet sich an erfahrene Linux-Nutzer! Sollten fehlerhafte \xc4nderungen durchgef\xfchrt werden, kann es passieren, dass das Netzwerk des Servers nicht mehr startet!")),(0,i.kt)("p",null,"Um unter Ubuntu eine eigene Netzwerkkonfiguration zu verwenden, sind einige Anpassungen n\xf6tig, da diese beim Start bzw. Neustart des Server \xfcberschrieben werden."),(0,i.kt)("p",null,"Erstelle zun\xe4chst eine neue ",(0,i.kt)("strong",{parentName:"p"},".cfg"),"-","Datei unter ",(0,i.kt)("strong",{parentName:"p"},"/etc/cloud/cloud.cfg.d/"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"touch /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg\n")),(0,i.kt)("p",null,'F\xfcge in dieser Datei dann die Zeile "',(0,i.kt)("strong",{parentName:"p"},"{config: disabled}"),"\u201d hinzu:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'echo "{config: disabled}" >> /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg\n')),(0,i.kt)("p",null,"Dies \xfcberschreibt die automatische Netzwerkanpassung beim Start des Systems."),(0,i.kt)("p",null,"Um dann Anpassungen an bspw. den DNS-Servern vorzunehmen, editiere die Datei \u201c",(0,i.kt)("strong",{parentName:"p"},"/etc/netplan/50-cloud-init.yaml"),"\u201d:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3321).Z,width:"642",height:"386"}),"  ",(0,i.kt)("img",{src:n(3888).Z,width:"642",height:"386"})),(0,i.kt)("p",null,"Mit folgendem Befehl kannst du die Konfiguration im Anschluss testen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"netplan try -timeout 180 \n")),(0,i.kt)("p",null,"Hierdurch wird die neue Konfiguration aktiviert, jedoch nach 180 Sekunden wieder zur\xfcckgesetzt. So kannst du beispielsweise testen, ob der Server mit der neuen Konfiguration erreichbar ist und korrekt funktioniert."),(0,i.kt)("p",null,"Mit folgendem Befehl kannst du die Konfiguration dauerhaft aktivieren:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"netplan apply\n")))}p.isMDXComponent=!0},3321:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/network_cloudinit-f5864e935f616b28fff527ce72c34ac0.png"},3888:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/network_cloudinit2-596fb6b291636b6bbd8bced10ce064df.png"}}]);