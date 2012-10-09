Clickables
==========

A jQuery Plugin to make clickable zones.

The example tasks a twitter bootstrap demo page & adds clickable zones to .hero-unit & .row div

##Usage 
Requires jQuery to function

Simply add clickables.js to the document and run
	
	<script>
		$('.class').clickables();
	</script>
	
###Options

#### Class
Changes the default class that is applied to the clickable area

To use
	
	<script>
		$('.class').clickables({
			'class' : 'super-clickable'
		});
	</script>

#### Box Shadow
Chnages the default box shadow on click

To use
	
	<script>
		$('.class').clickables({
			'boxShadow' : '1px 1px 3px #000'
		});
	</script>