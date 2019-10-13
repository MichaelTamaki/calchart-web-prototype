(function(e){function t(t){for(var o,i,c=t[0],a=t[1],u=t[2],d=0,h=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);l&&l(t);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=a;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0c5f":function(e,t,n){},"16e2":function(e,t,n){"use strict";var o=n("0c5f"),r=n.n(o);r.a},"1c6e":function(e,t,n){"use strict";var o=n("c20d"),r=n.n(o);r.a},"1fe1":function(e,t,n){"use strict";var o=n("d532"),r=n.n(o);r.a},"58ee":function(e,t,n){"use strict";var o=n("c9ca"),r=n.n(o);r.a},"5c0b":function(e,t,n){"use strict";var o=n("e332"),r=n.n(o);r.a},6671:function(e,t,n){"use strict";var o=n("ebe1"),r=n.n(o);r.a},c20d:function(e,t,n){},c9ca:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h2",[e._v(e._s(e.showTitle))]),n("ControlMenu"),n("h2",[e._v("Grapher")]),n("p",[e._v("Click a dot to select it.")]),n("p",[e._v("Black dots reprsent a marcher at the current beat.")]),n("p",[e._v("Red dots represent the next stuntsheet's position.")]),n("div",{staticClass:"grapher-container",style:{fontSize:e.zoomLevel+"%"}},[n("Grapher")],1),n("div",{staticClass:"bottom-menu-container"},[n("BottomMenu")],1)],1)},s=[],i=n("d225"),c=n("b0b4"),a=n("308d"),u=n("6bb5"),l=n("4e2b"),d=n("9ab4"),h=n("60a3"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"control-menu"}},[n("SSEditor"),n("h2",[e._v("Control Menu")]),n("div",[n("label",{attrs:{for:"zoom-level"}},[e._v("Zoom Level")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.zoomLevel,expression:"zoomLevel",modifiers:{number:!0}}],attrs:{id:"zoom-level",type:"number",min:"1"},domProps:{value:e.zoomLevel},on:{input:function(t){t.target.composing||(e.zoomLevel=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("div",[n("label",{attrs:{for:"beat-selector"}},[e._v("Beat:")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.selectedBeat,expression:"selectedBeat",modifiers:{number:!0}}],attrs:{id:"beat-selector",type:"number",min:"0",max:e.selectedSSBeats-1},domProps:{value:e.selectedBeat},on:{input:function(t){t.target.composing||(e.selectedBeat=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("span",[e._v("of "+e._s(e.selectedSSBeats))])])],1)},p=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Stuntsheet Editor")]),n("table",[e._m(0),n("tbody",[e._l(e.stuntSheets,(function(t,o){return n("tr",{key:o,class:{selected:o===e.selectedSSIndex}},[n("td",[e._v(e._s(o))]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.beats,expression:"stuntsheet.beats",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.beats},on:{input:function(n){n.target.composing||e.$set(t,"beats",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("td",[n("button",{on:{click:function(t){return e.selectSS(o)}}},[e._v("Select")])]),n("td",[n("button",{on:{click:function(t){return e.removeSS(o)}}},[e._v("Remove")])])])})),n("tr",[n("td",{attrs:{colspan:"2"}},[n("label",{attrs:{for:"new-ss-beats"}},[e._v("New Beats:")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.beats,expression:"beats",modifiers:{number:!0}}],attrs:{id:"new-ss-beats",type:"number"},domProps:{value:e.beats},on:{input:function(t){t.target.composing||(e.beats=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("td",{attrs:{colspan:"2"}},[n("button",{on:{click:e.addSS}},[e._v("Add Stuntsheet")])])])],2)])])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Index")]),n("th",[e._v("Beats")]),n("th",[e._v("Select")]),n("th",[e._v("Remove")])])])}],b=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(a["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.beats=32,e}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"selectSS",value:function(e){this.$store.commit("setSelectedSSIndex",e)}},{key:"removeSS",value:function(e){alert("Not implemented")}},{key:"addSS",value:function(){this.$store.state.show.addNewStuntsheet(this.beats)}},{key:"stuntSheets",get:function(){return this.$store.state.show.stuntSheets}},{key:"selectedSSIndex",get:function(){return this.$store.state.selectedSSIndex}}]),t}(h["c"]);b=Object(d["a"])([h["a"]],b);var S=b,g=S,y=(n("6671"),n("2877")),_=Object(y["a"])(g,v,m,!1,null,"6f809c0a",null),w=_.exports,O=function(e){function t(){return Object(i["a"])(this,t),Object(a["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"zoomLevel",get:function(){return this.$store.state.zoomLevel},set:function(e){this.$store.commit("setZoomLevel",e)}},{key:"selectedBeat",get:function(){return this.$store.state.selectedBeat},set:function(e){this.$store.commit("setSelectedBeat",e)}},{key:"selectedSSBeats",get:function(){return this.$store.getters.getSelectedSS.beats}}]),t}(h["c"]);O=Object(d["a"])([Object(h["a"])({components:{SSEditor:w}})],O);var j=O,x=j,$=Object(y["a"])(x,f,p,!1,null,"b8ef706e",null),T=$.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"grapher"}},[e._l(e.toDots,(function(e,t){return n("GrapherDot",{key:-t-1,attrs:{dot:e,index:t,isTo:""}})})),e._l(e.fromDots,(function(e,t){return n("GrapherDot",{key:t,attrs:{dot:e,index:t}})}))],2)},D=[],E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"dot-wrapper",class:{selected:e.isSelected(),"is-to":e.isTo},style:{top:e.coord[1]+"em",left:e.coord[0]+"em"},on:{click:e.selectDot}},[n("span",{staticClass:"dot-label"},[e._v(e._s(e.index))]),n("span",{staticClass:"dot-circle"})])},N=[],I=(n("c5f6"),n("6762"),n("2fdb"),function e(t,n){if(Object(i["a"])(this,e),this.dotType=0,this.hasNextDot=!1,void 0===t)this.coord=void 0!==n?n:[0,0],this.flow=[this.coord];else{var o=t.flow;this.coord=o[o.length-1].slice(),this.flow=[this.coord],t.hasNextDot=!0}}),P=I,B=function(e){function t(){return Object(i["a"])(this,t),Object(a["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"selectDot",value:function(){this.$store.commit("setSelectedDotsIndex",[this.index])}},{key:"isSelected",value:function(){return this.$store.state.selectedDotsIndex.includes(this.index)}},{key:"coord",get:function(){var e=this.$store.state.selectedBeat;return e>=0&&e<this.dot.flow.length?this.dot.flow[e]:this.dot.flow[this.dot.flow.length-1]}}]),t}(h["c"]);Object(d["a"])([Object(h["b"])(P)],B.prototype,"dot",void 0),Object(d["a"])([Object(h["b"])(Boolean)],B.prototype,"isTo",void 0),Object(d["a"])([Object(h["b"])(Number)],B.prototype,"index",void 0),B=Object(d["a"])([h["a"]],B);var H=B,F=H,M=(n("1fe1"),Object(y["a"])(F,E,N,!1,null,"b8f7e448",null)),L=M.exports,z=function(e){function t(){return Object(i["a"])(this,t),Object(a["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"fromDots",get:function(){return this.$store.getters.getSelectedSSDots}},{key:"toDots",get:function(){return this.$store.getters.getSelectedSSNextDots}}]),t}(h["c"]);z=Object(d["a"])([Object(h["a"])({components:{GrapherDot:L}})],z);var C,U,W=z,G=W,R=(n("16e2"),Object(y["a"])(G,k,D,!1,null,"a54a7b6a",null)),A=R.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"bottom-menu"}},[n("DotEditor"),n("DotTypeEditor")],1)},J=[],X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("h2",[e._v("Selected Dot Editor")]),n("p",[e._v("Selected dots in the Grapher show up here.")]),n("table",[e._m(0),n("tbody",e._l(e.dotsPairs,(function(t,o){return n("tr",{key:o},[n("td",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t[0].coord[0],expression:"dotPair[0].coord[0]",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t[0].coord[0]},on:{change:function(t){return e.generateFlowHelper(o)},input:function(n){n.target.composing||e.$set(t[0].coord,0,e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}}),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t[0].coord[1],expression:"dotPair[0].coord[1]",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t[0].coord[1]},on:{change:function(t){return e.generateFlowHelper(o)},input:function(n){n.target.composing||e.$set(t[0].coord,1,e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("td",[t[1]?n("input",{directives:[{name:"model",rawName:"v-model.number",value:t[1].coord[0],expression:"dotPair[1].coord[0]",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t[1].coord[0]},on:{change:function(t){return e.generateFlowHelper(o)},input:function(n){n.target.composing||e.$set(t[1].coord,0,e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}}):e._e(),t[1]?n("input",{directives:[{name:"model",rawName:"v-model.number",value:t[1].coord[1],expression:"dotPair[1].coord[1]",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t[1].coord[1]},on:{change:function(t){return e.generateFlowHelper(o)},input:function(n){n.target.composing||e.$set(t[1].coord,1,e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}}):e._e()]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t[0].dotType,expression:"dotPair[0].dotType",modifiers:{number:!0}}],attrs:{type:"number",min:"0",max:e.dotTypesLength-1},domProps:{value:t[0].dotType},on:{change:function(t){return e.generateFlowHelper(o)},input:function(n){n.target.composing||e.$set(t[0],"dotType",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("td",[e._v(e._s(t[0].flow))])])})),0)])])])},Y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("From X/Y")]),n("th",[e._v("To X/Y")]),n("th",[e._v("Dot Type")]),n("th",[e._v("Flow")])])])}];n("6d67"),n("57e7"),n("ac6a"),n("f3e2"),n("6b54"),n("87b3");(function(e){e["MTHS"]="MTHS",e["FMHS"]="FMHS"})(C||(C={})),function(e){e["EWNS"]="EW/NS",e["NSEW"]="NS/EW",e["E"]="E",e["W"]="W",e["N"]="N",e["S"]="S"}(U||(U={}));var q=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C.MTHS,n=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;Object(i["a"])(this,e),this.marchType=t,this.direction=void 0===n?this.marchType===C.MTHS?U.E:U.EWNS:n,this.beats=void 0===o?null:o}return Object(c["a"])(e,[{key:"toString",value:function(){var e=C[this.marchType];return null!==this.beats&&0!==this.beats&&(e+=" "+this.beats.toString()),e+=" "+this.direction,null!==this.beats&&0!==this.beats||this.marchType!==C.MTHS||(e="["+e+"]"),e}}]),e}(),K=function(e,t){var n=e[e.length-1][0],o=e[e.length-1][1],r=t[1],s=o<r?1:-1;while(o!==r)o+=s,e.push([n,o])},Q=function(e,t){var n=e[e.length-1][0],o=e[e.length-1][1],r=t[0],s=n<r?1:-1;while(n!==r)n+=s,e.push([n,o])},V=function(e,t,n){var o=e.stuntSheets[t],r=e.stuntSheets[t+1];n.forEach((function(e){if(e.hasNextDot){var t=o.dots.indexOf(e),n=r.dots[t],s=o.dotTypes[e.dotType],i=[e.coord];s.forEach((function(e,t){if(i[i.length-1]!==n.coord)if(e.marchType===C.MTHS){if(null===e.beats)return;for(var o=0===t?1:0;o<e.beats;o++)i.push(i[i.length-1])}else e.marchType===C.FMHS&&(e.direction===U.EWNS?(K(i,n.coord),Q(i,n.coord)):e.direction===U.NSEW&&(Q(i,n.coord),K(i,n.coord)))})),e.flow=i}}))},ee=V,te=function(e){function t(){return Object(i["a"])(this,t),Object(a["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"generateFlowHelper",value:function(e){ee(this.$store.state.show,this.$store.state.selectedSSIndex,[this.$store.getters.getSelectedFromDots[e]])}},{key:"dotsPairs",get:function(){var e=this.$store.getters.getSelectedFromDots,t=this.$store.getters.getSelectedToDots;return e.map((function(e,n){return[e,t.length>n?t[n]:null]}))}},{key:"dotTypesLength",get:function(){return this.$store.getters.getSelectedSS.dotTypes.length}}]),t}(h["c"]);te=Object(d["a"])([h["a"]],te);var ne=te,oe=ne,re=(n("58ee"),Object(y["a"])(oe,X,Y,!1,null,"79b62456",null)),se=re.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Dot Type Editor")]),n("p",[e._v('After configuring continuities, click "Generate Flows."')]),e._l(e.dotTypes,(function(t,o){return n("div",{key:o},[n("h3",[e._v("Dot Type: "+e._s(o))]),n("button",{on:{click:function(t){return e.removeDotType(o)}}},[e._v("Remove Dot Type")]),n("table",[e._m(0,!0),n("tbody",[e._l(t,(function(t,r){return n("tr",{key:r},[n("td",[e._v(e._s(t.toString()))]),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.marchType,expression:"continuity.marchType"}],on:{change:[function(n){var o=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"marchType",n.target.multiple?o:o[0])},function(t){return e.generateFlowHelper(o)}]}},e._l(e.marchTypes,(function(t,o){return n("option",{key:o},[e._v("\n                "+e._s(t)+"\n              ")])})),0)]),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.direction,expression:"continuity.direction"}],on:{change:[function(n){var o=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(t,"direction",n.target.multiple?o:o[0])},function(t){return e.generateFlowHelper(o)}]}},e._l(e.directions,(function(t,o){return n("option",{key:o},[e._v("\n                "+e._s(t)+"\n              ")])})),0)]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.beats,expression:"continuity.beats",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.beats},on:{input:function(n){n.target.composing||e.$set(t,"beats",e._n(n.target.value))},blur:function(t){return e.$forceUpdate()}}})]),n("td",[n("button",{on:{click:function(t){return e.removeContinuity(o,r)}}},[e._v("\n              Remove\n            ")])])])})),n("tr",[n("td",{attrs:{colspan:"4"}},[n("button",{on:{click:function(t){return e.addContinuity(o)}}},[e._v("Add Continuity")])])])],2)])])})),n("button",{on:{click:e.addDotType}},[e._v("Add Dot Type")])],2)},ce=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",[e._v("Human Readable")]),n("th",[e._v("March Type")]),n("th",[e._v("Direction")]),n("th",[e._v("Beats")]),n("th",[e._v("Remove")])])])}],ae=(n("d25f"),function(e){function t(){return Object(i["a"])(this,t),Object(a["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"generateFlowHelper",value:function(e){var t=this.$store.getters.getSelectedSS.dots.filter((function(t){return e===t.dotType}));ee(this.$store.state.show,this.$store.state.selectedSSIndex,t)}},{key:"addContinuity",value:function(e){this.$store.getters.getSelectedSS.dotTypes[e].push(new q(void 0,void 0,void 0)),this.generateFlowHelper(e)}},{key:"removeContinuity",value:function(e,t){this.$store.getters.getSelectedSS.dotTypes[e].splice(t,1),this.generateFlowHelper(e)}},{key:"addDotType",value:function(){this.$store.getters.getSelectedSS.dotTypes.push([new q(void 0,void 0,void 0)])}},{key:"removeDotType",value:function(e){this.$store.getters.getSelectedSS.dotTypes.splice(e,1)}},{key:"dotTypes",get:function(){return this.$store.getters.getSelectedSS.dotTypes}},{key:"marchTypes",get:function(){return C}},{key:"directions",get:function(){return U}}]),t}(h["c"]));ae=Object(d["a"])([h["a"]],ae);var ue=ae,le=ue,de=(n("1c6e"),Object(y["a"])(le,ie,ce,!1,null,"eeb42610",null)),he=de.exports,fe=function(e){function t(){return Object(i["a"])(this,t),Object(a["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),t}(h["c"]);fe=Object(d["a"])([Object(h["a"])({components:{DotEditor:se,DotTypeEditor:he}})],fe);var pe=fe,ve=pe,me=Object(y["a"])(ve,Z,J,!1,null,"29faa80a",null),be=me.exports,Se=function(e){function t(){return Object(i["a"])(this,t),Object(a["a"])(this,Object(u["a"])(t).apply(this,arguments))}return Object(l["a"])(t,e),Object(c["a"])(t,[{key:"showTitle",get:function(){return this.$store.state.show.title}},{key:"zoomLevel",get:function(){return this.$store.state.zoomLevel}}]),t}(h["c"]);Se=Object(d["a"])([Object(h["a"])({components:{ControlMenu:T,Grapher:A,BottomMenu:be}})],Se);var ge=Se,ye=ge,_e=(n("5c0b"),Object(y["a"])(ye,r,s,!1,null,null,null)),we=_e.exports,Oe=n("2f62"),je=function e(t,n,o){if(Object(i["a"])(this,e),this.beats=void 0!==t?t:32,this.dotTypes=[[new q(void 0,void 0,void 0)]],this.dots=[],void 0!==n){var r=0,s=0;while(this.dots.push(new P(void 0,[r,s]))<n)r+=2}else if(void 0!==o){var c=[];o.dots.forEach((function(e){c.push(new P(e,void 0))})),this.dots=c}},xe=je,$e=function(){function e(t,n,o){Object(i["a"])(this,e),this.title=t,this.stuntSheets=[new xe(void 0,n,void 0)],this.dotLabels=o}return Object(c["a"])(e,[{key:"addNewStuntsheet",value:function(e){this.stuntSheets.push(new xe(e,void 0,this.stuntSheets[this.stuntSheets.length-1]))}},{key:"unsetNextDots",value:function(e){this.stuntSheets[e].dots.forEach((function(e,t){e.hasNextDot&&(e.flow=[e.coord],e.hasNextDot=!1)}))}}]),e}(),Te=function(e){var t=1,n=[];while(n.push((t++).toString())<e);return n},ke=[Te(400)];o["a"].use(Oe["a"]);var De=new $e("Example Show",10,ke[0]),Ee=new Oe["a"].Store({state:{selectedDotsIndex:[0],selectedSSIndex:0,selectedBeat:0,show:De,zoomLevel:100},mutations:{setSelectedDotsIndex:function(e,t){e.selectedDotsIndex=t},setSelectedSSIndex:function(e,t){e.selectedSSIndex=t,e.selectedDotsIndex=[],e.selectedBeat=0},setZoomLevel:function(e,t){e.zoomLevel=t},setSelectedBeat:function(e,t){e.selectedBeat=t}},actions:{},getters:{getSelectedFromDots:function(e){return e.show.stuntSheets[e.selectedSSIndex].dots.filter((function(t,n){return e.selectedDotsIndex.includes(n)}))},getSelectedToDots:function(e){return console.log(e.selectedSSIndex+1),console.log(e.show.stuntSheets.length),e.show.stuntSheets.length<=e.selectedSSIndex+1?[]:e.show.stuntSheets[e.selectedSSIndex+1].dots.filter((function(t,n){return e.selectedDotsIndex.includes(n)}))},getSelectedSS:function(e){return e.show.stuntSheets[e.selectedSSIndex]},getSelectedSSDots:function(e){return e.show.stuntSheets[e.selectedSSIndex].dots},getSelectedSSNextDots:function(e){return e.show.stuntSheets.length<=e.selectedSSIndex+1?[]:e.show.stuntSheets[e.selectedSSIndex+1].dots.map((function(t,n){return e.show.stuntSheets[e.selectedSSIndex].dots[n].hasNextDot?t:null}))}}});o["a"].config.productionTip=!1,new o["a"]({store:Ee,render:function(e){return e(we)}}).$mount("#app")},d532:function(e,t,n){},e332:function(e,t,n){},ebe1:function(e,t,n){}});
//# sourceMappingURL=app.cc4302aa.js.map