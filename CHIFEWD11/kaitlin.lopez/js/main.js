console.log("yo");

$('figure img').width(200);
$('figure img').mouseover(function()
{
   $(this).css("cursor","pointer");
   $(this).animate({width: "300px", height: "230px"}, 'slow');
});

$('figure img').mouseout(function()
{
   $(this).animate({width: "200px", height: "200px"}, 'slow');
});

