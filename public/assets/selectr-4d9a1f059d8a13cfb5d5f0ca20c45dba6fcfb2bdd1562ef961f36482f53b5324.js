!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?exports.selectr=t(require("jquery")):e.selectr=t(e.$)}(this,function(e){return function(e){function t(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return e[i].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){var i,n=function(e,t){return function(){return e.apply(t,arguments)}};i=r(5),r(4),function(e){var t;return t=function(){function t(t,r){this.source=t,this.args=r,this.updateFooter=n(this.updateFooter,this),this.deselectOption=n(this.deselectOption,this),this.selectOption=n(this.selectOption,this),this.triggerChange=n(this.triggerChange,this),this.args=e.extend({},this.defaults,this.args,this.source.data("selectr-opts")),this.multi=this.source.prop("multiple"),this.createSelectr(),this.monitorSource(),this.selectrContainer.insertAfter(this.source),this.selectrContainer=e(this.source.next()),this.bindEventListeners(),this.source.hide()}return t.prototype.defaults={title:"L\u1ef1a ch\u1ecdn m\u1eb7t h\xe0ng",noMatchingOptionsText:"Kh\xf4ng t\xecm th\u1ea5y m\u1eb7t h\xe0ng",placeholder:"T\xecm ki\u1ebfm",resetText:"X\xf3a h\u1ebft",width:"100%",maxListHeight:"250px",tooltipBreakpoint:25,maxSelection:1/0,panelStyle:"default",alwaysShowFooter:!1},t.prototype.createSelectr=function(){return this.selectrContainer=this.createContainer(),e(".list-group",this.selectrContainer).append(this.createOpts()),this.updateFooter()},t.prototype.createContainer=function(){return e(document.createElement("div")).addClass("selectr panel panel-"+this.args.panelStyle+" "+(this.multi?"multi":void 0)).css("width",this.args.width).html("<div class='panel-heading "+(""===this.args.title?"no-title":void 0)+"'> <h4 class='panel-title'> "+this.args.title+" </h4> </div> <div class='panel-body'> <input class='form-control' placeholder='"+this.args.placeholder+"'> <span class='clear-search hidden'>&times;</span> </div> <ul class='list-group' style='max-height: "+this.args.maxListHeight+"'> </ul> <div class='no-matching-options hidden'> <strong>"+this.args.noMatchingOptionsText+"</strong> </div> <div class='panel-footer "+(this.multi||this.args.alwaysShowFooter?void 0:"hidden")+"'> <button class='reset btn btn-sm btn-default' type='button'> "+this.args.resetText+" </button> "+(this.multi?"<span class='current-selection badge'></span>":"")+" </div>")},t.prototype.createOpts=function(){var t,r,i,n,s;for(n=e("option",this.source),s=[],t=0,r=n.length;r>t;t++)i=n[t],s.push(e(document.createElement("li")).addClass("list-group-item "+(e(i).is(":selected")?"selected":void 0)).data("val",e(i).val()).append(e(document.createElement("div")).addClass("color-code "+(e(i).data("selectr-color")?void 0:"no-color")).css("background-color",e(i).data("selectr-color"))).append(e(document.createElement("div")).text(e(i).text()).addClass("option-name").attr({title:e(i).text().length>this.args.tooltipBreakpoint?e(i).text():""})).append(e(document.createElement("div")).html("&times").addClass("add-remove "+(this.multi?void 0:"hidden"))));return s},t.prototype.monitorSource=function(){var t;return t=function(t){return function(){var r;return r=e(document.createElement("ul")).addClass("list-group").css("max-height",t.args.maxListHeight).append(t.createOpts()),e(".list-group",t.selectrContainer).replaceWith(r),t.updateFooter()}}(this),this.source.on("change",function(e,r){return"selectrInitiated"!==r?t():void 0})},t.prototype.bindEventListeners=function(){var t,r,i,n,s,o,a,l,c,d,p,h,u,g;return a=this.multi,p=this.selectrContainer,h=this.source,d=this.selectOption,s=this.deselectOption,u=this.triggerChange,g=this.updateFooter,o=function(t){var r,i;return t.stopPropagation(),2!==(null!=(i=t.originalEvent)?i.detail:void 0)?(r=(t.ctrlKey||t.metaKey)&&a,e(this).hasClass("selected")&&(r||0===e(this).siblings(".selected").length)&&a?s(this):d(r,this)):void 0},t=function(t){var r;return t.stopPropagation(),t.originalEvent.detail&&2===t.originalEvent.detail?void 0:(r=e(t.target).parents(".list-group-item"),r.hasClass("selected")?s(r):d(!0,r))},c=function(t){var r,i,n,s;return t.stopPropagation(),n=new RegExp(e(this).val().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),"i"),s=!0,e(".list-group-item",p).each(function(t,r){e(r).text().match(n)?(e(r).removeClass("hidden"),s=!1):e(r).addClass("hidden")}),r=e(".clear-search",p),e(this).val().length>0?r.removeClass("hidden"):r.addClass("hidden"),i=e(".no-matching-options",p),s?i.removeClass("hidden"):i.addClass("hidden")},r=function(){return e(this).siblings("input").val("").trigger("change")},l=function(){return p.find("ul > li").removeClass("selected"),e("option",h).prop("selected",!1),u(h),g()},i=function(t){return t.ctrlKey?e(".list-group",p).addClass("ctrl-key"):void 0},n=function(t){return t.ctrlKey?void 0:e(".list-group",p).removeClass("ctrl-key")},e(p).on("click",".list-group-item",o),e(p).on("click",".add-remove",t),e(p).on("click change keyup",".form-control",c),e(p).on("click",".clear-search",r),e(p).on("click",".reset",l),e(document).on("keydown",i),e(document).on("keyup",n)},t.prototype.triggerChange=function(){return this.source.trigger("change",["selectrInitiated"])},t.prototype.selectOption=function(t,r){var i,n,s,o;if(!(this.args.maxSelection<=e(r).siblings(".selected").length&&t)){if(!t)for(e("option",this.source).prop("selected",!1),s=e(r).siblings(),i=0,n=s.length;n>i;i++)o=s[i],e(o).removeClass("selected");return e(r).addClass("selected"),e("option[value='"+e(r).data("val")+"']",this.source).prop("selected",!0),this.updateFooter(),this.triggerChange()}},t.prototype.deselectOption=function(t){return this.selectrContainer.removeClass("max-selection-reached"),e(t).removeClass("selected"),e("option[value="+e(t).data("val")+"]",this.source).prop("selected",!1),this.updateFooter(),this.triggerChange()},t.prototype.updateFooter=function(){var t,r;return this.multi&&(r=e("option:selected",this.source).length,e(".current-selection",this.selectrContainer).text(r>0?r:""),r===this.args.maxSelection?this.selectrContainer.addClass("max-selection-reached"):this.selectrContainer.removeClass("max-selection-reached"),!this.args.alwaysShowFooter)?(t=e(".panel-footer",this.selectrContainer),0===r?t.addClass("hidden"):t.removeClass("hidden")):void 0},t}(),e.fn.extend({selectr:function(r){return this.each(function(){var i;return i=e(this),i.data("selectr-initialized")?void 0:(new t(i,r),i.data("selectr-initialized",!0))})}})}(i,this)},function(e){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];e.push(r[2]?"@media "+r[2]+"{"+r[1]+"}":r[1])}return e.join("")},e}},function(e,t,r){t=e.exports=r(1)(),t.push([e.id,'.selectr{margin:0;display:inline-block;max-width:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.selectr *:not(input){-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.selectr .panel-heading{cursor:default}.selectr .panel-heading.no-title{padding:0;border-bottom:none}.selectr .panel-body{position:relative}.selectr input::-ms-clear{display:none;width:0;height:0}.selectr .clear-search{position:absolute;right:25px;top:12px;font-size:28px;font-weight:700;color:#333;opacity:.8;cursor:pointer}.selectr .clear-search:hover{opacity:1}.selectr .list-group{overflow-x:hidden;-ms-overflow-y:auto}.selectr .list-group-item{padding:0!important;overflow:hidden;cursor:pointer}.selectr .list-group-item.selected{background-color:#4679bd;color:#fff;font-weight:700}.selectr .list-group-item.selected .add-remove{-webkit-transform:rotate(0);-ms-transform:rotate(0);transform:rotate(0)}.selectr.multi .list-group-item:hover .option-name{margin-right:50px;border-right:1px solid #ddd}.selectr.multi .list-group-item:hover .selected .option-name{border-right:1px solid #fff}.selectr.multi .list-group-item:hover .add-remove{display:block}.selectr .option-name{height:100%;padding:10px 15px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.selectr .color-code{width:20px;height:20px;margin:10px 0 10px 10px;float:left;border-radius:5px}.selectr .color-code.no-color{width:0;height:0;margin:0}.selectr .add-remove{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);-webkit-transition:-webkit-transform .2s linear;transition:transform .2s linear;opacity:.5;display:none;cursor:pointer;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-size:24px;font-weight:900;position:absolute;right:0;top:0;width:50px;padding:8px;line-height:24px;text-align:center;vertical-align:middle}.selectr .ctrl-key .add-remove,.selectr .add-remove:hover{opacity:.8}.selectr .current-selection{float:right;margin-top:5px;cursor:default}.selectr.max-selection-reached li:not(.selected) .option-name{margin-right:0!important;border-right:none!important}.selectr.max-selection-reached li:not(.selected) .add-remove{display:none!important}.selectr.max-selection-reached .current-selection{background-color:#d9534f}.selectr .no-matching-options{padding:0 10px 10px;text-align:center}',""])},function(e){function t(e,t){for(var r=0;r<e.length;r++){var i=e[r],s=l[i.id];if(s){s.refs++;for(var o=0;o<s.parts.length;o++)s.parts[o](i.parts[o]);for(;o<i.parts.length;o++)s.parts.push(n(i.parts[o],t))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(n(i.parts[o],t));l[i.id]={id:i.id,refs:1,parts:a}}}}function r(e){for(var t=[],r={},i=0;i<e.length;i++){var n=e[i],s=n[0],o=n[1],a=n[2],l=n[3],c={css:o,media:a,sourceMap:l};r[s]?r[s].parts.push(c):t.push(r[s]={id:s,parts:[c]})}return t}function i(){var e=document.createElement("style"),t=p();return e.type="text/css",t.appendChild(e),e}function n(e,t){var r,n,s;if(t.singleton){var l=u++;r=h||(h=i()),n=o.bind(null,r,l,!1),s=o.bind(null,r,l,!0)}else r=i(),n=a.bind(null,r),s=function(){r.parentNode.removeChild(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else s()}}function s(e,t,r){var i=["/** >>"+t+" **/","/** "+t+"<< **/"],n=e.lastIndexOf(i[0]),s=r?i[0]+r+i[1]:"";if(e.lastIndexOf(i[0])>=0){var o=e.lastIndexOf(i[1])+i[1].length;return e.slice(0,n)+s+e.slice(o)}return e+s}function o(e,t,r,i){var n=r?"":i.css;if(e.styleSheet)e.styleSheet.cssText=s(e.styleSheet.cssText,t,n);else{var o=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function a(e,t){var r=t.css,i=t.media,n=t.sourceMap;if(n&&"function"==typeof btoa)try{r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(n))+" */",r='@import url("data:text/css;base64,'+btoa(r)+'")'}catch(s){}if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var l={},c=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},d=c(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),p=c(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,u=0;e.exports=function(e,i){i=i||{},"undefined"==typeof i.singleton&&(i.singleton=d());var n=r(e);return t(n,i),function(e){for(var s=[],o=0;o<n.length;o++){var a=n[o],c=l[a.id];c.refs--,s.push(c)}if(e){var d=r(e);t(d,i)}for(var o=0;o<s.length;o++){var c=s[o];if(0===c.refs){for(var p=0;p<c.parts.length;p++)c.parts[p]();delete l[c.id]}}}}},function(e,t,r){var i=r(2);"string"==typeof i&&(i=[[e.id,i,""]]),r(3)(i,{})},function(t){t.exports=e}])});