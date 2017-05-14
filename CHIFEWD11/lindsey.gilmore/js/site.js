console.log("hi");

$(".js-hamburger").on("click", function(event){
	event.preventDefault();
	$("nav li").toggle();
});
