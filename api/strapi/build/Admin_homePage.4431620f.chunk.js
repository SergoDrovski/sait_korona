"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3981],{24692:(ae,M,a)=>{a.r(M),a.d(M,{default:()=>te});var e=a(67294),h=a(97132),m=a(71893),H=a(15482),x=a(49656),s=a(95489),n=a(28702);const L=a.p+"7e9af4fb7e723fcebf1f.svg";var P=a(48474);const G=t=>Object.entries(t).every(([,r])=>Object.entries(r).every(([,o])=>o));var c=a(41363),w=a(45697),i=a.n(w),R=a(96392),I=a(89285),p=a(99872);const E=({type:t,title:r,number:o,content:l,hasLine:d})=>{const{formatMessage:f}=(0,h.useIntl)();return e.createElement(n.Box,null,e.createElement(n.Flex,null,e.createElement(n.Box,{minWidth:(0,s.pxToRem)(30),marginRight:5},e.createElement(R.Z,{type:t,number:o})),e.createElement(n.Typography,{variant:"delta",as:"h3"},f(r))),e.createElement(n.Flex,{alignItems:"flex-start"},e.createElement(n.Flex,{justifyContent:"center",minWidth:(0,s.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},d&&e.createElement(I.Z,{type:t,minHeight:t===p.lW?(0,s.pxToRem)(85):(0,s.pxToRem)(65)})),e.createElement(n.Box,{marginTop:2},t===p.lW&&l)))};E.defaultProps={content:void 0,number:void 0,type:p.VM,hasLine:!0},E.propTypes={content:i().node,number:i().number,title:i().shape({id:i().string,defaultMessage:i().string}).isRequired,type:i().oneOf([p.lW,p.hx,p.VM]),hasLine:i().bool};const D=E,W=(t,r)=>t===-1||r<t?p.hx:r>t?p.VM:p.lW,b=({sections:t,currentSectionKey:r})=>{const o=t.findIndex(l=>l.key===r);return e.createElement(n.Box,null,t.map((l,d)=>e.createElement(D,{key:l.key,title:l.title,content:l.content,number:d+1,type:W(o,d),hasLine:d!==t.length-1})))};b.defaultProps={currentSectionKey:void 0},b.propTypes={sections:i().arrayOf(i().shape({key:i().string.isRequired,title:i().shape({id:i().string,defaultMessage:i().string}).isRequired,content:i().node})).isRequired,currentSectionKey:i().string};const j=b;var F=a(64729);const O=()=>{const{guidedTourState:t,setSkipped:r}=(0,s.useGuidedTour)(),{formatMessage:o}=(0,h.useIntl)(),{trackUsage:l}=(0,s.useTracking)(),d=Object.entries(F.Z).map(([u,g])=>({key:u,title:g.home.title,content:e.createElement(s.LinkButton,{onClick:()=>l(g.home.trackingEvent),to:g.home.cta.target,endIcon:e.createElement(c.ArrowRight,null)},o(g.home.cta.title))})),T=d.map(u=>({isDone:Object.entries(t[u.key]).every(([,g])=>g),...u})).find(u=>!u.isDone)?.key,B=()=>{r(!0),l("didSkipGuidedtour")};return e.createElement(n.Box,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},e.createElement(n.Stack,{spacing:6},e.createElement(n.Typography,{variant:"beta",as:"h2"},o({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),e.createElement(j,{sections:d,currentSectionKey:T})),e.createElement(n.Flex,{justifyContent:"flex-end"},e.createElement(n.Button,{variant:"tertiary",onClick:B},o({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))};var A=a(80994),v=a(36182);const $=(0,m.default)(c.Discord)`
  path {
    fill: #7289da !important;
  }
`,V=(0,m.default)(c.Reddit)`
  > path:first-child {
    fill: #ff4500;
  }
`,S=(0,m.default)(c.Strapi)`
  > path:first-child {
    fill: #4945ff;
  }
  > path:nth-child(2) {
    fill: #fff;
  }
  > path:nth-child(4) {
    fill: #9593ff;
  }
`,z=(0,m.default)(c.Twitter)`
  path {
    fill: #1da1f2 !important;
  }
`,K=(0,m.default)(c.Discourse)`
  > path:first-child {
    fill: #231f20;
  }
  > path:nth-child(2) {
    fill: #fff9ae;
  }
  > path:nth-child(3) {
    fill: #00aeef;
  }
  > path:nth-child(4) {
    fill: #00a94f;
  }
  > path:nth-child(5) {
    fill: #f15d22;
  }
  > path:nth-child(6) {
    fill: #e31b23;
  }
`,Z=[{name:{id:"app.components.HomePage.community.links.github",defaultMessage:"Github"},link:"https://github.com/strapi/strapi/",icon:e.createElement(c.Github,{fill:"#7289DA"}),alt:"github"},{name:{id:"app.components.HomePage.community.links.discord",defaultMessage:"Discord"},link:"https://discord.strapi.io/",icon:e.createElement($,null),alt:"discord"},{name:{id:"app.components.HomePage.community.links.reddit",defaultMessage:"Reddit"},link:"https://www.reddit.com/r/Strapi/",icon:e.createElement(V,null),alt:"reddit"},{name:{id:"app.components.HomePage.community.links.twitter",defaultMessage:"Twitter"},link:"https://twitter.com/strapijs",icon:e.createElement(z,null),alt:"twitter"},{name:{id:"app.components.HomePage.community.links.forum",defaultMessage:"Forum"},link:"https://forum.strapi.io",icon:e.createElement(K,null),alt:"forum"},{name:{id:"app.components.HomePage.community.links.blog",defaultMessage:"Blog"},link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:e.createElement(S,null),alt:"blog"},{name:{id:"app.components.HomePage.community.links.career",defaultMessage:"We are hiring!"},link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:e.createElement(S,null),alt:"career"}],U=(0,m.default)(A.Q)`
  display: flex;
  align-items: center;
  border: none;

  svg {
    width: ${({theme:t})=>t.spaces[6]};
    height: ${({theme:t})=>t.spaces[6]};
  }

  span {
    word-break: keep-all;
  }
`,J=(0,m.default)(n.Grid)`
  row-gap: ${({theme:t})=>t.spaces[2]};
  column-gap: ${({theme:t})=>t.spaces[4]};
`,N=()=>{const{formatMessage:t}=(0,h.useIntl)(),{communityEdition:r}=(0,s.useAppInfos)(),o=[...Z,{icon:e.createElement(S,null),link:r?"https://discord.strapi.io":"https://support.strapi.io/support/home",name:{id:"Settings.application.get-help",defaultMessage:"Get help"}}];return e.createElement(n.Box,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},e.createElement(n.Box,{paddingBottom:7},e.createElement(n.Stack,{spacing:5},e.createElement(n.Stack,{spacing:3},e.createElement(n.Typography,{variant:"delta",as:"h2",id:"join-the-community"},t({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),e.createElement(n.Typography,{textColor:"neutral600"},t({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),e.createElement(v.r,{href:"https://feedback.strapi.io/",isExternal:!0,endIcon:e.createElement(c.ExternalLink,null)},t({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),e.createElement(J,null,o.map(({icon:l,link:d,name:f})=>e.createElement(n.GridItem,{col:6,s:12,key:f},e.createElement(U,{size:"L",startIcon:l,variant:"tertiary",href:d,isExternal:!0},t(f))))))},Q=(0,m.default)(n.Typography)`
  word-break: break-word;
`,Y=(0,m.default)(n.Stack)`
  align-items: flex-start;
`,C=({hasCreatedContentType:t,onCreateCT:r})=>{const{formatMessage:o}=(0,h.useIntl)();return e.createElement("div",null,e.createElement(n.Box,{paddingLeft:6,paddingBottom:10},e.createElement(Y,{spacing:5},e.createElement(n.Typography,{as:"h1",variant:"alpha"},o(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \u{1F44B}"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),e.createElement(Q,{textColor:"neutral600",variant:"epsilon"},o(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?e.createElement(v.r,{isExternal:!0,href:"https://strapi.io/blog"},o({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):e.createElement(n.Button,{size:"L",onClick:r,endIcon:e.createElement(c.ArrowRight,null)},o({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};C.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},C.propTypes={hasCreatedContentType:i().bool,onCreateCT:i().func};const X=C,k=m.default.a`
  text-decoration: none;
`,q=()=>{const{formatMessage:t}=(0,h.useIntl)(),{trackUsage:r}=(0,s.useTracking)(),o=l=>{r(l)};return e.createElement(n.Stack,{spacing:5},e.createElement(k,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonReadTheDocumentationSection")},e.createElement(s.ContentBox,{title:t({id:"global.documentation",defaultMessage:"Documentation"}),subtitle:t({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:e.createElement(c.InformationSquare,null),iconBackground:"primary100"})),e.createElement(k,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonCodeExampleSection")},e.createElement(s.ContentBox,{title:t({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:t({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:e.createElement(c.CodeSquare,null),iconBackground:"warning100"})),e.createElement(k,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonTutorialSection")},e.createElement(s.ContentBox,{title:t({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:t({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:e.createElement(c.PlaySquare,null),iconBackground:"secondary100"})),e.createElement(k,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow",onClick:()=>o("didClickonBlogSection")},e.createElement(s.ContentBox,{title:t({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:t({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:e.createElement(c.FeatherSquare,null),iconBackground:"alternative100"})))},_=(0,m.default)(n.Box)`
  position: absolute;
  top: 0;
  right: 0;

  img {
    width: ${150/16}rem;
  }
`,ee=()=>{const{collectionTypes:t,singleTypes:r,isLoading:o}=(0,P.bP)(),{guidedTourState:l,isGuidedTourVisible:d,isSkipped:f}=(0,s.useGuidedTour)(),T=!G(l)&&d&&!f,{push:B}=(0,x.useHistory)(),u=y=>{y.preventDefault(),B("/plugins/content-type-builder/content-types/create-content-type")},g=(0,e.useMemo)(()=>{const y=ne=>ne.filter(oe=>oe.isDisplayed);return y(t).length>1||y(r).length>0},[t,r]);return o?e.createElement(s.LoadingIndicatorPage,null):e.createElement(n.Layout,null,e.createElement(h.FormattedMessage,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},y=>e.createElement(H.Helmet,{title:y[0]})),e.createElement(n.Main,null,e.createElement(_,null,e.createElement("img",{alt:"","aria-hidden":!0,src:L})),e.createElement(n.Box,{padding:10},e.createElement(n.Grid,null,e.createElement(n.GridItem,{col:8,s:12},e.createElement(X,{onCreateCT:u,hasCreatedContentType:g}))),e.createElement(n.Grid,{gap:6},e.createElement(n.GridItem,{col:8,s:12},T?e.createElement(O,null):e.createElement(q,null)),e.createElement(n.GridItem,{col:4,s:12},e.createElement(N,null))))))},te=(0,e.memo)(ee)}}]);
