

function openNav() {
    document.getElementById("mySidenav").style.width = "260px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


$(".js-hamburger").on("click", function(){
        event.preventDefault();
        openNav();
});

$(".sidenav .closebtn").on("click", function(){
	event.preventDefault();
	closeNav();
});


$(".sidenav").on("mouseleave", function(){
 		closeNav();
});

$("#homepage .more").on("click", function(){
	event.preventDefault();
	$(".moreHomepage").toggle();	
});

$("#liturgical .more").on("click", function(){
	event.preventDefault();
	$(".moreLit").toggle();
});

$("#lordsprayer .more").on("click", function(){
 	event.preventDefault();
 	$(".moreLord").toggle();
});

$(".more a").click(function(){
     $(this).text(function(_, oldText) {
         return oldText === 'see less' ? 'more' : 'see less';
     });
});

$("#rosary .more").on("click", function(){
	event.preventDefault();
	$(".moreRosary").toggle();
});

$("#testimonial .more").on("click", function(){
	event.preventDefault();
	$(".moreTest").toggle();
});

$("#michele .more").on("click", function(){
	event.preventDefault();
	$(".moreMichele").toggle();
});


$("#events .more").on("click", function(){
	event.preventDefault();
	$(".moreEvents").toggle();
});

$(".link15").on("click", function(){
	event.preventDefault();
	$(".year15").toggle();
});

$(".link14").on("click", function(){
	event.preventDefault();
	$(".year14").toggle();
});

$(".link13").on("click", function(){
	event.preventDefault();
	$(".year13").toggle();
});

$(".link12").on("click", function(){
	event.preventDefault();
	$(".year12").toggle();
});


