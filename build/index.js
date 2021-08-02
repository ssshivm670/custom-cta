(window.webpackJsonp_custom_cta=window.webpackJsonp_custom_cta||[]).push([[1],{3:function(e,t,n){}}]),function(e){function t(t){for(var o,r,c=t[0],i=t[1],u=t[2],s=0,d=[];s<c.length;s++)r=c[s],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&d.push(l[r][0]),l[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(b&&b(t);d.length;)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var i=n[c];0!==l[i]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},l={0:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window.webpackJsonp_custom_cta=window.webpackJsonp_custom_cta||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var b=i;a.push([6,1]),n()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.components},,function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blocks},function(e,t,n){"use strict";n.r(t);var o=n(5),l=(n(3),n(0)),a=(n(4),n(1)),r=n(2);Object(o.registerBlockType)("create-block/custom-cta",{title:"Call to Action",description:"Block to generate a custom Call to Action",icon:"format-image",category:"layout",attributes:{title:{type:"string",source:"html",selector:"h2"},titleColor:{type:"string",default:"black"},bodyColor:{type:"string",default:"black"},body:{type:"string",source:"html",selector:"p"},backgroundImage:{type:"string",default:null},ctaLink:{type:"string",default:"#"},target:{type:"boolean",default:"_self"},alignment:{type:"string",default:"unset"},buttonPosition:{type:"string",default:"flex-start"}},edit:function({attributes:e,setAttributes:t}){const{title:n,titleColor:o,body:c,bodyColor:i,buttonText:u,buttonColor:b,borderRadius:s,backgroundImage:d,ctaLink:p,alignment:g,target:m,buttonPosition:f}=e;return[Object(l.createElement)(a.InspectorControls,{style:{marginBottom:"40px"}},Object(l.createElement)(r.PanelBody,{title:"CTA styles"},Object(l.createElement)("p",null,Object(l.createElement)("strong",null,"Select a Background Image:")),Object(l.createElement)(a.MediaUpload,{onSelect:function(e){t({backgroundImage:e.sizes.full.url})},type:"image",value:d,render:({open:e})=>Object(l.createElement)(r.IconButton,{className:"editor-media-placeholder__button is-button is-default is-large",icon:"upload",onClick:e},"Background Image")}),Object(l.createElement)(r.ToggleControl,{label:"Round Border",checked:s,onChange:function(e){t({borderRadius:e})}})),Object(l.createElement)(r.PanelBody,{title:"CTA link controls"},Object(l.createElement)("p",null,Object(l.createElement)("strong",null,"Enter URL on button:")),Object(l.createElement)(r.TextControl,{label:"CTA link",value:p,onChange:function(e){t({ctaLink:e})}}),Object(l.createElement)("p",null,"Link target"),Object(l.createElement)(r.ToggleControl,{label:"Open link in new window",checked:m,onChange:function(e){t({target:e})}})),Object(l.createElement)(r.PanelBody,{title:"Font Color Settings"},Object(l.createElement)("p",null,Object(l.createElement)("strong",null,"Select Title color:")),Object(l.createElement)(a.ColorPalette,{value:o,onChange:function(e){t({titleColor:e})}}),Object(l.createElement)("p",null,Object(l.createElement)("strong",null,"Select Body color:")),Object(l.createElement)(a.ColorPalette,{value:i,onChange:function(e){t({bodyColor:e})}}),Object(l.createElement)("p",null,Object(l.createElement)("strong",null,"Select Button Text color:")),Object(l.createElement)(a.ColorPalette,{value:b,onChange:function(e){t({buttonColor:e})}})),Object(l.createElement)(r.PanelBody,{title:"CTA Button setting"},Object(l.createElement)("div",null,Object(l.createElement)(r.SelectControl,{label:"Button position",value:f,options:[{label:"Start",value:"flex-start"},{label:"Center",value:"center"},{label:"Right",value:"flex-end"}],className:"wp-cta-controlPanel",onChange:function(e){t({buttonPosition:e})}})))),Object(l.createElement)(l.Fragment,null,Object(l.createElement)(a.BlockControls,null,Object(l.createElement)(a.AlignmentToolbar,{value:g,onChange:function(e){t({alignment:void 0===e?"none":e})}})),Object(l.createElement)("div",{class:"cta-container",style:{backgroundImage:`url(${d})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",borderRadius:s?"16px":"0",textAlign:g}},Object(l.createElement)(a.RichText,{key:"editable",tagName:"h2",placeholder:"Your CTA Title",value:n,onChange:function(e){t({title:e})},style:{color:o,fontSize:"24px",fontWeight:600,lineHeight:"28px"}}),Object(l.createElement)(a.RichText,{key:"editable",tagName:"p",placeholder:"Your CTA Description",value:c,onChange:function(e){t({body:e})},style:{color:i}}),Object(l.createElement)("div",{style:{justifyContent:f}},Object(l.createElement)("button",{className:"cta-button",style:{background:"#2C61F3",borderRadius:"47px"}},Object(l.createElement)("a",null,Object(l.createElement)(a.RichText,{key:"editable",tagName:"span",placeholder:"Your CTA button",value:u,onChange:function(e){t({buttonText:e})},style:{color:b,margin:"9px 15px"},className:"cta-button-text"}))))))]},save:function({attributes:e}){const{title:t,titleColor:n,body:o,bodyColor:r,buttonText:c,buttonColor:i,borderRadius:u,backgroundImage:b,ctaLink:s,target:d,alignment:p,buttonPosition:g}=e;return Object(l.createElement)("div",{className:"cta-container",style:{backgroundImage:`url(${b})`,borderRadius:u?"16px":"0",textAlign:p,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",padding:"24px 24px 28px"}},Object(l.createElement)(a.RichText.Content,{tagName:"h2",value:t,style:{color:n,fontSize:"24px",fontWeight:600,lineHeight:"28px"}}),Object(l.createElement)(a.RichText.Content,{tagName:"p",value:o,style:{color:r}}),Object(l.createElement)("div",{style:{justifyContent:g}},Object(l.createElement)("button",{className:"cta-button",style:{background:"#2C61F3",borderRadius:"47px"}},Object(l.createElement)("a",{href:s,target:d?"_blank":"_self"},Object(l.createElement)(a.RichText.Content,{tagName:"span",value:c,style:{color:i,margin:"9px 15px"},className:"cta-button-text"})))))}})}]);