(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/jin-attachment/jin-attachment"],{"0912":function(t,e,n){"use strict";n.r(e);var a=n("d93e"),i=n("11ec");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("75f8");var s=n("2877"),r=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"76fd7ba6",null);e["default"]=r.exports},"11ec":function(t,e,n){"use strict";n.r(e);var a=n("1a47"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"1a47":function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t,e,n,a,i,o,s){try{var r=t[o](s),u=r.value}catch(c){return void n(c)}r.done?e(u):Promise.resolve(u).then(a,i)}function r(t){return function(){var e=this,n=arguments;return new Promise(function(a,i){var o=t.apply(e,n);function r(t){s(o,a,i,r,u,"next",t)}function u(t){s(o,a,i,r,u,"throw",t)}r(void 0)})}}var u={props:{attachmentList:{type:Array},mode:{type:String},uploadFileUrl:{type:String,dafault:"#"},showProcess:{type:Boolean,default:!0},header:{type:Object},limit:{type:Number,default:null},fileKeyName:{type:String,default:"file"}},computed:{list:function(){return this.attachmentList}},data:function(){return{}},methods:{previewImg:function(e){t.previewImage({current:0,urls:[e]})},downLoad:function(e){t.showModal({title:"确定要下载此附件吗",content:" ",success:function(n){n.confirm&&(t.showLoading({title:"下载中,请稍后"}),console.log(a(e," at components\\jin-attachment\\jin-attachment.vue:87")),t.downloadFile({url:e,success:function(e){e.tempFilePath;t.saveFile({tempFilePath:e.tempFilePath,success:function(e){var n=e.savedFilePath;t.hideLoading(),t.showToast({title:"保存成功，路径为"+n}),t.openDocument({filePath:n,success:function(t){console.log(a(t," at components\\jin-attachment\\jin-attachment.vue:103"))}})}})},fail:function(e){console.log(a(e," at components\\jin-attachment\\jin-attachment.vue:110")),t.hideLoading(),t.showToast({title:"下载失败",icon:"none"})}}),setTimeout(function(){t.hideLoading()},2e4))}})},deleteItem:function(e){var n=this;t.showModal({title:"提示",content:"确定要删除此项吗？",success:function(t){t.confirm&&(100!=n.list[e].process&&"undefined"!=typeof n.list[e].uploadTask&&n.list[e].uploadTask.abort(),n.list.splice(e,1),n.$forceUpdate())}})},chooseFile:function(){var e=r(i.default.mark(function e(){var n,o,s,r,u,c,l,f=this;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(null==this.limit||isNaN(this.limit)){e.next=4;break}if(!(this.list.length>=this.limit)){e.next=4;break}return t.showToast({title:"已达到最大上传数量",icon:"none"}),e.abrupt("return");case 4:return n=t.requireNativePlugin("chuck-filemanager"),e.next=7,n.onIntent();case 7:o=e.sent,console.log(a(o," at components\\jin-attachment\\jin-attachment.vue:159")),s=[o],r=i.default.mark(function e(n){var a,o;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=s[n],c=a.split("/"),c=c[c.length-1],o=f.list.length,f.list.push({name:c,url:a,type:f.isImg(a)?"image":"file",index:o,uploadTask:l,process:0}),f.$forceUpdate(),e.next=8,t.uploadFile({url:f.uploadFileUrl,filePath:a,name:f.fileKeyName,headers:f.header,success:function(e){var n=JSON.parse(e.data);200==n.code?(f.$set(f.list[o],"process",100),f.$emit("update:attachmentList",f.list),f.$forceUpdate()):t.showToast({title:"上传失败",icon:"none"})}});case 8:l=e.sent,l.onProgressUpdate(function(t){t.progress<90&&(f.$set(f.list[o],"process",t.progress),f.$forceUpdate())});case 10:case"end":return e.stop()}},e,this)}),e.t0=i.default.keys(s);case 12:if((e.t1=e.t0()).done){e.next=17;break}return u=e.t1.value,e.delegateYield(r(u),"t2",15);case 15:e.next=12;break;case 17:case"end":return e.stop()}},e,this)}));function n(){return e.apply(this,arguments)}return n}(),isImg:function(t){var e=t.lastIndexOf("."),n=t.substr(e+1),a=-1!==["png","jpg","jpeg","bmp","gif","webp","svg","tiff"].indexOf(n.toLowerCase());return a}}};e.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"75f8":function(t,e,n){"use strict";var a=n("e73f"),i=n.n(a);i.a},d93e:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},e73f:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/jin-attachment/jin-attachment-create-component',
    {
        'components/jin-attachment/jin-attachment-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("0912"))
        })
    },
    [['components/jin-attachment/jin-attachment-create-component']]
]);                