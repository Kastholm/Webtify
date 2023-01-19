window.onscroll = function () {
  NavScroll();
  /* getYPosition(); */
  $(function () {
    AOS.init();
  });
};
function NavScroll() {
  if (window.innerWidth > 1250) {
    header();
    function header() {
      if (
        document.body.scrollTop > 1 ||
        document.documentElement.scrollTop > 1
      ) {
        document.querySelector("#desktop-logo").classList.add("logo-shrink");
        document.querySelector("#desktop-logo").src =
          "../img/logo/Webber-white-logo-moon-web.gif";

        document.querySelector(".clearfix").classList.add("head-shrink");
        document.querySelector(".clearfix").style.backgroundColor = "#264653";
        document.querySelector(".top-nav").classList.add("top-nav-hide");
      } else {
        document.querySelector("#desktop-logo").classList.remove("logo-shrink");
        document.querySelector(".clearfix").style.backgroundColor =
          "rgba(229, 231, 235)";

        document.querySelector("#desktop-logo").src =
          "https://i.ibb.co/JCyKc3F/Webber-blue-logo-moon-web.gif";
        document.querySelector(".clearfix").classList.remove("head-shrink");
        document.querySelector(".top-nav").classList.remove("top-nav-hide");
      }
    }
  }
}
/* function getYPosition() {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  console.log(top);
  return top;
} */


