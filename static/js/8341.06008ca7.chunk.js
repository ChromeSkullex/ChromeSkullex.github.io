"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[8341],{8341:(t,s,e)=>{e.r(s),e.d(s,{queryNamedTraceConfigurations:()=>f});var r=e(3825),a=e(54994),n=e(35143),o=e(42553),i=e(46053),c=(e(81806),e(76460),e(47249),e(85842)),g=e(99666);let u=class extends o.oY{constructor(t){super(t),this.namedTraceConfigurations=[]}};(0,n._)([(0,i.MZ)({type:[g.A],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],u.prototype,"namedTraceConfigurations",void 0),u=(0,n._)([(0,c.$)("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],u);const l=u;async function f(t,s,e){const n=(0,a.Dl)(t),o=s.toJSON();s.globalIds&&s.globalIds.length>0&&(o.globalIds=JSON.stringify(s.globalIds)),s.creators&&s.creators.length>0&&(o.creators=JSON.stringify(s.creators)),s.tags&&s.tags.length>0&&(o.tags=JSON.stringify(s.tags)),s.names&&s.names.length>0&&(o.names=JSON.stringify(s.names));const i={...o,f:"json"},c=(0,a.lF)({...n.query,...i}),g=(0,a.jV)(c,{...e,method:"post"}),u="".concat(n.path,"/traceConfigurations/query"),{data:f}=await(0,r.A)(u,g);return l.fromJSON(f)}}}]);
//# sourceMappingURL=8341.06008ca7.chunk.js.map