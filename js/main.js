window.addEventListener( 'load', function () {

  const body       = document.querySelector( 'body' );
  const menuButton = document.querySelector( '.menu-button' );

  menuButton.addEventListener( 'click', function( e ) {

    body.classList.toggle( 'menu-open' );

  } );

} )