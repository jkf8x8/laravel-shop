(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{200:function(t,e,n){"use strict";n.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"user-avator"},[e("img",{attrs:{src:n(86)}})])}],i=n(1),a=new(n.n(i).a),l={data:function(){return{collapse:!1,fullscreen:!1,name:"linxin",message:2}},computed:{username:function(){var t=localStorage.getItem("ms_username");return t||this.name}},methods:{handleCommand:function(t){"loginout"==t&&(localStorage.removeItem("ms_username"),this.$router.push("/login"))},collapseChage:function(){this.collapse=!this.collapse,a.$emit("collapse",this.collapse)},handleFullScreen:function(){var t=document.documentElement;this.fullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen():t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.fullscreen=!this.fullscreen}},mounted:function(){document.body.clientWidth<1500&&this.collapseChage()}},o=(n(87),n(0)),r=Object(o.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"collapse-btn",on:{click:t.collapseChage}},[n("i",{staticClass:"el-icon-menu"})]),t._v(" "),n("div",{staticClass:"logo"},[t._v("后台管理系统")]),t._v(" "),n("div",{staticClass:"header-right"},[n("div",{staticClass:"header-user-con"},[n("div",{staticClass:"btn-fullscreen",on:{click:t.handleFullScreen}},[n("el-tooltip",{attrs:{effect:"dark",content:t.fullscreen?"取消全屏":"全屏",placement:"bottom"}},[n("i",{staticClass:"el-icon-rank"})])],1),t._v(" "),n("div",{staticClass:"btn-bell"},[n("el-tooltip",{attrs:{effect:"dark",content:t.message?"有"+t.message+"条未读消息":"消息中心",placement:"bottom"}},[n("router-link",{attrs:{to:"/tabs"}},[n("i",{staticClass:"el-icon-bell"})])],1),t._v(" "),t.message?n("span",{staticClass:"btn-bell-badge"}):t._e()],1),t._v(" "),t._m(0),t._v(" "),n("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:t.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[t._v("\n                    "+t._s(t.username)+" "),n("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("a",{attrs:{href:"",target:"_blank"}},[n("el-dropdown-item",[t._v("关于作者")])],1),t._v(" "),n("a",{attrs:{href:"",target:"_blank"}},[n("el-dropdown-item",[t._v("项目仓库")])],1),t._v(" "),n("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[t._v("退出登录")])],1)],1)],1)])])},s,!1,null,"2fcfdc73",null).exports,c={data:function(){return{collapse:!1,items:[{icon:"el-icon-lx-home",index:"/",title:"系统首页"},{icon:"el-icon-lx-cascades",index:"table",title:"基础表格"},{icon:"el-icon-lx-copy",index:"tabs",title:"tab选项卡"},{icon:"el-icon-lx-calendar",index:"3",title:"表单相关",subs:[{index:"form",title:"基本表单"},{index:"3-2",title:"三级菜单",subs:[{index:"editor",title:"富文本编辑器"},{index:"markdown",title:"markdown编辑器"}]},{index:"upload",title:"文件上传"}]},{icon:"el-icon-lx-emoji",index:"icon",title:"自定义图标"},{icon:"el-icon-lx-favor",index:"charts",title:"schart图表"},{icon:"el-icon-rank",index:"6",title:"拖拽组件",subs:[{index:"drag",title:"拖拽列表"},{index:"dialog",title:"拖拽弹框"}]},{icon:"el-icon-lx-warn",index:"7",title:"错误处理",subs:[{index:"permission",title:"权限测试"},{index:"404",title:"404页面"}]}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var t=this;a.$on("collapse",function(e){t.collapse=e})}},d=(n(89),Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":t.onRoutes,collapse:t.collapse,"background-color":"#324157","text-color":"#bfcbd9","active-text-color":"#20a0ff","unique-opened":"",router:""}},[t._l(t.items,function(e){return[e.subs?[n("el-submenu",{key:e.index,attrs:{index:e.index}},[n("template",{slot:"title"},[n("i",{class:e.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])]),t._v(" "),t._l(e.subs,function(e){return[e.subs?n("el-submenu",{key:e.index,attrs:{index:e.index}},[n("template",{slot:"title"},[t._v(t._s(e.title))]),t._v(" "),t._l(e.subs,function(e,s){return n("el-menu-item",{key:s,attrs:{index:e.index}},[t._v("\n                                "+t._s(e.title)+"\n                            ")])})],2):n("el-menu-item",{key:e.index,attrs:{index:e.index}},[t._v("\n                            "+t._s(e.title)+"\n                        ")])]})],2)]:[n("el-menu-item",{key:e.index,attrs:{index:e.index}},[n("i",{class:e.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))])])]]})],2)],1)},[],!1,null,"30e981f2",null).exports),u={data:function(){return{tagsList:[]}},methods:{isActive:function(t){return t===this.$route.fullPath},closeTags:function(t){var e=this.tagsList.splice(t,1)[0],n=this.tagsList[t]?this.tagsList[t]:this.tagsList[t-1];n?e.path===this.$route.fullPath&&this.$router.push(n.path):this.$router.push("/")},closeAll:function(){this.tagsList=[],this.$router.push("/")},closeOther:function(){var t=this,e=this.tagsList.filter(function(e){return e.path===t.$route.fullPath});this.tagsList=e},setTags:function(t){this.tagsList.some(function(e){return e.path===t.fullPath})||(this.tagsList.length>=8&&this.tagsList.shift(),this.tagsList.push({title:t.meta.title,path:t.fullPath,name:t.matched[1].components.default.name})),a.$emit("tags",this.tagsList)},handleTags:function(t){"other"===t?this.closeOther():this.closeAll()}},computed:{showTags:function(){return this.tagsList.length>0}},watch:{$route:function(t,e){this.setTags(t)}},created:function(){var t=this;this.setTags(this.$route),a.$on("close_current_tags",function(){for(var e=0,n=t.tagsList.length;e<n;e++){t.tagsList[e].path===t.$route.fullPath&&(e<n-1?t.$router.push(t.tagsList[e+1].path):e>0?t.$router.push(t.tagsList[e-1].path):t.$router.push("/"),t.tagsList.splice(e,1))}})}},f=(n(91),{data:function(){return{tagsList:[],collapse:!1}},components:{vHead:r,vSidebar:d,vTags:Object(o.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showTags?n("div",{staticClass:"tags"},[n("ul",t._l(t.tagsList,function(e,s){return n("li",{key:s,staticClass:"tags-li",class:{active:t.isActive(e.path)}},[n("router-link",{staticClass:"tags-li-title",attrs:{to:e.path}},[t._v("\n                "+t._s(e.title)+"\n            ")]),t._v(" "),n("span",{staticClass:"tags-li-icon",on:{click:function(e){return t.closeTags(s)}}},[n("i",{staticClass:"el-icon-close"})])],1)}),0),t._v(" "),n("div",{staticClass:"tags-close-box"},[n("el-dropdown",{on:{command:t.handleTags}},[n("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("\n                标签选项"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown",size:"small"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"other"}},[t._v("关闭其他")]),t._v(" "),n("el-dropdown-item",{attrs:{command:"all"}},[t._v("关闭所有")])],1)],1)],1)]):t._e()},[],!1,null,null,null).exports},created:function(){var t=this;a.$on("collapse",function(e){t.collapse=e}),a.$on("tags",function(e){for(var n=[],s=0,i=e.length;s<i;s++)e[s].name&&n.push(e[s].name);t.tagsList=n})}}),p=Object(o.a)(f,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("v-head"),this._v(" "),e("v-sidebar"),this._v(" "),e("div",{staticClass:"content-box",class:{"content-collapse":this.collapse}},[e("v-tags"),this._v(" "),e("div",{staticClass:"content"},[e("transition",{attrs:{name:"move",mode:"out-in"}},[e("keep-alive",{attrs:{include:this.tagsList}},[e("router-view")],1)],1)],1)],1)],1)},[],!1,null,null,null);e.default=p.exports},21:function(t,e,n){var s=n(88);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(s,i);s.locals&&(t.exports=s.locals)},22:function(t,e,n){var s=n(90);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(s,i);s.locals&&(t.exports=s.locals)},23:function(t,e,n){var s=n(92);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(s,i);s.locals&&(t.exports=s.locals)},86:function(t,e){t.exports="/images/img.jpg?146655c99d0208ecdad7fd071f9512a1"},87:function(t,e,n){"use strict";var s=n(21);n.n(s).a},88:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.header[data-v-2fcfdc73] {\n    position: relative;\n    box-sizing: border-box;\n    width: 100%;\n    height: 70px;\n    font-size: 22px;\n    color: #fff;\n}\n.collapse-btn[data-v-2fcfdc73]{\n    float: left;\n    padding: 0 21px;\n    cursor: pointer;\n    line-height: 70px;\n}\n.header .logo[data-v-2fcfdc73]{\n    float: left;\n    width:250px;\n    line-height: 70px;\n}\n.header-right[data-v-2fcfdc73]{\n    float: right;\n    padding-right: 50px;\n}\n.header-user-con[data-v-2fcfdc73]{\n    display: flex;\n    height: 70px;\n    align-items: center;\n}\n.btn-fullscreen[data-v-2fcfdc73]{\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    margin-right: 5px;\n    font-size: 24px;\n}\n.btn-bell[data-v-2fcfdc73], .btn-fullscreen[data-v-2fcfdc73]{\n    position: relative;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    border-radius: 15px;\n    cursor: pointer;\n}\n.btn-bell-badge[data-v-2fcfdc73]{\n    position: absolute;\n    right: 0;\n    top: -2px;\n    width: 8px;\n    height: 8px;\n    border-radius: 4px;\n    background: #f56c6c;\n    color: #fff;\n}\n.btn-bell .el-icon-bell[data-v-2fcfdc73]{\n    color: #fff;\n}\n.user-name[data-v-2fcfdc73]{\n    margin-left: 10px;\n}\n.user-avator[data-v-2fcfdc73]{\n    margin-left: 20px;\n}\n.user-avator img[data-v-2fcfdc73]{\n    display: block;\n    width:40px;\n    height:40px;\n    border-radius: 50%;\n}\n.el-dropdown-link[data-v-2fcfdc73]{\n    color: #fff;\n    cursor: pointer;\n}\n.el-dropdown-menu__item[data-v-2fcfdc73]{\n    text-align: center;\n}\n",""])},89:function(t,e,n){"use strict";var s=n(22);n.n(s).a},90:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.sidebar[data-v-30e981f2]{\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 70px;\n    bottom:0;\n    overflow-y: scroll;\n}\n.sidebar[data-v-30e981f2]::-webkit-scrollbar{\n    width: 0;\n}\n.sidebar-el-menu[data-v-30e981f2]:not(.el-menu--collapse){\n    width: 250px;\n}\n.sidebar > ul[data-v-30e981f2] {\n    height:100%;\n}\n",""])},91:function(t,e,n){"use strict";var s=n(23);n.n(s).a},92:function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"\n.tags {\n    position: relative;\n    height: 30px;\n    overflow: hidden;\n    background: #fff;\n    padding-right: 120px;\n    box-shadow: 0 5px 10px #ddd;\n}\n.tags ul {\n    box-sizing: border-box;\n    width: 100%;\n    height: 100%;\n}\n.tags-li {\n    float: left;\n    margin: 3px 5px 2px 3px;\n    border-radius: 3px;\n    font-size: 12px;\n    overflow: hidden;\n    cursor: pointer;\n    height: 23px;\n    line-height: 23px;\n    border: 1px solid #e9eaec;\n    background: #fff;\n    padding: 0 5px 0 12px;\n    vertical-align: middle;\n    color: #666;\n    transition: all .3s ease-in;\n}\n.tags-li:not(.active):hover {\n    background: #f8f8f8;\n}\n.tags-li.active {\n    color: #fff;\n}\n.tags-li-title {\n    float: left;\n    max-width: 80px;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    margin-right: 5px;\n    color: #666;\n}\n.tags-li.active .tags-li-title {\n    color: #fff;\n}\n.tags-close-box {\n    position: absolute;\n    right: 0;\n    top: 0;\n    box-sizing: border-box;\n    padding-top: 1px;\n    text-align: center;\n    width: 110px;\n    height: 30px;\n    background: #fff;\n    box-shadow: -3px 0 15px 3px rgba(0, 0, 0, .1);\n    z-index: 10;\n}\n\n",""])}}]);