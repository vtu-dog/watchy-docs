(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{146:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/watchy_assembly_steps-efe4d4e39cc5d62cef3ad227f87a1807.png"},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),o=(r(0),r(99)),l={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",slug:"/getting-started"},i={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Assembly",source:"@site/docs/getting-started.md",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/sqfmi/watchy-site/docs/getting-started.md",version:"current",sidebar_label:"Getting Started",sidebar:"docs",next:{title:"Libraries Used",permalink:"/docs/libs"}},c=[{value:"Assembly",id:"assembly",children:[]},{value:"Arduino Setup",id:"arduino-setup",children:[]},{value:"Upload",id:"upload",children:[]}],s={toc:c};function p(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"assembly"},"Assembly"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Watchy Assembly",src:r(146).default})),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Apply tape to the ",Object(o.b)("strong",{parentName:"li"},"back")," of the E-Paper display and battery. The ",Object(o.b)("strong",{parentName:"li"},"front of the display is white")," and the ",Object(o.b)("strong",{parentName:"li"},"back of the display is metallic/silver")),Object(o.b)("li",{parentName:"ol"},"Pull lightly to unlock the FFC connector, insert the display cable through the strap hole. Make sure the cable is inserted all the way, then push the lock back in to secure the cable. "),Object(o.b)("li",{parentName:"ol"},"Fold back and align the display to the top of the PCB, peel off tape and firmly secure the display"),Object(o.b)("li",{parentName:"ol"},"Insert battery plug, ensure correct polarity (red is closer to the USB connector)"),Object(o.b)("li",{parentName:"ol"},"Peel off tape and firmly secure battery to the PCB"),Object(o.b)("li",{parentName:"ol"},"Insert watch strap through PCB strap holes, then tighten strap from both ends"),Object(o.b)("li",{parentName:"ol"},"Wrap strap around arm and adjust for comfort")),Object(o.b)("h2",{id:"arduino-setup"},"Arduino Setup"),Object(o.b)("p",null,"Watchy comes pre-loaded with firmware that demonstrates all the basic features. You can also try different watch faces and examples in Arduino."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download and install the latest ",Object(o.b)("ins",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.arduino.cc/en/software"}),"Arduino IDE")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Start Arduino and open the ",Object(o.b)("em",{parentName:"p"},"Preferences")," window.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Under ",Object(o.b)("em",{parentName:"p"},"Additional Board Manager URLs")," add:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Open ",Object(o.b)("strong",{parentName:"p"},"Boards Manager")," under Tools > Board menu and install the ",Object(o.b)("em",{parentName:"p"},"esp32")," platform")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Under Sketch > Include Library > Manage Libraries, search for ",Object(o.b)("strong",{parentName:"p"},"Watchy")," and install the latest version")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make sure all the depedencies are updated to the latest version i.e. ",Object(o.b)("strong",{parentName:"p"},"GxEPD2")," , ",Object(o.b)("strong",{parentName:"p"},"WiFiManager"),", ",Object(o.b)("strong",{parentName:"p"},"etc.")))),Object(o.b)("hr",null),Object(o.b)("h2",{id:"upload"},"Upload"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Plug in USB on Watchy and select the serial port that shows up"),Object(o.b)("li",{parentName:"ol"},"If nothing shows up, or if you're having trouble uploading, make sure you have the ",Object(o.b)("ins",null,Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"}),"USB-Serial drivers"))," installed."),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"ESP32 Dev Module")," under Tools > Board > ESP32 Arduino"),Object(o.b)("li",{parentName:"ol"},"Select ",Object(o.b)("strong",{parentName:"li"},"Minimal SPIFFS")," under Tools > Partition Scheme"),Object(o.b)("li",{parentName:"ol"},"Leave everything else as default"),Object(o.b)("li",{parentName:"ol"},"Choose an example and hit upload"),Object(o.b)("li",{parentName:"ol"},"Try modifiying the examples or create your own app!")))}p.isMDXComponent=!0},99:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(r),u=a,m=b["".concat(l,".").concat(u)]||b[u]||d[u]||o;return r?n.a.createElement(m,i(i({ref:t},s),{},{components:r})):n.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);