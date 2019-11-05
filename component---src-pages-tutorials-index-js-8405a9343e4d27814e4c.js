(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{159:function(e,t,n){"use strict";n.r(t);n(167),n(86),n(57),n(39),n(175),n(81),n(169);var a=n(0),r=n.n(a),i=n(163),s=function(e){return r.a.createElement("header",{className:e.className?"hero hero-text "+e.className:"hero hero-text"},r.a.createElement("div",{className:"hero-content"},r.a.createElement("h1",null,e.title),e.subtitle?r.a.createElement("h2",null,e.subtitle):null,e.text?r.a.createElement("p",{className:"hero-text"},e.text):null))},o=n(166),l=function(e){return r.a.createElement("aside",{className:e.className?"sidebar "+e.className:"sidebar"},r.a.createElement("section",{className:"sidebar-content"},e.children))},c=(n(89),n(7)),u=n.n(c),m=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={query:"",results:[]},t.handleSubmit=function(e){e.preventDefault()},t.search=function(e){var n=e.target.value,a=t.filterPostsByString(n);t.setState({results:a,query:n})},t}u()(t,e);var n=t.prototype;return n.filterPostsByString=function(e){var t=e.toLowerCase(),n=document.querySelectorAll(".searchable");if(""===t)for(var a=0;a<n.length;a++)n[a].style.display="block";else for(var r=0;r<n.length;r++)n[r].innerHTML.toLowerCase().indexOf(t)>0?n[r].style.display="block":n[r].style.display="none"},n.render=function(){return r.a.createElement("form",{className:"form","aria-label":"search for tutorials",onSubmit:this.handleSubmit},r.a.createElement("label",{className:"input-label",htmlFor:"search"},"Search for a tutorial"),r.a.createElement("p",{className:"input-example"},"Search by tag, keyword, title, date. Example: css, 2018, editing"),r.a.createElement("input",{className:"input input-select",type:"search",name:"search",id:"search",value:this.state.query,onChange:this.search}))},t}(a.Component),f=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).reset=function(e){t.resetForm()},t}u()(t,e);var n=t.prototype;return n.resetForm=function(){var e=document.querySelectorAll(".taglist .btn"),t=document.querySelectorAll(".post");e.forEach(function(e){return e.classList.remove("selected")}),t.forEach(function(e){return e.style.display="block"})},n.render=function(){return r.a.createElement("button",{id:"reset",className:"btn btn-secondary",onClick:this.reset},"Reset filters")},t}(a.Component),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).filterByKeyword=function(e){var t=n.props.keyword;n.filterPostsByKeywordButton(t)},n.state={isActive:!1},n}u()(t,e);var n=t.prototype;return n.addActiveClass=function(){this.setState({isActive:!this.state.isActive})},n.filterPostsByKeywordButton=function(e){var t=e.toLowerCase(),n=document.querySelectorAll(".searchable");if(document.querySelectorAll(".menu-btn").forEach(function(e){return e.classList.remove("selected")}),document.querySelector("*[query='"+this.props.keyword+"']").classList.add("selected"),""===t)for(var a=0;a<n.length;a++)n[a].style.display="block";else for(var r=0;r<n.length;r++)n[r].innerHTML.toLowerCase().indexOf(t)>0?n[r].style.display="block":n[r].style.display="none"},n.render=function(){return r.a.createElement("button",{className:"btn btn-keyword",key:this.props.keyword,query:this.props.keyword,onClick:this.filterByKeyword},this.props.keyword)},t}(a.Component),p=function(e){return r.a.createElement("ul",{className:e.className?"taglist "+e.className:"taglist"},e.keywords.map(function(e,t){return r.a.createElement("li",{key:t,className:"taglist-item"},r.a.createElement(d,{key:t,keyword:e}))}))},h=n(181);n.d(t,"MainIndex",function(){return v});t.default=function(e){var t=e.data.allMarkdownRemark,n=Array.from([].concat(new Set(t.edges.map(function(e){return e.node.frontmatter.keywords}).flat().sort()))[0]);return r.a.createElement(i.a,{title:"tutorials",description:"A collection of methods and techniques for building shiny apps",author:"dcruvolo",keywords:["shiny","shiny tutorials","r","shiny examples"]},r.a.createElement(s,{title:"Available Tutorials",text:"Below you can find all of the available tutorials. Search for a tutorial by name, topic, date, etc or filter posts by keyword."}),r.a.createElement(o.a,null,r.a.createElement("div",{className:"flex flex-30x70-layout tutorial-index"},r.a.createElement(l,{className:"flex-child tutorial-index-sidebar"},r.a.createElement("h2",{className:"menu-title"},"Filter Posts"),r.a.createElement("p",{className:"menu-caption"},"Select a keyword"),r.a.createElement(p,{keywords:n}),r.a.createElement(f,null)),r.a.createElement("article",{className:"flex-child tutorial-index-posts"},r.a.createElement("h2",null,"Tutorials"),r.a.createElement(m,null),t.edges.map(function(e,t){var n=e.node;return r.a.createElement(h.a,{className:"searchable",title:n.frontmatter.title,link:n.fields.slug,abstract:n.frontmatter.abstract,date:n.frontmatter.date,keywords:n.frontmatter.keywords,id:t})})))))};var v="575098647"},161:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(33),l=n.n(o);n.d(t,"a",function(){return l.a});n(162),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},162:function(e,t,n){var a;e.exports=(a=n(165))&&a.default||a},163:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(164),s=n(4),o=n.n(s),l=n(173),c=n.n(l);function u(e){var t=e.description,n=e.lang,a=e.meta,s=e.keywords,o=e.title,l=e.author,u=i.data.site,m=t||u.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:n},title:o,titleTemplate:u.siteMetadata.title+" | "+o,meta:[{name:"description",content:m},{property:"og:title",content:o},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l},{name:"twitter:title",content:o},{name:"twitter:description",content:m}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(a)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired};var m=u,f=n(34),d=n.n(f),p=n(7),h=n.n(p),v=n(161),y=(n(146),function(e){return r.a.createElement("svg",{className:e.className?"icon "+e.className:"icon",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},r.a.createElement("path",{d:"M570.24 247.41L512 199.52V104a8 8 0 0 0-8-8h-32a8 8 0 0 0-7.95 7.88v56.22L323.87 45a56.06 56.06 0 0 0-71.74 0L5.76 247.41a16 16 0 0 0-2 22.54L14 282.25a16 16 0 0 0 22.53 2L64 261.69V448a32.09 32.09 0 0 0 32 32h128a32.09 32.09 0 0 0 32-32V344h64v104a32.09 32.09 0 0 0 32 32h128a32.07 32.07 0 0 0 32-31.76V261.67l27.53 22.62a16 16 0 0 0 22.53-2L572.29 270a16 16 0 0 0-2.05-22.59zM463.85 432H368V328a32.09 32.09 0 0 0-32-32h-96a32.09 32.09 0 0 0-32 32v104h-96V222.27L288 77.65l176 144.56z"}))}),E=function(e){return r.a.createElement("ul",{className:e.className?"menu "+e.className:"menu","aria-label":"page navigation"},r.a.createElement("li",{className:"menu-item"},r.a.createElement(v.a,{to:"/",className:"menu-link"},r.a.createElement(y,{className:"menu-link-icon"}),"Home")),r.a.createElement("li",{className:"menu-item"},r.a.createElement(v.a,{to:"/tutorials",className:"menu-link"},"tutorials")),r.a.createElement("li",{className:"menu-item"},r.a.createElement(v.a,{to:"/about",className:"menu-link"},"about")),e.children)},g=(n(147),n(148),function(e){function t(t){var n;return(n=e.call(this,t)||this).___openMenu=n.___openMenu.bind(d()(n)),n}h()(t,e);var n=t.prototype;return n.___openMenu=function(){var e=document.getElementById("menuBtn"),t=document.querySelector(".navigation");t.classList.toggle("expanded"),e.classList.toggle("open"),"false"===e.getAttribute("aria-expanded")?(e.setAttribute("aria-expanded",!0),t.setAttribute("hidden",!1)):(e.setAttribute("aria-expanded",!1),t.setAttribute("hidden",!0))},n.render=function(){return r.a.createElement("button",{id:"menuBtn","aria-label":"open and close menu","aria-expanded":"false",onClick:this.___openMenu},r.a.createElement("span",{className:"menu-icon","aria-hidden":"true"},r.a.createElement("span",{className:"menu-bar"}),r.a.createElement("span",{className:"menu-bar"}),r.a.createElement("span",{className:"menu-bar"})))},t}(a.Component)),w=function(e){function t(t){var n;return(n=e.call(this,t)||this).___closeMenuOnResize=n.___closeMenuOnResize.bind(d()(n)),n}h()(t,e);var n=t.prototype;return n.___closeMenuOnResize=function(){if(window.innerWidth>=862){var e=document.getElementById("menuBtn"),t=document.querySelector(".navigation");t.classList.remove("expanded"),e.classList.remove("open"),e.setAttribute("aria-expanded",!1),t.setAttribute("hidden",!0)}},n.componentDidMount=function(){window.addEventListener("resize",this.___closeMenuOnResize)},n.componentWillUnmount=function(){window.removeEventListener("resize",this.___closeMenuOnResize)},n.render=function(){return r.a.createElement("nav",{className:"nav",role:"navigation"},r.a.createElement(v.a,{to:"/",className:"nav-item brand-link"},"shinyTutorials"),r.a.createElement(E,{className:"nav-item navigation"}),r.a.createElement("ul",{className:"nav-item menu menu-btns","aria-label":"site settings"},r.a.createElement("li",{className:"menu-item menu-button"},r.a.createElement(g,null))))},t}(a.Component),N=(n(149),function(e){return r.a.createElement("svg",{className:e.className?"icon "+e.className:"icon",height:"30",width:"30",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"}))}),b=function(e){return r.a.createElement("svg",{className:e.className?"icon "+e.className:"icon",height:"30",width:"30",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))},_=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("h2",null,"shinyTutorials"),r.a.createElement(E,{className:"footer-menu"},r.a.createElement("li",{className:"menu-item"},r.a.createElement("a",{className:"menu-link",href:"https://www.twitter.com/dcruvolo"},r.a.createElement(N,{className:"menu-link-icon"}),"@dcruvolo")),r.a.createElement("li",{className:"menu-item"},r.a.createElement("a",{className:"menu-link",href:"https://github.com/davidruvolo51/shinyAppTutorials"},r.a.createElement(b,{className:"menu-link-icon"}),"shinyAppTutorials"))))};n(150),t.a=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{title:e.title,keywords:e.keywords,description:e.description,author:e.author}),r.a.createElement(w,null),e.children,r.a.createElement(_,null))}},164:function(e){e.exports={data:{site:{siteMetadata:{title:"shinyTutorials",description:"a collection of how-to guides and demonstrations for building shiny apps",author:"@dcruvolo"}}}}},165:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),i=n(4),s=n.n(i),o=n(56),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},166:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(151);t.a=function(e){return r.a.createElement("main",{id:"main",className:e.className?"main "+e.className:"main","aria-label":"main content",style:e.style?e.style:null},e.children)}},167:function(e,t,n){"use strict";var a=n(12),r=n(28),i=n(26),s=n(18),o=[].sort,l=[1,2,3];a(a.P+a.F*(s(function(){l.sort(void 0)})||!s(function(){l.sort(null)})||!n(168)(o)),"Array",{sort:function(e){return void 0===e?o.call(i(this)):o.call(i(this),r(e))}})},168:function(e,t,n){"use strict";var a=n(18);e.exports=function(e,t){return!!e&&a(function(){t?e.call(null,function(){},1):e.call(null)})}},169:function(e,t,n){"use strict";var a=n(19),r=n(12),i=n(26),s=n(78),o=n(79),l=n(14),c=n(170),u=n(80);r(r.S+r.F*!n(74)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,r,m,f=i(e),d="function"==typeof this?this:Array,p=arguments.length,h=p>1?arguments[1]:void 0,v=void 0!==h,y=0,E=u(f);if(v&&(h=a(h,p>2?arguments[2]:void 0,2)),null==E||d==Array&&o(E))for(n=new d(t=l(f.length));t>y;y++)c(n,y,v?h(f[y],y):f[y]);else for(m=E.call(f),n=new d;!(r=m.next()).done;y++)c(n,y,v?s(m,h,[r.value,y],!0):r.value);return n.length=y,n}})},170:function(e,t,n){"use strict";var a=n(25),r=n(55);e.exports=function(e,t,n){t in e?a.f(e,t,r(0,n)):e[t]=n}},171:function(e,t,n){var a=n(36)("meta"),r=n(11),i=n(27),s=n(25).f,o=0,l=Object.isExtensible||function(){return!0},c=!n(18)(function(){return l(Object.preventExtensions({}))}),u=function(e){s(e,a,{value:{i:"O"+ ++o,w:{}}})},m=e.exports={KEY:a,NEED:!1,fastKey:function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,a)){if(!l(e))return"F";if(!t)return"E";u(e)}return e[a].i},getWeak:function(e,t){if(!i(e,a)){if(!l(e))return!0;if(!t)return!1;u(e)}return e[a].w},onFreeze:function(e){return c&&m.NEED&&l(e)&&!i(e,a)&&u(e),e}}},172:function(e,t,n){var a=n(11);e.exports=function(e,t){if(!a(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},175:function(e,t,n){"use strict";var a=n(176),r=n(172);e.exports=n(177)("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return a.def(r(this,"Set"),e=0===e?0:e,e)}},a)},176:function(e,t,n){"use strict";var a=n(25).f,r=n(88),i=n(77),s=n(19),o=n(75),l=n(76),c=n(58),u=n(87),m=n(85),f=n(20),d=n(171).fastKey,p=n(172),h=f?"_s":"size",v=function(e,t){var n,a=d(t);if("F"!==a)return e._i[a];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var u=e(function(e,a){o(e,u,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[h]=0,null!=a&&l(a,n,e[c],e)});return i(u.prototype,{clear:function(){for(var e=p(this,t),n=e._i,a=e._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete n[a.i];e._f=e._l=void 0,e[h]=0},delete:function(e){var n=p(this,t),a=v(n,e);if(a){var r=a.n,i=a.p;delete n._i[a.i],a.r=!0,i&&(i.n=r),r&&(r.p=i),n._f==a&&(n._f=r),n._l==a&&(n._l=i),n[h]--}return!!a},forEach:function(e){p(this,t);for(var n,a=s(e,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(a(n.v,n.k,this);n&&n.r;)n=n.p},has:function(e){return!!v(p(this,t),e)}}),f&&a(u.prototype,"size",{get:function(){return p(this,t)[h]}}),u},def:function(e,t,n){var a,r,i=v(e,t);return i?i.v=n:(e._l=i={i:r=d(t,!0),k:t,v:n,p:a=e._l,n:void 0,r:!1},e._f||(e._f=i),a&&(a.n=i),e[h]++,"F"!==r&&(e._i[r]=i)),e},getEntry:v,setStrong:function(e,t,n){c(e,t,function(e,n){this._t=p(e,t),this._k=n,this._l=void 0},function(){for(var e=this._k,t=this._l;t&&t.r;)t=t.p;return this._t&&(this._l=t=t?t.n:this._t._f)?u(0,"keys"==e?t.k:"values"==e?t.v:[t.k,t.v]):(this._t=void 0,u(1))},n?"entries":"values",!n,!0),m(t)}}},177:function(e,t,n){"use strict";var a=n(6),r=n(12),i=n(15),s=n(77),o=n(171),l=n(76),c=n(75),u=n(11),m=n(18),f=n(74),d=n(38),p=n(178);e.exports=function(e,t,n,h,v,y){var E=a[e],g=E,w=v?"set":"add",N=g&&g.prototype,b={},_=function(e){var t=N[e];i(N,e,"delete"==e?function(e){return!(y&&!u(e))&&t.call(this,0===e?0:e)}:"has"==e?function(e){return!(y&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return y&&!u(e)?void 0:t.call(this,0===e?0:e)}:"add"==e?function(e){return t.call(this,0===e?0:e),this}:function(e,n){return t.call(this,0===e?0:e,n),this})};if("function"==typeof g&&(y||N.forEach&&!m(function(){(new g).entries().next()}))){var k=new g,x=k[w](y?{}:-0,1)!=k,A=m(function(){k.has(1)}),S=f(function(e){new g(e)}),L=!y&&m(function(){for(var e=new g,t=5;t--;)e[w](t,t);return!e.has(-0)});S||((g=t(function(t,n){c(t,g,e);var a=p(new E,t,g);return null!=n&&l(n,v,a[w],a),a})).prototype=N,N.constructor=g),(A||L)&&(_("delete"),_("has"),v&&_("get")),(L||x)&&_(w),y&&N.clear&&delete N.clear}else g=h.getConstructor(t,e,v,w),s(g.prototype,n),o.NEED=!0;return d(g,e),b[e]=g,r(r.G+r.W+r.F*(g!=E),b),y||h.setStrong(g,e,v),g}},178:function(e,t,n){var a=n(11),r=n(179).set;e.exports=function(e,t,n){var i,s=t.constructor;return s!==n&&"function"==typeof s&&(i=s.prototype)!==n.prototype&&a(i)&&r&&r(e,i),e}},179:function(e,t,n){var a=n(11),r=n(5),i=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(19)(Function.call,n(180).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:i}},180:function(e,t,n){var a=n(84),r=n(55),i=n(37),s=n(83),o=n(27),l=n(82),c=Object.getOwnPropertyDescriptor;t.f=n(20)?c:function(e,t){if(e=i(e),t=s(t,!0),l)try{return c(e,t)}catch(n){}if(o(e,t))return r(!a.f.call(e,t),e[t])}},181:function(e,t,n){"use strict";n(182);var a=n(0),r=n.n(a),i=n(161);n(152);t.a=function(e){var t=e.className?"post "+e.className:"post",n=e.isFeature?t+" post-feature":t+" post-plain";return r.a.createElement("div",{className:n,"aria-label":e.title,key:e.id?e.id:null},r.a.createElement("h1",{className:"post-title"},e.title),r.a.createElement("p",{className:"post-desc"},e.abstract),r.a.createElement("ul",{className:"post-meta","aria-label":"post details"},r.a.createElement("li",{className:"post-meta-item"},r.a.createElement("span",{className:"post-date"},e.date)),r.a.createElement("li",{className:"post-meta-item"},r.a.createElement("ul",{className:"post-meta-tags","aria-label":"post tags"},e.keywords.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement("code",{className:"tag tag-"+e},e))})))),r.a.createElement(i.a,{to:e.link,className:"post-link"},"Read"))}},182:function(e,t,n){"use strict";n(183)("link",function(e){return function(t){return e(this,"a","href",t)}})},183:function(e,t,n){var a=n(12),r=n(18),i=n(21),s=/"/g,o=function(e,t,n,a){var r=String(i(e)),o="<"+t;return""!==n&&(o+=" "+n+'="'+String(a).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(o),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}}}]);
//# sourceMappingURL=component---src-pages-tutorials-index-js-8405a9343e4d27814e4c.js.map