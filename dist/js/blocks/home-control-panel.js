document.querySelector(".zoomer").addEventListener("click",()=>{let s=document.querySelector(".zoomer"),e=document.querySelector(".sizer"),a=document.querySelector(".price-home");s.classList.contains("fa-magnifying-glass-plus")?(s.classList.remove("fa-magnifying-glass-plus"),s.classList.add("fa-magnifying-glass-minus"),a.classList.add("price-home-giant")):e.classList.contains("fa-arrow-right-to-bracket")?(s.classList.add("fa-magnifying-glass-plus"),a.classList.remove("price-home-giant")):(a.classList.remove("price-home-giant"),s.classList.remove("fa-magnifying-glass-minus"),s.classList.add("fa-magnifying-glass-plus"))}),document.querySelector(".sizer").addEventListener("click",()=>{let s=document.querySelector(".sizer"),e=document.querySelector(".zoomer"),a=document.querySelector(".price-home");s.classList.contains("fa-circle-xmark")?(e.classList.remove("fa-arrow-right-to-bracket"),e.classList.add("fa-magnifying-glass-minus"),s.classList.remove("fa-circle-xmark"),s.classList.add("fa-arrow-right-to-bracket"),a.classList.add("price-home-shrink"),a.classList.remove("price-home-giant"),s.style.transform="rotate(180deg)"):(s.style.color="blue",a.classList.remove("price-home-shrink"),s.classList.add("fa-circle-xmark"),s.classList.remove("fa-arrow-right-to-bracket"))});