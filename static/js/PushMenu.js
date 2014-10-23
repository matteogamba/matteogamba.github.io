/* Bhoot PushMenu */

(function($) {
		
	$.fn.PushMenu = function(customOptions) {
		var o = $.extend({}, $.fn.PushMenu.defaultOptions, customOptions);
		
		/* add class to the body.*/
		
		$('body').addClass(o.bodyClass);
		$(this).addClass('PushMenuBtn');
		$(this).click(function() {
			var target         = '',
			push_direction     = '';
			
		
			if($(this).is('.'+o.showLeftClass)) {
				target         = '.bhoot-spmenu-left';
				push_direction = 'toright';

			}
			else if($(this).is('.'+o.showRightClass)) {
				target         = '.bhoot-spmenu-right';
				push_direction = 'toleft';
			}
			else if($(this).is('.'+o.showTopClass)) {
				target         = '.bhoot-spmenu-top';
			}
			else if($(this).is('.'+o.showBottomClass)) {
				target         = '.bhoot-spmenu-bottom';
			}
			

			$(this).toggleClass(o.activeClass);
			$(target).toggleClass(o.menuOpenClass);
			
			if($(this).is('.'+o.pushBodyClass)) {
				$('body').toggleClass( 'bhoot-spmenu-push-'+push_direction );
			}
			
			/* disable all other button*/
			$('.PushMenuBtn').not($(this)).toggleClass('disabled');
			
			return false;
		});
		var PushMenu = {
			close: function (o) {
				$('.PushMenuBtn,body,.bhoot-spmenu').removeClass('disabled active bhoot-spmenu-open bhoot-spmenu-push-toleft bhoot-spmenu-push-toright');
			}
		}

    if(o.closeOnClickInside) {
       $(document).click(function() {
          PushMenu.close();
        });

       $('.bhoot-spmenu,.toggle-menu').click(function(e){
         e.stopPropagation();
       });
    }
		
		if(o.closeOnClickOutside) {
			 $(document).click(function() { 
				PushMenu.close();
			 }); 

			 $('.bhoot-spmenu,.toggle-menu').click(function(e){ 
				 e.stopPropagation(); 
			 });
		 }
	};
 
   /* in case you want to customize class name,
   *  do not directly edit here, use function parameter when call PushMenu.
   */
	$.fn.PushMenu.defaultOptions = {
		bodyClass       : 'bhoot-spmenu-push',
		activeClass     : 'menu-active',
		showLeftClass   : 'menu-left',
		showRightClass  : 'menu-right',
		showTopClass    : 'menu-top',
		showBottomClass : 'menu-bottom',
		menuOpenClass   : 'bhoot-spmenu-open',
		pushBodyClass   : 'push-body',
		closeOnClickOutside: true,
		closeOnClickInside: true
	};
})(jQuery);
