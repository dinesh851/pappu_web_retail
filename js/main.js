function buyopenPopup() {
  // document.getElementById("buypopupForm").style.display = "flex";
  
  var overlay1 = document.getElementById("sellpopupForm");
  overlay1.style.opacity = 0;
  overlay1.style.display = "none";
  overlay1.style.visibility = "hidden";
   
  var overlay = document.getElementById("buypopupForm");
  overlay.style.display = "flex";
  setTimeout(function() {
    overlay.style.opacity = 1;
    overlay.style.visibility = "visible";
  }, 500);
}
function closeAll(){
  var overlay1 = document.getElementById("sellpopupForm");
  overlay1.style.opacity = 0;
  overlay1.style.display = "none";
  overlay1.style.visibility = "hidden";
  var overlay1 = document.getElementById("buypopupForm");
  overlay1.style.opacity = 0;
  overlay1.style.display = "none";
  overlay1.style.visibility = "hidden";
   
}

function buyclosePopup() {
  // document.getElementById("buypopupForm").style.display = "none";
  var overlay = document.getElementById("buypopupForm");
  overlay.style.opacity = 0;
  setTimeout(function() {
    overlay.style.display = "none";
    overlay.style.visibility = "hidden";
  }, 300);
 
}
function sellopenPopup() {
  // document.getElementById("sellpopupForm").style.display = "flex";
 
  var overlay1 = document.getElementById("buypopupForm");
  overlay1.style.opacity = 0;
  overlay1.style.display = "none";
  overlay1.style.visibility = "hidden";

  var overlay = document.getElementById("sellpopupForm");
  overlay.style.display = "flex";
  setTimeout(function() {
    overlay.style.opacity = 1;
    overlay.style.visibility = "visible";
  }, 500);
}

function sellclosePopup() {
  // document.getElementById("sellpopupForm").style.display = "none";
  var overlay = document.getElementById("sellpopupForm");
  overlay.style.opacity = 0;
  setTimeout(function() {
    overlay.style.display = "none";
    overlay.style.visibility = "hidden";
  }, 300);
}
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 90
            }, 900);
            return false;
          }
        }
      });


    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
		
}());


}
main();










function changeText() {
  var button = document.getElementById('submitBtn');
  button.innerHTML = 'Sending';
  button.disabled = true; // Optionally disable the button after clicking
  console.log("click");
  // Change back to 'Submit' after 2 seconds
  setTimeout(function() {
    button.innerHTML = 'Sent';
   }, 2000);
   setTimeout(function() {
    button.innerHTML = 'Submit';
    button.disabled = false; // Enable the button again
   }, 4000);

}
function changeText1() {
  var button = document.getElementById('submitBtn1');
  button.innerHTML = 'Sending';
  button.disabled = true; // Optionally disable the button after clicking
  console.log("click1");

  // Change back to 'Submit' after 2 seconds
  setTimeout(function() {
    button.innerHTML = 'Sent';
   }, 2000);
   setTimeout(function() {
    button.innerHTML = 'Submit';
    button.disabled = false; // Enable the button again
   }, 4000);

}
function changeText2() {
  var button = document.getElementById('buttton');
  button.value  = 'Sending';
  button.disabled = true; // Optionally disable the button after clicking
  console.log("click1");

  // Change back to 'Submit' after 2 seconds
  setTimeout(function() {
    button.value  = 'Sent';
   }, 2000);
   setTimeout(function() {
    button.value  = 'Submit';
    button.disabled = false; // Enable the button again
   }, 4000);

}










 