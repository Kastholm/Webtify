if(1276<window.innerWidth&&window.innerHeight<1e3){gsap.registerPlugin(ScrollTrigger),gsap.defaults({ease:"ease",duration:6,toggleActions:"complete none none none"});const a=gsap.timeline(),b=(a.from("#txtTitle",{xPercent:140}),gsap.timeline());b.from("#vanta-dot",{yPercent:0}),b.from(".pic-box",{yPercent:100}),b.from(".boxfour",{yPercent:110}),ScrollTrigger.create({animation:b,trigger:"#vanta-dot",start:"top 10% ",end:"bottom 50%",scrub:.1,pin:!0,anticipatePin:.1,toggleActions:"complete none none none"}),ScrollTrigger.create({animation:a,trigger:".trustpilot",start:"top 70%",end:"bottom 0%",scrub:4})}$(".skill-hover").mouseleave(function(){$(this).removeClass("skill-hover")});