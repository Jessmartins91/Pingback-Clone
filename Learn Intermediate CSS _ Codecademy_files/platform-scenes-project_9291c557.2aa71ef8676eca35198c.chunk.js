(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[615],{KgJJ:function(e,t,r){"use strict";r.r(t),r.d(t,"ProjectPage",(function(){return ProjectPage}));var n=r("rePB"),o=r("MKeS"),s=r("q1tI"),c=r.n(s),i=r("/MKj"),l=r("Tqhk"),a=r("wE9P"),u=r("2oex");const h=Object(o.a)({resolved:{},chunkName:()=>"platform-scenes-project-project",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.all([r.e(111),r.e(145),r.e(392),r.e(471),r.e(206),r.e(164),r.e(287),r.e(6),r.e(456),r.e(411),r.e(112),r.e(406),r.e(431),r.e(78),r.e(50),r.e(73)]).then(r.bind(null,"pW1L")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return"pW1L"}}),m=Object(o.a)({resolved:{},chunkName:()=>"platform-scenes-project-legacy-projects",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!r.m[t]},importAsync:()=>Promise.all([r.e(94),r.e(141),r.e(103),r.e(109),r.e(393),r.e(151),r.e(69),r.e(98),r.e(111),r.e(145),r.e(392),r.e(35),r.e(9),r.e(160),r.e(63),r.e(164),r.e(404),r.e(51),r.e(456),r.e(364),r.e(110),r.e(219),r.e(108),r.e(398),r.e(235),r.e(284),r.e(112),r.e(53),r.e(412),r.e(416),r.e(406),r.e(453),r.e(431),r.e(240)]).then(r.bind(null,"yZ2X")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return r(t)},resolve(){return"yZ2X"}}),mapStateToProps=(e,{currentContentItem:t})=>({currentContentItemProgress:Object(a.a)(e,t),enableLENext:Object(u.p)(e)});class ProjectPage extends s.Component{constructor(...e){super(...e),Object(n.a)(this,"onProjectComplete",(()=>{const e=this.props,t=e.showNextContentInterstitial,r=e.next;t?t():r&&r()}))}track(e={}){const t=this.props,r=t.currentContentItem,n=t.trackVisit;e.currentContentItem!==r&&n&&n()}componentDidMount(){this.track()}componentDidUpdate(e){this.track(e)}render(){const e=this.props,t=e.currentContentItem,r=e.currentContentItemProgress,n=e.currentCourse,o=e.disabled,s=e.enableLENext,a=e.exitPaths,u=e.prerender,d=e.redirectToContainerCourse;return r?c.a.createElement(l.a,null,s?c.a.createElement(h,{exitPaths:a,currentContentItem:t,currentProjectProgress:r,course:n,onProjectComplete:this.onProjectComplete}):c.a.createElement("div",null,c.a.createElement(i.ReactReduxContext.Consumer,null,(({store:e})=>c.a.createElement(m,{store:e,currentProject:t,currentProjectProgress:r,disabled:o,exitPaths:a,prerender:u,redirectToContainerCourse:d,isLintingDisabled:!1,course:n,onProjectComplete:this.onProjectComplete}))))):null}}t.default=Object(i.connect)(mapStateToProps)(ProjectPage)}}]);
//# sourceMappingURL=platform-scenes-project~9291c557.2aa71ef8676eca35198c.chunk.js.map