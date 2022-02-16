$(document).ready(function() {

  // $('.band-content').magnificPopup({type:'image'});
  // $('.band-content').appear();
  // $(window).scroll();
  // AOS.init();

  $(document.body).on('appear', '.band-content', function(e, $affected) {
    $(this).addClass( 'animated pulse' );
  });

  function window_resize(){
    $('.window-width').text( $( window ).width() + 'px' );
  }

  $( window ).resize( function(){
    window_resize();
  } );

  $( window ).on( 'load', function(){
    window_resize();
  });
  
  // $( '.test-bxslider' ).bxSlider( {
  //   minSlides: 3,
  //   maxSlides: 3,
  //   moveSlides: 1,
  //   slideWidth: 300,
  //   keyboardEnabled: true,
  //   // controls: false,
  //   infiniteLoop: false,
  //   pager: false,
  //   speed: 300,
  //   nextText: "",
  //   prevText: "",
  //   onSlideAfter: function($slideElement, oldIndex, newIndex) {
  //     $('.slide').removeClass('middle');
  //     $slideElement.next().addClass('middle');     
  //     console.log('$slideElement: ', $slideElement);
  //     console.log('oldIndex: ', oldIndex);
  //     console.log('newIndex: ', newIndex);
  //   },
  //   onSliderLoad: function( currentIndex ){
  //     console.log(currentIndex);
  //   }
  // } );
  // $('.owl-carousel').owlCarousel({
  //   loop:true,
  //   margin:10,
  //   nav:true,
  //   autoWidth: true,
  //   responsive:{
  //       0:{
  //           items:1
  //       },
  //       600:{
  //           items:3
  //       },
  //       1000:{
  //           items:5
  //       }
  //   }
  // })

  $( '.video' ).click( function(){
    $( this ).toggleClass( 'playing' );
    var video = $( 'video', $( this ) )[ 0 ];
    if( video.paused ){
      video.play();
    }else {
      video.pause();
    }
  } );

  $( '.video video', ).on( 'ended', function(){
    $( this ).parents( '.video' ).removeClass( 'playing' );
  } );

  $( '.video video', ).on( 'pause', function(){
    $( this ).parents( '.video' ).removeClass( 'playing' );
  } );


  // Mobile menu
  $( '.mobile-menu-button, .mobile-menu-overlay' ).click( function(){
    $( 'body' ).toggleClass( 'mobile-menu-open' );
  } );



  $('a[href^="#"]').click(function() {
    var id = $(this).attr("href");
    if(id != '' && id != '#') {
      $('html, body').animate({
        scrollTop: $(id).offset().top
      }, 1000);
    }
    
  });

  if(location.hash != '' && location.hash != '#') {
    $('html, body').animate({
      scrollTop: $(location.hash).offset().top
    }, 1000);
  }

  $(document).mouseup(function(e){
    if(e.which == 2){
      $('body').toggleClass('bg');
    }
  });

  $( '.header-section .menu-button' ).click( function() {
    $( this ).toggleClass( 'active' );
  } );

});