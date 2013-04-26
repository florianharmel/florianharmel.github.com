function findById(a, id) {
  for (var i=0; i<a.length; i++) {
    if (a[i].id == id) return a[i];
  }
}
/*
var ScrollFix = function(elem) {

	var functionInterval = function(){
		console.log(elem.scrollTop);
		setTimeout(functionInterval, 100)
	}
	//functionInterval();


	
	console.log(elem)
	// Variables to track inputs
	var startY, startTopScroll;

	elem = elem || document.querySelector(elem);

	// If there is no element, then do nothing	
	if(!elem)
		return;

	// Handle the start of interactions
	elem.addEventListener('touchstart', function(event){
		startY = event.touches[0].pageY;
		startTopScroll = elem.scrollTop;

		if(startTopScroll <= 0)
			elem.scrollTop = 1;

		if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
			elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
	}, false);

	elem.addEventListener('touchmove', function(event){
		console.log(elem)
		currentY = event.touches[0].pageY;
		elem.scrollTop = elem.scrollTop + (startY - currentY);

	}, false);
	
};
*/


function fireClick(node){
	if ( document.createEvent ) {
		var evt = document.createEvent('MouseEvents');
		evt.initEvent('click', true, false);
		node.dispatchEvent(evt);	
	} else if( document.createEventObject ) {
		node.fireEvent('onclick') ;	
	} else if (typeof node.onclick == 'function' ) {
		node.onclick();	
	}
}