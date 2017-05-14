var modalContents = "",
    modalContentsContainer = $("#modal").find(".modal-contents");

$("#modal").hide();

$('#detroit').on('click', function(){
    modalContents = $("#page-detroit").html();
    fireModal(); 
});

$('#ann-arbor').on('click', function(){
    modalContents = $("#page-ann_arbor").html();
    fireModal();
});

$('#grand-rapids').on('click', function(){
    modalContents = $("#page-grand_rapids").html();
    fireModal();
});

$('#holland').on('click', function(){
    modalContents = $("#page-holland").html();
    fireModal();
});

$('#kalamazoo').on('click', function(){
    modalContents = $("#page-kalamazoo").html();
    fireModal();
});

$('#traverse-city').on('click', function(){
    modalContents = $("#page-traverse_city").html();
    fireModal();
});

$('#charlevoix').on('click', function(){
    modalContents = $("#page-charlevoix").html();
    fireModal();
});

$('#mackinac-island').on('click', function(){
    modalContents = $("#page-mackinac_island").html();
    fireModal();
});

$('#munising').on('click', function(){
    modalContents = $("#page-munising").html();
    fireModal();
});


var pages = [
    {
        id: 'detroit',
        path: 'cities/detroit.html'
    },
    {
        id: 'grand_rapids',
        path: 'cities/grand_rapids.html'
    },
    {
        id: 'ann_arbor',
        path: 'cities/ann_arbor.html'
    },
    {
        id: 'charlevoix',
        path: 'cities/charlevoix.html'
    },
    {
        id: 'holland',
        path: 'cities/holland.html'
    },
    {
        id: 'kalamazoo',
        path: 'cities/kalamazoo.html'
    },
    {
        id: 'mackinac_island',
        path: 'cities/mackinac_island.html'
    },
    {
        id: 'munising',
        path: 'cities/munising.html'
    },
    {
        id: 'traverse_city',
        path: 'cities/traverse_city.html'
    },
];

pages.forEach(function(item, index, array) {
    console.log(item, index);
    var div = "<div class='page' id='page-" + item.id + "'></div>";
    $(".pages").append(div);
    $("#page-" + item.id).load(item.path + ' .site');
});

function fireModal() {
    modalContentsContainer.html(modalContents);
    $("#modal").show();
}

$('#exit').on('click', function(){
    $('#modal').hide();
});

/*
var currentPosition = 0,
    images = ["images/ann_arbor/carousel1.jpg",
                "images/ann_arbor/carousel2.jpg",
                "images/ann_arbor/carousel6.jpg",
                "images/ann_arbor/carousel4.jpg",
                "images/ann_arbor/carousel5.jpg",
                "images/ann_arbor/carousel3.jpg"],


$("right").on("click", function(){
    currentPosition++;
    updateHtml();
});

$("#left").on("click", function(){
    currentPosition--;
    updateHtml();
});

function updateHtml() {
    $("#image").attr("src", images[currentPosition]);
}
*/
