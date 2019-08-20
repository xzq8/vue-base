/*
    说明：100px=1rem
    */
(function () {
	remLayout();
	function remLayout() {
		var w = document.documentElement.clientWidth;
		w = w > 768 ? 768 : w;
		w = w <= 320 ? 320 : w;
		document.documentElement.style.fontSize = w / 7.5 + 'px';
	}
	window.addEventListener('resize', function () {
		remLayout();
	}, false);
})();