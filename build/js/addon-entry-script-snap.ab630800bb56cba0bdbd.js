(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[50],{1662:function(e,n,t){"use strict";t.r(n),t.d(n,"resources",(function(){return s}));const s={"userscript.js":async function(e){let{addon:n,console:t}=e;const s=await n.tab.traps.getBlockly();let i=s.getMainWorkspace();const r=s.init_;function a(e){i.grid_.snapToGrid_=e,i.grid_.spacing_=e?n.settings.get("grid"):40,i.grid_.update(i.scale)}s.init_=function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return i=t[0],n.self.disabled||a(!0),r.call(this,...t)},a(!0),n.settings.addEventListener("change",(()=>a(!0))),n.self.addEventListener("disabled",(()=>a(!1))),n.self.addEventListener("reenabled",(()=>a(!0)))}}}}]);