(function( $ ) {
	
	var methods = {
		//init the plugin
		init : function( options ) {
			var settings = $.extend( {
				'class' 		: 'clickable' // Class name for css
			}, options );
			
			this.each( function() {
				var z = $(this);
				
				z.addClass(settings.class); // Add class name for css
				
				z.click( function(){ // On click 
					z.css('box-shadow', '1px 1px 3px #AAAAAA inset'); // Give inset box shadow
					
					var url = z.find('a').attr('href'); // Find the first link
					window.open( url, '_self' ); // Open that link
				});
				
			});
			
		}
		
	}
	
	$.fn.clickables = function( method ) {
	
		// Method calling logic
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.clickables' );
		}    
	
	};
})( jQuery );