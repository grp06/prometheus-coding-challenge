(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,t){e.exports=t(18)},16:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(3),o=t.n(l),c=(t(16),t(1)),i=t(4),u=t(5),s=t(6),m=t(8),p=t(7),d=t(9),E=(t(17),function(e){function n(){var e,t;Object(u.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(t=Object(m.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(l)))).state={countryData:{},regionExpanded:null,sortBy:"name"},t.toggleRegionExpanded=function(e){t.sortBy("name",e)},t.getSortClass=function(e){return e===t.state.sortBy?"selected":""},t.sortBy=function(e,n){var a,r=t.state,l=r.countryData,o=r.regionExpanded,u=l[o||n];a="density"===e?u.sort(function(e,n){var t=e.population/e.area;return n.population/n.area-t}):u.sort(function(e,n){return e.name<n.name?-1:e.name>n.name?1:0});var s=Object(i.a)({},l,Object(c.a)({},o||n,a));t.setState({sortBy:e,countryData:s,regionExpanded:n?o===n?"":n:o})},t.renderContent=function(){var e=t.state,n=e.countryData,a=e.regionExpanded,l=[],o=function(e){var o=n[e];l.push(r.a.createElement("div",{key:e,className:"region-block"},r.a.createElement("div",{className:"region-name"},r.a.createElement("div",{className:"click-area",onClick:function(){return t.toggleRegionExpanded(e)}},e),r.a.createElement("div",{className:a===e?"show":"hide"},r.a.createElement("span",{onClick:function(){return t.sortBy("name")},className:t.getSortClass("name")},"Name"),"|",r.a.createElement("span",{onClick:function(){return t.sortBy("density")},className:t.getSortClass("density")},"Population Density"))),r.a.createElement("div",{className:a===e?"show":"hide"},o.map(function(e,n){var t=e.alpha2Code,a=e.capital,l=e.region,o=e.population,c=e.area,i=e.timezones,u=e.languages;return r.a.createElement("div",{className:"country",key:n},r.a.createElement("div",{className:"name"},e.name),r.a.createElement("div",{className:"country-info"},r.a.createElement("div",null,r.a.createElement("span",null,"Alpha2Code:")," ",t),r.a.createElement("div",null,r.a.createElement("span",null,"Capital:")," ",a),r.a.createElement("div",null,r.a.createElement("span",null,"Region:")," ",l),r.a.createElement("div",null,r.a.createElement("span",null,"Population:")," ",o),r.a.createElement("div",null,r.a.createElement("span",null,"Area:")," ",c),r.a.createElement("div",null,r.a.createElement("span",null,"Population Density:"),r.a.createElement("br",null),Math.round(o/c)," people per sq/mi"),r.a.createElement("div",null,r.a.createElement("span",null,"Number of Timezones:")," ",i.length),r.a.createElement("div",null,r.a.createElement("span",null,"Languages Spoken:"),r.a.createElement("ul",null,u.map(function(e,n){return r.a.createElement("li",{key:n},e)})))))}))))};for(var c in n)o(c);return l},t}return Object(d.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://restcountries.eu/rest/v1/all").then(function(e){return e.json()}).then(function(n){if(n.length){e.setState({countryData:(t=n,t.reduce(function(e,n,t){return e[n.region]?e[n.region].push(n):e[""==n.region?"no-region-given":n.region]=[n],e},{}))})}var t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},this.renderContent())}}]),n}(a.Component));o.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.1abad3ab.chunk.js.map