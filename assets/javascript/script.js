$(document).ready(function() {

  $(".page").fullpage({

    navigation: true,
    navigationPosition: "right",

    afterLoad: function(anchorLink, index) {

      var dotColors = ["#5575df", "#fff", "#fff", "#de1f35"];

      for (var i = 0; i < dotColors.length; i++) {

        if(index == i+1) {
          $("#fp-nav ul li a span, .fp-slidesNav ul li a span").css("border-color", dotColors[i]);
          // $(".menu.hamburger").css("background-color", "#5575df");
        }

      };



    }

  });

});
