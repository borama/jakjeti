(function(){$(document).ready(function(){var t,n,e;return $("#sidebar").stickyfloat({duration:1200,lockBottom:!1,easing:"swing",delay:500}),$("#sidebar a.menu-item").click(function(){var t,n;if(t=$(this),""!==(n=t.data("scrollto")))return $.scrollTo("#"+n,1e3,{axis:"y",easing:"swing",margin:!0}),history.pushState(null,n,"#"+n),!1}),$("a.slide").click(function(){var t,n;return t=$(this),n=t.parents(".article").find(".slidedown"),n.hasClass("shown")?(n.slideUp(),t.text(t.text().replace(" (schovat)",""))):(n.slideDown(),t.text(t.text()+" (schovat)")),n.toggleClass("shown"),!1}),t=function(){return $("#platanus-link h3 a").text("Pokud ne, nenechte se pros\xedm d\xe1le ru\u0161it\xa0..."),$("#platanus-link-bg").fadeOut(3e3),$("#platanus-link").fadeOut(6e3)},e=function(){return $("#platanus-link h3").fadeIn()},n=function(){return $("#platanus-link-bg").fadeTo(2e3,.25,function(){return e(),setTimeout(t,3e3)})},$("#platanus-link").click(function(){return window.location="http://www.platanus.cz"}),setTimeout(n,3e3),$("span.years").text((new Date).getFullYear()-1976-1)})}).call(this);