// ;(function () {
  
//   'use strict';


//   var mainMenuSticky = function() {
  
//     var sticky = $('#outter-navbar');

//     sticky.css('height', sticky.height());
//     $(window).resize(function(){
//       sticky.css('height', sticky.height());
//     });

//     var $section = $('#inner-navbar');
    
//     $section.waypoint(function(direction) {

//         if (direction === 'down') {

//             $section.css({
//               'position' : 'fixed',
//               'top' : 0,
//               'width' : '100%',
//               'z-index' : 99999
//             }).addClass('navbar-shadow');;

//       }

//     }, {
//         offset: '0px'
//     });

//     $('#outter-navbar').waypoint(function(direction) {

//         if (direction === 'up') {
//           $section.attr('style', '').removeClass('navbar-shadow');
//         }
//     }, {
//       offset: '0px'
//     });

//   };

//   // Document on load.
//   $(function(){

//     mainMenuSticky();

//   });


// }());

$(document).ready(function(){

    var mainMenuSticky = function() {
  
    var sticky = $('#outter-navbar');

    sticky.css('height', sticky.height());
    $(window).resize(function(){
      sticky.css('height', sticky.height());
    });

    var $section = $('#inner-navbar');
    
    $section.waypoint(function(direction) {

        if (direction === 'down') {

            $section.css({
              'position' : 'fixed',
              'top' : 0,
              'width' : '100%',
              'z-index' : 99999
            }).addClass('navbar-shadow');;

      }

    }, {
        offset: '0px'
    });

    $('#outter-navbar').waypoint(function(direction) {

        if (direction === 'up') {
          $section.attr('style', '').removeClass('navbar-shadow');
        }
    }, {
      offset: '0px'
    });

  };



  /**
   * We have to do a first detectation of offset because the page
   * could be load with scroll down set.
   */
  mainMenuSticky();
});
