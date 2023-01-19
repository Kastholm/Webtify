var _repeatDelay=3,leftLensTimeline=new TimelineMax({repeat:-1,repeatDelay:_repeatDelay}).timeScale(3),target=document.getElementById("LeftLens"),leftHand=(leftLensTimeline.to(target,3,{xPercent:-25}).to(target,3,{xPercent:25}).to(target,3,{xPercent:0}),new TimelineMax({repeat:-1,repeatDelay:_repeatDelay}).timeScale(3)),target=document.getElementById("HandLeft"),leftArmPortion=(leftHand.to(target,3,{xPercent:-25}).to(target,3,{xPercent:25}).to(target,3,{xPercent:0}),new TimelineMax({repeat:-1,repeatDelay:_repeatDelay}).timeScale(3)),target=document.getElementById("ArmLeftPortion"),rightArmPortion=(leftArmPortion.to(target,3,{attr:{x2:113}}).to(target,3,{attr:{x2:153}}).to(target,3,{attr:{x2:133}}),new TimelineMax({repeat:-1,repeatDelay:_repeatDelay}).timeScale(3)),target=document.getElementById("ArmRightPortion"),rightHand=(rightArmPortion.to(target,3,{attr:{x2:310}}).to(target,3,{attr:{x2:350}}).to(target,3,{attr:{x2:330}}),new TimelineMax({repeat:-1,repeatDelay:_repeatDelay}).timeScale(3)),target=document.getElementById("HandRight"),rightLensTimeline=(rightHand.to(target,3,{xPercent:-25}).to(target,3,{xPercent:25}).to(target,3,{xPercent:0}),new TimelineMax({repeat:-1,repeatDelay:_repeatDelay}).timeScale(3)),target=document.getElementById("RightLens"),leftLensLower=(rightLensTimeline.to(target,3,{xPercent:-25}).to(target,3,{xPercent:25}).to(target,3,{xPercent:0}),new TimelineMax({repeat:-1,repeatDelay:_repeatDelay}).timeScale(3)),target=document.getElementById("BinoBackLeft"),rightLensLower=(leftLensLower.to(target,3,{xPercent:15}).to(target,3,{xPercent:-15}).to(target,3,{xPercent:0}),new TimelineMax({repeat:-1,repeatDelay:_repeatDelay}).timeScale(3)),target=document.getElementById("BinoBackRight"),binoBase=(rightLensLower.to(target,3,{xPercent:15}).to(target,3,{xPercent:-15}).to(target,3,{xPercent:0}),new TimelineMax({repeat:-1,repeatDelay:_repeatDelay}).timeScale(3)),target=document.getElementById("Center"),mouth=(binoBase.to(target,3,{xPercent:-18}).to(target,3,{xPercent:18}).to(target,3,{xPercent:0}),new TimelineMax({repeat:-1,repeatDelay:_repeatDelay}).timeScale(3)),target=document.getElementById("Mouth"),headGroup=(mouth.to(target,3,{xPercent:-20}).to(target,3,{xPercent:20}).to(target,3,{xPercent:0}),new TimelineMax({repeat:-1,repeatDelay:2*_repeatDelay}).timeScale(6)),target=document.getElementById("HeadGroup"),binoGroup=(headGroup.to(target,3,{rotate:1,yPercent:3,transformOrigin:"top right"}).to(target,3,{rotate:0,yPercent:0}).to(target,3,{rotate:-1,yPercent:3,transformOrigin:"top left"}).to(target,3,{rotate:0,yPercent:0}).to(target,3,{rotate:1,yPercent:3,transformOrigin:"top right"}).to(target,3,{rotate:0,yPercent:0}),new TimelineMax({repeat:-1,repeatDelay:2*_repeatDelay}).timeScale(6)),target=document.getElementById("Binoculars"),bodyBase=(binoGroup.to(target,3,{rotate:1,yPercent:3,transformOrigin:"top right"}).to(target,3,{rotate:0,yPercent:0}).to(target,3,{rotate:-1,yPercent:3,transformOrigin:"top left"}).to(target,3,{rotate:0,yPercent:0}).to(target,3,{rotate:1,yPercent:3,transformOrigin:"top right"}).to(target,3,{rotate:0,yPercent:0}),new TimelineMax({repeat:-1,repeatDelay:2*_repeatDelay}).timeScale(6)),target=document.getElementById("Body"),fin=(bodyBase.to(target,3,{rotate:1,yPercent:3,transformOrigin:"top right"}).to(target,3,{rotate:0,yPercent:0}).to(target,3,{rotate:0,yPercent:3,transformOrigin:"top left"}).to(target,3,{rotate:0,yPercent:0}).to(target,3,{rotate:1,yPercent:3,transformOrigin:"top right"}).to(target,3,{rotate:0,yPercent:0}),new TimelineMax({repeat:-1,repeatDelay:_repeatDelay}).timeScale(3)),target=document.getElementById("Hair"),leftLeg=(fin.to(target,3,{xPercent:28}).to(target,3,{xPercent:-22}).to(target,3,{xPercent:0}),new TimelineMax({repeat:-1,repeatDelay:2*_repeatDelay}).timeScale(6)),target=document.getElementById("LeftLegPortion"),rightLeg=(leftLeg.to(target,3,{attr:{points:"210.67,413.11 205.67,392.78 210.67,366.56"}}).to(target,3,{attr:{points:"210.67,413.11 210.67,392.78 210.67,366.56"}}).to(target,3,{attr:{points:"210.67,413.11 205.67,392.78 210.67,366.56"}}).to(target,3,{attr:{points:"210.67,413.11 210.67,392.78 210.67,366.56"}}).to(target,3,{attr:{points:"210.67,413.11 205.67,392.78 210.67,366.56"}}).to(target,3,{attr:{points:"210.67,413.11 210.67,392.78 210.67,366.56"}}),new TimelineMax({repeat:-1,repeatDelay:2*_repeatDelay}).timeScale(6)),target=document.getElementById("RightLegPortion"),leftFoot=(rightLeg.to(target,3,{attr:{points:"254.75,413.11 259.75,392.78 254.75,366.56"}}).to(target,3,{attr:{points:"254.75,413.11 254.75,392.78 254.75,366.56"}}).to(target,3,{attr:{points:"254.75,413.11 259.75,392.78 254.75,366.56"}}).to(target,3,{attr:{points:"254.75,413.11 254.75,392.78 254.75,366.56"}}).to(target,3,{attr:{points:"254.75,413.11 259.75,392.78 254.75,366.56"}}).to(target,3,{attr:{points:"254.75,413.11 254.75,392.78 254.75,366.56"}}),new TimelineMax({repeat:-1,repeatDelay:20*_repeatDelay}).timeScale(24)),target=document.getElementById("LeftFoot"),element=(leftFoot.to(target,3,{rotate:0}).to(target,3,{rotate:0}).to(target,3,{rotate:0}).to(target,3,{rotate:0}).to(target,3,{rotate:20}).to(target,3,{rotate:0}).to(target,3,{rotate:20}).to(target,3,{rotate:0}).to(target,3,{rotate:0}).to(target,3,{rotate:0}).to(target,3,{rotate:0}).to(target,3,{rotate:0}),document.getElementById("FlareLargeLeft")),element=(TweenMax.to(element,.1,{x:"+=2",y:"+=2",yoyo:!0,repeat:-1}),document.getElementById("FlareSmallLeft")),element=(TweenMax.to(element,.1,{x:"+=2",y:"-=2",yoyo:!0,repeat:-1}),document.getElementById("FlareLargeRight")),element=(TweenMax.to(element,.1,{x:"-=2",y:"-=2",yoyo:!0,repeat:-1}),document.getElementById("FlareSmallRight"));TweenMax.to(element,.1,{x:"-=2",y:"+=2",yoyo:!0,repeat:-1});