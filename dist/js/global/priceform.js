const options_main=document.querySelectorAll(".checkbox-input-calculator"),title=document.querySelector("#title-calculator"),backBtn=document.querySelector("#back-calculator"),contactBtn=document.querySelector("#contact-calculator"),results=document.querySelector("#results-calculator"),results_value=document.querySelector("#calculator-cost"),results_value_monthly=document.querySelector("#calculator-cost-monthly");let chosenServices={cost:0,cost_monthly:0,services:[]};const allSteps=document.querySelectorAll(".step"),fillStep=(e,s)=>{var t=chosenServices.services.length;if("webshop"===s&&allSteps.forEach(e=>{e.classList.add("active")}),e)for(let e=0;e<t;e++)allSteps[e].classList.add("active");else{allSteps.forEach(e=>{e.classList.remove("active")});for(let e=0;e<t;e++)allSteps[e].classList.add("active")}},hideOtherInputs=e=>{e.forEach(e=>{e.parentElement.classList.add("hidden")})},showOtherInputs=e=>{e.forEach(e=>{e.parentElement.classList.remove("hidden")})},toggleResults=(e,s)=>{"open"===e?(results.classList.remove("hidden"),contactBtn.classList.remove("hidden"),title.innerHTML=s):(results.classList.add("hidden"),contactBtn.classList.add("hidden")),results_value.innerHTML="samarbejdsaftale"!==chosenServices.services[5]?chosenServices.cost+"kr":"",results_value_monthly.innerHTML=0!==chosenServices.cost_monthly?"Månedlig omkostning: "+chosenServices.cost_monthly+"kr":""},revertFunction=e=>{var s=chosenServices.services.length;if("website"===e)switch(s){case 1:showOtherInputs(options_main),hideOtherInputs(options1_web),costCalculator(null,chosenServices.services[0],null),title.innerHTML="Beregn din pris på 1 min";break;case 2:showOtherInputs(options1_web),hideOtherInputs(options2_web),costCalculator("web type",chosenServices.services[1],null),title.innerHTML="Søger du en hjemmeside eller Webshop ?",toggleResults("close");break;case 3:showOtherInputs(options2_web),hideOtherInputs(options3_web),costCalculator("tech",chosenServices.services[2],null),title.innerHTML="Hvilken type hjemmeside søger du ?";break;case 4:showOtherInputs(options3_web),hideOtherInputs(options4_web),results.classList.add("hidden"),contactBtn.classList.add("hidden"),costCalculator("pages",chosenServices.services[3],null),title.innerHTML="Hvor mange sider skal hjemmesiden indeholde?";break;case 5:showOtherInputs(options4_web),hideOtherInputs(options5_web),results.classList.add("hidden"),contactBtn.classList.add("hidden"),costCalculator("subscription",chosenServices.services[4],null),title.innerHTML="Ønsker du ubegrængset vedligeholdelse og support?";break;case 6:showOtherInputs(options5_web),results.classList.add("hidden"),contactBtn.classList.add("hidden"),costCalculator("payment",chosenServices.services[5],null),title.innerHTML="Samarbejdsaftale eller Engangsbetaling ?"}if("design"===e)switch(s){case 1:showOtherInputs(options_main),hideOtherInputs(options1_design),backBtn.classList.add("hidden"),costCalculator(null,chosenServices.services[0],null),title.innerHTML="Beregn din pris på 1 min";break;case 2:showOtherInputs(options1_design),results.classList.add("hidden"),contactBtn.classList.add("hidden"),costCalculator("logo type",chosenServices.services[1],null),title.innerHTML="Hvor detaljeret skal dit logo være ?"}if("marketing"===e)switch(console.log(s),s){case 1:showOtherInputs(options_main),hideOtherInputs(options1_marketing),backBtn.classList.add("hidden"),costCalculator(null,chosenServices.services[0],null),title.innerHTML="Beregn din pris på 1 min";break;case 2:showOtherInputs(options1_marketing),results.classList.add("hidden"),contactBtn.classList.add("hidden"),costCalculator("marketing",chosenServices.services[1],null),title.innerHTML="Mangler du ny hjemmeside eller har du allerede en ?"}chosenServices.services.pop()},costCalculator=(e,s,t)=>{switch(e){case"web type":"hjemmeside"===s&&(chosenServices.cost+=0),"web shop"===s&&(chosenServices.cost+="increasing"===t?9800:-9800);break;case"tech":"wordpress"===s&&(chosenServices.cost+=0),"custom"===s&&(chosenServices.cost+=0);break;case"pages":var n=chosenServices.services[2];"2-4"===s&&(chosenServices.cost+="wordpress"===n?"increasing"===t?3800:-3800:"increasing"===t?6800:-6800),"5-8"===s&&(chosenServices.cost+="wordpress"===n?"increasing"===t?5499:-5499:"increasing"===t?8459:-8459),"10+"===s&&(chosenServices.cost+="wordpress"===n?"increasing"===t?6999:-6999:"increasing"===t?9999:-9999);break;case"subscription":"yes"===s&&(chosenServices.cost_monthly+="increasing"===t?350:-350),"no"===s&&(chosenServices.cost_monthly+=0);break;case"payment":"engangsbetaling"===s&&("yes"===chosenServices.services[4]?chosenServices.cost_monthly+="increasing"===t?49:-49:chosenServices.cost_monthly=0),"samarbejdsaftale"===s&&("yes"===chosenServices.services[4]?chosenServices.cost_monthly+="increasing"===t?799:-799:chosenServices.cost_monthly+="increasing"===t?999:-999);break;case"logo type":"text"===s&&(chosenServices.cost+="increasing"===t?1800:-1800),"symbol"===s&&(chosenServices.cost+="increasing"===t?2800:-2800);break;case"marketing":chosenServices.cost+="increasing"===t?2800:-2800}},options1_marketing=(backBtn.addEventListener("click",()=>{revertFunction(chosenServices.services[0]),fillStep(null)}),document.querySelectorAll(".checkbox-marketing-1")),options1_web=(options_main[0].addEventListener("click",e=>{chosenServices.services.push("marketing"),backBtn.classList.remove("hidden"),hideOtherInputs(options_main),showOtherInputs(options1_marketing),title.innerHTML="Mangler du ny hjemmeside eller har du allerede en ?"}),options1_marketing.forEach(e=>{e.addEventListener("click",e=>{if("no need"===e.target.value)return chosenServices.services.push(e.target.value),hideOtherInputs(options1_marketing),costCalculator("marketing",e.target.value,"increasing"),void toggleResults("open","Pris estimering af Markedsføring");showOtherInputs(options1_web),hideOtherInputs(options1_marketing),chosenServices.services.shift(),chosenServices.services.unshift("website"),costCalculator("web type",e.target.value,"increasing"),title.innerHTML="Søger du en hjemmeside eller Webshop ?"})}),document.querySelectorAll(".checkbox-website-1")),options2_web=document.querySelectorAll(".checkbox-website-2"),options3_web=document.querySelectorAll(".checkbox-website-3"),options4_web=document.querySelectorAll(".checkbox-website-4"),options5_web=document.querySelectorAll(".checkbox-website-5"),options1_design=(options_main[1].addEventListener("click",e=>{chosenServices.services.push("website"),backBtn.classList.remove("hidden"),hideOtherInputs(options_main),showOtherInputs(options1_web),fillStep(!0),title.innerHTML="Søger du en hjemmeside eller Webshop ?"}),options1_web.forEach(e=>{e.addEventListener("click",e=>{if(chosenServices.services.push(e.target.value),"web shop"===e.target.value)return hideOtherInputs(options1_web),costCalculator("web type",e.target.value,"increasing"),toggleResults("open","Pris estimering af Webshop"),void fillStep(!0,"webshop");showOtherInputs(options2_web),hideOtherInputs(options1_web),fillStep(!0),costCalculator("web type",e.target.value,"increasing"),title.innerHTML="Hvilken type hjemmeside søger du ?"})}),options2_web.forEach(e=>{e.addEventListener("click",e=>{chosenServices.services.push(e.target.value),showOtherInputs(options3_web),hideOtherInputs(options2_web),costCalculator("tech",e.target.value,"increasing"),fillStep(!0),title.innerHTML="custom"===chosenServices.services[2]?"Hvor mange sider skal hjemmesiden indeholde ?":"Hvor mange sider skal hjemmesiden indeholde  ?"})}),options3_web.forEach(e=>{e.addEventListener("click",e=>{chosenServices.services.push(e.target.value),hideOtherInputs(options3_web),showOtherInputs(options4_web),costCalculator("pages",e.target.value,"increasing"),fillStep(!0),title.innerHTML="Ønsker du ubegrængset vedligeholdelse og support?"})}),options4_web.forEach(e=>{e.addEventListener("click",e=>{chosenServices.services.push(e.target.value),hideOtherInputs(options4_web),showOtherInputs(options5_web),costCalculator("subscription",e.target.value,"increasing"),fillStep(!0),title.innerHTML="Samarbejdsaftale eller Engangsbetaling ?"})}),options5_web.forEach(e=>{e.addEventListener("click",e=>{chosenServices.services.push(e.target.value),hideOtherInputs(options5_web),costCalculator("payment",e.target.value,"increasing"),fillStep(!0),toggleResults("open","Pris estimering af Hjemmeside")})}),document.querySelectorAll(".checkbox-design-1"));options_main[2].addEventListener("click",e=>{chosenServices.services.push("design"),backBtn.classList.remove("hidden"),hideOtherInputs(options_main),showOtherInputs(options1_design),title.innerHTML="Hvor detaljeret skal dit logo være ?"}),options1_design.forEach(e=>{e.addEventListener("click",e=>{chosenServices.services.push(e.target.value),hideOtherInputs(options1_design),costCalculator("logo type",e.target.value,"increasing"),toggleResults("open","Pris estimering af Logo")})});