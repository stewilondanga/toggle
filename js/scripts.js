var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

// JUST FOR BACKGROUND CHANGE
const toggle = document.querySelector('#toggle');

const updateBackground = (event) => {
document.body.classList.toggle('on');
}

toggle.addEventListener("click", () => document.body.classList.toggle('on') , false);
