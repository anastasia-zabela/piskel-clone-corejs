!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){var r;e.exports=function e(t,n,a){function o(i,c){if(!n[i]){if(!t[i]){var l="function"==typeof r&&r;if(!c&&l)return r(i,!0);if(s)return s(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[i]={exports:{}};t[i][0].call(f.exports,function(e){var n=t[i][1][e];return o(n||e)},f,f.exports,e,t,n,a)}return n[i].exports}for(var s="function"==typeof r&&r,i=0;i<a.length;i++)o(a[i]);return o}({1:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function a(e){return"function"==typeof e}function o(e){return"object"==typeof e&&null!==e}function s(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,i,c,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if((t=arguments[1])instanceof Error)throw t;var u=new Error('Uncaught, unspecified "error" event. ('+t+")");throw u.context=t,u}if(s(n=this._events[e]))return!1;if(a(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:i=Array.prototype.slice.call(arguments,1),n.apply(this,i)}else if(o(n))for(i=Array.prototype.slice.call(arguments,1),l=n.slice(),r=l.length,c=0;c<r;c++)l[c].apply(this,i);return!0},r.prototype.addListener=function(e,t){var n;if(!a(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,a(t.listener)?t.listener:t),this._events[e]?o(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,o(this._events[e])&&!this._events[e].warned&&(n=s(this._maxListeners)?r.defaultMaxListeners:this._maxListeners)&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace()),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){if(!a(t))throw TypeError("listener must be a function");var n=!1;function r(){this.removeListener(e,r),n||(n=!0,t.apply(this,arguments))}return r.listener=t,this.on(e,r),this},r.prototype.removeListener=function(e,t){var n,r,s,i;if(!a(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],s=n.length,r=-1,n===t||a(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(o(n)){for(i=s;i-- >0;)if(n[i]===t||n[i].listener&&n[i].listener===t){r=i;break}if(r<0)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(a(n=this._events[e]))this.removeListener(e,n);else if(n)for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){return this._events&&this._events[e]?a(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(a(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],2:[function(e,t,n){var r,a,o,s,i;i=navigator.userAgent.toLowerCase(),s=navigator.platform.toLowerCase(),r=i.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],o="ie"===r[1]&&document.documentMode,(a={name:"version"===r[1]?r[3]:r[1],version:o||parseFloat("opera"===r[1]&&r[4]?r[4]:r[2]),platform:{name:i.match(/ip(?:ad|od|hone)/)?"ios":(i.match(/(?:webos|android)/)||s.match(/mac|win|linux/)||["other"])[0]}})[a.name]=!0,a[a.name+parseInt(a.version,10)]=!0,a.platform[a.platform.name]=!0,t.exports=a},{}],3:[function(e,t,n){var r,a,o,s={}.hasOwnProperty,i=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},c=[].slice;r=e("events").EventEmitter,o=e("./browser.coffee"),a=function(e){var t,n;function r(e){var n,r,a;for(r in this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(e),t)a=t[r],null==(n=this.options)[r]&&(n[r]=a)}return function(e,t){for(var n in t)s.call(t,n)&&(e[n]=t[n]);function r(){this.constructor=e}r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype}(r,e),t={workerScript:"gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:!1,dither:!1},n={delay:500,copy:!1},r.prototype.setOption=function(e,t){if(this.options[e]=t,null!=this._canvas&&("width"===e||"height"===e))return this._canvas[e]=t},r.prototype.setOptions=function(e){var t,n,r;for(t in n=[],e)s.call(e,t)&&(r=e[t],n.push(this.setOption(t,r)));return n},r.prototype.addFrame=function(e,t){var r,a;for(a in null==t&&(t={}),(r={}).transparent=this.options.transparent,n)r[a]=t[a]||n[a];if(null==this.options.width&&this.setOption("width",e.width),null==this.options.height&&this.setOption("height",e.height),"undefined"!=typeof ImageData&&null!==ImageData&&e instanceof ImageData)r.data=e.data;else if("undefined"!=typeof CanvasRenderingContext2D&&null!==CanvasRenderingContext2D&&e instanceof CanvasRenderingContext2D||"undefined"!=typeof WebGLRenderingContext&&null!==WebGLRenderingContext&&e instanceof WebGLRenderingContext)t.copy?r.data=this.getContextData(e):r.context=e;else{if(null==e.childNodes)throw new Error("Invalid image");t.copy?r.data=this.getImageData(e):r.image=e}return this.frames.push(r)},r.prototype.render=function(){var e,t,n;if(this.running)throw new Error("Already running");if(null==this.options.width||null==this.options.height)throw new Error("Width and height must be set prior to rendering");if(this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=function(){var e,t,n;for(n=[],e=0,t=this.frames.length;0<=t?e<t:e>t;0<=t?++e:--e)n.push(null);return n}.call(this),t=this.spawnWorkers(),!0===this.options.globalPalette)this.renderNextFrame();else for(e=0,n=t;0<=n?e<n:e>n;0<=n?++e:--e)this.renderNextFrame();return this.emit("start"),this.emit("progress",0)},r.prototype.abort=function(){for(var e;null!=(e=this.activeWorkers.shift());)this.log("killing active worker"),e.terminate();return this.running=!1,this.emit("abort")},r.prototype.spawnWorkers=function(){var e,t,n,r;return e=Math.min(this.options.workers,this.frames.length),function(){n=[];for(var r=t=this.freeWorkers.length;t<=e?r<e:r>e;t<=e?r++:r--)n.push(r);return n}.apply(this).forEach((r=this,function(e){var t;return r.log("spawning worker "+e),(t=new Worker(r.options.workerScript)).onmessage=function(e){return r.activeWorkers.splice(r.activeWorkers.indexOf(t),1),r.freeWorkers.push(t),r.frameFinished(e.data)},r.freeWorkers.push(t)})),e},r.prototype.frameFinished=function(e){var t,n;if(this.log("frame "+e.index+" finished - "+this.activeWorkers.length+" active"),this.finishedFrames++,this.emit("progress",this.finishedFrames/this.frames.length),this.imageParts[e.index]=e,!0===this.options.globalPalette&&(this.options.globalPalette=e.globalPalette,this.log("global palette analyzed"),this.frames.length>2))for(t=1,n=this.freeWorkers.length;1<=n?t<n:t>n;1<=n?++t:--t)this.renderNextFrame();return i.call(this.imageParts,null)>=0?this.renderNextFrame():this.finishRendering()},r.prototype.finishRendering=function(){var e,t,n,r,a,o,s,i,c,l,u,f,d,h,m,v;for(i=0,h=this.imageParts,a=0,c=h.length;a<c;a++)t=h[a],i+=(t.data.length-1)*t.pageSize+t.cursor;for(i+=t.pageSize-t.cursor,this.log("rendering finished - filesize "+Math.round(i/1e3)+"kb"),e=new Uint8Array(i),f=0,m=this.imageParts,o=0,l=m.length;o<l;o++)for(t=m[o],v=t.data,n=s=0,u=v.length;s<u;n=++s)d=v[n],e.set(d,f),n===t.data.length-1?f+=t.cursor:f+=t.pageSize;return r=new Blob([e],{type:"image/gif"}),this.emit("finished",r,e)},r.prototype.renderNextFrame=function(){var e,t,n;if(0===this.freeWorkers.length)throw new Error("No free workers");if(!(this.nextFrame>=this.frames.length))return e=this.frames[this.nextFrame++],n=this.freeWorkers.shift(),t=this.getTask(e),this.log("starting frame "+(t.index+1)+" of "+this.frames.length),this.activeWorkers.push(n),n.postMessage(t)},r.prototype.getContextData=function(e){return e.getImageData(0,0,this.options.width,this.options.height).data},r.prototype.getImageData=function(e){var t;return null==this._canvas&&(this._canvas=document.createElement("canvas"),this._canvas.width=this.options.width,this._canvas.height=this.options.height),(t=this._canvas.getContext("2d")).setFill=this.options.background,t.fillRect(0,0,this.options.width,this.options.height),t.drawImage(e,0,0),this.getContextData(t)},r.prototype.getTask=function(e){var t,n;if(t=this.frames.indexOf(e),n={index:t,last:t===this.frames.length-1,delay:e.delay,transparent:e.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:"chrome"===o.name},null!=e.data)n.data=e.data;else if(null!=e.context)n.data=this.getContextData(e.context);else{if(null==e.image)throw new Error("Invalid frame");n.data=this.getImageData(e.image)}return n},r.prototype.log=function(){var e;if(e=1<=arguments.length?c.call(arguments,0):[],this.options.debug)return console.log.apply(console,e)},r}(r),t.exports=a},{"./browser.coffee":2,events:1}]},{},[3])(3)},function(e,t){},function(e,t,n){"use strict";n.r(t);n(1);var r=new class{constructor(){this.currentTool=null,this.colors={primaryColor:"#acc7cd",secondaryColor:"#e1e6e2"},this.canvas={canvasContain:document.querySelector(".canvas-contain"),canvasElement:null,canvasSecondary:null,sizeCanvas:32,sizeRect:null},this.frame={countOfFrame:1,countOfDataFrame:0,currentFrame:document.querySelector(".frames-contain__wrapper-frame")},this.framesData=[new Array(this.canvas.sizeCanvas*this.canvas.sizeCanvas).fill(null)],this.currentFps="0"}};var a=function(e,t,n){const a=r.frame.currentFrame.getAttribute("data-num-frame"),o=t/r.canvas.sizeRect,s=e/r.canvas.sizeRect,i=r.canvas.sizeCanvas*o+s;return"eraser"===r.currentTool?r.framesData[a][i]=null:"lighten"===r.currentTool?r.framesData[a][i]=[e,t,r.canvas.sizeRect,n]:r.framesData[a][i]=[e,t,r.canvas.sizeRect,r.colors.primaryColor],i};let o;function s(e,t){const{sizeRect:n}=r.canvas,a=r.canvas.sizeCanvas*t+e;o[a]=[e*n,t*n,r.canvas.sizeRect,r.colors.primaryColor]}var i=function(e,t,n,a,i){const{sizeRect:c,sizeCanvas:l}=r.canvas;o=new Array(l*l).fill(null);const u=n-e,f=a-t,d=Math.abs(u),h=Math.abs(f);let m,v,p,g,y=2*h-d,w=2*d-h;if(h<=d){u>=0?(m=e,v=t,p=n):(m=n,v=a,p=e),i.fillRect(m*c,v*c,c,c),s(m,v);for(let e=0;m<p;e+=1)m+=1,y<0?y+=2*h:(u<0&&f<0||u>0&&f>0?v+=1:v-=1,y+=2*(h-d)),i.fillRect(m*c,v*c,c,c),s(m,v)}else{f>=0?(m=e,v=t,g=a):(m=n,v=a,g=t),i.fillRect(m*c,v*c,c,c),s(m,v);for(let e=0;v<g;e+=1)v+=1,w<=0?w+=2*d:(u<0&&f<0||u>0&&f>0?m+=1:m-=1,w+=2*(d-h)),i.fillRect(m*c,v*c,c,c),s(m,v)}return o};var c=function(e){const t=r.frame.currentFrame.getAttribute("data-num-frame");r.framesData[t]=r.framesData[t].map((t,n)=>{let r;return r=null!==e[n]?e[n]:t})};let l=!1,u=null,f=null;function d(e,t){if(null!==u&&null!==f&&e!==u&&t!==f){const{canvasElement:n,sizeRect:a}=r.canvas,o=n.getContext("2d"),s=i(u,f,e/a,t/a,o);c(s)}}function h(e){if("pen"===r.currentTool&&l){const{canvasElement:t,sizeRect:n}=r.canvas,{currentFrame:o}=r.frame,s=t.getContext("2d"),i=o.children[0].getContext("2d");for(let o=0;o<t.width;o+=n)for(let c=0;c<t.height;c+=n)o+n>e.offsetX&&o<=e.offsetX&&c+n>e.offsetY&&c<=e.offsetY&&(s.fillStyle=r.colors.primaryColor,d(o,c),u=o/n,f=c/n,s.fillRect(o,c,n,n),i.drawImage(t,0,0,150,150),a(o,c))}}function m(e){"pen"===r.currentTool&&(l=!0),h(e)}function v(e){h(e)}function p(){l=!1,u=null,f=null}var g=function(e){e.addEventListener("mousedown",m),e.addEventListener("mousemove",v),e.addEventListener("mouseup",p)};var y=function(e){const t=r.canvas.canvasElement.getContext("2d");e.forEach(e=>{if(null!==e){const n=e[3];t.fillStyle=n,t.fillRect(e[0],e[1],e[2],e[2])}})};let w,C=!1,_=null,b=null;function E(e){"line"===r.currentTool&&(C=!0,function(e){if("line"===r.currentTool){const{canvasSecondary:t,sizeRect:n}=r.canvas,a=t.getContext("2d");if(C){t.style.zIndex=15;for(let o=0;o<t.width;o+=n)for(let s=0;s<t.height;s+=n)o+n>e.offsetX&&o<=e.offsetX&&s+n>e.offsetY&&s<=e.offsetY&&(a.fillStyle=r.colors.primaryColor,_=o/n,b=s/n,a.fillRect(o,s,n,n))}}}(e))}function x(e){!function(e){if(C&&null!==_&&null!==b){const{sizeRect:t}=r.canvas,n=_,a=b,o=Math.floor(e.offsetX/t),s=Math.floor(e.offsetY/t),{canvasSecondary:c}=r.canvas,l=c.getContext("2d");l.clearRect(0,0,c.width,c.height),w=i(n,a,o,s,l)}}(e)}function L(){if(C){const{canvasSecondary:e}=r.canvas,{currentFrame:t}=r.frame,n=e.getContext("2d"),a=t.children[0].getContext("2d");n.clearRect(0,0,e.width,e.height),e.style.zIndex=5,C=!1,_=null,b=null,c(w),y(w),a.drawImage(r.canvas.canvasElement,0,0,150,150)}}var k=function(e){e.addEventListener("mousedown",E),r.canvas.canvasSecondary.addEventListener("mousemove",x),r.canvas.canvasSecondary.addEventListener("mouseup",L)};let S=!1;function T(e){if("eraser"===r.currentTool&&S){const{canvasElement:t,sizeRect:n}=r.canvas,{currentFrame:o}=r.frame,s=t.getContext("2d"),i=o.children[0].getContext("2d");for(let r=0;r<t.width;r+=n)for(let o=0;o<t.height;o+=n)r+n>e.offsetX&&r<=e.offsetX&&o+n>e.offsetY&&o<=e.offsetY&&(s.clearRect(r,o,n,n),i.clearRect(0,0,150,150),i.drawImage(t,0,0,150,150),a(r,o))}}function z(e){"eraser"===r.currentTool&&(S=!0),T(e)}function R(e){T(e)}function F(){S=!1}var D=function(e){e.addEventListener("mousedown",z),e.addEventListener("mousemove",R),e.addEventListener("mouseup",F)};function M(e){let t=Number(e).toString(16);return t.length<2&&(t=`0${t}`),t}var I=function(e,t,n){return M(e)+M(t)+M(n)};const N=document.querySelector(".colors__primary-color");function q(e){if("colorPicker"===r.currentTool){const t=this.getContext("2d").getImageData(e.offsetX,e.offsetY,1,1),[n,a,o]=t.data;r.colors.primaryColor=`rgb(${n}, ${a}, ${o})`,N.value=`#${I(n,a,o)}`}}var A=function(e){e.addEventListener("click",q)};let O,P,W,X;function Y(e,t,n){const{sizeRect:o}=r.canvas;n.fillStyle=r.colors.primaryColor,n.fillRect(e*o,t*o,o,o),a(e*o,t*o)}function B(e){const t=e.data[0],n=e.data[1],r=e.data[2],a=e.data[3];return t===+O&&n===+P&&r===+W&&a===+X}function K(e,t){const{canvasElement:n,sizeRect:a}=r.canvas,o=n.getContext("2d");let s=e,i=t;const c=[[s,i]];for(;c.length;){const e=c.pop();[s,i]=e;let t=o.getImageData(s*a,i*a,1,1);for(;i>=0&&B(t);)i-=1,t=o.getImageData(s*a,i*a,1,1);i+=1,t=o.getImageData(s*a,i*a,1,1);let r=!1,l=!1;for(;i<n.height/a&&B(t);)Y(s,i,o),s>0&&(B(o.getImageData((s-1)*a,i*a,1,1))?r||(c.push([s-1,i]),r=!0):r&&(r=!1)),s<n.width/a-1&&(B(o.getImageData((s+1)*a,i*a,1,1))?l||(c.push([s+1,i]),l=!0):l&&(l=!1)),i+=1,t=o.getImageData(s*a,i*a,1,1)}}function j(e){if("paintBucket"===r.currentTool){const{canvasElement:t,sizeRect:n}=r.canvas,{currentFrame:a}=r.frame,o=t.getContext("2d"),s=a.children[0].getContext("2d");for(let a=0;a<t.width;a+=n)for(let i=0;i<t.height;i+=n)if(a+n>e.offsetX&&a<=e.offsetX&&i+n>e.offsetY&&i<=e.offsetY){o.fillStyle=r.colors.primaryColor;const e=a/n,t=i/n,c=o.getImageData(a,i,1,1);[O,P,W,X]=c.data,K(e,t),s.drawImage(r.canvas.canvasElement,0,0,150,150)}}}var U=function(e){e.addEventListener("click",j)};let $,G,H,V;function J(e,t,n){const{sizeRect:o}=r.canvas;n.fillStyle=r.colors.primaryColor,n.fillRect(e*o,t*o,o,o),a(e*o,t*o)}function Q(e){const t=e.data[0],n=e.data[1],r=e.data[2],a=e.data[3];return t===+$&&n===+G&&r===+H&&a===+V}function Z(){const{canvasElement:e,sizeCanvas:t,sizeRect:n}=r.canvas,a=e.getContext("2d");for(let e=0;e<t;e+=1)for(let r=0;r<t;r+=1){Q(a.getImageData(e*n,r*n,1,1))&&J(e,r,a)}}function ee(e){if("paintSameColor"===r.currentTool){const{canvasElement:t,sizeRect:n}=r.canvas,{currentFrame:a}=r.frame,o=t.getContext("2d"),s=a.children[0].getContext("2d");for(let a=0;a<t.width;a+=n)for(let i=0;i<t.height;i+=n)if(a+n>e.offsetX&&a<=e.offsetX&&i+n>e.offsetY&&i<=e.offsetY){o.fillStyle=r.colors.primaryColor;const e=o.getImageData(a,i,1,1);[$,G,H,V]=e.data,Z(),s.drawImage(r.canvas.canvasElement,0,0,150,150)}}}var te=function(e){e.addEventListener("click",ee)};let ne,re=!1,ae=null,oe=null;function se(e,t){const{sizeRect:n}=r.canvas,a=r.canvas.sizeCanvas*t+e;ne[a]=[e*n,t*n,r.canvas.sizeRect,r.colors.primaryColor]}function ie(e){if(re&&null!==ae&&null!==oe){const{sizeRect:t}=r.canvas,n=ae,a=oe,o=Math.floor(e.offsetX/t),s=Math.floor(e.offsetY/t),{canvasSecondary:i}=r.canvas,c=i.getContext("2d");c.clearRect(0,0,i.width,i.height),function(e,t,n,a,o){const{sizeRect:s,sizeCanvas:i}=r.canvas;ne=new Array(i*i).fill(null);const c=n-e,l=a-t;let u,f,d,h;c>=0&&l>=0?(u=e,d=n,l>=0?(f=t,h=a):c<0&&(f=a,h=t)):c<0&&l<0&&(u=n,d=e,l>=0?(f=t,h=a):l<0&&(f=a,h=t));for(let e=u;e<=d;e+=1)o.fillRect(e*s,t*s,s,s),o.fillRect(e*s,a*s,s,s),se(e,t),se(e,a);for(let t=f;t<=h;t+=1)o.fillRect(e*s,t*s,s,s),o.fillRect(n*s,t*s,s,s),se(e,t),se(n,t)}(n,a,o,s,c)}}function ce(e){"rectangle"===r.currentTool&&(re=!0,function(e){if("rectangle"===r.currentTool&&re){const{canvasSecondary:t,sizeRect:n}=r.canvas,a=t.getContext("2d");t.style.zIndex=15;for(let o=0;o<t.width;o+=n)for(let s=0;s<t.height;s+=n)o+n>e.offsetX&&o<=e.offsetX&&s+n>e.offsetY&&s<=e.offsetY&&(a.fillStyle=r.colors.primaryColor,ae=o/n,oe=s/n,a.fillRect(o,s,n,n))}}(e))}function le(e){ie(e)}function ue(){if("rectangle"===r.currentTool){const{canvasSecondary:e}=r.canvas,{currentFrame:t}=r.frame,n=e.getContext("2d"),a=t.children[0].getContext("2d");n.clearRect(0,0,e.width,e.height),e.style.zIndex=5,re=!1,ae=null,oe=null,c(ne),y(ne),a.drawImage(r.canvas.canvasElement,0,0,150,150)}}var fe=function(e){e.addEventListener("mousedown",ce),r.canvas.canvasSecondary.addEventListener("mousemove",le),r.canvas.canvasSecondary.addEventListener("mouseup",ue)};let de,he=!1,me=null,ve=null;function pe(e,t){const{canvasSecondary:n,sizeRect:a}=r.canvas;n.getContext("2d").fillRect(e*a,t*a,a,a),function(e,t){const{sizeRect:n}=r.canvas,a=r.canvas.sizeCanvas*t+e;de[a]=[e*n,t*n,r.canvas.sizeRect,r.colors.primaryColor]}(e,t)}function ge(e){if(null!==me&&null!==ve){const{canvasSecondary:t,sizeRect:n,sizeCanvas:a}=r.canvas;de=new Array(a*a).fill(null);const o=Math.floor(e.offsetX/n),s=Math.floor(e.offsetY/n),i=t.getContext("2d");i.fillStyle=r.colors.primaryColor,i.clearRect(0,0,t.width,t.height),function(e,t){const n=Math.round((me+e)/2),r=Math.round((ve+t)/2),a=(me+e)%2,o=(ve+t)%2,s=e-n,i=t-r;for(let e=me;e<=n;e+=1){const t=Math.acos((e-n)/s),c=Math.round(i*Math.sin(t)+r);pe(e-a,c),pe(e-a,2*r-c-o),pe(2*n-e,c),pe(2*n-e,2*r-c-o)}for(let e=ve;e<=r;e+=1){const t=Math.asin((e-r)/i),c=Math.round(s*Math.cos(t)+n);pe(c,e-o),pe(2*n-c-a,e-o),pe(c,2*r-e),pe(2*n-c-a,2*r-e)}}(o,s)}}function ye(e){"circle"===r.currentTool&&(he=!0,function(e){const{canvasSecondary:t,sizeRect:n}=r.canvas;t.style.zIndex=15;for(let r=0;r<t.width;r+=n)for(let a=0;a<t.height;a+=n)r+n>e.offsetX&&r<=e.offsetX&&a+n>e.offsetY&&a<=e.offsetY&&(me=r/n,ve=a/n)}(e))}function we(e){"circle"===r.currentTool&&he&&ge(e)}function Ce(){if(he){const{canvasSecondary:e}=r.canvas,{currentFrame:t}=r.frame,n=e.getContext("2d"),a=t.children[0].getContext("2d");n.clearRect(0,0,e.width,e.height),e.style.zIndex=5,he=!1,me=null,ve=null,window.console.log(de),c(de),y(de),a.drawImage(r.canvas.canvasElement,0,0,150,150)}}var _e=function(e){e.addEventListener("mousedown",ye),r.canvas.canvasSecondary.addEventListener("mousemove",we),r.canvas.canvasSecondary.addEventListener("mouseup",Ce)};let be=!1;function Ee(e){if("dithering"===r.currentTool&&be){const{canvasElement:t,sizeRect:n}=r.canvas,{currentFrame:o}=r.frame,s=t.getContext("2d"),i=o.children[0].getContext("2d");for(let o=0;o<t.width;o+=n)for(let c=0;c<t.height;c+=n)if(o+n>e.offsetX&&o<=e.offsetX&&c+n>e.offsetY&&c<=e.offsetY){const e=o/n%2==0,l=c/n%2==0;(e&&!l||!e&&l)&&(s.fillStyle=r.colors.primaryColor,s.fillRect(o,c,n,n),i.drawImage(t,0,0,150,150),a(o,c))}}}function xe(e){"dithering"===r.currentTool&&(be=!0),Ee(e)}function Le(e){Ee(e)}function ke(){be=!1}var Se=function(e){e.addEventListener("mousedown",xe),e.addEventListener("mousemove",Le),e.addEventListener("mouseup",ke)};let Te=!1;function ze(e){const[t,n,r]=function(e){let[t,n,r]=e;t/=255,n/=255,r/=255;const a=Math.min(t,n,r),o=Math.max(t,n,r),s=o-a;let i=0,c=0,l=0;return i=0===s?0:o===t?(n-r)/s%6:o===n?(r-t)/s+2:(t-n)/s+4,(i=Math.round(60*i))<0&&(i+=360),l=(o+a)/2,[i,c=+(100*(c=0===s?0:s/(1-Math.abs(2*l-1)))).toFixed(1),l=+(100*l).toFixed(1)]}(e.data);let a=r+1;return a>100&&(a=100),function(e,t,n){const r=t/100,a=n/100,o=(1-Math.abs(2*a-1))*r,s=o*(1-Math.abs(e/60%2-1)),i=a-o/2;let c=0,l=0,u=0;return e>=0&&e<60?(c=o,l=s,u=0):e>=60&&e<120?(c=s,l=o,u=0):e>=120&&e<180?(c=0,l=o,u=s):e>=180&&e<240?(c=0,l=s,u=o):e>=240&&e<300?(c=s,l=0,u=o):e>=300&&e<360&&(c=o,l=0,u=s),`rgb(${c=Math.round(255*(c+i))}, ${l=Math.round(255*(l+i))}, ${u=Math.round(255*(u+i))})`}(t,n,a)}function Re(e){if(Te){const{canvasElement:t,sizeRect:n}=r.canvas,{currentFrame:o}=r.frame,s=t.getContext("2d"),i=o.children[0].getContext("2d");for(let r=0;r<t.width;r+=n)for(let o=0;o<t.height;o+=n)if(r+n>e.offsetX&&r<=e.offsetX&&o+n>e.offsetY&&o<=e.offsetY){const e=s.getImageData(r,o,1,1);if(0!==e.data[3]){const c=ze(e);s.fillStyle=c,s.fillRect(r,o,n,n),i.drawImage(t,0,0,150,150),a(r,o,c)}}}}function Fe(e){"lighten"===r.currentTool&&(Te=!0,Re(e))}function De(e){Re(e)}function Me(){"lighten"===r.currentTool&&(Te=!1)}var Ie=function(e){e.addEventListener("mousedown",Fe),e.addEventListener("mousemove",De),e.addEventListener("mouseup",Me)};const Ne=document.querySelector(".info__coords");function qe(e){const{canvasElement:t,sizeRect:n}=r.canvas;for(let r=0;r<t.width;r+=n)for(let a=0;a<t.height;a+=n)r+n>e.offsetX&&r<=e.offsetX&&a+n>e.offsetY&&a<=e.offsetY&&(Ne.innerHTML=`[${r/n}:${a/n}]`)}function Ae(){Ne.innerHTML=""}var Oe=function(e){e.addEventListener("mousemove",qe),e.addEventListener("mouseleave",Ae)};class Pe{constructor(e){this.canvasCopy=document.querySelector(".canvas-contain__drawing-canvas"),this.canvasSecondary=document.querySelector(".canvas-contain__secondary-canvas"),this.canvas=this.canvasCopy.cloneNode(),this.sizeCanvas=e,this.sizeRect=Math.floor(800/this.sizeCanvas)}}var We=function(e){const t=document.querySelector(".canvas-contain__drawing-canvas"),n=new Pe(e),{canvas:a,canvasSecondary:o}=n;a.width=n.sizeRect*n.sizeCanvas,a.height=a.width,o.width=a.width,o.height=a.width,r.canvas.canvasSecondary=o,r.canvas.canvasElement=a,r.canvas.sizeRect=n.sizeRect,r.canvas.sizeCanvas=e,function(e){g(e),k(e),D(e),A(e),U(e),te(e),fe(e),_e(e),Se(e),Ie(e),Oe(e)}(a),r.canvas.canvasContain.replaceChild(a,t)};var Xe=class{constructor(e,t){this.frameCopy=document.querySelector(".frames-contain__wrapper-frame"),this.frameContain=this.frameCopy.cloneNode(!0),[this.frameCanvas]=this.frameContain.children,this.numDataOfFrame=e,[,this.numFrameTool]=this.frameContain.children,this.numFrameTool.innerHTML=t}};var Ye=function(e){if(null!==e){const t=r.canvas.canvasElement.getContext("2d"),n=e[3];t.fillStyle=n,t.fillRect(e[0],e[1],e[2],e[2])}};var Be=function(){let e=document.getElementsByClassName("frames-contain__wrapper-frame");(e=Array.prototype.slice.call(e)).map((e,t)=>(function(e,t){e.children[1].innerHTML=t+1,e.setAttribute("data-num-frame",t)})(e,t))};const Ke=document.querySelector(".preview-contain__preview"),je=Ke.getContext("2d"),Ue=document.querySelector(".preview-contain__fps-block--fps-slider");var $e=async function(e){const t=1e3/e;let n=document.getElementsByClassName("frames-contain__wrapper-frame");n=Array.prototype.slice.call(n);let a=0;const o=new Promise(t=>{let n;0!=+e?n=!0:0==+e&&(n=!1),t(n)});await function s(){o.then(e=>{e?(je.clearRect(0,0,Ke.width,Ke.height),je.imageSmoothingEnabled=!1,je.drawImage(n[a].children[0],0,0,Ke.width,Ke.height),(a+=1)===n.length&&(a=0)):e||(je.clearRect(0,0,Ke.width,Ke.height),je.drawImage(r.canvas.canvasElement,0,0,Ke.width,Ke.height))});const i=document.getElementsByClassName("frames-contain__wrapper-frame");n.length===i.length&&e===Ue.value&&setTimeout(s,t)}()};var Ge=function(e){let{target:t}=e;do{t=t.parentNode}while("DIV"!==t.tagName);let n=t.getAttribute("data-num-frame");r.framesData.splice(n,1),window.console.log(r.framesData),t===r.frame.currentFrame?(r.frame.currentFrame=t.previousElementSibling,t.parentNode.removeChild(t),r.frame.currentFrame.classList.add("selected"),We(r.canvas.sizeCanvas),n=r.frame.currentFrame.getAttribute("data-num-frame"),r.framesData[n].map(e=>Ye(e))):t.parentNode.removeChild(t),r.frame.countOfFrame-=1,r.frame.countOfDataFrame-=1,Be(),$e(r.currentFps)};var He=function e(t){let{target:n}=t;do{n=n.parentNode}while("DIV"!==n.tagName);r.frame.countOfDataFrame+=1,r.frame.countOfFrame+=1,We(r.canvas.sizeCanvas);const a=n.getAttribute("data-num-frame");r.framesData[a].map(e=>Ye(e));const o=n.cloneNode(!0);o.children[0].getContext("2d").drawImage(r.canvas.canvasElement,0,0,150,150),o.children[4].addEventListener("click",e),ut(o),r.framesData[r.frame.countOfDataFrame]=new Array(r.canvas.sizeCanvas*r.canvas.sizeCanvas).fill(null).map((e,t)=>r.framesData[a][t]),n.insertAdjacentElement("afterend",o),Be(),$e(r.currentFps)};let Ve=null;function Je(e){const t=e.cloneNode(!0);We(r.canvas.sizeCanvas);const n=t.getAttribute("data-num-frame");return r.framesData[n].map(e=>Ye(e)),t.children[0].getContext("2d").drawImage(r.canvas.canvasElement,0,0,150,150),lt(t),t}function Qe(e){let{target:t}=e;do{t=t.parentNode}while("DIV"!==t.tagName);Ve=t}function Ze(e){window.console.log(Ve),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/html",this.innerHTML)}function et(){window.console.log(Ve),window.console.log(this),Ve!==this&&this.classList.add("over")}function tt(e){return e.preventDefault&&e.preventDefault(),e.dataTransfer.dropEffect="move",!1}function nt(e){e.target.classList.remove("over")}function rt(){const e=document.querySelector(".over");let t=document.getElementsByClassName("frames-contain__wrapper-frame");(t=Array.prototype.slice.call(t)).map(t=>{if(Ve===t&&null!==e){document.querySelector(".selected").classList.remove("selected"),e.classList.remove("over"),e.classList.add("selected");const n=Je(t),a=Je(e);t.parentNode.replaceChild(a,t),e.parentNode.replaceChild(n,e);const o=n.getAttribute("data-num-frame"),s=a.getAttribute("data-num-frame"),i=new Array(r.canvas.sizeCanvas*r.canvas.sizeCanvas).fill(null).map((e,t)=>{return r.framesData[s][t]}),c=new Array(r.canvas.sizeCanvas*r.canvas.sizeCanvas).fill(null).map((e,t)=>{return r.framesData[o][t]});r.framesData[o]=i,r.framesData[s]=c,r.frame.currentFrame=a}return t}),Be()}var at=function(e){e.children[3].addEventListener("mousedown",Qe),e.addEventListener("dragstart",Ze),e.addEventListener("dragenter",et),e.addEventListener("dragover",tt),e.addEventListener("dragleave",nt),e.addEventListener("dragend",rt)};var ot=function(e){if("CANVAS"===e.target.tagName){r.frame.currentFrame.classList.remove("selected"),this.classList.add("selected"),r.frame.currentFrame=this,We(r.canvas.sizeCanvas);const e=r.frame.currentFrame.getAttribute("data-num-frame");r.framesData[e].map(e=>Ye(e))}};function st(){[this.children[2],this.children[3],this.children[4]].map(e=>e.classList.add("visible"))}function it(){[this.children[2],this.children[3],this.children[4]].map(e=>e.classList.remove("visible"))}var ct=function(e){e.addEventListener("mousemove",st),e.addEventListener("mouseleave",it)};var lt=function(e){e.children[2].addEventListener("click",Ge),e.children[4].addEventListener("click",He),at(e),ct(e),e.addEventListener("click",ot)};var ut=function(e){r.framesData[r.frame.countOfDataFrame]=new Array(r.canvas.sizeCanvas*r.canvas.sizeCanvas).fill(null);const t=e;t.setAttribute("data-num-frame",r.frame.countOfDataFrame),t.children[1].innerHTML=r.frame.countOfFrame,r.frame.currentFrame.classList.remove("selected"),r.frame.currentFrame=t,r.frame.currentFrame.classList.add("selected"),lt(r.frame.currentFrame)};const ft=document.querySelector(".frames-contain__frame-add");function dt(){r.frame.countOfDataFrame+=1,r.frame.countOfFrame+=1;const e=new Xe(r.frame.countOfDataFrame,r.frame.countOfFrame);We(r.canvas.sizeCanvas),ut(e.frameContain),ft.insertAdjacentElement("beforebegin",e.frameContain),$e(r.currentFps)}var ht=function(){ft.addEventListener("click",dt)};const mt=document.querySelector(".preview-contain__fps-block--fps-slider"),vt=document.querySelector(".fps-value");function pt(){if(mt.value!==vt.value){const{value:e}=mt;vt.value=e,vt.innerHTML=e,r.currentFps=e,$e(r.currentFps)}}var gt=function(){mt.addEventListener("mousemove",pt)};const yt=document.querySelector(".preview-contain__preview"),wt=document.querySelector(".preview-contain__fullscreen");function Ct(){yt.requestFullscreen(),yt.height=window.outerHeight,yt.width=yt.height}var _t=function(){wt.addEventListener("click",Ct)};const bt=document.querySelector(".canvas-size");function Et(e){if("BUTTON"===e.target.tagName){const{target:t}=e,n=+t.textContent;document.querySelector(".canvas-size .selected").classList.remove("selected"),t.classList.add("selected"),function(e){let t=document.querySelectorAll(".frames-contain__wrapper-frame");(t=Array.prototype.slice.call(t)).map((t,n)=>{if(0===n)return t.children[0].getContext("2d").clearRect(0,0,150,150),r.framesData[n]=new Array(e*e).fill(null),t;const a={target:t.children[0]};return Ge(a),t})}(n),We(n)}}var xt=function(){bt.addEventListener("click",Et)};const Lt=document.querySelector(".colors__primary-color"),kt=document.querySelector(".colors__secondary-color"),St=document.querySelector(".colors__arrow");function Tt(){r.colors.primaryColor=this.value}function zt(){r.colors.secondaryColor=this.value}function Rt(){const{primaryColor:e,secondaryColor:t}=r.colors;r.colors.primaryColor=t,r.colors.secondaryColor=e,Lt.value=t,kt.value=e}var Ft=function(){Lt.addEventListener("change",Tt),kt.addEventListener("change",zt),St.addEventListener("click",Rt)};var Dt=class{constructor(){this.tools=document.querySelector(".tools"),this.pen=document.querySelector(".tools__pen-tool"),this.paintBucket=document.querySelector(".tools__paint-bucket-tool"),this.paintSameColor=document.querySelector(".tools__paint-same-color-tool"),this.colorPicker=document.querySelector(".tools__color-picker-tool"),this.eraser=document.querySelector(".tools__eraser-tool"),this.line=document.querySelector(".tools__line-tool"),this.rect=document.querySelector(".tools__rectangle-tool"),this.circle=document.querySelector(".tools__circle-tool"),this.dithering=document.querySelector(".tools__dithering-tool"),this.lighten=document.querySelector(".tools__lighten-tool"),this.currentTool=null}chooseTools(e){let{target:t}=e;for(;t!==this.tools;){if("BUTTON"===t.tagName){null!==r.currentTool&&(this.currentTool.style.background="");const e="#acc7cd";switch(t){case this.pen:r.currentTool="pen",this.currentTool=this.pen,this.pen.style.background=e;break;case this.paintBucket:r.currentTool="paintBucket",this.currentTool=this.paintBucket,this.paintBucket.style.background=e;break;case this.paintSameColor:r.currentTool="paintSameColor",this.currentTool=this.paintSameColor,this.paintSameColor.style.background=e;break;case this.colorPicker:r.currentTool="colorPicker",this.currentTool=this.colorPicker,this.colorPicker.style.background=e;break;case this.eraser:r.currentTool="eraser",this.currentTool=this.eraser,this.eraser.style.background=e;break;case this.line:r.currentTool="line",this.currentTool=this.line,this.line.style.background=e;break;case this.rect:r.currentTool="rectangle",this.currentTool=this.rect,this.rect.style.background=e;break;case this.circle:r.currentTool="circle",this.currentTool=this.circle,this.circle.style.background=e;break;case this.dithering:r.currentTool="dithering",this.currentTool=this.dithering,this.dithering.style.background=e;break;case this.lighten:r.currentTool="lighten",this.currentTool=this.lighten,this.lighten.style.background=e}}t=t.parentNode}return r.currentTool}addTooltips(e){let t,{target:n}=e;for(;n!==this.tools;)"BUTTON"===n.tagName&&(n.children[1].style.display="flex",t=getComputedStyle(n.children[1]).display),n=n.parentNode;return t}removeTooltips(e){let t,{target:n}=e;for(;n!==this.tools;)"BUTTON"===n.tagName&&(n.children[1].style.display="none",t=getComputedStyle(n.children[1]).display),n=n.parentNode;return t}handleEventsTools(){this.tools.addEventListener("click",this.chooseTools.bind(this)),this.tools.addEventListener("mousemove",this.addTooltips.bind(this)),this.tools.addEventListener("mouseleave",this.removeTooltips.bind(this),!0)}};var Mt=class extends Dt{constructor(){super("keyboard"),this.keyboardButton=document.querySelector(".keyboard-modal--button"),this.keyboardModal=document.querySelector(".keyboard-contain"),this.closeKeyboard=document.querySelector(".close")}showModalWindow(){this.keyboardModal.style.display="flex"}closeModalWindow(){this.keyboardModal.style.display="none"}handleKeyDown(e){const t={target:null};switch(e.code){case"KeyP":t.target=this.pen;break;case"KeyB":t.target=this.paintBucket;break;case"KeyA":t.target=this.paintSameColor;break;case"KeyO":t.target=this.colorPicker;break;case"KeyE":t.target=this.eraser;break;case"KeyL":t.target=this.line;break;case"KeyR":t.target=this.rect;break;case"KeyC":t.target=this.circle;break;case"KeyT":t.target=this.dithering;break;case"KeyU":t.target=this.lighten}null!==t.target&&this.chooseTools(t)}handleKeyboardModalWindow(){this.keyboardButton.addEventListener("click",this.showModalWindow.bind(this)),this.closeKeyboard.addEventListener("click",this.closeModalWindow.bind(this)),document.addEventListener("keydown",this.handleKeyDown.bind(this))}},It=n(0),Nt=n.n(It);const qt=new Dt,At=new Mt,Ot=new class{constructor(){this.exportToGIFButton=document.querySelector(".export-contain__gif")}exportToGif(){const e=new Nt.a({workers:2,quality:10});window.console.log(e,this.exportToGIFButton);let t=document.getElementsByClassName("frames-contain__frame");(t=Array.prototype.slice.call(t)).forEach(t=>{e.addFrame(t,{delay:200})}),e.on("finished",function(e){const t=document.createElement("a");t.setAttribute("href",URL.createObjectURL(e)),t.setAttribute("download","download"),t.click()}),e.render()}handleExports(){this.exportToGIFButton.addEventListener("click",this.exportToGif.bind(this))}};var Pt=function(){ht(),qt.handleEventsTools(),gt(),$e(r.currentFps),_t(),xt(),lt(r.frame.currentFrame),Ft(),At.handleKeyboardModalWindow(),Ot.handleExports()};r.canvas.sizeCanvas=32,We(32),Pt()}]);
//# sourceMappingURL=app.bundle.js.map