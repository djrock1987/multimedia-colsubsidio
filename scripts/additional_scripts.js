 $(document).ready(function () {
   
    // menu script action
    jQuery(function(){
			jQuery('#menuSuperior').superfish({
				//useClick: true
      delay:       100,                            // one second delay on mouseout
			animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation
			speed:       'slow',                          // faster animation speed
			autoArrows:  false                            // disable generation of arrow mark-up
			});
		});
    
    // tabs
      $("#vtabs1").jVertTabs();
    // carousel
		jQuery('#mycarousel').jcarousel();
    // sexylighbox
     SexyLightbox.initialize();
        
    // css options
    $(".parallax01").animate({ marginTop: "-300px"},'1000', 'swing');
    $(".cerrarPanel").css({ display: "none"});
    $("#topMenu").css({ marginRight: "-514px"});
    
    // function abrir menu
    $('.abrirPanel').click(function() {
      $('#topMenu').animate({marginRight:"0px"},'slow', 'swing');
      $(".abrirPanel").css({ display: "none"});
      $(".cerrarPanel").css({ display: "block"});
      $(".logo").animate({ marginLeft: "70px"},'slow', 'swing');
    });
    
    // function cerrar menu
    $('.cerrarPanel').click(function() {
      $('#topMenu').animate({marginRight:"-514px"},'slow', 'swing');
      $(".cerrarPanel").css({ display: "none"});
      $(".abrirPanel").css({ display: "block"});
      $(".logo").animate({ marginLeft: "400px"},'slow', 'swing');
    });
    
});