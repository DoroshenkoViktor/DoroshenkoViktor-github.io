(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4186)}])},123:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var i=t(5893),r=t(1664),a=t.n(r),o=t(7933),c=t.n(o),s=function(e){var n=e.link,t=e.caption;e.action;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("li",{children:(0,i.jsx)(a(),{href:n,children:(0,i.jsx)("a",{children:(0,i.jsx)("div",{className:c().categoryItem,children:t})})})})})},l=t(5661),u=t.n(l),d=t(9619),m=t.n(d),_=function(e){var n=e.caption,t=e.action;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:m().actionItem,onClick:t,children:n})})},h=function(e){var n=e.values.map((function(e,n){return e.action?(0,i.jsx)(_,{action:e.action,caption:e.title},n):e.link?(0,i.jsx)(s,{link:e.link,caption:e.title},n):void 0})),t=u().categories;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:u().container,children:(0,i.jsx)("ul",{className:t,children:n})})})}},4988:function(e,n,t){"use strict";t.d(n,{c:function(){return c}});var i=t(5893),r=t(7130),a=t.n(r),o=function(e){return"x"===e?a().mainHeaderX:"m"===e?a().mainHeaderM:"s"===e?a().mainHeaderS:void 0},c=function(e){var n=e.title,t=e.size;return(0,i.jsxs)("header",{className:a().mainHeader+" "+o(t),children:[(0,i.jsx)("div",{className:a().mainLogoImg,children:(0,i.jsx)("img",{src:"/images/profile-pic.png",alt:"logo"})}),(0,i.jsx)("h1",{className:a().blogName,children:n})]})}},6040:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var i=t(5893),r=t(1664),a=t.n(r);var o=t(7854),c=t.n(o);function s(e){var n=e.getUTCDay(),t=function(e,n,t){var i=n.find((function(n){return n[0]===e?n:null}));if(null==i){if(null==t)throw new Error("Impossible to handle ".concat(e));return t}return i[1]}(e.getUTCMonth(),[[1,"January"],[2,"February"],[3,"March"],[4,"April"],[5,"May"],[6,"June"],[7,"July"],[8,"August"],[9,"September"],[10,"October"],[11,"November"],[12,"December"]]),i=e.getUTCFullYear();return"".concat(n+1," ").concat(t," ").concat(i)}var l=function(e){var n=e.link,t=e.title,r=e.description,o=e.publicationDate;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("li",{children:(0,i.jsx)(a(),{href:n,children:(0,i.jsx)("a",{children:(0,i.jsxs)("div",{className:c().noteListItem,children:[(0,i.jsx)("header",{className:c().noteHeader,children:(0,i.jsx)("h2",{className:"note-title-heading",children:t})}),(0,i.jsx)("main",{className:c().noteBody,children:r}),(0,i.jsx)("footer",{className:c().noteFooter,children:s(o)})]})})})})})},u=t(2201),d=t.n(u),m=function(e){var n=e.values;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{className:d().notesList,children:n.map((function(e,n){return(0,i.jsx)(l,{link:e.link,title:e.title,description:e.description,publicationDate:new Date(e.date)},e.link||n)}))})})}},4776:function(e,n,t){"use strict";t.d(n,{C:function(){return c}});var i=t(5893),r=t(7294),a=t(6247),o=t.n(a),c=function(e){var n=e.children,t=(0,r.useState)(!1),a=t[0],c=t[1],s=o().categories;return a||(s="".concat(o().sectionCategories," hidden")),(0,i.jsxs)("div",{className:o().container,children:[(0,i.jsx)("button",{className:o().menuButton,onClick:function(e){c(!a)},children:"menu"}),(0,i.jsx)("section",{className:s,children:n})]})}},4186:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return m}});var i=t(5893),r=t(9008),a=t(1664),o=t.n(a),c=t(123),s=t(6040),l=t(4988),u=t(4776),d=t(9377),m=!0;n.default=function(e){var n=e.categories,t=e.notes;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:"Tech Notes"}),(0,i.jsx)("link",{rel:"icon",href:"/images/favicon.ico"})]}),(0,i.jsx)(d.k8,{header:(0,i.jsx)(o(),{href:"/",children:(0,i.jsx)("a",{children:(0,i.jsx)(l.c,{title:"Tech Notes",size:"x"})})}),alt:(0,i.jsx)(u.C,{children:(0,i.jsx)(c.Z,{values:n})}),children:(0,i.jsx)(s.Z,{values:t})})]})}},9619:function(e){e.exports={actionItem:"ActionItem_actionItem__bkq0U"}},5661:function(e){e.exports={categories:"Categories_categories___FRFg"}},7933:function(e){e.exports={categoryItem:"CategoryItem_categoryItem__ZGL0D"}},7130:function(e){e.exports={mainHeader:"Header_mainHeader__VLamk",mainHeaderX:"Header_mainHeaderX__bJMVY",mainLogoImg:"Header_mainLogoImg__eX6Vr",mainHeaderM:"Header_mainHeaderM__OlGKU",mainHeaderS:"Header_mainHeaderS__9KEas",textHeader:"Header_textHeader__pVvpY",blogName:"Header_blogName__4JblC"}},7854:function(e){e.exports={noteListItem:"NoteListItem_noteListItem__tQkCb",noteHeader:"NoteListItem_noteHeader__evAU1",noteBody:"NoteListItem_noteBody__vI_W7",noteFooter:"NoteListItem_noteFooter__JFQze"}},2201:function(e){e.exports={notesList:"NotesList_notesList__M2ovs"}},6247:function(e){e.exports={container:"SectionCategories_container__7rVNF",sectionCategories:"SectionCategories_sectionCategories__unm9i",menuButton:"SectionCategories_menuButton__VY6IX"}}},function(e){e.O(0,[211,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);