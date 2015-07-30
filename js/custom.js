jQuery(document).ready(function($) {   

document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function() {
    this.classList.toggle( "active" );
     $('.drop-menu').fadeToggle('slow');
  });

 jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).fadeIn(400).siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
 });