"use strict";var loadData=function(){return new Promise(function(e,t){setTimeout(e,3e3)})};loadData().then(function(){var e=document.getElementById("preloader");e.classList.add("hidden"),e.classList.remove("visible")}),baguetteBox.run(".gallery",{buttons:!0});