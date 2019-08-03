// ;(function () {
  
//   'use strict';


//   var mainMenuSticky = function() {
  
//     var sticky = $('#outter-navtavern');

//     sticky.css('height', sticky.height());
//     $(window).resize(function(){
//       sticky.css('height', sticky.height());
//     });

//     var $section = $('#inner-navtavern');
    
//     $section.waypoint(function(direction) {

//         if (direction === 'down') {

//             $section.css({
//               'position' : 'fixed',
//               'top' : 0,
//               'width' : '100%',
//               'z-index' : 99999
//             }).addClass('navtavern-shadow');;

//       }

//     }, {
//         offset: '0px'
//     });

//     $('#outter-navtavern').waypoint(function(direction) {

//         if (direction === 'up') {
//           $section.attr('style', '').removeClass('navtavern-shadow');
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

  var navtavernHighlight = function() {
    if ($('#inner-navtavern').length > 0 ) {
      $('#inner-navtavern').affix({
            offset: {
                top: 275
            }
        })
    }
  };

  var mainMenuSticky = function() {
  
    // var sticky = $('#outter-navtavern');

    // sticky.css('height', sticky.height());
    // $(window).resize(function(){
    //   sticky.css('height', sticky.height());
    // });

    var $section = $('#inner-navtavern');
    
    $section.waypoint(function(direction) {

        if (direction === 'down') {

            $section.css({
              
            }).addClass('navtavern-shadow');;

      }

    }, {
        offset: '0px'
    });

    $('#outter-navtavern').waypoint(function(direction) {

        if (direction === 'up') {
          $section.attr('style', '').removeClass('navtavern-shadow');
        }
    }, {
      offset: '0px'
    });
  };  


$(document).ready(function(){


  /**
   * We have to do a first detectation of offset because the page
   * could be load with scroll down set.
   */
  // mainMenuSticky();
  navtavernHighlight();
});
