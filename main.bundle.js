!function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],d=0,l=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(f&&f(t);l.length;)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={0:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var f=u;i.push([80,1]),n()}({100:function(e,t,n){"use strict";var r=n(13);Object.defineProperty(t,"__esModule",{value:!0}),t.createLightRoot=void 0;var o=r(n(25)),i=r(n(36)),a=r(n(33));t.createLightRoot=function(){var e=c(a.light.count),t=new o.Bone;return i.forEach((function(e){return t.add(e)}),e),[t,[]]};var c=function(e){return l(e)(i.range(0,e))},u=function(e){return[e,a.light.hsl.s,a.light.hsl.l]},s=function(e){return new o.PointLight(function(e){return(new o.Color).setHSL(e[0],e[1],e[2])}(e))},f=function(){return 2*Math.random()-1},d=function(e){e.translateOnAxis(new o.Vector3(f(),f(),f()).normalize(),a.light.radius)},l=function(e){return i.pipe(i.map(function(e){return function(t){return i.clamp(0,1,t/e)}}(e)),i.map(u),i.map(s),i.forEach(d))}},101:function(e,t,n){"use strict";var r=n(13);Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0;var o=r(n(25)),i=r(n(33)),a=r(n(74)),c=r(n(102));t.create=function(e,t,n,r,u){var s=new o.Scene,f=new o.OrthographicCamera(.5*-r.value,.5*r.value,.5,-.5,i.orthographic.near,i.orthographic.far);f.position.set(0,0,i.orthographic.z),f.lookAt(0,0,0);var d=a.create(s,f),l=Date.now();c.create(l,d,u,s,e);return d}},102:function(e,t,n){"use strict";var r=n(13),o=n(38);Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0;var i=o(n(55)),a=r(n(36)),c=r(n(75)),u=r(n(103));t.create=function(e,t,n,r,o){var f=u.createCursorRoot(),d=(0,i.default)(f,2),l=d[0],v=d[1],p={x:0,y:0},h=o.subscribe((function(e){return p={x:e.position.x,y:e.position.y}})),m={timestamp:e,state:"init",dispose:function(){a.forEach((function(e){return e.dispose}))(v),h.unsubscribe()},rootElement:l,elements:{root:l},updateByAnimation:function(e){c.updateByAnimation(this,t,r,"main",n,p,s(l))(e)}};return t.objects.add(m),m};var s=function(e){return function(t,n,r,o){switch(t.state){case"main":var i=o.x,a=o.y;return void e.position.set(i,a,0);default:throw"Invalid state"}}}},103:function(e,t,n){"use strict";var r=n(13);Object.defineProperty(t,"__esModule",{value:!0}),t.createCursorRoot=void 0;var o=r(n(25)),i=r(n(36)),a=r(n(33)),c=r(n(104));t.createCursorRoot=function(){var e=u(),t=s(e),n=new o.Bone;return n.add(t),[n,[e]]};var u=function(){var e=new o.PlaneBufferGeometry(a.cursor.width,a.cursor.height),t=new Float32Array(i.pipe(i.splitEvery(3),i.map((function(e){return[Math.sign(e[0]),Math.sign(e[1])]})),i.unnest)(Array.from(e.attributes.position.array)));return e.setAttribute("coord",new o.BufferAttribute(t,2)),e},s=function(e){return new o.Mesh(e,f())},f=function(){var e=new o.ShaderMaterial({vertexShader:c.vertex,fragmentShader:c.fragment,uniforms:a.cursorUniforms});return e.blending=o.CustomBlending,e.blendEquation=o.AddEquation,e.blendSrc=o.SrcAlphaFactor,e.blendDst=o.OneMinusSrcAlphaFactor,e}},104:function(e,t,n){"use strict";var r=n(38);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"vertex",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"fragment",{enumerable:!0,get:function(){return i.default}});var o=r(n(105)),i=r(n(106))},105:function(e,t,n){"use strict";n.r(t),t.default="attribute vec2 coord;\nvarying   vec2 v_coord;\n\nvoid main() {\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    v_coord     = coord;\n}\n"},106:function(e,t,n){"use strict";n.r(t),t.default="precision mediump float;\n\nuniform float lineWeight;\nuniform float lineInner;\nuniform float lineOuter;\nvarying vec2  v_coord;\n\nvoid main() {\n    float abs_x = abs(v_coord.x);\n    float abs_y = abs(v_coord.y);\n    gl_FragColor = \n        abs_x <= lineWeight &&\n        abs_y >= lineInner  &&\n        abs_y <= lineOuter  ||\n        abs_y <= lineWeight &&\n        abs_x >= lineInner  &&\n        abs_x <= lineOuter\n        ? vec4(1.0) : vec4(0.0);\n}\n"},107:function(e,t,n){var r=n(108),o=n(109);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},109:function(e,t,n){},33:function(e,t,n){"use strict";var r=n(13);Object.defineProperty(t,"__esModule",{value:!0}),t.classNames=t.cursorUniforms=t.cursor=t.fps=t.light=t.cubeMaterial=t.cube=t.interactiveRotation=t.perspective=t.orthographic=void 0;var o=r(n(25));t.orthographic={near:-100,far:100,z:3};t.perspective={fov:60,near:.1,far:100,z:3};t.interactiveRotation={coefficient:1,theta:2};t.cube={coefficient:1,phi:-.2,count:12,size:.15,boneLength:1};t.cubeMaterial=function(e){return{color:(new o.Color).setHSL(e,1,.8),metalness:.5,roughness:.5,clearcoat:.5,clearcoatRoughness:.5,reflectivity:1,fog:!0}};t.light={coefficient:1,phi:.1,count:12,radius:5,hsl:{s:.5,l:.5}};t.fps={updateDelta:100};t.cursor={width:.2,height:.2};t.cursorUniforms={lineWeight:{type:"float",value:.01},lineInner:{type:"float",value:.4},lineOuter:{type:"float",value:1}};t.classNames={three:"three",fps:"fps"}},74:function(e,t,n){"use strict";var r=n(13),o=n(38);Object.defineProperty(t,"__esModule",{value:!0}),t.setCameraSize=t.create=void 0;var i=o(n(91)),a=r(n(25)),c=r(n(36));t.create=function(e,t){return{scene:e,camera:t,behaviours:new Set,objects:new Set,render:function(e,t){c.forEach((function(e){return e.updateByAnimation(t)}))([].concat((0,i.default)(this.behaviours),(0,i.default)(this.objects))),u(this,e)},dispose:function(){s(this)}}};t.setCameraSize=function(e,t){e instanceof a.OrthographicCamera?(e.left=.5*-t,e.right=.5*t,e.updateProjectionMatrix()):e instanceof a.PerspectiveCamera&&(e.aspect=t,e.updateProjectionMatrix())};var u=function(e,t){t.clearDepth(),t.render(e.scene,e.camera)},s=function(e){c.forEach((function(e){return e.dispose()}))([].concat((0,i.default)(Array.from(e.behaviours)),(0,i.default)(Array.from(e.objects))))}},75:function(e,t,n){"use strict";var r=n(13);Object.defineProperty(t,"__esModule",{value:!0}),t.getTime=t.updateByAnimation=void 0;var o=r(n(79));t.updateByAnimation=function e(t,n,r,o,i,a,c){return function(u){switch(t.state){case"init":return r.add(t.rootElement),t.state=o,void e(t,n,r,o,i,a,c)(u);case"terminate":return r.remove(t.rootElement),n.objects.delete(t),void t.dispose();default:c(t,u,i,a)}}};t.getTime=function(e,t){return o.getTime(e,t)}},79:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getTime=t.updateByAnimation=void 0;t.updateByAnimation=function e(t,n,r,o,i,a){return function(c){switch(t.state){case"init":return t.state=r,void e(t,n,r,o,i,a)(c);case"terminate":return n.behaviours.delete(t),void t.dispose();default:a(t,c,o,i)}}};t.getTime=function(e,t){return t.now-e.timestamp}},80:function(e,t,n){"use strict";var r=n(13)(n(82));n(107),window.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("app");e&&(window.threeState=r.load(e))}))},82:function(e,t,n){"use strict";var r=n(13);Object.defineProperty(t,"__esModule",{value:!0}),t.load=void 0;var o=r(n(83)),i=r(n(87)),a=r(n(88)),c=r(n(89)),u=r(n(33)),s=r(n(90)),f=r(n(95)),d=r(n(101));t.load=function(e){var t=Date.now(),n=o.create(t),r=i.create(n,e,window),v=a.create(n),p=c.create(t),h=[e.clientWidth,e.clientHeight],m=h[0],b=h[1],y=s.create(m,b),g={},w=f.create(r,v,p,y.aspectObj,g),_=d.create(r,v,p,y.aspectObj,g);s.addScenes(y,w,_);var O=0,j=0,M=n.subscribe((function(e){y.render(e);var t=e.total-O;j++,t>=u.fps.updateDelta&&(P.textContent=l(t/j),O=e.total,j=0)}));y.renderer.domElement.className=u.classNames.three,e.appendChild(y.renderer.domElement);var E=function(){return y.resize(e.clientWidth,e.clientHeight)};window.addEventListener("resize",E);var P=document.createElement("p");P.className=u.classNames.fps,e.appendChild(P);return{rendererState:y,dispose:function(){M.unsubscribe(),y.dispose(),window.removeEventListener("resize",E)}}};var l=function(e){return 0===e?"":"".concat((1e3/e).toFixed(1)," fps")}},83:function(e,t,n){"use strict";var r=n(13),o=n(38);Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0;var i=o(n(55)),a=r(n(59)),c=r(n(76));t.create=function(e){var t=c.repeat()(a.of(0,a.animationFrameScheduler)),n=e;return a.pipe(c.map((function(){return Date.now()})),c.pairwise(),c.map(u(n)))(t)};var u=function(e){return function(t){var n=(0,i.default)(t,2),r=n[0],o=n[1];return{start:e,total:o-e,before:r,now:o,progress:o-r}}}},87:function(e,t,n){"use strict";var r=n(13),o=n(38);Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0;var i=o(n(55)),a=r(n(25)),c=r(n(59)),u=r(n(76));t.create=function(e,t,n){var r=c.merge(c.fromEvent(n,"mousedown",{capture:!0}),c.fromEvent(n,"mousemove",{capture:!0}),c.fromEvent(n,"mouseup",{capture:!0})),o=c.merge(c.of(void 0),c.fromEvent(n,"touchstart",{capture:!0}),c.fromEvent(n,"touchmove",{capture:!0}),c.fromEvent(n,"touchend",{capture:!0}),c.fromEvent(n,"touchcancel",{capture:!0})),i=u.map(s(t))(r),a=c.pipe(u.pairwise(),u.map(f(t)),u.filter((function(e){return void 0!==e})))(o);return c.merge(i,a)};var s=function(e){return function(t){var n=d(e,t.clientX,t.clientY,t.movementX,t.movementY),r=(0,i.default)(n,2);return{position:r[0],movement:r[1],button1:0!=(1&t.buttons),button2:0!=(2&t.buttons),button3:0!=(4&t.buttons)}}},f=function(e){return function(t){var n=(0,i.default)(t,2),r=n[0],o=n[1],a=r&&o&&o.touches[0]&&r.touches[0]&&o.touches[0].identifier===r.touches[0].identifier?[o.touches[0].clientX-r.touches[0].clientX,o.touches[0].clientY-r.touches[0].clientY]:[0,0],c=(0,i.default)(a,2),u=c[0],s=c[1],f=o&&o.touches[0]?d(e,o.touches[0].clientX,o.touches[0].clientY,u,s):r&&r.touches[0]?d(e,r.touches[0].clientX,r.touches[0].clientY,u,s):[void 0,void 0],l=(0,i.default)(f,2),v=l[0],p=l[1];if(void 0!==v)return{position:v,movement:p,button1:!(!o||!o.touches[0]),button2:!1,button3:!1}}},d=function(e,t,n,r,o){var c=l(e),u=(0,i.default)(c,2),s=t-u[0],f=n-u[1],d=e instanceof HTMLElement?[e.clientWidth,e.clientHeight]:[e.innerWidth,e.innerHeight],v=(0,i.default)(d,2),p=v[0],h=v[1];return[new a.Vector3(s-.5*p,.5*h-f-1,0).divideScalar(h),new a.Vector3(r,-o,0).divideScalar(h)]},l=function(e){var t=document.documentElement,n=(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0),r=(window.pageYOffset||t.scrollTop)-(t.clientTop||0);return e instanceof HTMLElement?[e.offsetLeft+e.clientLeft-e.scrollLeft-n,e.offsetTop+e.clientTop-e.scrollTop-r]:[-n,-r]}},88:function(e,t,n){"use strict";var r=n(13);Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0;var o=r(n(59)),i=r(n(76));t.create=function(e){return o.pipe(i.map((function(){return Date()})),i.distinctUntilChanged(),i.map((function(e){return new Date(e)})))(e)}},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0;t.create=function(e){return{seed:e,next:function(){return r(this)}}};var r=function(e){var t=e.seed;return t^=t<<13,t^=t>>17,t^=t<<15,e.seed=t,t/(1<<31)*.5+.5}},90:function(e,t,n){"use strict";var r=n(13);Object.defineProperty(t,"__esModule",{value:!0}),t.addScenes=t.create=void 0;var o=r(n(25)),i=r(n(59)),a=r(n(36)),c=r(n(74));t.create=function(e,t){var n=new o.WebGLRenderer({antialias:!0});return n.setClearColor(new o.Color(0,0,0),0),n.setSize(e,t),n.autoClear=!1,{renderer:n,scenes:new Set,aspectObj:{value:e/t,observable:new i.BehaviorSubject(e/t)},render:function(e){d(this,e)},resize:function(e,t){u(this,e,t)},dispose:function(){l(this)}}};t.addScenes=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];a.forEach((function(t){return e.scenes.add(t)}))(n)};var u=function(e,t,n){s(e.renderer.domElement,t,n),f(e),e.aspectObj.value=t/n,e.aspectObj.observable.next(t/n)},s=function(e,t,n){e.style.width="".concat(t,"px"),e.style.height="".concat(n,"px")},f=function(e){var t=e.renderer.domElement,n=t.clientWidth,r=t.clientHeight;if(n!=t.width||r!=t.height){e.renderer.setSize(n,r);var o=n/r;a.forEach((function(e){return c.setCameraSize(e.camera,o)}))(Array.from(e.scenes))}},d=function(e,t){e.renderer.clear(),a.forEach((function(n){return n.render(e.renderer,t)}))(Array.from(e.scenes))},l=function(e){e.renderer.dispose(),a.forEach((function(e){return e.dispose()}))(Array.from(e.scenes))}},95:function(e,t,n){"use strict";var r=n(13);Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0;var o=r(n(25)),i=r(n(33)),a=r(n(74)),c=r(n(96)),u=r(n(97)),s=r(n(99));t.create=function(e,t,n,r,f){var d=new o.Scene,l=new o.PerspectiveCamera(i.perspective.fov,r.value,i.perspective.near,i.perspective.far);l.position.set(0,0,i.perspective.z),l.lookAt(0,0,0);var v=a.create(d,l),p=Date.now(),h=u.create(p,v,f,d);s.create(p,v,f,d),c.create(p,v,f,e,h.elements.root);return v}},96:function(e,t,n){"use strict";var r=n(13);Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0;var o=r(n(25)),i=r(n(33)),a=r(n(79));t.create=function(e,t,n,r,o){var i={x:0,y:0},u=r.subscribe((function(e){return i=e.button1?{x:e.movement.x,y:e.movement.y}:{x:0,y:0}})),s={timestamp:e,state:"init",dispose:function(){u.unsubscribe()},updateByAnimation:function(e){a.updateByAnimation(this,t,"main",n,i,c(o))(e)}};return t.behaviours.add(s),s};var c=function(e){return function(t,n,r,a){switch(t.state){case"main":var c=i.interactiveRotation.theta*i.interactiveRotation.coefficient,u=a.x,s=a.y,f=new o.Vector3(-s,u,0),d=f.clone().normalize();return void e.rotateOnWorldAxis(d,c*f.length());default:throw"Invalid state"}}}},97:function(e,t,n){"use strict";var r=n(13),o=n(38);Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0;var i=o(n(55)),a=r(n(36)),c=r(n(33)),u=r(n(75)),s=r(n(98));t.create=function(e,t,n,r){var o=s.createCubeRootAndBones(),c=(0,i.default)(o,3),d=c[0],l=(c[1],c[2]),v={},p={timestamp:e,state:"init",dispose:function(){a.forEach((function(e){return e.dispose()}))(l)},rootElement:d,elements:{root:d},updateByAnimation:function(e){u.updateByAnimation(this,t,r,"main",n,v,f(d))(e)}};return t.objects.add(p),p};var f=function(e){return function(t,n,r,o){switch(t.state){case"main":var i=n.progress/1e3*2*Math.PI*c.cube.phi*c.cube.coefficient;return void e.rotateZ(i);default:throw"Invalid state"}}}},98:function(e,t,n){"use strict";var r=n(13);Object.defineProperty(t,"__esModule",{value:!0}),t.createCubeRootAndBones=void 0;var o=r(n(25)),i=r(n(36)),a=r(n(33));t.createCubeRootAndBones=function(){var e=c(),t=u(a.cube.count,e),n=i.map((function(e){return new o.Bone}),t),r=2*Math.PI/t.length;i.pipe((function(e,t){return i.zip(e,t)}),i.forEach((function(e){e[0].add(e[1]),e[0].rotateZ(r)})))(n,t),i.reduce((function(e,t){return e&&e.add(t),t}),null,n);var s=new o.Bone;return s.add(n[0]),[s,n,[e]]};var c=function(){return new o.BoxGeometry(a.cube.size,a.cube.size,a.cube.size)},u=function(e,t){return d(e,t)(i.range(0,e))},s=function(e){return new o.MeshPhysicalMaterial(a.cubeMaterial(e))},f=function(e){e.translateOnAxis(new o.Vector3(0,1,0),a.cube.boneLength)},d=function(e,t){return i.pipe(i.map(function(e){return function(t){return i.clamp(0,1,t/e)}}(e)),i.map(s),i.map(function(e){return function(t){return new o.Mesh(e,t)}}(t)),i.forEach(f))}},99:function(e,t,n){"use strict";var r=n(13),o=n(38);Object.defineProperty(t,"__esModule",{value:!0}),t.create=void 0;var i=o(n(55)),a=r(n(36)),c=r(n(33)),u=r(n(75)),s=r(n(100));t.create=function(e,t,n,r){var o=s.createLightRoot(),c=(0,i.default)(o,2),d=c[0],l=c[1],v={},p={timestamp:e,state:"init",dispose:function(){a.forEach((function(e){return e.dispose()}))(l)},rootElement:d,elements:{root:d},updateByAnimation:function(e){u.updateByAnimation(this,t,r,"main",n,v,f(d))(e)}};return t.objects.add(p),p};var f=function(e){return function(t,n,r,o){switch(t.state){case"main":var i=n.progress/1e3*2*Math.PI*c.light.phi*c.light.coefficient;return void e.rotateY(i);default:throw"Invalid state"}}}}});