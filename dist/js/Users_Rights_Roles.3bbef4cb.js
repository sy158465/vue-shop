(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Users_Rights_Roles"],{"057f":function(e,t,r){var n=r("fc6a"),o=r("241c").f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(e){try{return o(e)}catch(t){return i.slice()}};e.exports.f=function(e){return i&&"[object Window]"==a.call(e)?s(e):o(n(e))}},"159b":function(e,t,r){var n=r("da84"),o=r("fdbc"),a=r("17c2"),i=r("9112");for(var s in o){var l=n[s],c=l&&l.prototype;if(c&&c.forEach!==a)try{i(c,"forEach",a)}catch(u){c.forEach=a}}},"17c2":function(e,t,r){"use strict";var n=r("b727").forEach,o=r("a640"),a=o("forEach");e.exports=a?[].forEach:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}},"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("d3b7");function n(e,t,r,n,o,a,i){try{var s=e[a](i),l=s.value}catch(c){return void r(c)}s.done?t(l):Promise.resolve(l).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function s(e){n(i,o,a,s,l,"next",e)}function l(e){n(i,o,a,s,l,"throw",e)}s(void 0)}))}}},2666:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("用户管理")]),r("el-breadcrumb-item",[e._v("用户列表")])],1),r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:10}},[r("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{clear:e.getUserList},model:{value:e.queryInfo.query,callback:function(t){e.$set(e.queryInfo,"query",t)},expression:"queryInfo.query"}},[r("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.getUserList},slot:"append"})],1)],1),r("el-col",{attrs:{span:4}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addDialogVisible=!0}}},[e._v("添加用户")])],1)],1),r("el-table",{attrs:{data:e.userList,border:"",stripe:""}},[r("el-table-column",{attrs:{label:"#",type:"index"}}),r("el-table-column",{attrs:{label:"姓名",prop:"username"}}),r("el-table-column",{attrs:{label:"邮箱",prop:"email"}}),r("el-table-column",{attrs:{label:"电话",prop:"mobile"}}),r("el-table-column",{attrs:{label:"姓名",prop:"role_name"}}),r("el-table-column",{attrs:{label:"状态",prop:"mg_state"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{on:{change:function(r){return e.userStateChanged(t.row)}},model:{value:t.row.mg_state,callback:function(r){e.$set(t.row,"mg_state",r)},expression:"scope.row.mg_state"}})]}}])}),r("el-table-column",{attrs:{label:"操作",width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"mini"},on:{click:function(r){return e.showEditDialog(t.row.id)}}}),r("el-button",{attrs:{type:"danger",icon:"el-icon-delete",size:"mini"},on:{click:function(r){return e.removeUserById(t.row.id)}}}),r("el-tooltip",{attrs:{effect:"dark",content:"分配角色",placement:"top",enterable:!1}},[r("el-button",{attrs:{type:"warning",icon:"el-icon-setting",size:"mini"},on:{click:function(r){return e.setRole(t.row)}}})],1)]}}])})],1),r("el-pagination",{attrs:{"current-page":e.queryInfo.pagenum,"page-sizes":[1,2,5,10],"page-size":e.queryInfo.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),r("el-dialog",{attrs:{title:"添加用户",visible:e.addDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addDialogVisible=t},close:e.addDialogClosed}},[r("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名",prop:"username"}},[r("el-input",{model:{value:e.addForm.username,callback:function(t){e.$set(e.addForm,"username",t)},expression:"addForm.username"}})],1),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{model:{value:e.addForm.password,callback:function(t){e.$set(e.addForm,"password",t)},expression:"addForm.password"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.addForm.email,callback:function(t){e.$set(e.addForm,"email",t)},expression:"addForm.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.addForm.mobile,callback:function(t){e.$set(e.addForm,"mobile",t)},expression:"addForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addUser}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改用户",visible:e.editDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editDialogVisible=t},close:e.editDialogClosed}},[r("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"70px"}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{attrs:{disabled:""},model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1),r("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[r("el-input",{model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editUserInfo}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配角色",visible:e.setRoleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRoleDialogVisible=t},close:e.setRoleDialogClosed}},[r("div",[r("p",[e._v("当前的用户："+e._s(e.userInfo.username))]),r("p",[e._v("当前的角色："+e._s(e.userInfo.role_name))]),r("p",[e._v("分配新角色： "),r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.selectRoleId,callback:function(t){e.selectRoleId=t},expression:"selectRoleId"}},e._l(e.rolesList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.roleName,value:e.id}})})),1)],1)]),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.setRoleDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.saveRoleInfo}},[e._v("确 定")])],1)])],1)},o=[],a=r("1da1"),i=(r("99af"),r("96cf"),{data:function(){var e=function(e,t,r){var n=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;if(n.test(t))return r();r(new Error("请输入合法的邮箱"))},t=function(e,t,r){var n=/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;if(n.test(t))return r();r(new Error("请输入合法的手机号"))};return{queryInfo:{query:"",pagenum:1,pagesize:2},userList:[],total:0,addDialogVisible:!1,addForm:{username:"",password:"",email:"",mobile:""},addFormRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:10,message:"用户名的长度在3~10个字符之间",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:15,message:"用户名的长度在6~15个字符之间",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]},editDialogVisible:!1,editForm:{},editFormRules:{email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]},setRoleDialogVisible:!1,userInfo:{},rolesList:[],selectRoleId:""}},components:{},created:function(){this.getUserList()},methods:{getUserList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("users",{params:e.queryInfo});case 2:if(r=t.sent,n=r.data,200===n.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取用户数据失败"));case 6:e.userList=n.data.users,e.total=n.data.total;case 8:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pagesize=e,this.getUserList()},handleCurrentChange:function(e){this.queryInfo.pagenum=e,this.getUserList()},userStateChanged:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.put("users/".concat(e.id,"/state/").concat(e.mg_state));case 2:if(n=r.sent,o=n.data,200===o.meta.status){r.next=7;break}return e.mg_state=!e.mg_state,r.abrupt("return",t.$message.error("更新用户数据失败"));case 7:t.$message.success("更新用户数据成功");case 8:case"end":return r.stop()}}),r)})))()},addDialogClosed:function(){this.$refs.addFormRef.resetFields()},addUser:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(r){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("users",e.addForm);case 4:n=t.sent,o=n.data,201!==o.meta.status&&e.$message.error("添加用户失败"),e.$message.success("添加用户成功"),e.addDialogVisible=!1,e.getUserList();case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},showEditDialog:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("users/"+e);case 2:if(n=r.sent,o=n.data,200===o.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("查询用户数据失败"));case 6:t.editForm=o.data,t.editDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editDialogClosed:function(){this.$refs.editFormRef.resetFields()},editUserInfo:function(){var e=this;this.$refs.editFormRef.validate(function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(r){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.put("users/"+e.editForm.id,{email:e.editForm.email,mobile:e.editForm.mobile});case 4:n=t.sent,o=n.data,200!==o.meta.status&&e.$message.error("修改用户失败"),e.editDialogVisible=!1,e.getUserList(),e.$message.success("修改用户成功");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},removeUserById:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(n=r.sent,"confirm"===n){r.next=5;break}return r.abrupt("return",t.$message.info("已取消删除"));case 5:return r.next=7,t.$http.delete("users/"+e);case 7:if(o=r.sent,a=o.data,200===a.meta.status){r.next=11;break}return r.abrupt("return",t.$message.error("删除用户失败"));case 11:t.$message.success("删除用户成功"),t.getUserList();case 13:case"end":return r.stop()}}),r)})))()},setRole:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.userInfo=e,r.next=3,t.$http.get("roles");case 3:if(n=r.sent,o=n.data,200===o.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("获取所有角色的列表失败"));case 7:t.rolesList=o.data,t.setRoleDialogVisible=!0;case 9:case"end":return r.stop()}}),r)})))()},saveRoleInfo:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.selectRoleId){t.next=2;break}return t.abrupt("return",e.$message.error("请选择角色"));case 2:return t.next=4,e.$http.put("users/".concat(e.userInfo.id,"/role"),{rid:e.selectRoleId});case 4:if(r=t.sent,n=r.data,200===n.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("更新角色失败"));case 8:e.$message.success("更新角色成功"),e.getUserList(),e.setRoleDialogVisible=!1;case 11:case"end":return t.stop()}}),t)})))()},setRoleDialogClosed:function(){this.selectRoleId="",this.userInfo=""}}}),s=i,l=r("2877"),c=Object(l["a"])(s,n,o,!1,null,null,null);t["default"]=c.exports},3024:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("角色列表")])],1),r("el-card",[r("el-row",[r("el-col",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addRoleDialogVisible=!0}}},[e._v("添加角色")])],1)],1),r("el-table",{attrs:{data:e.rolesList,border:"",stripe:""}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.children,(function(n,o){return r("el-row",{key:n.id,class:["bdbottom",0===o?"bdtop":"","vcenter"]},[r("el-col",{attrs:{span:5}},[r("el-tag",{attrs:{closable:""},on:{close:function(r){return e.removeRightById(t.row,n.id)}}},[e._v(e._s(n.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:19}},e._l(n.children,(function(n,o){return r("el-row",{key:n.id,class:[0===o?"":"bdtop","vcenter"]},[r("el-col",{attrs:{span:6}},[r("el-tag",{attrs:{type:"success",closable:""},on:{close:function(r){return e.removeRightById(t.row,n.id)}}},[e._v(e._s(n.authName))]),r("i",{staticClass:"el-icon-caret-right"})],1),r("el-col",{attrs:{span:18}},e._l(n.children,(function(n){return r("el-tag",{key:n.id,attrs:{type:"warning",closable:""},on:{close:function(r){return e.removeRightById(t.row,n.id)}}},[e._v(e._s(n.authName))])})),1)],1)})),1)],1)}))}}])}),r("el-table-column",{attrs:{label:"#",type:"index"}}),r("el-table-column",{attrs:{label:"角色名称",prop:"roleName"}}),r("el-table-column",{attrs:{label:"角色描述",prop:"roleDesc"}}),r("el-table-column",{attrs:{label:"操作",width:"320px"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit"},on:{click:function(r){return e.showEditRole(t.row.id)}}},[e._v("编辑")]),r("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(r){return e.removeRoleById(t.row.id)}}},[e._v("删除")]),r("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-setting"},on:{click:function(r){return e.showSetRightDialog(t.row)}}},[e._v("分配权限")])]}}])})],1)],1),r("el-dialog",{attrs:{title:"添加角色",visible:e.addRoleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.addRoleDialogVisible=t},close:e.addRoleDialogClosed}},[r("el-form",{ref:"addRoleFormRef",attrs:{model:e.addRoleForm,rules:e.addRoleFormRules,"label-width":"90px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:e.addRoleForm.roleName,callback:function(t){e.$set(e.addRoleForm,"roleName",t)},expression:"addRoleForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[r("el-input",{model:{value:e.addRoleForm.roleDesc,callback:function(t){e.$set(e.addRoleForm,"roleDesc",t)},expression:"addRoleForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.addRoleDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.addRole}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"修改角色",visible:e.editRoleDialogVisible,width:"50%"},on:{"update:visible":function(t){e.editRoleDialogVisible=t},close:e.editRoleDialogClosed}},[r("el-form",{ref:"editRoleFormRef",attrs:{model:e.editRoleForm,rules:e.editRoleFormRules,"label-width":"90px"}},[r("el-form-item",{attrs:{label:"角色名称",prop:"roleName"}},[r("el-input",{model:{value:e.editRoleForm.roleName,callback:function(t){e.$set(e.editRoleForm,"roleName",t)},expression:"editRoleForm.roleName"}})],1),r("el-form-item",{attrs:{label:"角色描述",prop:"roleDesc"}},[r("el-input",{model:{value:e.editRoleForm.roleDesc,callback:function(t){e.$set(e.editRoleForm,"roleDesc",t)},expression:"editRoleForm.roleDesc"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.editRoleDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.editRoleInfo}},[e._v("确 定")])],1)],1),r("el-dialog",{attrs:{title:"分配权限",visible:e.setRightDialogVisible,width:"50%"},on:{"update:visible":function(t){e.setRightDialogVisible=t},close:e.setRightDialogClosed}},[r("el-tree",{ref:"treeRef",attrs:{data:e.rightslist,props:e.treeProps,"show-checkbox":"","node-key":"id","default-expand-all":"","default-checked-keys":e.defKeys}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.setRightDialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.allotRights}},[e._v("确 定")])],1)],1)],1)},o=[];function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){if(Array.isArray(e))return a(e)}r("a4d3"),r("e01a"),r("d3b7"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function s(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r("fb6a"),r("b0c0");function l(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return i(e)||s(e)||l(e)||c()}var f=r("1da1"),d=(r("99af"),r("159b"),r("a15b"),r("96cf"),{data:function(){return{rolesList:[],setRightDialogVisible:!1,rightslist:[],treeProps:{label:"authName",children:"children"},defKeys:[],roleId:"",addRoleDialogVisible:!1,addRoleForm:{roleName:"",roleDesc:""},addRoleFormRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}],roleDesc:[{required:!0,message:"请输入角色描述",trigger:"blur"}]},editRoleDialogVisible:!1,editRoleForm:{},editRoleFormRules:{roleName:[{required:!0,message:"请输入角色名称",trigger:"blur"}],roleDesc:[{required:!0,message:"请输入角色描述",trigger:"blur"}]}}},components:{},created:function(){this.getRolesList()},methods:{getRolesList:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("roles");case 2:if(r=t.sent,n=r.data,200===n.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取角色列表失败"));case 6:e.rolesList=n.data;case 7:case"end":return t.stop()}}),t)})))()},removeRightById:function(e,t){var r=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){var o,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r.$confirm("此操作将永久删除该权限, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(o=n.sent,"confirm"===o){n.next=5;break}return n.abrupt("return",r.$message.info("取消了删除"));case 5:return n.next=7,r.$http.delete("roles/".concat(e.id,"/rights/").concat(t));case 7:if(a=n.sent,i=a.data,200===i.meta.status){n.next=11;break}return n.abrupt("return",r.$message.error("删除权限失败"));case 11:e.children=i.data;case 12:case"end":return n.stop()}}),n)})))()},showSetRightDialog:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.roleId=e.id,r.next=3,t.$http.get("rights/tree");case 3:if(n=r.sent,o=n.data,200===o.meta.status){r.next=7;break}return r.abrupt("return",t.$message.error("获取权限数据失败"));case 7:t.rightslist=o.data,t.getLeafKeys(e,t.defKeys),t.setRightDialogVisible=!0;case 10:case"end":return r.stop()}}),r)})))()},getLeafKeys:function(e,t){var r=this;if(!e.children)return t.push(e.id);e.children.forEach((function(e){r.getLeafKeys(e,t)}))},setRightDialogClosed:function(){this.defKeys=[]},allotRights:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){var r,n,o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[].concat(u(e.$refs.treeRef.getCheckedKeys()),u(e.$refs.treeRef.getHalfCheckedKeys())),n=r.join(","),t.next=4,e.$http.post("roles/".concat(e.roleId,"/rights"),{rids:n});case 4:if(o=t.sent,a=o.data,200===a.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("分配权限失败"));case 8:e.$message.success("分配权限成功"),e.getRolesList(),e.setRightDialogVisible=!1;case 11:case"end":return t.stop()}}),t)})))()},addRoleDialogClosed:function(){this.$refs.addRoleFormRef.resetFields()},addRole:function(){var e=this;this.$refs.addRoleFormRef.validate(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(r){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.post("roles",e.addRoleForm);case 4:if(n=t.sent,o=n.data,201===o.meta.status){t.next=8;break}return t.abrupt("return",e.$message.error("添加角色失败"));case 8:e.$message.success("添加角色成功"),e.addRoleDialogVisible=!1,e.getRolesList();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},removeRoleById:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var n,o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$confirm("此操作将永久删除该用户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).catch((function(e){return e}));case 2:if(n=r.sent,"confirm"===n){r.next=5;break}return r.abrupt("return",t.$message.info("已取消删除"));case 5:return r.next=7,t.$http.delete("roles/"+e);case 7:if(o=r.sent,a=o.data,200===a.meta.status){r.next=11;break}return r.abrupt("return",t.$message.error("删除角色失败"));case 11:t.$message.success("删除角色成功"),t.getRolesList();case 13:case"end":return r.stop()}}),r)})))()},showEditRole:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("roles/"+e);case 2:if(n=r.sent,o=n.data,200===o.meta.status){r.next=6;break}return r.abrupt("return",t.$message.error("查询角色数据失败"));case 6:t.editRoleForm=o.data,t.editRoleDialogVisible=!0;case 8:case"end":return r.stop()}}),r)})))()},editRoleInfo:function(){var e=this;this.$refs.editRoleFormRef.validate(function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(r){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.$http.put("roles/"+e.editRoleForm.roleId,{roleName:e.editRoleForm.roleName,roleDesc:e.editRoleForm.roleDesc});case 4:n=t.sent,o=n.data,200!==o.meta.status&&e.$message.error("修改用户失败"),e.editRoleDialogVisible=!1,e.getRolesList(),e.$message.success("修改用户成功");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},editRoleDialogClosed:function(){this.$refs.editRoleFormRef.resetFields()}}}),m=d,p=(r("fd81"),r("2877")),h=Object(p["a"])(m,n,o,!1,null,"73aeb204",null);t["default"]=h.exports},"4df4":function(e,t,r){"use strict";var n=r("0366"),o=r("7b0b"),a=r("9bdd"),i=r("e95a"),s=r("50c4"),l=r("8418"),c=r("35a1");e.exports=function(e){var t,r,u,f,d,m,p=o(e),h="function"==typeof this?this:Array,g=arguments.length,b=g>1?arguments[1]:void 0,v=void 0!==b,y=c(p),w=0;if(v&&(b=n(b,g>2?arguments[2]:void 0,2)),void 0==y||h==Array&&i(y))for(t=s(p.length),r=new h(t);t>w;w++)m=v?b(p[w],w):p[w],l(r,w,m);else for(f=y.call(p),d=f.next,r=new h;!(u=d.call(f)).done;w++)m=v?a(f,b,[u.value,w],!0):u.value,l(r,w,m);return r.length=w,r}},"746f":function(e,t,r){var n=r("428f"),o=r("5135"),a=r("e538"),i=r("9bf2").f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});o(t,e)||i(t,e,{value:a.f(e)})}},"96cf":function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=_(e,r,i),a}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=c;var f="suspendedStart",d="suspendedYield",m="executing",p="completed",h={};function g(){}function b(){}function v(){}var y={};y[a]=function(){return this};var w=Object.getPrototypeOf,R=w&&w(w(j([])));R&&R!==r&&n.call(R,a)&&(y=R);var x=v.prototype=g.prototype=Object.create(y);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function F(e,t){function r(o,a,i,s){var l=u(e[o],e,a);if("throw"!==l.type){var c=l.arg,f=c.value;return f&&"object"===typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(f).then((function(e){c.value=e,i(c)}),(function(e){return r("throw",e,i,s)}))}s(l.arg)}var o;function a(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function _(e,t,r){var n=f;return function(o,a){if(n===m)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return I()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=$(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var l=u(e,t,r);if("normal"===l.type){if(n=r.done?p:d,l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=p,r.method="throw",r.arg=l.arg)}}}function $(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator["return"]&&(r.method="return",r.arg=t,$(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function D(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0)}function j(e){if(e){var r=e[a];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){while(++o<e.length)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:I}}function I(){return{value:t,done:!0}}return b.prototype=x.constructor=v,v.constructor=b,b.displayName=l(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,s,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},k(F.prototype),F.prototype[i]=function(){return this},e.AsyncIterator=F,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new F(c(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(x),l(x,s,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){while(t.length){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(L),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9bdd":function(e,t,r){var n=r("825a"),o=r("2a62");e.exports=function(e,t,r,a){try{return a?t(n(r)[0],r[1]):t(r)}catch(i){throw o(e),i}}},a15b:function(e,t,r){"use strict";var n=r("23e7"),o=r("44ad"),a=r("fc6a"),i=r("a640"),s=[].join,l=o!=Object,c=i("join",",");n({target:"Array",proto:!0,forced:l||!c},{join:function(e){return s.call(a(this),void 0===e?",":e)}})},a4d3:function(e,t,r){"use strict";var n=r("23e7"),o=r("da84"),a=r("d066"),i=r("c430"),s=r("83ab"),l=r("4930"),c=r("fdbf"),u=r("d039"),f=r("5135"),d=r("e8b5"),m=r("861d"),p=r("825a"),h=r("7b0b"),g=r("fc6a"),b=r("c04e"),v=r("5c6c"),y=r("7c73"),w=r("df75"),R=r("241c"),x=r("057f"),k=r("7418"),F=r("06cf"),_=r("9bf2"),$=r("d1e7"),D=r("9112"),L=r("6eeb"),O=r("5692"),j=r("f772"),I=r("d012"),S=r("90e3"),E=r("b622"),V=r("e538"),C=r("746f"),N=r("d44e"),q=r("69f3"),A=r("b727").forEach,P=j("hidden"),z="Symbol",U="prototype",B=E("toPrimitive"),T=q.set,K=q.getterFor(z),G=Object[U],J=o.Symbol,Z=a("JSON","stringify"),M=F.f,Y=_.f,H=x.f,Q=$.f,W=O("symbols"),X=O("op-symbols"),ee=O("string-to-symbol-registry"),te=O("symbol-to-string-registry"),re=O("wks"),ne=o.QObject,oe=!ne||!ne[U]||!ne[U].findChild,ae=s&&u((function(){return 7!=y(Y({},"a",{get:function(){return Y(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=M(G,t);n&&delete G[t],Y(e,t,r),n&&e!==G&&Y(G,t,n)}:Y,ie=function(e,t){var r=W[e]=y(J[U]);return T(r,{type:z,tag:e,description:t}),s||(r.description=t),r},se=c?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof J},le=function(e,t,r){e===G&&le(X,t,r),p(e);var n=b(t,!0);return p(r),f(W,n)?(r.enumerable?(f(e,P)&&e[P][n]&&(e[P][n]=!1),r=y(r,{enumerable:v(0,!1)})):(f(e,P)||Y(e,P,v(1,{})),e[P][n]=!0),ae(e,n,r)):Y(e,n,r)},ce=function(e,t){p(e);var r=g(t),n=w(r).concat(pe(r));return A(n,(function(t){s&&!fe.call(r,t)||le(e,t,r[t])})),e},ue=function(e,t){return void 0===t?y(e):ce(y(e),t)},fe=function(e){var t=b(e,!0),r=Q.call(this,t);return!(this===G&&f(W,t)&&!f(X,t))&&(!(r||!f(this,t)||!f(W,t)||f(this,P)&&this[P][t])||r)},de=function(e,t){var r=g(e),n=b(t,!0);if(r!==G||!f(W,n)||f(X,n)){var o=M(r,n);return!o||!f(W,n)||f(r,P)&&r[P][n]||(o.enumerable=!0),o}},me=function(e){var t=H(g(e)),r=[];return A(t,(function(e){f(W,e)||f(I,e)||r.push(e)})),r},pe=function(e){var t=e===G,r=H(t?X:g(e)),n=[];return A(r,(function(e){!f(W,e)||t&&!f(G,e)||n.push(W[e])})),n};if(l||(J=function(){if(this instanceof J)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=S(e),r=function(e){this===G&&r.call(X,e),f(this,P)&&f(this[P],t)&&(this[P][t]=!1),ae(this,t,v(1,e))};return s&&oe&&ae(G,t,{configurable:!0,set:r}),ie(t,e)},L(J[U],"toString",(function(){return K(this).tag})),L(J,"withoutSetter",(function(e){return ie(S(e),e)})),$.f=fe,_.f=le,F.f=de,R.f=x.f=me,k.f=pe,V.f=function(e){return ie(E(e),e)},s&&(Y(J[U],"description",{configurable:!0,get:function(){return K(this).description}}),i||L(G,"propertyIsEnumerable",fe,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:J}),A(w(re),(function(e){C(e)})),n({target:z,stat:!0,forced:!l},{for:function(e){var t=String(e);if(f(ee,t))return ee[t];var r=J(t);return ee[t]=r,te[r]=t,r},keyFor:function(e){if(!se(e))throw TypeError(e+" is not a symbol");if(f(te,e))return te[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),n({target:"Object",stat:!0,forced:!l,sham:!s},{create:ue,defineProperty:le,defineProperties:ce,getOwnPropertyDescriptor:de}),n({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:me,getOwnPropertySymbols:pe}),n({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(e){return k.f(h(e))}}),Z){var he=!l||u((function(){var e=J();return"[null]"!=Z([e])||"{}"!=Z({a:e})||"{}"!=Z(Object(e))}));n({target:"JSON",stat:!0,forced:he},{stringify:function(e,t,r){var n,o=[e],a=1;while(arguments.length>a)o.push(arguments[a++]);if(n=t,(m(t)||void 0!==e)&&!se(e))return d(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!se(t))return t}),o[1]=t,Z.apply(null,o)}})}J[U][B]||D(J[U],B,J[U].valueOf),N(J,z),I[P]=!0},a630:function(e,t,r){var n=r("23e7"),o=r("4df4"),a=r("1c7e"),i=!a((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:i},{from:o})},a640:function(e,t,r){"use strict";var n=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&n((function(){r.call(null,t||function(){throw 1},1)}))}},a766:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[r("el-breadcrumb-item",{attrs:{to:{path:"/home"}}},[e._v("首页")]),r("el-breadcrumb-item",[e._v("权限管理")]),r("el-breadcrumb-item",[e._v("权限列表")])],1),r("el-card",[r("el-table",{attrs:{data:e.rightsList,border:"",stripe:""}},[r("el-table-column",{attrs:{label:"#",type:"index"}}),r("el-table-column",{attrs:{label:"权限名称",prop:"authName"}}),r("el-table-column",{attrs:{label:"路径",prop:"path"}}),r("el-table-column",{attrs:{label:"权限等级",prop:"level"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"===t.row.level?r("el-tag",[e._v("一级")]):"1"===t.row.level?r("el-tag",{attrs:{type:"success"}},[e._v("二级")]):r("el-tag",{attrs:{type:"warning"}},[e._v("三级")])]}}])})],1)],1)],1)},o=[],a=r("1da1"),i=(r("96cf"),{data:function(){return{rightsList:[]}},components:{},created:function(){this.getRightsList()},methods:{getRightsList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rights/list");case 2:if(r=t.sent,n=r.data,200===n.meta.status){t.next=6;break}return t.abrupt("return",e.$message.error("获取权限列表失败"));case 6:e.rightsList=n.data;case 7:case"end":return t.stop()}}),t)})))()}}}),s=i,l=r("2877"),c=Object(l["a"])(s,n,o,!1,null,"5a1dd3ba",null);t["default"]=c.exports},b0c0:function(e,t,r){var n=r("83ab"),o=r("9bf2").f,a=Function.prototype,i=a.toString,s=/^\s*function ([^ (]*)/,l="name";n&&!(l in a)&&o(a,l,{configurable:!0,get:function(){try{return i.call(this).match(s)[1]}catch(e){return""}}})},bc47:function(e,t,r){},d28b:function(e,t,r){var n=r("746f");n("iterator")},e01a:function(e,t,r){"use strict";var n=r("23e7"),o=r("83ab"),a=r("da84"),i=r("5135"),s=r("861d"),l=r("9bf2").f,c=r("e893"),u=a.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var f={},d=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof d?new u(e):void 0===e?u():u(e);return""===e&&(f[t]=!0),t};c(d,u);var m=d.prototype=u.prototype;m.constructor=d;var p=m.toString,h="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;l(m,"description",{configurable:!0,get:function(){var e=s(this)?this.valueOf():this,t=p.call(e);if(i(f,e))return"";var r=h?t.slice(7,-1):t.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:d})}},e538:function(e,t,r){var n=r("b622");t.f=n},fb6a:function(e,t,r){"use strict";var n=r("23e7"),o=r("861d"),a=r("e8b5"),i=r("23cb"),s=r("50c4"),l=r("fc6a"),c=r("8418"),u=r("b622"),f=r("1dde"),d=f("slice"),m=u("species"),p=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(e,t){var r,n,u,f=l(this),d=s(f.length),g=i(e,d),b=i(void 0===t?d:t,d);if(a(f)&&(r=f.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?o(r)&&(r=r[m],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(f,g,b);for(n=new(void 0===r?Array:r)(h(b-g,0)),u=0;g<b;g++,u++)g in f&&c(n,u,f[g]);return n.length=u,n}})},fd81:function(e,t,r){"use strict";r("bc47")}}]);
//# sourceMappingURL=Users_Rights_Roles.3bbef4cb.js.map