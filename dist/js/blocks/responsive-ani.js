!function(){var e=function(e){return document.querySelector(e)},a=document.querySelectorAll(".monitorContentGroup path"),t=(e(".monitorGroup"),e(".monitorScreen")),o=e(".monitorLogo"),r=e(".monitorStand"),s=e(".monitorStandShadow"),l=e(".monitorBottom"),n=e(".monitorEdge"),c=document.querySelectorAll(".laptopContentGroup path"),p=e(".laptopContentGroup"),i=e(".laptopGroup"),m=e(".laptopScreen"),u=e(".laptopEdgeLeft"),f=e(".laptopEdgeRight"),g=e(".laptopTrackpad"),y=e(".laptopBase"),h=(document.querySelectorAll(".tabletContentGroup path"),e(".tabletContentGroup")),w=e(".tabletGroup"),d=e(".tabletButton"),O=e(".tabletCamera"),S=e(".tabletScreen"),k=e(".phoneGroup"),B=e(".phoneButton"),X=e(".phoneCamera"),e=e(".phoneSpeaker"),Y=(TweenMax.set([l],{transformOrigin:"50% 100%"}),TweenMax.set([r,y,S],{transformOrigin:"50% 0%"}),TweenMax.set([o,t,m,g,w,i,d,O,h,B,X,e,p,k],{transformOrigin:"50% 50%"}),TweenMax.set([u,f],{transformOrigin:"0% 100%"}),TweenMax.set(w,{rotation:-90}),new TimelineMax({repeat:-1,delay:1,yoyo:!1,paused:!1}));Y.timeScale(3),Y.from(l,1,{scaleY:0,ease:Power1.easeOut}).from(r,1,{y:-70,ease:Power1.easeOut},"-=1").from(s,.5,{alpha:0,ease:Power1.easeIn},"-=0.5").from(n,1,{y:330},"-=0.25").from(t,2,{y:330,ease:Power1.easeOut},"-=1").staggerFrom(a,1,{scaleX:0},.1,"-=0.51").from(o,1,{scale:0,ease:Back.easeOut.config(2)}).staggerTo(a,1,{alpha:0,delay:2},.1).to(t,1,{y:330,ease:Power1.easeIn},"-=1").to(n,1,{y:330,ease:Power1.easeIn},"-=0.75").to(l,1,{scaleX:.69,y:-23}).to(l,1,{scaleY:.45,alpha:1},"-=1").set(l,{alpha:0}).to(o,.5,{scale:0,ease:Back.easeIn},"-=1").to(r,1,{y:-120},"-=1.5").to(s,.5,{alpha:0},"-=1.5").from(y,1,{alpha:0},"-=1").from(g,1,{scaleX:0},"-=1").from(m,1,{scale:0,ease:Back.easeOut.config(.5)}).from(u,2,{skewX:-40,scaleY:0,ease:Power3.easeOut},"-=2").from(f,2,{skewX:40,scaleY:0,ease:Power3.easeOut},"-=2").staggerFrom(c,1,{scaleX:0},.1).to(g,.3,{alpha:0,delay:2}).to(m,1,{scaleX:.67}).to(m,1,{scaleY:.8},"-=1").to(p,1,{alpha:0,scale:.5},"-=1").to(y,1,{y:-20,scaleX:0},"-=1").to(u,1,{x:40,transformOrigin:"50% 50%",scaleY:.85},"-=1").to(f,1,{x:-40,transformOrigin:"50% 50%",scaleY:.85},"-=1").set(i,{alpha:0}).from(w,1,{scale:1.1,alpha:0},"-=1").to(w,2,{rotation:0,delay:2,ease:Anticipate.easeOut}).staggerFrom([d,O],.5,{scale:0,ease:Back.easeOut},.1,"-=1").from(h,2,{rotation:90,scaleX:1.33,scaleY:.8,ease:Power3.easeInOut},"-=0").to([d,O],.5,{scale:0,delay:2}).to(w,1,{scaleX:.45}).to(w,1,{scaleY:.7},"-=1").to(h,1,{y:-5},"-=1").to(S,.5,{scaleY:.92,y:4},"-=0.5").set(k,{alpha:1}).set([w,h],{alpha:0}).staggerFrom([B,X,e],1,{scale:0,ease:Back.easeOut},.1).to(k,2,{y:80,delay:2,ease:Back.easeIn.config(2)}),TweenMax.set("svg",{visibility:"visible"})}();