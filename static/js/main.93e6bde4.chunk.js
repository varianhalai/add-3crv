(this["webpackJsonpadd-3crv"]=this["webpackJsonpadd-3crv"]||[]).push([[0],{140:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),s=n.n(r),c=n(9),o=n.n(c),i=(n(83),n(20)),d=n(21),l=n(24),h=n(22),j=(n(84),n(70)),u=n(39),b=n.n(u),k=n(53),m=n(6),p=n.n(m),O=n.p+"static/media/switch-network.7edd19b2.jpg",v=function(e){var t="";switch(e){case"1":t="The Main Ethereum Network";break;case"2":t="The OLD Ropsten Test Network";break;case"3":t="The Ropsten Test Network";break;case"4":t="The Rinkeby Test Network";break;case"42":t="The Kovan Test Network";break;default:t="Network #".concat(e)}return t},g=function(e){var t=e.net,n=e.tokenNet;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Add Token"}),Object(a.jsx)("h2",{children:"Wrong Network Detected"}),Object(a.jsxs)("p",{children:["You have ",v(t)," selected, but this token requires ",v(n),". Please switch the current network in your web3 client."]}),Object(a.jsx)("p",{children:"You can switch your current network in MetaMask like this:"}),Object(a.jsx)("img",{src:O,alt:"Network can be switched in the MetaMask network menu in the top right hand corner."})]})},x=n(182),f=n(173),w=n(177),y=n(178),N=n(179),T=n(180),M=n.p+"static/media/download-metamask.d5ed3214.png",A=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("a",{href:"https://metamask.io",children:Object(a.jsx)("img",{className:"downloadButton",src:M,alt:"Download MetaMask"})})}}]),n}(r.Component),C=n(71),S=n.n(C),D=n(54),q=n.n(D),E=n(38),F=n.p+"static/media/coin.3036f619.jpg",I=n(36),P=n.n(I),R=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(i.a)(this,n);var r=e.tokenName,s=void 0===r?"3CRV":r,c=e.tokenSymbol,o=void 0===c?"3CRV":c,d=e.tokenDecimals,l=void 0===d?18:d,h=e.tokenAddress,j=void 0===h?"0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490":h,u=e.tokenImage,b=void 0===u?"https://assets.coingecko.com/coins/images/12972/large/3pool_128.png?1603948039":u,k=e.tokenNet,m=void 0===k?"1":k,p=e.message,O=void 0===p?"":p,v=e.errorMessage,g=void 0===v?"":v,x=e.net,f=void 0===x?"1":x;(a=t.call(this)).state={tokenName:s,tokenSymbol:o,tokenDecimals:l,tokenAddress:j,tokenImage:b,tokenNet:m,message:O,errorMessage:g,net:f};var w=window.location.search,y=P.a.parse(w);for(var N in y)a.state[N]=y[N];return a.updateNet(),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.location.search,t=P.a.parse(e);this.setState(t)}},{key:"updateNet",value:function(){var e=Object(k.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.web3.currentProvider,n=new S.a(t),e.next=4,n.net_version();case 4:a=e.sent,this.setState({net:a});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(e){var t,n=this,r=this.state,s=r.tokenName,c=r.tokenSymbol,o=r.tokenDecimals,i=r.tokenNet,d=r.net,l=r.tokenImage,h=r.tokenAddress,j=r.message;return""!==r.errorMessage&&(t=Object(a.jsxs)("p",{className:"errorMessage",children:["There was a problem adding this token to your wallet. Make sure you have the latest version of MetaMask installed!",Object(a.jsx)(A,{})]})),i!==d?Object(a.jsx)(g,{net:d,tokenNet:i}):Object(a.jsxs)("div",{className:"values",children:[Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:l||F,className:"logo",alt:"Coin"}),Object(a.jsxs)("h1",{className:"App-title",children:["Watch ",s]})]}),Object(a.jsx)(f.a,{children:Object(a.jsxs)(w.a,{children:[Object(a.jsxs)(y.a,{children:[Object(a.jsx)(N.a,{children:"Symbol"}),Object(a.jsx)(N.a,{children:c})]}),Object(a.jsxs)(y.a,{children:[Object(a.jsx)(N.a,{children:"Decimals"}),Object(a.jsx)(N.a,{children:o})]})]})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{onClick:function(){var e=n.state,t=e.tokenAddress,a=e.net;window.location.href=q.a.createAccountLink(t,a)},href:q.a.createAccountLink(h,d),children:"View on Etherscan"}),Object(a.jsx)(x.a,{onClick:function(){var e=Object(k.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({errorMessage:"",message:""}),window.web3.currentProvider.sendAsync({method:"metamask_watchAsset",params:{type:"ERC20",options:{address:h,symbol:c,decimals:o,image:l}},id:Math.round(1e5*Math.random())},(function(e,t){console.log("provider returned",e,t),e?n.setState({errorMessage:"An error has occurred, token could not be added.",message:""}):t.result?n.setState({errorMessage:"",message:"".concat(s," was added to wallet!")}):n.setState({errorMessage:"",message:"".concat(s," has not been added to wallet.")})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Watch in Wallet"})]}),Object(a.jsx)("p",{children:j}),t,Object(a.jsx)("div",{className:"spacer"}),Object(a.jsx)(T.a,{gutterBottom:!0,noWrap:!0,children:"\n            Create a simple page to watch your token with one click.\n          "}),Object(a.jsx)(E.c,{to:"/edit",children:Object(a.jsx)(x.a,{children:"Create Page"})})]})}}]),n}(r.Component);R.contextTypes={web3:p.a.object};var L=R,W=n(181),_={title:"Token Details",properties:{tokenName:{type:"string",title:"Token Name",default:"My Token",required:!0},tokenAddress:{type:"string",title:"Token Address",required:!0},tokenSymbol:{type:"string",title:"Token Symbol",default:"TKN",required:!0},tokenDecimals:{type:"number",title:"Token Decimals",default:18,required:!0},tokenNet:{type:"number",title:"Token Network Id",default:1,required:!0},tokenImage:{type:"string",title:"Token Image URL (optional)",required:!1}}},B=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"my-form",children:[Object(a.jsx)("h1",{children:"Enter Token Details"}),Object(a.jsx)("p",{children:"To create an easy token-suggesting page."}),Object(a.jsxs)("div",{className:"form-content",children:[Object.keys(_.properties).map((function(t){return Object(a.jsx)("div",{children:Object(a.jsx)(W.a,{id:t,required:_.properties[t].required,errormessage:e.state[t+"Error"],label:_.properties[t].title,margin:"normal"})},t)})),Object(a.jsx)(x.a,{onClick:this.visitForm,children:"Create Add Token Page"})]})]})}},{key:"visitForm",value:function(){var e={};["tokenImage","tokenName","tokenAddress","tokenNet","tokenSymbol","tokenDecimals"].forEach((function(t){var n=document.querySelector("#"+t);n&&(e[t]=n.value)})),window.location.href="./add?"+P.a.stringify(e)}}]),n}(r.Component),V=n(11),Y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(e,t){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("a",{className:"github-banner",href:"https://github.com/MetaMask/Add-Token",children:Object(a.jsx)("img",{src:"https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png",alt:"Fork me on GitHub"})}),Object(a.jsx)(j.Web3Provider,{web3UnavailableScreen:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"You need a web3 browser like MetaMask to use this site and manage cryptocurrencies."}),Object(a.jsx)(A,{})]})},children:Object(a.jsx)(E.a,{basename:"/add-3crv",children:Object(a.jsx)(E.b,{hashType:"noslash",children:Object(a.jsxs)(V.c,{children:[Object(a.jsx)(V.a,{path:"/edit",component:B}),Object(a.jsx)(V.a,{path:"/add",component:L}),Object(a.jsx)(V.a,{path:"/",component:L})]})})})})]})}}]),n}(r.Component),J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,184)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(Y,{})}),document.getElementById("root")),J()},83:function(e,t,n){},84:function(e,t,n){}},[[140,1,2]]]);
//# sourceMappingURL=main.93e6bde4.chunk.js.map