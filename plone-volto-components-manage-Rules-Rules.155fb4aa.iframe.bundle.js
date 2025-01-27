"use strict";(self.webpackChunk_plone_volto=self.webpackChunk_plone_volto||[]).push([[2684],{"./src/actions/rules/rules.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{K2:function(){return getAction},Mv:function(){return getControlPanelRule},OO:function(){return addNewRule},Oi:function(){return removeCondition},Om:function(){return applyRulesToSubfolders},Os:function(){return getControlPanelRules},Q5:function(){return removeAction},QB:function(){return enableRules},QG:function(){return moveRuleCondition},S_:function(){return deleteControlPanelRule},Up:function(){return getCondition},VP:function(){return addRule},YL:function(){return moveRuleAction},_:function(){return getContentRulesEvents},aW:function(){return removeRules},gB:function(){return editAction},gV:function(){return disableRules},gz:function(){return getRules},m4:function(){return unapplyRulesToSubfolders},m_:function(){return editCondition},oh:function(){return addCondition},oz:function(){return editRule},pw:function(){return addAction}});var _home_runner_work_volto_introduction_block_volto_introduction_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/ActionTypes.js");function getRules(url){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.Ib,request:{op:"get",path:`${url}/@content-rules`}}}function getControlPanelRules(url){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.cl,request:{op:"get",path:`${url}/@controlpanels/content-rules`}}}function getControlPanelRule(url,rule){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.M7,request:{op:"get",path:`${url}/@controlpanels/content-rules/${rule}`}}}function enableRules(url,rules){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.SE,request:{op:"patch",path:`${url}/@content-rules`,data:{"form.button.Enable":!0,rule_ids:rules}}}}function disableRules(url,rules){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.uE,request:{op:"patch",path:`${url}/@content-rules`,data:{"form.button.Disable":!0,rule_ids:rules}}}}function applyRulesToSubfolders(url,rules){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.Q9,request:{op:"patch",path:`${url}/@content-rules`,data:{"form.button.Bubble":!0,rule_ids:rules}}}}function unapplyRulesToSubfolders(url,rules){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.gZ,request:{op:"patch",path:`${url}/@content-rules`,data:{"form.button.NoBubble":!0,rule_ids:rules}}}}function removeRules(url,rules){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.u_,request:{op:"del",path:`${url}/@content-rules`,data:{"form.button.Delete":!0,rule_ids:rules}}}}function addRule(url,rule){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.$Y,request:{op:"post",path:`${url}/@content-rules/${rule}`}}}function deleteControlPanelRule(url,rule){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.Ih,request:{op:"del",path:`${url}/@controlpanels/content-rules/${rule}`}}}function getContentRulesEvents(url){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.oh,request:{op:"get",path:`${url}/@vocabularies/plone.contentrules.events`}}}function addNewRule(url,data){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.iy,request:{op:"post",path:`${url}/@controlpanels/content-rules`,data:data}}}function moveRuleCondition(url,data,ruleId,condId){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.gz,request:{op:"patch",path:`${url}/@controlpanels/content-rules/${ruleId}/condition/${condId}`,data:data}}}function moveRuleAction(url,data,ruleId,actionId){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.gz,request:{op:"patch",path:`${url}/@controlpanels/content-rules/${ruleId}/action/${actionId}`,data:data}}}function editRule(url,data,rule){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.sV,request:{op:"patch",path:`${url}/@controlpanels/content-rules/${rule}`,data:(0,_home_runner_work_volto_introduction_block_volto_introduction_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.c)({"form.button.Save":!0},data)}}}function removeCondition(url,rule,condition){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.k$,request:{op:"del",path:`${url}/@controlpanels/content-rules/${rule}/condition/${condition}`}}}function addCondition(url,rule,data){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.wP,request:{op:"post",path:`${url}/@controlpanels/content-rules/${rule}/condition`,data:data}}}function editCondition(url,rule,data,condition_index){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.i2,request:{op:"patch",path:`${url}/@controlpanels/content-rules/${rule}/condition/${condition_index}`,data:data}}}function getCondition(url,rule,condition_index){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.dz,request:{op:"get",path:`${url}/@controlpanels/content-rules/${rule}/condition/${condition_index}`}}}function removeAction(url,rule,action){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.cB,request:{op:"del",path:`${url}/@controlpanels/content-rules/${rule}/action/${action}`}}}function addAction(url,rule,data){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.ee,request:{op:"post",path:`${url}/@controlpanels/content-rules/${rule}/action`,data:data}}}function editAction(url,rule,data,action_index){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.U5,request:{op:"patch",path:`${url}/@controlpanels/content-rules/${rule}/action/${action_index}`,data:data}}}function getAction(url,rule,action_index){return{type:_plone_volto_constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__.CC,request:{op:"get",path:`${url}/@controlpanels/content-rules/${rule}/action/${action_index}`}}}},"./src/components/manage/Rules/Rules.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);var _home_runner_work_volto_introduction_block_volto_introduction_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("../../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/Helmet/Helmet.jsx"),react_redux__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../../node_modules/.pnpm/react-redux@8.1.2_@types+react-dom@18.2.12_@types+react@18.2.27_react-dom@18.2.0_react@18.2.0__react@18.2.0_redux@4.2.1/node_modules/react-redux/es/index.js"),redux__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__("../../../node_modules/.pnpm/redux@4.2.1/node_modules/redux/es/redux.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__("../../../node_modules/.pnpm/react-router-dom@5.2.0_react@18.2.0/node_modules/react-router-dom/esm/react-router-dom.js"),react_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Container/Container.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/collections/Table/Table.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/addons/Select/Select.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("../../../node_modules/.pnpm/semantic-ui-react@2.1.5_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/semantic-ui-react/dist/es/modules/Checkbox/Checkbox.js"),react_intl__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/index.js"),react_intl__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/message.js"),react_intl__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__("../../../node_modules/.pnpm/react-intl@3.12.1_react@18.2.0/node_modules/react-intl/lib/components/injectIntl.js"),_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/helpers/Url/Url.js"),_plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__("./src/actions/rules/rules.js"),_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/theme/Icon/Icon.jsx"),_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/manage/Toolbar/Toolbar.jsx"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/icons/back.svg"),_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_7__),_plone_volto_icons_check_svg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/icons/check.svg"),_plone_volto_icons_check_svg__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_plone_volto_icons_check_svg__WEBPACK_IMPORTED_MODULE_8__),react_toastify__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("../../../node_modules/.pnpm/react-toastify@5.5.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-toastify/esm/react-toastify.js"),_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/manage/Toast/Toast.jsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const messages=(0,react_intl__WEBPACK_IMPORTED_MODULE_10__.defineMessages)({back:{id:"Back",defaultMessage:"Back"},rules:{id:"Rules",defaultMessage:"Rules"},success:{id:"Success",defaultMessage:"Success"},add:{id:"Added",defaultMessage:"Added"},enable:{id:"Enabled",defaultMessage:"Enabled"},disable:{id:"Disabled",defaultMessage:"Disabled"},apply:{id:"Applied to subfolders",defaultMessage:"Applied to subfolders"},unapply:{id:"Disabled apply to subfolders",defaultMessage:"Disabled apply to subfolders"},remove:{id:"Unassigned",defaultMessage:"Unassigned"},select_rule:{id:"Select rule",defaultMessage:"Select rule"}});class Rules extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props),(0,_home_runner_work_volto_introduction_block_volto_introduction_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__.c)(this,"handleCheckRule",(rule=>{const rules=this.state.checkedRules;if(rules.includes(rule)){const index=rules.indexOf(rule);if(index>-1){let newRules=rules;newRules.splice(index,1),this.setState({checkedRules:newRules})}}else this.setState({checkedRules:[...this.state.checkedRules,rule]})})),(0,_home_runner_work_volto_introduction_block_volto_introduction_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__.c)(this,"handleDisableRules",(()=>{this.props.disableRules((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname),this.state.checkedRules)})),(0,_home_runner_work_volto_introduction_block_volto_introduction_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__.c)(this,"handleEnableRules",(()=>{this.props.enableRules((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname),this.state.checkedRules)})),(0,_home_runner_work_volto_introduction_block_volto_introduction_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__.c)(this,"handleApplyToSubfolder",(()=>{this.props.applyRulesToSubfolders((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname),this.state.checkedRules)})),(0,_home_runner_work_volto_introduction_block_volto_introduction_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__.c)(this,"handleUnapplyToSubfolder",(()=>{this.props.unapplyRulesToSubfolders((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname),this.state.checkedRules)})),(0,_home_runner_work_volto_introduction_block_volto_introduction_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__.c)(this,"handleRemoveRules",(()=>{this.props.removeRules((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname),this.state.checkedRules)})),(0,_home_runner_work_volto_introduction_block_volto_introduction_block_node_modules_pnpm_babel_runtime_7_20_6_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__.c)(this,"handleAddRule",(()=>{this.props.addRule((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname),this.state.newRule)})),this.state={isClient:!1,checkedRules:[],newRule:""}}componentDidMount(){this.props.getRules((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname)),this.setState({isClient:!0})}componentDidUpdate(prevProps,prevState){}UNSAFE_componentWillReceiveProps(nextProps){this.props.rules.add.loading&&nextProps.rules.add.loaded&&(this.props.getRules((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname)),this.setState({newRule:""}),react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_9__.c,{success:!0,title:this.props.intl.formatMessage(messages.success),content:this.props.intl.formatMessage(messages.add)}))),this.props.rules.disable.loading&&nextProps.rules.disable.loaded&&(this.props.getRules((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname)),this.setState({checkedRules:[]}),react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_9__.c,{success:!0,title:this.props.intl.formatMessage(messages.success),content:this.props.intl.formatMessage(messages.disable)}))),this.props.rules.enable.loading&&nextProps.rules.enable.loaded&&(this.props.getRules((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname)),this.setState({checkedRules:[]}),react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_9__.c,{success:!0,title:this.props.intl.formatMessage(messages.success),content:this.props.intl.formatMessage(messages.enable)}))),this.props.rules.apply.loading&&nextProps.rules.apply.loaded&&(this.props.getRules((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname)),this.setState({checkedRules:[]}),react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_9__.c,{success:!0,title:this.props.intl.formatMessage(messages.success),content:this.props.intl.formatMessage(messages.apply)}))),this.props.rules.unapply.loading&&nextProps.rules.unapply.loaded&&(this.props.getRules((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname)),this.setState({checkedRules:[]}),react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_9__.c,{success:!0,title:this.props.intl.formatMessage(messages.success),content:this.props.intl.formatMessage(messages.unapply)}))),this.props.rules.remove.loading&&nextProps.rules.remove.loaded&&(this.props.getRules((0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname)),this.setState({checkedRules:[]}),react_toastify__WEBPACK_IMPORTED_MODULE_12__.toast.success(__jsx(_plone_volto_components_manage_Toast_Toast__WEBPACK_IMPORTED_MODULE_9__.c,{success:!0,title:this.props.intl.formatMessage(messages.success),content:this.props.intl.formatMessage(messages.remove)})))}render(){var _this$props$rules;const{acquired_rules:acquired_rules,assigned_rules:assigned_rules,assignable_rules:assignable_rules}=(null===(_this$props$rules=this.props.rules)||void 0===_this$props$rules?void 0:_this$props$rules.rules)||{};return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.c,{id:"rules"},__jsx(_plone_volto_helpers_Helmet_Helmet__WEBPACK_IMPORTED_MODULE_1__.c,{title:this.props.intl.formatMessage(messages.rules)}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c.Group,{raised:!0},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,{className:"primary"},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Content rules for {title}",defaultMessage:"Content rules for {title}",values:{title:__jsx("q",null,this.props.title)}})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,{secondary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"The following content rules are active in this Page. Use the content rules control panel to create new rules or delete or modify existing ones.",defaultMessage:"The following content rules are active in this Page. Use the content rules control panel to create new rules or delete or modify existing ones."}))),acquired_rules&&acquired_rules.length>0&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.Body,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Content rules from parent folders",defaultMessage:"Content rules from parent folders"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Active",defaultMessage:"Active"}))),acquired_rules.map(((rule,i)=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.Row,{key:i},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.Cell,null,rule.title,"(",rule.trigger,")"),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.Cell,null,rule.enabled&&__jsx("span",{style:{color:"green"}},__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.c,{name:_plone_volto_icons_check_svg__WEBPACK_IMPORTED_MODULE_8___default(),className:"contents circled",size:"10px"})))))))),assignable_rules&&assignable_rules.length>0&&__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_14__.c,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Available content rules:",defaultMessage:"Available content rules:"}),__jsx("div",{style:{display:"flex"}},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_17__.c,{placeholder:this.props.intl.formatMessage(messages.select_rule),value:this.state.newRule,onChange:(e,{value:value})=>this.setState({newRule:value}),options:assignable_rules.map(((rule,i)=>({key:rule.id,value:rule.id,text:rule.title})))}),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{onClick:this.handleAddRule,primary:!0,style:{marginLeft:"10px"}},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Add",defaultMessage:"Add"})))),assigned_rules&&assigned_rules.length>0&&__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.Body,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.Row,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Select",defaultMessage:"Select"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Active content rules in this Page",defaultMessage:"Active content rules in this Page"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Applies to subfolders?",defaultMessage:"Applies to subfolders?"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Enabled here?",defaultMessage:"Enabled here?"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.HeaderCell,null,__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Enabled?",defaultMessage:"Enabled?"}))),assigned_rules.map(((rule,i)=>__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.Row,{key:i},__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.Cell,null,__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_19__.c,{onChange:(o,{value:value})=>this.handleCheckRule(value),value:rule.id,checked:this.state.checkedRules.includes(rule.id)})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.Cell,null,rule.title,"(",rule.trigger,")"),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.Cell,null,rule.bubbles&&__jsx("span",{style:{color:"green"}},__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.c,{name:_plone_volto_icons_check_svg__WEBPACK_IMPORTED_MODULE_8___default(),className:"contents circled",size:"10px"}))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.Cell,null,rule.enabled&&__jsx("span",{style:{color:"green"}},__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.c,{name:_plone_volto_icons_check_svg__WEBPACK_IMPORTED_MODULE_8___default(),className:"contents circled",size:"10px"}))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_16__.c.Cell,null,rule.global_enabled&&__jsx("span",{style:{color:"green"}},__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.c,{name:_plone_volto_icons_check_svg__WEBPACK_IMPORTED_MODULE_8___default(),className:"contents circled",size:"10px"})))))))),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{onClick:this.handleEnableRules,primary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Enable",defaultMessage:"Enable"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{onClick:this.handleDisableRules,primary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Disable",defaultMessage:"Disable"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{onClick:this.handleApplyToSubfolder,primary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Apply to subfolders",defaultMessage:"Apply to subfolders"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{onClick:this.handleUnapplyToSubfolder,primary:!0},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Disable apply to subfolders",defaultMessage:"Disable apply to subfolders"})),__jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_18__.c,{color:"youtube",onClick:this.handleRemoveRules},__jsx(react_intl__WEBPACK_IMPORTED_MODULE_15__.c,{id:"Unassign",defaultMessage:"Unassign"}))),this.state.isClient&&(0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(__jsx(_plone_volto_components_manage_Toolbar_Toolbar__WEBPACK_IMPORTED_MODULE_6__.c,{pathname:this.props.pathname,hideDefaultViewButtons:!0,inner:__jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_20__.cH,{to:`${(0,_plone_volto_helpers_Url_Url__WEBPACK_IMPORTED_MODULE_4__.U$)(this.props.pathname)}`,className:"item"},__jsx(_plone_volto_components_theme_Icon_Icon__WEBPACK_IMPORTED_MODULE_5__.c,{name:_plone_volto_icons_back_svg__WEBPACK_IMPORTED_MODULE_7___default(),className:"contents circled",size:"30px",title:this.props.intl.formatMessage(messages.back)}))}),document.getElementById("toolbar")))}}__webpack_exports__.default=(0,redux__WEBPACK_IMPORTED_MODULE_21__.compose)(react_intl__WEBPACK_IMPORTED_MODULE_22__.cp,(0,react_redux__WEBPACK_IMPORTED_MODULE_2__.connect)(((state,props)=>{var _state$content$data;return{rules:state.rules,pathname:props.location.pathname,title:(null===(_state$content$data=state.content.data)||void 0===_state$content$data?void 0:_state$content$data.title)||""}}),{addRule:_plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_23__.VP,getRules:_plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_23__.gz,enableRules:_plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_23__.QB,disableRules:_plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_23__.gV,applyRulesToSubfolders:_plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_23__.Om,unapplyRulesToSubfolders:_plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_23__.m4,removeRules:_plone_volto_actions_rules_rules__WEBPACK_IMPORTED_MODULE_23__.aW}))(Rules),Rules.__docgenInfo={description:"Rules class.\n@class Rules\n@extends Component",methods:[{name:"handleCheckRule",docblock:"Rule check handler\n@method handleCheckRule\n@returns {undefined}",modifiers:[],params:[{name:"rule",optional:!1}],returns:{},description:"Rule check handler"},{name:"handleDisableRules",docblock:"Disable rules handler\n@method handleDisableRules\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"Disable rules handler"},{name:"handleEnableRules",docblock:"Enable rules handler\n@method handleEnableRules\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"Enable rules handler"},{name:"handleApplyToSubfolder",docblock:"Apply rules to subfolder handler\n@method handleApplyToSubfolder\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"Apply rules to subfolder handler"},{name:"handleUnapplyToSubfolder",docblock:"Unapply rules to subfolder handler\n@method handleUnapplyToSubfolder\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"Unapply rules to subfolder handler"},{name:"handleRemoveRules",docblock:"Remove rules handler\n@method handleRemoveRules\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"Remove rules handler"},{name:"handleAddRule",docblock:"Remove rules handler\n@method handleAddRule\n@returns {undefined}",modifiers:[],params:[],returns:{},description:"Remove rules handler"}],displayName:"Rules",props:{getRules:{description:"",type:{name:"func"},required:!0},addRule:{description:"",type:{name:"func"},required:!0},enableRules:{description:"",type:{name:"func"},required:!0},disableRules:{description:"",type:{name:"func"},required:!0},applyRulesToSubfolders:{description:"",type:{name:"func"},required:!0},unapplyRulesToSubfolders:{description:"",type:{name:"func"},required:!0},removeRules:{description:"",type:{name:"func"},required:!0},pathname:{description:"",type:{name:"string"},required:!0},title:{description:"",type:{name:"string"},required:!0}}}}}]);