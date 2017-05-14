/*

*BONUS: 0) Declare a variable for currentPosition

1) Declare a variable for likes
- Declare as an array keeping track of likes for each image

2) Declare a variable for the array of images (refer to in-class lab on Monday)

* Is this a place for an array inside of an array?

Carousel 

3) Make on "click" event on Next button to..
 - Figure out where we currently are in the array
 -- Compare where we are currently? Maintain where we are the whole time?
 - Determine whats next in the array
 - Replace the HTML attribute on the page with the value in the array
 - If where we currently are is array.length-2 then disable the next button

4) Make on "click" event on Previous button to..
 - Figure out where we currently are in the array
 -- Compare where we are currently? Maintain where we are the whole time?
 - Determine whats previous in the array
 - Replace the HTML attribute on the page with the value in the array
 - If where we currently are is array[1] then disable the previous button

Likes

5) Make on "click" event on the thumbs up button
- Add 1 to whatever the current total of the likes variable is

6) Make on "click" event on the thumbs down button
- Subtract 1 to whatever the current total of the likes variable is

* Add user validation after testing to make sure they can only click once. Disable?

* Add the ability for user to remove their like. Remove the disable?


*/

var currentPosition = 0,
		likes = [0,20,30,40,10,3],
		images = ["images/image_1.jpg",
							"images/image_2.jpg",
							"images/image_3.jpg",
							"images/image_4.jpg",
							"images/image_5.jpg",
							"images/image_6.jpg"],
		score = 0;

// console.log("These are my variables",currentPosition, likes, images);

$("#next").on("click", function(){
	currentPosition++;
	updateHtml();
	updateButtons();
});

$("#prev").on("click", function(){
	currentPosition--;
	updateHtml();
	updateButtons();
});

$("#upvote").on("click", function(){
	likes[currentPosition]++;
	updateHtml();
});

$("#downvote").on("click", function(){
	likes[currentPosition]--;
	updateHtml();
});

function getTotalScore() {
	score = 0;

	likes.forEach(function(item, index, array) {
	  score = score + item;
	  // console.log("Score in loop" + score);
	});
	// console.log("Score after loop" + score);
}

function updateHtml() {
	$("#image-to-vote-on").attr("src", images[currentPosition]);
	$("#votes").html("Likes: " + likes[currentPosition]);
	getTotalScore();
}

function updateButtons() {
	if(currentPosition === images.length-1){
		$("#next").attr("disabled", true);
		$("#prev").attr("disabled", false);
	}else if(currentPosition === 0){
		$("#prev").attr("disabled", true);
		$("#next").attr("disabled", false);
	}else{
		$("#prev").attr("disabled", false);
		$("#next").attr("disabled", false);
	}
}



