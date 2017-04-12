;(function () {
  
  'use strict';


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

  // Document on load.
  $(function(){

    mainMenuSticky();

  });


}());

// $(document).ready(function(){

// /**
//  * This object controls the nav bar. Implement the add and remove
//  * action over the elements of the nav bar that we want to change.
//  *
//  * @type {{flagAdd: boolean, elements: string[], add: Function, remove: Function}}
//  */
// var myNavBar = {

//     flagAdd: true,

//     elements: [],

//     init: function (elements) {
//         this.elements = elements;
//     },

//     add : function() {
//         if(this.flagAdd) {
//             for(var i=0; i < this.elements.length; i++) {
//                 document.getElementById(this.elements[i]).className += " fixed-theme";
//             }
//             this.flagAdd = false;
//         }
//     },

//     remove: function() {
//         for(var i=0; i < this.elements.length; i++) {
//             document.getElementById(this.elements[i]).className =
//                     document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
//         }
//         this.flagAdd = true;
//     }

// };

// /**
//  * Init the object. Pass the object the array of elements
//  * that we want to change when the scroll goes down
//  */
// myNavBar.init(  [
//     "header",
//     "header-container",
//     "brand"
// ]);

// /**
//  * Function that manage the direction
//  * of the scroll
//  */
// function offSetManager(){

//     var yOffset = 0;
//     var currYOffSet = window.pageYOffset;

//     console.log("Running: " + yOffset + " " + currYOffSet)

//     if(yOffset < currYOffSet) {
//         console.log("HELLLLLLLLOOOOOOOOOO")
//         myNavBar.add();
//     }
//     else if(currYOffSet == yOffset){
//         myNavBar.remove();
//     }

// }

// /**
//  * bind to the document scroll detection
//  */
// window.onscroll = function(e) {
//     offSetManager();
// }

// /**
//  * We have to do a first detectation of offset because the page
//  * could be load with scroll down set.
//  */
// offSetManager();
// });
