(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[10],{1621:function(t,e,a){"use strict";a.r(e),a.d(e,"resources",(function(){return s}));const s={"userscript.js":async function(t){let{addon:e,console:a}=t;const s=await e.tab.traps.getBlockly(),c=e.settings.get("watch");s.BlockSvg.prototype.CAT_BLOCKS=!0,s.BlockSvg.START_HAT_HEIGHT=31,s.BlockSvg.START_HAT_PATH="c2.6,-2.3 5.5,-4.3 8.5,-6.2c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4c8.4,-1.3 17,-1.3 25.4,0c1.9,-2.3 14.7,-17.2 18.4,-15.4c3.1,1.5 9.4,12.3 8.4,24.8c3,1.8 5.9,3.9 8.5,6.1",s.BlockSvg.TOP_LEFT_CORNER_DEFINE_HAT="c0,-7.1 3.7,-13.3 9.3,-16.9c1.7,-7.5 5.4,-13.2 7.6,-14.2c2.6,-1.3 10,6 14.6,11.1h33c4.6,-5.1 11.9,-12.4 14.6,-11.1c1.9,0.9 4.9,5.2 6.8,11.1c2.6,0,5.2,0,7.8,0",s.BlockSvg.prototype.renderCatFace_=function(){this.catPath_.svgFace.setAttribute("fill","#000000");var t=s.utils.createSvgElement("path",{},this.svgFace_);t.setAttribute("d","M25.2-1.1c0.1,0,0.2,0,0.2,0l8.3-2.1l-7-4.8c-0.5-0.3-1.1-0.2-1.4,0.3s-0.2,1.1,0.3,1.4L29-4.1l-4,1c-0.5,0.1-0.9,0.7-0.7,1.2C24.3-1.4,24.7-1.1,25.2-1.1z"),t.setAttribute("fill-opacity","0"),this.catPath_.svgFace.closedEye=t;var e=s.utils.createSvgElement("path",{},this.svgFace_);e.setAttribute("d","M62.4-1.1c-0.1,0-0.2,0-0.2,0l-8.3-2.1l7-4.8c0.5-0.3,1.1-0.2,1.4,0.3s0.2,1.1-0.3,1.4l-3.4,2.3l4,1c0.5,0.1,0.9,0.7,0.7,1.2C63.2-1.4,62.8-1.1,62.4-1.1z"),e.setAttribute("fill-opacity","0"),this.catPath_.svgFace.closedEye2=e;var a=s.utils.createSvgElement("circle",{},this.svgFace_);a.setAttribute("cx","59.2"),a.setAttribute("cy","-3.3"),a.setAttribute("r","3.4"),a.setAttribute("fill-opacity","0.6"),this.catPath_.svgFace.eye=a;var c=s.utils.createSvgElement("circle",{},this.svgFace_);c.setAttribute("cx","29.1"),c.setAttribute("cy","-3.3"),c.setAttribute("r","3.4"),c.setAttribute("fill-opacity","0.6"),this.catPath_.svgFace.eye2=c;var i=s.utils.createSvgElement("path",{},this.svgFace_);i.setAttribute("d","M45.6,0.1c-0.9,0-1.7-0.3-2.3-0.9c-0.6,0.6-1.3,0.9-2.2,0.9c-0.9,0-1.8-0.3-2.3-0.9c-1-1.1-1.1-2.6-1.1-2.8c0-0.5,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1c0,0.4,0.1,1.7,1.4,1.7c0.5,0,0.7-0.2,0.8-0.3c0.3-0.3,0.4-1,0.4-1.3c0-0.1,0-0.1,0-0.2c0-0.5,0.5-1,1-1l0,0c0.5,0,1,0.4,1,1c0,0,0,0.1,0,0.2c0,0.3,0.1,0.9,0.4,1.2C44.8-2.2,45-2,45.5-2s0.7-0.2,0.8-0.3c0.3-0.4,0.4-1.1,0.3-1.3c0-0.5,0.4-1,0.9-1.1c0.5,0,1,0.4,1.1,0.9c0,0.2,0.1,1.8-0.8,2.8C47.5-0.4,46.8,0.1,45.6,0.1z"),i.setAttribute("fill-opacity","0.6"),this.catPath_.ear.setAttribute("d","M73.1-15.6c1.7-4.2,4.5-9.1,5.8-8.5c1.6,0.8,5.4,7.9,5,15.4c0,0.6-0.7,0.7-1.1,0.5c-3-1.6-6.4-2.8-8.6-3.6C72.8-12.3,72.4-13.7,73.1-15.6z"),this.catPath_.ear.setAttribute("fill","#FFD5E6"),this.catPath_.ear2.setAttribute("d","M22.4-15.6c-1.7-4.2-4.5-9.1-5.8-8.5c-1.6,0.8-5.4,7.9-5,15.4c0,0.6,0.7,0.7,1.1,0.5c3-1.6,6.4-2.8,8.6-3.6C22.8-12.3,23.2-13.7,22.4-15.6z"),this.catPath_.ear2.setAttribute("fill","#FFD5E6")},s.BlockSvg.prototype.initCatStuff=function(){if(!this.hasInitCatStuff){this.hasInitCatStuff=!0;var t="c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4",e="c-5.8,-4.8 -8,-18 -4.9,-19.5c3.7,-1.8 24.5,11.1 31.7,10.1",a="c1.9,-2.3 14.7,-17.2 18.4,-15.4c3.1,1.5 9.4,12.3 8.4,24.8",c="c7.2,1 28,-11.9 31.7,-10.1c3.1,1.5 0.9,14.7 -4.9,19.5",i="c0,-7.1 3.7,-13.3 9.3,-16.9c1.7,-7.5 5.4,-13.2 7.6,-14.2c2.6,-1.3 10,6 14.6,11.1",r="h33c4.6,-5.1 11.9,-12.4 14.6,-11.1c1.9,0.9 4.9,5.2 6.8,11.1c2.6,0,5.2,0,7.8,0",o="c0,-4.6 1.6,-8.9 4.3,-12.3c-2.4,-5.6 -2.9,-12.4 -0.7,-13.4c2.1,-1 9.6,2.6 17,5.8c2.6,0 6.2,0 10.9,0",l="c0,0 25.6,0 44,0c7.4,-3.2 14.8,-6.8 16.9,-5.8c1.2,0.6 1.6,2.9 1.3,5.8",n=this;this.catPath_.ear=s.utils.createSvgElement("path",{},this.catPath_),this.catPath_.ear2=s.utils.createSvgElement("path",{},this.catPath_),this.RTL&&(this.catPath_.ear.setAttribute("transform","scale(-1 1)"),this.catPath_.ear2.setAttribute("transform","scale(-1 1)")),this.catPath_.addEventListener("mouseenter",(function(t){clearTimeout(n.blinkFn),t.target.svgFace.eye&&(t.target.svgFace.eye.setAttribute("fill-opacity","0"),t.target.svgFace.eye2.setAttribute("fill-opacity","0"),t.target.svgFace.closedEye.setAttribute("fill-opacity","0.6"),t.target.svgFace.closedEye2.setAttribute("fill-opacity","0.6")),n.blinkFn=setTimeout((function(){t.target.svgFace.eye&&(t.target.svgFace.eye.setAttribute("fill-opacity","0.6"),t.target.svgFace.eye2.setAttribute("fill-opacity","0.6"),t.target.svgFace.closedEye.setAttribute("fill-opacity","0"),t.target.svgFace.closedEye2.setAttribute("fill-opacity","0"))}),100)})),this.catPath_.ear.addEventListener("mouseenter",(function(){clearTimeout(n.earFn),clearTimeout(n.ear2Fn),n.catPath_.ear.setAttribute("fill-opacity","0"),n.catPath_.ear2.setAttribute("fill-opacity","");var s=n.catPath_.svgBody.getAttribute("d");s=(s=(s=(s=s.replace(a,c)).replace(r,l)).replace(e,t)).replace(o,i),n.catPath_.svgBody.setAttribute("d",s),n.earFn=setTimeout((function(){n.catPath_.ear.setAttribute("fill-opacity","");var t=n.catPath_.svgBody.getAttribute("d");t=(t=t.replace(c,a)).replace(l,r),n.catPath_.svgBody.setAttribute("d",t)}),50)})),this.catPath_.ear2.addEventListener("mouseenter",(function(){clearTimeout(n.earFn),clearTimeout(n.ear2Fn),n.catPath_.ear2.setAttribute("fill-opacity","0"),n.catPath_.ear.setAttribute("fill-opacity","");var s=n.catPath_.svgBody.getAttribute("d");s=(s=(s=(s=s.replace(t,e)).replace(i,o)).replace(c,a)).replace(l,r),n.catPath_.svgBody.setAttribute("d",s),n.ear2Fn=setTimeout((function(){n.catPath_.ear2.setAttribute("fill-opacity","");var a=n.catPath_.svgBody.getAttribute("d");a=(a=a.replace(e,t)).replace(o,i),n.catPath_.svgBody.setAttribute("d",a)}),50)})),this.RTL&&(this.svgFace_.style.transform="translate(-87px, 0px)"),this.shouldWatchMouse()&&(this.windowListener=function(t){var e=Date.now();if(!(e<n.lastCallTime+n.CALL_FREQUENCY_MS)&&(n.lastCallTime=e,n.shouldWatchMouse()&&n.workspace)){var a=n.getCatFacePosition(),s={x:t.x/n.workspace.scale,y:t.y/n.workspace.scale},c=s.x-a.x,i=s.y-a.y,r=Math.atan2(c,i),o=Math.sqrt(c*c+i*i),l=o/(o+1),h=10/Math.sqrt(Math.pow(5*Math.cos(r),2)+Math.pow(2*Math.sin(r),2));c=h*l*Math.sin(r),i=h*l*Math.cos(r),n.RTL&&(c-=87),n.svgFace_.style.transform="translate("+c+"px, "+i+"px)"}},document.addEventListener("mousemove",this.windowListener))}};let i=null;s.BlockSvg.prototype.getCatFacePosition=function(){i||(i=this.workspace.getParentSvg().getBoundingClientRect());var t={x:i.x,y:i.y};!this.isInFlyout&&this.workspace.getFlyout()&&(t.x+=this.workspace.getFlyout().getWidth()),t.x+=this.workspace.scrollX,t.y+=this.workspace.scrollY;var e=this.getRelativeToSurfaceXY(this.svgGroup_);return this.RTL&&(e.x=this.workspace.getWidth()-e.x-this.width),e.x+=t.x/this.workspace.scale,e.y+=t.y/this.workspace.scale,e.x-=43.5,e.y-=4,e.x+=60,this.RTL&&(e.x=screen.width-e.x),e},s.BlockSvg.prototype.shouldWatchMouse=function(){if(!c)return!1;var t=this.getCatFacePosition();var e=t.x>-50&&t.x-50<screen.width/this.workspace.scale,a=t.y>-50&&t.y-50<screen.height/this.workspace.scale;return this.startHat_&&!this.isGlowingStack_&&e&&a};const r=s.BlockSvg.prototype.renderDraw_;s.BlockSvg.prototype.renderDraw_=function(){this.svgFace_||this.sa_catBlockConstructor();for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];const s=r.call(this,...e);return this.outputConnection||this.previousConnection||this.initCatStuff(),this.startHat_&&!this.svgFace_.firstChild&&this.renderCatFace_(),s};const o=s.BlockSvg.prototype.dispose;s.BlockSvg.prototype.dispose=function(){clearTimeout(this.blinkFn),clearTimeout(this.earFn),clearTimeout(this.ear2Fn),this.windowListener&&document.removeEventListener("mousemove",this.windowListener);for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return o.call(this,...e)};const l=s.BlockSvg.prototype.setGlowStack;s.BlockSvg.prototype.setGlowStack=function(t){return this.windowListener&&(t?(document.removeEventListener("mousemove",this.windowListener),this.workspace&&this.svgFace_.style&&(this.RTL?this.svgFace_.style.transform="translate(-87px, 0px)":this.svgFace_.style.transform="")):document.addEventListener("mousemove",this.windowListener)),l.call(this,t)},s.BlockSvg.prototype.sa_catBlockConstructor=function(){this.catPath_=s.utils.createSvgElement("g",{},this.svgGroup_),this.svgFace_=s.utils.createSvgElement("g",{},this.catPath_),this.catPath_.svgFace=this.svgFace_,this.catPath_.svgBody=this.svgPath_,this.lastCallTime=0,this.CALL_FREQUENCY_MS=60};const n=s.getMainWorkspace();if(n){const t=e.tab.traps.vm;t.editingTarget&&t.emitWorkspaceUpdate();const a=n.getFlyout();if(a){s.Events.disable();const t=a.getWorkspace();s.Xml.clearWorkspaceAndLoadFromXml(s.Xml.workspaceToDom(t),t),n.getToolbox().refreshSelection(),n.toolboxRefreshEnabled_=!0,s.Events.enable()}}}}}}]);