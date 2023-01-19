const config={src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png",rows:5,cols:7},randomRange=(e,a)=>e+Math.random()*(a-e),randomIndex=e=>0|randomRange(0,e.length),removeFromArray=(e,a)=>e.splice(a,1)[0],removeItemFromArray=(e,a)=>removeFromArray(e,e.indexOf(a)),removeRandomFromArray=e=>removeFromArray(e,randomIndex(e)),getRandomFromArray=e=>e[0|randomIndex(e)],resetPeep=({stage:e,peep:a})=>{var t=.5<Math.random()?1:-1,r=(offsetY=window.innerWidth<650?100-150*gsap.parseEase("power2.in")(Math.random()):100-250*gsap.parseEase("power2.in")(Math.random()),e.height-a.height+offsetY);let i,o;return 1==t?(i=-a.width,o=e.width,a.scaleX=1):(i=e.width+a.width,o=0,a.scaleX=-1),window.innerWidth<650&&(1==t?(i=-a.width,o=e.width,a.scaleX=.7):(i=e.width+a.width,o=0,a.scaleX=-.6)),a.x=i,a.y=r,a.anchorY=r,{startX:i,startY:r,endX:o}},normalWalk=({peep:e,props:a})=>{var{startY:a,endX:t}=a;yDuration=window.innerWidth<650?(xDuration=20,.65):(xDuration=16,.35);const r=gsap.timeline();return window.innerWidth<650?r.timeScale(randomRange(.5,1)):r.timeScale(randomRange(.5,1.5)),r.to(e,{duration:xDuration,x:t,ease:"none"},0),r.to(e,{duration:yDuration,repeat:xDuration/yDuration,yoyo:!0,y:a-20},0),r},walks=[normalWalk];class Peep{constructor({image:e,rect:a}){this.image=e,this.setRect(a),this.x=0,this.y=0,this.anchorY=0,this.scaleX=1,this.walk=null}setRect(e){this.rect=e,this.width=e[2],this.height=e[3],this.drawArgs=[this.image,...e,0,0,this.width,this.height]}render(e){e.save(),e.translate(this.x,this.y),window.innerWidth<650?e.scale(this.scaleX,.7):e.scale(this.scaleX,1),e.drawImage(...this.drawArgs),e.restore()}}const img=document.createElement("img"),canvas=(img.onload=init,img.src=config.src,document.querySelector("#canvas")),ctx=canvas.getContext("2d"),stage={width:0,height:0},allPeeps=[],availablePeeps=[],crowd=[];function init(){createPeeps(),resize(),gsap.ticker.add(render),window.addEventListener("resize",resize)}function createPeeps(){var{rows:a,cols:e}=config,{naturalWidth:t,naturalHeight:r}=img,i=a*e,o=t/a,n=r/e;for(let e=0;e<i;e++)allPeeps.push(new Peep({image:img,rect:[e%a*o,(e/a|0)*n,o,n]}))}function resize(){stage.width=canvas.clientWidth,stage.height=canvas.clientHeight,canvas.width=stage.width*devicePixelRatio,canvas.height=stage.height*devicePixelRatio,crowd.forEach(e=>{e.walk.kill()}),crowd.length=0,availablePeeps.length=0,availablePeeps.push(...allPeeps),initCrowd()}function initCrowd(){for(;availablePeeps.length;)addPeepToCrowd().walk.progress(Math.random())}function addPeepToCrowd(){const e=removeRandomFromArray(availablePeeps);var a=getRandomFromArray(walks)({peep:e,props:resetPeep({peep:e,stage:stage})}).eventCallback("onComplete",()=>{removePeepFromCrowd(e),addPeepToCrowd()});return e.walk=a,crowd.push(e),crowd.sort((e,a)=>e.anchorY-a.anchorY),e}function removePeepFromCrowd(e){removeItemFromArray(crowd,e),availablePeeps.push(e)}function render(){canvas.width=canvas.width,ctx.save(),ctx.scale(devicePixelRatio,devicePixelRatio),crowd.forEach(e=>{e.render(ctx)}),ctx.restore()}