$(document).ready(function (argument) {

     var one = $("#laptop1");
     var two = $("#laptop2");
     var three = $("#laptop3");
     var four = $("#laptop4");

	$("#allbtn").click(function (argument) {
		$(one).show(1000);
		$(two).show(1000);
		$(three).show(1000);
		$(four).show(1000);

		$("#allbtn").addClass("port-btn-active");
		$("#appbtn").removeClass("port-btn-active");
		$("#iconbtn").removeClass("port-btn-active");
		$("#webbtn").removeClass("port-btn-active");
	});

	$("#webbtn").click(function (argument) {
		$(one).show(1000);
		$(two).hide(1000);
		$(three).hide(1000);
		$(four).show(1000);

		$("#allbtn").removeClass("port-btn-active");
		$("#appbtn").removeClass("port-btn-active");
		$("#iconbtn").removeClass("port-btn-active");
		$("#webbtn").addClass("port-btn-active");
	});

	$("#appbtn").click(function (argument) {
		$(one).hide(1000);
		$(two).hide(1000);
		$(three).show(1000);
		$(four).hide(1000);

		$("#allbtn").removeClass("port-btn-active");
		$("#appbtn").addClass("port-btn-active");
		$("#iconbtn").removeClass("port-btn-active");
		$("#webbtn").removeClass("port-btn-active");
	});

	$("#iconbtn").click(function (argument) {
		$(one).show(1000);
		$(two).hide(1000);
		$(three).hide(1000);
		$(four).hide(1000);

		$("#allbtn").removeClass("port-btn-active");
		$("#appbtn").removeClass("port-btn-active");
		$("#iconbtn").addClass("port-btn-active");
		$("#webbtn").removeClass("port-btn-active");
	});
})