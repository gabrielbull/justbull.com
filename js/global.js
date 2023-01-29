

function initPage() {
	
	Element.setOpacity('effect1', 0);
	Element.setStyle('effect1', {display:'block'} );
	Element.setOpacity('effect2', 0);
	Element.setStyle('effect2', {display:'block'} );
	Element.setOpacity('effect3', 0);
	Element.setStyle('effect3', {display:'block'} );
	
	new Effect.Opacity('effect1', {duration:0.5, from:0.0, to:1.0, queue:'front'});
	new Effect.Opacity('effect2', {duration:0.5, from:0.0, to:1.0, queue:'end'});
	new Effect.Opacity('effect3', {duration:0.5, from:0.0, to:1.0, queue:'end'});
		
	effect2.onmouseover = function () { Effect.Shake('effect2'); }
}

Event.observe(window, 'load', initPage, false);