webpackJsonp([2],{"0GIG":function(e,t,i){"use strict";i.d(t,"a",function(){return r});var n=i("Zrlr"),s=i.n(n),r=function e(t,i,n,r,a,l){s()(this,e),this.risktype=t,this.risktypefield=i,this.risk_type_field_name=n,this.risk_type_field_enum=r,this.risk_type_field_description=a,this.risk_field_value=l}},"0PtH":function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.el-header[data-v-0ac96078] {        \n  line-height: 30px;\n}\n.el-aside[data-v-0ac96078] {\n  color: #333;\n}    \n",""])},"0Y13":function(e,t,i){(t=e.exports=i("FZ+f")(!1)).push([e.i,"@import url(https://cdnjs.cloudflare.com/ajax/libs/element-ui/2.4.0/theme-chalk/index.css);",""]),t.push([e.i,"\r\n",""])},"38Gn":function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.input[data-v-2882112a] {\r\n  border: 1px solid #888;\r\n  font-size: 0.8rem;\r\n  padding: 0.5rem;\n}\r\n",""])},Gctj:function(e,t,i){var n=i("38Gn");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("6450698e",n,!0)},"S/fj":function(e,t,i){var n=i("0Y13");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("5e561a44",n,!0)},TMDC:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("Dd8w"),s=i.n(n),r=i("NYxO"),a=i("YzaQ");window.riskinstanceoptions=[{id:1,risk_name:"Mercedes 111",risk_description:"Risk policy for Mercedes 111"},{id:2,risk_name:"Toyota 1",risk_description:"Risk policy for Toyota"}];var l={name:"risk-instance-list",props:{preSelect:String,selectedType:Object},computed:s()({},Object(r.b)(["apiresult","apiexception"])),data:function(){return{options:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.selectedType.riskinstance="";var t=[];this.$store.dispatch("getRiskKeys").then(function(i){var n;if(!0===e.apiresult)for(t=i,console.log("getRiskKeys in RiskList"),console.log(t),n=0;n<t.length;n++)e.options.push({text:t[n].risk_name,value:t[n].id})}).catch(function(){e.$notify({title:"Error",message:e.apiexception,type:"error",duration:2e3})})},selectChanged:function(e){this.$emit("change",e)}}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-select",{attrs:{size:"mini",clearable:"",placeholder:"Select RiskInstance"},on:{change:e.selectChanged},model:{value:e.selectedType.riskinstance,callback:function(t){e.$set(e.selectedType,"riskinstance",t)},expression:"selectedType.riskinstance"}},e._l(e.options,function(e){return i("el-option",{key:e.value,attrs:{label:e.text,value:e.value}})}))},staticRenderFns:[]};var p=i("VU/8")(l,o,!1,function(e){i("S/fj")},"data-v-a17afa4c",null).exports,u=i("YYkB"),c=i("Zrlr"),d=i.n(c),_=function e(){d()(this,e)};_.CarouselHelpText=[{id:1,text:"User can view single Risk Instance using this form."},{id:2,text:"Select appropriate Risk Instance from dropdown box."},{id:3,text:"Screen will show Risk name and all Risk Instance fields (read-only)."}];var f=i("0GIG"),k={name:"view-risk-ctrl",components:{RiskInput:a.a,RiskInstanceList:p,RotatingDisplay:u.a},data:function(){return{itemsPerRow:2,readonly:!0,listLoading:!0,carouselhelptext:[],selectRiskInstance:{riskinstance:""},riskobj:null,is_editing:!1}},created:function(){this.populateHelpText()},filters:{capitalize:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},computed:s()({},Object(r.b)(["apiresult","apiexception"]),{rowCount:function(){return null!==this.riskobj?Math.ceil(this.riskobj.riskfields.length/this.itemsPerRow):0}}),methods:{itemCountInRow:function(e){return this.riskobj.riskfields.slice((e-1)*this.itemsPerRow,e*this.itemsPerRow)},selectRiskInstanceChanged:function(e){""!==this.selectRiskInstance.riskinstance?this.fetchRiskInstanceData():this.resetRiskFormData()},populateHelpText:function(){var e;for(e=0;e<_.CarouselHelpText.length;e++)this.carouselhelptext.push(_.CarouselHelpText[e])},fetchRiskInstanceData:function(){var e=this;this.listLoading=!0,this.$store.dispatch("getRisk",this.selectRiskInstance.riskinstance).then(function(t){if(!0===e.apiresult){e.resetRiskFormData();var i=t[0];e.processRiskInstanceDataFromServer(i),e.listLoading=!1}}).catch(function(){e.$notify({title:"Error",message:e.apiexception,type:"error",duration:2e3})})},processRiskInstanceDataFromServer:function(e){if(e&&e.risk_riskfields){var t;console.log("riskinstance.risk_riskfields"),console.log(e.risk_riskfields.length),this.riskobj.id=e.id,this.riskobj.risktype=e.risktype,this.riskobj.risk_type_name=e.risk_type_name,this.riskobj.risk_name=e.risk_name,this.riskobj.risk_description=e.risk_description;var i=e.risk_riskfields;for(t=0;t<i.length;t++){var n=i[t].risktypefield,s=i[t].risk_type_field_name,r=i[t].risk_type_field_enum,a=i[t].risk_field_value;"currency"===r&&(a=parseFloat(i[t].risk_field_value));var l=new f.a(this.riskobj.risktype,n,s,r,"",a);this.riskobj.riskfields.push(l)}}},resetRiskFormData:function(){this.riskobj=new function e(t,i,n,s,r,a){d()(this,e),this.id=t,this.risktype=i,this.risk_type_name=n,this.risk_name=s,this.risk_description=r,this.riskfields=[]},this.riskobj.risk_name="",this.riskobj.risk_description="",this.riskobj.riskfields=[]}}},y={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container calendar-list-container"},[i("el-container",{staticStyle:{height:"500px",border:"1px solid #eee"}},[i("el-header",{staticStyle:{height:"90px",border:"1px solid #eee"}},[i("rotating-display",{attrs:{helpTextArray:e.carouselhelptext}})],1),e._v(" "),i("el-main",{staticStyle:{height:"350px",border:"1px solid #eee"}},[i("el-form",{ref:"risktypeForm",staticStyle:{width:"100%",align:"left","margin-left":"5px"},attrs:{model:e.selectRiskInstance,"label-position":"left","label-width":"130px"}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:16}},[i("el-form-item",{attrs:{label:"Select Risk Type",size:"mini",prop:"risk_type_name"}},[i("risk-instance-list",{attrs:{selectedType:e.selectRiskInstance},on:{change:e.selectRiskInstanceChanged}})],1)],1)],1)],1),e._v(" "),e.riskobj&&e.riskobj.riskfields&&e.riskobj.riskfields.length>0?i("el-form",{staticStyle:{width:"100%",align:"left","margin-left":"5px"},attrs:{model:e.riskobj,"label-position":"left","label-width":"130px"}},[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"Risk Name",size:"mini",prop:"name"}},[i("el-input",{attrs:{readonly:""},model:{value:e.riskobj.risk_name,callback:function(t){e.$set(e.riskobj,"risk_name",t)},expression:"riskobj.risk_name"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"Risk Description",size:"mini"}},[i("el-input",{attrs:{readonly:""},model:{value:e.riskobj.risk_description,callback:function(t){e.$set(e.riskobj,"risk_description",t)},expression:"riskobj.risk_description"}})],1)],1)],1),e._v(" "),e._l(e.rowCount,function(t){return i("el-row",{key:t,attrs:{gutter:20}},e._l(e.itemCountInRow(t),function(t){return i("el-col",{key:t.id,attrs:{span:8}},[i("el-form-item",{attrs:{label:"riskobj",size:"mini",prop:t.risk_type_field_name}},[i("span",{attrs:{slot:"label"},slot:"label"},[e._v(e._s(e._f("capitalize")(t.risk_type_field_name)))]),e._v(" "),i("risk-input",{attrs:{input_type:t,"is-readonly":""}})],1)],1)}))})],2):e._e(),e._v(" "),e.riskobj&&e.riskobj.riskfields&&0===e.riskobj.riskfields.length?i("el-form",[i("el-row",{attrs:{gutter:20}},[i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"Invaid Type Name or No Data found",size:"mini",prop:"risk_type_name"}})],1)],1)],1):e._e()],1)],1)],1)},staticRenderFns:[]};var v={components:{ViewRiskCtrl:i("VU/8")(k,y,!1,function(e){i("Y6uu")},"data-v-0ac96078",null).exports}},h={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app-container"}},[t("br"),this._v(" "),t("view-risk-ctrl")],1)},staticRenderFns:[]},m=i("VU/8")(v,h,!1,null,null,null);t.default=m.exports},Y6uu:function(e,t,i){var n=i("0PtH");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("afced934",n,!0)},YzaQ:function(e,t,i){"use strict";var n=i("0GIG"),s={name:"currency-input",props:{isReadonly:Boolean,value:Number},data:function(){return{isInputActive:!1}},computed:{displayValue:{get:function(){return this.isInputActive?this.value.toString():"$ "+this.value.toFixed(2).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g,"$1,")},set:function(e){var t=parseFloat(e.replace(/[^\d\.]/g,""));isNaN(t)&&(t=0),this.$emit("input",t)}}}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[!0===e.isReadonly?i("div",[i("el-input",{attrs:{type:"text",readonly:""},model:{value:e.displayValue,callback:function(t){e.displayValue=t},expression:"displayValue"}})],1):i("div",[i("el-input",{attrs:{type:"text"},on:{blur:function(t){e.isInputActive=!1},focus:function(t){e.isInputActive=!0}},model:{value:e.displayValue,callback:function(t){e.displayValue=t},expression:"displayValue"}})],1)])},staticRenderFns:[]};var a={name:"risk-input",components:{CurrencyInput:i("VU/8")(s,r,!1,function(e){i("iFHW")},"data-v-1c758bcb",null).exports},props:{input_type:n.a,isReadonly:Boolean,dataval:Object,value:Object},methods:{datechange:function(e,t){try{var i=t;if(null!=i||""!==i){var n=i.getDate(),s=i.getMonth()+1,r=i.getFullYear(),a=(s>9?"":"0")+s+"/"+(n>9?"":"0")+n+"/"+r;this.dataval[e]=a,this.input_type.risk_field_value=a}else this.dataval[e]="",this.input_type.risk_field_value=a}catch(t){this.dataval[e]="",this.input_type.risk_field_value=""}},intchange:function(e,t){console.log(e),console.log(t),this.dataval[e]=null!=t?t:""},textchange:function(e,t){console.log(e),console.log(t),this.dataval[e]=null!=t?t:""}}},l={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",["currency"===e.input_type.risk_type_field_enum?i("div",[!0===e.isReadonly?i("div",[i("currency-input",{attrs:{"is-readonly":""},model:{value:e.input_type.risk_field_value,callback:function(t){e.$set(e.input_type,"risk_field_value",t)},expression:"input_type.risk_field_value"}})],1):i("div",[i("currency-input",{model:{value:e.input_type.risk_field_value,callback:function(t){e.$set(e.input_type,"risk_field_value",t)},expression:"input_type.risk_field_value"}})],1)]):"integer"===e.input_type.risk_type_field_enum?i("div",[!0===e.isReadonly?i("div",[i("el-input-number",{attrs:{"controls-position":"right",min:1,disabled:""},model:{value:e.input_type.risk_field_value,callback:function(t){e.$set(e.input_type,"risk_field_value",t)},expression:"input_type.risk_field_value"}})],1):i("div",[i("el-input-number",{attrs:{"controls-position":"right",min:1},on:{blur:function(t){e.intchange(e.input_type.risk_type_field_name,e.input_type.risk_field_value)}},model:{value:e.input_type.risk_field_value,callback:function(t){e.$set(e.input_type,"risk_field_value",t)},expression:"input_type.risk_field_value"}})],1)]):"float"===e.input_type.risk_type_field_enum?i("div",[!0===e.isReadonly?i("div",[i("el-input",{attrs:{"controls-position":"right",min:1,readonly:""},model:{value:e.input_type.risk_field_value,callback:function(t){e.$set(e.input_type,"risk_field_value",e._n(t))},expression:"input_type.risk_field_value"}})],1):i("div",[i("el-input",{attrs:{"controls-position":"right",min:1},on:{blur:function(t){e.intchange(e.input_type.risk_type_field_name,e.input_type.risk_field_value)},change:function(t){e.intchange(e.input_type.risk_type_field_name,e.input_type.risk_field_value)}},model:{value:e.input_type.risk_field_value,callback:function(t){e.$set(e.input_type,"risk_field_value",e._n(t))},expression:"input_type.risk_field_value"}})],1)]):"date"===e.input_type.risk_type_field_enum?i("div",[!0===e.isReadonly?i("div",[i("el-date-picker",{key:"date-input",attrs:{type:"date",placeholder:e.input_type.risk_type_field_name,format:"MM/dd/yyyy",readonly:""},model:{value:e.input_type.risk_field_value,callback:function(t){e.$set(e.input_type,"risk_field_value",t)},expression:"input_type.risk_field_value"}})],1):i("div",[i("el-date-picker",{key:"date-input",attrs:{type:"date",placeholder:e.input_type.risk_type_field_name,format:"MM/dd/yyyy"},on:{change:function(t){e.datechange(e.input_type.risk_type_field_name,e.input_type.risk_field_value)}},model:{value:e.input_type.risk_field_value,callback:function(t){e.$set(e.input_type,"risk_field_value",t)},expression:"input_type.risk_field_value"}})],1)]):i("div",[!0===e.isReadonly?i("div",[i("el-input",{key:"email-input",attrs:{placeholder:e.input_type.risk_type_field_name,readonly:""},model:{value:e.input_type.risk_field_value,callback:function(t){e.$set(e.input_type,"risk_field_value",t)},expression:"input_type.risk_field_value"}})],1):i("div",[i("el-input",{key:"email-input",attrs:{placeholder:e.input_type.risk_type_field_name},on:{blur:function(t){e.textchange(e.input_type.risk_type_field_name,e.input_type.risk_field_value)},change:function(t){e.textchange(e.input_type.risk_type_field_name,e.input_type.risk_field_value)}},model:{value:e.input_type.risk_field_value,callback:function(t){e.$set(e.input_type,"risk_field_value",t)},expression:"input_type.risk_field_value"}})],1)])])},staticRenderFns:[]};var o=i("VU/8")(a,l,!1,function(e){i("Gctj")},"data-v-2882112a",null);t.a=o.exports},bVjt:function(e,t,i){(e.exports=i("FZ+f")(!1)).push([e.i,"\n.input[data-v-1c758bcb] {\r\n  border: 1px solid #888;\r\n  font-size: 0.8rem;\r\n  padding: 0.5rem;\n}\r\n",""])},iFHW:function(e,t,i){var n=i("bVjt");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i("rjj0")("08c9748f",n,!0)}});