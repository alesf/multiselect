var VueformMultiselect=function(e){"use strict";function t(e){return-1!==[null,void 0,!1].indexOf(e)}function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function r(e){return String(e).toLowerCase().trim()}function o(l,u,o){var i=e.toRefs(l),c=i.options,s=i.mode,d=i.trackBy,v=i.limit,p=i.hideSelected,f=i.createTag,h=i.label,m=i.appendNewTag,y=i.multipleLabel,g=i.object,b=i.loading,k=i.delay,_=i.resolveOnLoad,w=i.minChars,S=i.filterResults,O=i.clearOnSearch,x=i.clearOnSelect,P=i.valueProp,C=i.canDeselect,D=i.max,q=o.iv,T=o.ev,B=o.search,A=o.blurSearch,E=o.clearSearch,R=o.update,I=o.blurInput,j=o.pointer,V=e.ref([]),N=e.ref([]),H=e.ref(!1),U=e.computed((function(){var e,t=N.value||[];return e=t,"[object Object]"===Object.prototype.toString.call(e)&&(t=Object.keys(t).map((function(e){var n,l=t[e];return a(n={},P.value,e),a(n,d.value,l),a(n,h.value,l),n}))),t=t.map((function(e,t){var l;return"object"===n(e)?e:(a(l={},P.value,e),a(l,d.value,e),a(l,h.value,e),l)})),V.value.length&&(t=t.concat(V.value)),t})),M=e.computed((function(){var e=U.value;return X.value.length&&(e=X.value.concat(e)),B.value&&S.value&&(e=e.filter((function(e){return-1!==r(e[d.value]).indexOf(r(B.value))}))),p.value&&(e=e.filter((function(e){return!ue(e)}))),v.value>0&&(e=e.slice(0,v.value)),e})),$=e.computed((function(){switch(s.value){case"single":return!t(q.value[P.value]);case"multiple":case"tags":return!t(q.value)&&q.value.length>0}})),L=e.computed((function(){return void 0!==y&&void 0!==y.value?y.value(q.value):q.value&&q.value.length>1?"".concat(q.value.length," options selected"):"1 option selected"})),F=e.computed((function(){return!U.value.length&&!H.value})),W=e.computed((function(){return U.value.length>0&&0==M.value.length})),X=e.computed((function(){var e;return!1!==f.value&&B.value?-1!==le(B.value)?[]:[(e={},a(e,P.value,B.value),a(e,h.value,B.value),a(e,d.value,B.value),e)]:[]})),z=e.computed((function(){switch(s.value){case"single":return null;case"multiple":case"tags":return[]}})),G=e.computed((function(){return b.value||H.value})),J=function(e){switch("object"!==n(e)&&(e=ae(e)),s.value){case"single":R(e);break;case"multiple":case"tags":R(q.value.concat(e))}u.emit("select",Q(e),e)},K=function(e){switch("object"!==n(e)&&(e=ae(e)),s.value){case"single":Z();break;case"tags":case"multiple":R(q.value.filter((function(t){return t[P.value]!=e[P.value]})))}u.emit("deselect",Q(e),e)},Q=function(e){return g.value?e:e[P.value]},Y=function(e){K(e)},Z=function(){u.emit("clear"),R(z.value)},ee=function(e){switch(s.value){case"single":return!t(q.value)&&q.value[P.value]==e[P.value];case"tags":case"multiple":return!t(q.value)&&-1!==q.value.map((function(e){return e[P.value]})).indexOf(e[P.value])}},te=function(e){return!0===e.disabled},ne=function(){return!(void 0===D||-1===D.value||!$.value&&D.value>0)&&q.value.length>=D.value},ae=function(e){return U.value[U.value.map((function(e){return String(e[P.value])})).indexOf(String(e))]},le=function(e){return U.value.map((function(e){return r(e[d.value])})).indexOf(r(e))},ue=function(e){return"tags"===s.value&&p.value&&ee(e)},re=function(e){V.value.push(e)},oe=function(){t(T.value)||(q.value=ce(T.value))},ie=function(e){H.value=!0,c.value(B.value).then((function(t){N.value=t,"function"==typeof e&&e(t),H.value=!1}))},ce=function(e){return t(e)?"single"===s.value?{}:[]:g.value?e:"single"===s.value?ae(e)||{}:e.filter((function(e){return!!ae(e)})).map((function(e){return ae(e)}))};if("single"!==s.value&&!t(T.value)&&!Array.isArray(T.value))throw new Error('v-model must be an array when using "'.concat(s.value,'" mode'));return c&&"function"==typeof c.value?_.value?ie(oe):1==g.value&&oe():(N.value=c.value,oe()),k.value>-1&&e.watch(B,(function(e){e.length<w.value||(H.value=!0,O.value&&(N.value=[]),setTimeout((function(){e==B.value&&c.value(B.value).then((function(t){e==B.value&&(N.value=t,j.value=M.value.filter((function(e){return!0!==e.disabled}))[0]||null,H.value=!1)}))}),k.value))}),{flush:"sync"}),e.watch(T,(function(e){var n,a,l;if(t(e))q.value=ce(e);else switch(s.value){case"single":(g.value?e[P.value]!=q.value[P.value]:e!=q.value[P.value])&&(q.value=ce(e));break;case"multiple":case"tags":n=g.value?e.map((function(e){return e[P.value]})):e,a=q.value.map((function(e){return e[P.value]})),l=a.slice().sort(),n.length===a.length&&n.slice().sort().every((function(e,t){return e===l[t]}))||(q.value=ce(e))}}),{deep:!0}),"function"!=typeof l.options&&e.watch(c,(function(e,t){N.value=l.options,Object.keys(q.value).length||oe(),function(){if($.value)if("single"===s.value){var e=ae(q.value[P.value])[h.value];q.value[h.value]=e,g.value&&(T.value[h.value]=e)}else q.value.forEach((function(e,t){var n=ae(q.value[t][P.value])[h.value];q.value[t][h.value]=n,g.value&&(T.value[t][h.value]=n)}))}()})),{fo:M,filteredOptions:M,hasSelected:$,multipleLabelText:L,eo:U,extendedOptions:U,noOptions:F,noResults:W,resolving:H,busy:G,select:J,deselect:K,remove:Y,clear:Z,isSelected:ee,isDisabled:te,isMax:ne,getOption:ae,handleOptionClick:function(e){if(!te(e))switch(s.value){case"single":if(ee(e))return void(C.value&&K(e));J(e),A(),I();break;case"multiple":if(ee(e))return void K(e);if(ne())return;J(e),x.value&&E();break;case"tags":if(ee(e))return void K(e);if(ne())return;void 0===ae(e[P.value])&&f.value&&(u.emit("tag",e[P.value]),m.value&&re(e),E()),x.value&&E(),J(e)}},handleTagRemove:function(e,t){0===t.button?Y(e):t.preventDefault()},refreshOptions:function(e){ie(e)},resolveOptions:ie}}function i(e,t,n,a,l,u,r,o,i,c){"boolean"!=typeof r&&(i=o,o=r,r=!1);var s,d="function"==typeof n?n.options:n;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,l&&(d.functional=!0)),a&&(d._scopeId=a),u?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,i(e)),e&&e._registeredComponents&&e._registeredComponents.add(u)},d._ssrRegister=s):t&&(s=r?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,o(e))}),s)if(d.functional){var v=d.render;d.render=function(e,t){return s.call(t),v(e,t)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,s):[s]}return n}const c={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change","clear"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1,default:"multiselect"},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},maxHeight:{type:Number,required:!1,default:160},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},addTagOn:{type:Array,required:!1,default:()=>["enter"]},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1}},setup(n,a){const u=function(t,n){var a=e.toRefs(t),l=a.value,u=a.modelValue,r=a.mode,o=a.valueProp,i=e.ref("single"!==r.value?[]:{}),c=void 0!==n.expose?u:l,s=e.computed((function(){return"single"===r.value?i.value[o.value]:i.value.map((function(e){return e[o.value]}))})),d=e.computed((function(){return"single"!==r.value?i.value.map((function(e){return e[o.value]})).join(","):i.value[o.value]}));return{iv:i,internalValue:i,ev:c,externalValue:c,textValue:d,plainValue:s}}(n,a),r=function(t,n,a){var l=e.toRefs(t),u=l.searchable,r=(l.id,e.ref(null)),o=e.computed((function(){return u.value?-1:0}));return{multiselect:r,tabindex:o,focusInput:function(){r.value.querySelector(".multiselect-input").focus()},blurInput:function(){r.value.querySelector(".multiselect-input").blur()}}}(n),i={pointer:e.ref(null)},c=function(n,a,l){var u=e.toRefs(n),r=u.object,o=u.valueProp,i=u.mode,c=l.iv,s=function(e){return r.value||t(e)?e:Array.isArray(e)?e.map((function(e){return e[o.value]})):e[o.value]},d=function(e){return t(e)?"single"===i.value?{}:[]:e};return{update:function(e){c.value=d(e);var t=s(e);a.emit("change",t),a.emit("input",t),a.emit("update:modelValue",t)}}}(n,a,{iv:u.iv}),s=function(t,n,a){var l=e.toRefs(t),u=l.searchable,r=l.mode,o=a.iv,i=e.ref(null),c=e.ref(null),s=e.computed((function(){return i.value?"".concat(i.value.length,"ch"):"tags"===r.value&&-1===[null,void 0].indexOf(o.value)&&o.value.length?"1ch":"100%"}));return e.watch(i,(function(e){n.emit("search-change",e)})),{search:i,input:c,tagsSearchWidth:s,clearSearch:function(){i.value=""},focusSearch:function(){c.value.focus()},blurSearch:function(){u.value&&c.value.blur()}}}(n,a,{iv:u.iv}),d=o(n,a,{ev:u.ev,iv:u.iv,search:s.search,blurSearch:s.blurSearch,clearSearch:s.clearSearch,update:c.update,blurInput:r.blurInput,pointer:i.pointer}),v=function(t,n,a){var l=e.toRefs(t),u=l.id,r=l.valueProp,o=a.fo,i=a.handleOptionClick,c=a.search,s=a.pointer,d=e.computed((function(){return o.value.filter((function(e){return!0!==e.disabled}))})),v=function(e){s.value=e},p=function(){s.value=d.value[0]||null},f=function(){s.value=null},h=function(){var e=document.getElementById(u.value).querySelector(".is-pointed");if(e){var t=e.parentElement;e.offsetTop+e.offsetHeight>t.clientHeight+t.scrollTop&&(t.scrollTop=e.offsetTop+e.offsetHeight-t.clientHeight),e.offsetTop<t.scrollTop&&(t.scrollTop=e.offsetTop)}};return e.watch(c,(function(e){p()})),{pointer:s,isPointed:function(e){return!!s.value&&s.value[r.value]==e[r.value]},setPointer:v,setPointerFirst:p,clearPointer:f,selectPointer:function(){s.value&&!0!==s.value.disabled?(i(s.value),f()):f()},forwardPointer:function(){if(null===s.value)v(d.value[0]||null);else{var t=d.value.map((function(e){return e[r.value]})).indexOf(s.value[r.value])+1;d.value.length<=t&&(t=0),v(d.value[t]||null)}e.nextTick((function(){h()}))},backwardPointer:function(){if(null===s.value)v(d.value[d.value.length-1]||null);else{var t=d.value.map((function(e){return e[r.value]})).indexOf(s.value[r.value])-1;t<0&&(t=d.value.length-1),v(d.value[t]||null)}e.nextTick((function(){h()}))}}}(n,0,{fo:d.fo,handleOptionClick:d.handleOptionClick,search:s.search,pointer:i.pointer}),p=function(t,n,a){var l=e.toRefs(t),u=l.maxHeight,r=l.disabled,o=l.searchable,i=l.createTag,c=a.multiselect,s=a.blurInput,d=a.blurSearch,v=a.focusInput,p=a.focusSearch,f=a.selectPointer,h=e.ref(!1),m=e.computed((function(){return"".concat(u.value,"px")}));return{isOpen:h,contentMaxHeight:m,openDropdown:function(){r.value||(h.value=!0,n.emit("open"))},closeDropdown:function(){h.value=!1,i.value&&f(),n.emit("close")},open:function(){o&&o.value?p():v()},close:function(){o&&o.value?d():s()},handleInputMousedown:function(e){h.value&&!o.value&&(c.value.querySelector(".multiselect-input").dispatchEvent(new Event("blur")),c.value.querySelector(".multiselect-input").blur(),e.preventDefault())}}}(n,a,{multiselect:r.multiselect,blurInput:r.blurInput,blurSearch:s.blurSearch,focusInput:r.focusInput,focusSearch:s.focusSearch,selectPointer:v.selectPointer}),f=function(t,n,a){var u=e.toRefs(t),r=u.mode,o=u.addTagOn,i=u.createTag,c=a.iv,s=a.update,d=a.closeDropdown,v=a.clearPointer,p=a.search,f=a.selectPointer;return{handleBackspace:function(e){"single"!==r.value&&s(l(c.value).slice(0,-1))},handleEsc:function(e){d(),v(),e.target.blur()},handleSearchBackspace:function(e){""!==p.value&&e.stopPropagation()},handleSearchInput:function(e){p.value=e.target.value},handleAddTag:function(t){13!==t.keyCode||-1===o.value.indexOf("enter")&&i.value?32===t.keyCode&&-1!==o.value.indexOf("space")&&i.value&&(p.value=p.value.trim(),e.nextTick((function(){f()}))):f(),186===t.keyCode&&-1!==o.value.indexOf("semi-colon")&&i.value&&(p.value=p.value.replaceAll(";",""),e.nextTick((function(){f()}))),188===t.keyCode&&-1!==o.value.indexOf("comma")&&i.value&&(p.value=p.value.replaceAll(",",""),e.nextTick((function(){f()})))}}}(n,0,{iv:u.iv,update:c.update,closeDropdown:p.closeDropdown,clearPointer:v.clearPointer,search:s.search,selectPointer:v.selectPointer});return{...u,...p,...r,...i,...c,...s,...d,...v,...f}}};var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"multiselect",staticClass:"multiselect",class:["is-"+e.mode,{"is-open":e.isOpen,"is-searchable":e.searchable,"is-disabled":e.disabled,"no-caret":!e.caret,"open-top":"top"===e.openDirection}],attrs:{id:e.id},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}}},[n("div",{staticClass:"multiselect-input",attrs:{tabindex:e.tabindex},on:{mousedown:e.handleInputMousedown,focus:e.openDropdown,blur:e.closeDropdown,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.handleEsc(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectPointer(t)}],keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:(t.preventDefault(),e.handleBackspace(t))},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"]))return null;t.preventDefault(),"top"===e.openDirection?e.forwardPointer():e.backwardPointer()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;t.preventDefault(),"top"===e.openDirection?e.backwardPointer():e.forwardPointer()}]}},["single"==e.mode&&e.hasSelected&&!e.search&&e.iv?[e._t("singlelabel",[n("div",{staticClass:"multiselect-single-label"},[e._v("\n          "+e._s(e.iv[e.label])+"\n        ")])],{value:e.iv})]:e._e(),e._v(" "),"multiple"==e.mode&&e.hasSelected&&!e.search?[e._t("multiplelabel",[n("div",{staticClass:"multiselect-multiple-label"},[e._v("\n          "+e._s(e.multipleLabelText)+"\n        ")])],{values:e.iv})]:e._e(),e._v(" "),"tags"!==e.mode&&e.searchable&&!e.disabled?[n("div",{staticClass:"multiselect-search"},[n("input",{ref:"input",attrs:{modelValue:e.search},domProps:{value:e.search},on:{focus:function(t){return t.stopPropagation(),e.openDropdown(t)},blur:function(t){return t.stopPropagation(),e.closeDropdown(t)},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:(t.stopPropagation(),e.handleEsc(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),e.selectPointer(t))}],keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.handleSearchBackspace(t)},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"]))return null;t.stopPropagation(),"top"===e.openDirection?e.forwardPointer():e.backwardPointer()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;t.stopPropagation(),"top"===e.openDirection?e.backwardPointer():e.forwardPointer()}],input:e.handleSearchInput}})])]:e._e(),e._v(" "),"tags"==e.mode?[n("div",{staticClass:"multiselect-tags"},[e._l(e.iv,(function(t,a,l){return n("span",{key:l},[e._t("tag",[n("div",{staticClass:"multiselect-tag"},[e._v("\n              "+e._s(t[e.label])+"\n              "),e.disabled?e._e():n("i",{on:{click:function(e){e.preventDefault()},mousedown:function(n){return n.preventDefault(),n.stopPropagation(),e.handleTagRemove(t,n)}}})])],{option:t,handleTagRemove:e.handleTagRemove,disabled:e.disabled})],2)})),e._v(" "),e.searchable&&!e.disabled?n("div",{staticClass:"multiselect-search",style:{width:e.tagsSearchWidth}},[n("input",{ref:"input",style:{width:e.tagsSearchWidth},attrs:{modelValue:e.search},domProps:{value:e.search},on:{focus:function(t){return t.stopPropagation(),e.openDropdown(t)},blur:function(t){return t.stopPropagation(),e.closeDropdown(t)},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:(t.stopPropagation(),e.handleEsc(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),e.handleAddTag(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:(t.stopPropagation(),e.handleAddTag(t))},e.handleAddTag],keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.handleSearchBackspace(t)},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"]))return null;t.stopPropagation(),"top"===e.openDirection?e.forwardPointer():e.backwardPointer()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;t.stopPropagation(),"top"===e.openDirection?e.backwardPointer():e.forwardPointer()}],input:e.handleSearchInput}})]):e._e()],2)]:e._e(),e._v(" "),!e.placeholder||e.hasSelected||e.search?e._e():[e._t("placeholder",[n("div",{staticClass:"multiselect-placeholder"},[e._v("\n          "+e._s(e.placeholder)+"\n        ")])])],e._v(" "),e.hasSelected||!e.caret||e.busy?e._e():e._t("caret",[n("span",{staticClass:"multiselect-caret"})]),e._v(" "),e.hasSelected&&!e.disabled&&!e.busy&&e.canDeselect?e._t("clear",[n("a",{staticClass:"multiselect-clear",on:{click:function(t){return t.preventDefault(),e.clear(t)}}})],{clear:e.clear}):e._e(),e._v(" "),n("transition",{attrs:{name:"multiselect-loading"}},[e.busy?n("span",[e._t("spinner",[n("span",{staticClass:"multiselect-spinner"})])],2):e._e()])],2),e._v(" "),e.resolving&&e.clearOnSearch?e._e():n("transition",{attrs:{name:"multiselect"},on:{"after-leave":e.clearSearch}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen&&e.showOptions,expression:"isOpen && showOptions"}],staticClass:"multiselect-options",style:{maxHeight:e.contentMaxHeight}},[e._t("beforelist"),e._v(" "),e._l(e.fo,(function(t,a,l){return n("span",{key:l,staticClass:"multiselect-option",class:{"is-pointed":e.isPointed(t),"is-selected":e.isSelected(t),"is-disabled":e.isDisabled(t)},attrs:{tabindex:-1},on:{mousedown:function(e){e.preventDefault()},mouseenter:function(n){return e.setPointer(t)},click:function(n){return n.stopPropagation(),n.preventDefault(),e.handleOptionClick(t)}}},[e._t("option",[n("span",[e._v(e._s(t[e.label]))])],{option:t,search:e.search})],2)})),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.noOptions,expression:"noOptions"}]},[e._t("nooptions",[n("div",{staticClass:"multiselect-no-options"},[e._v(e._s(e.noOptionsText))])])],2),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.noResults,expression:"noResults"}]},[e._t("noresults",[n("div",{staticClass:"multiselect-no-results"},[e._v(e._s(e.noResultsText))])])],2),e._v(" "),e._t("afterlist")],2)]),e._v(" "),e.required?n("input",{staticClass:"multiselect-fake-input",attrs:{tabindex:"-1",required:""},domProps:{value:e.textValue}}):e._e(),e._v(" "),e.nativeSupport?["single"==e.mode?n("input",{attrs:{type:"hidden",name:e.name},domProps:{value:void 0!==e.plainValue?e.plainValue:""}}):e._l(e.plainValue,(function(t,a){return n("input",{key:a,attrs:{type:"hidden",name:e.name+"[]"},domProps:{value:t}})}))]:e._e()],2)};s._withStripped=!0;return i({render:s,staticRenderFns:[]},undefined,c,undefined,false,undefined,!1,void 0,void 0,void 0)}(VueCompositionAPI);
