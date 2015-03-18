/*animatejQueryClick*/
function animatejQueryClick(){

	$('.animatejqueryclick .animated').click(
		function() {
			$(this).addClass('swing');
		}
	);

}
/*animatejQueryHover*/

function animatejQueryHover(){

	$('.animatejqueryhover .animated').hover(
		function() {
			$(this).addClass('shake');
		},
		function() {
			$(this).removeClass('shake');
		}
	);

}

$(document).ready(function() {

	animatejQueryClick();
	animatejQueryHover();
	
});