


$( document ).ready(function(){
	$('ul.dropdown').hide();
	$('.submenuclient').hide();
	$('.submenuproject').hide();


	$('td.project').click(
		function(){
			$('ul.dropdown').show();
			$('.submenuclient').show();
			

			console.log ("tried to open clients");
		}),
	$('.submenuclient').click(
		function(){
			$(this).children('.submenuproject').show();
			
		
		console.log ("tried to open projects");

	$('.submenuproject').click(
		function(){
			$(this).val();
			$('.project').replaceWith(this)
			$(this).css({"background-color": '#d3edf8'})
			$(this).css({"border-radius": '20px'})
			$('.submenuproject').css({"list-style": 'none'})
    		$(this).css({"font-size": '14px'})
    		$('li').css({"weight": '5px'})
    		$(this).css({"margin-left": '8px'})
    		$(this).css({"margin-right": '8px'})
    		$(this).css({"margin-top": '0px'})
    		$(this).css({"margin-bottom": '0px'})
    		$(this).css({"text-align": 'center'})
    		$(this).css({"padding-left": '0'})
    		$(this).css({"padding-top": '4px'})
    		$(this).css({"padding-bottom": '4px'})

    		$('td.project2').click(
    			function(){
    				$('ul.dropdown').show();

    			})
		})

		});
	});




var daily = 0;

var sunday = $('#time1').val();
var monday = $('#time2').val();
var tuesday = $('#time3').val();
var wednesday = $('#time4').val();
var thursday = $('#time5').val();
var friday = $('#time6').val();
var saturday = $('#time7').val();



var days = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];



console.log (days);



$.each(days, function(index,value){
	console.log(value);


});


$("input[type='number']").bind('keyup mouseup', function() {
	daily = $(this).val();
	console.log(daily);


	var daily = 0;

	var sunday = $('#time1').val();
	var monday = $('#time2').val();
	var tuesday = $('#time3').val();
	var wednesday = $('#time4').val();
	var thursday = $('#time5').val();
	var friday = $('#time6').val();
	var saturday = $('#time7').val();

	$("div.suntotal").html(sunday);
	$("div.montotal").html(monday);
	$("div.tuestotal").html(tuesday);
	$("div.wedtotal").html(wednesday);
	$("div.thurstotal").html(thursday);
	$("div.fritotal").html(friday);
	$("div.sattotal").html(saturday);

	var days = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];



	var total = days.reduce(add,0);
	function add(a,b) {
		var a1 = parseInt(a);
		var b1 = parseInt(b);
		return a1 + b1;
	}
	console.log (total);

	$("div.inner").html(total + "    hours");
	$("div.finaltotal").html(total + "  hours");

});

$(function(){
	var counter = 1;

	$('button.add').click(function(event){
		event.preventDefault();

	var newRow =
		$('<tr><td class=empty></td>' + 
			counter + '<td class=project2>Select Project</td>' +
			counter + '<td><input type="number" name="time1" id="time8" placeholder="0" min="0" max="24" value="0"/></td>' + 
			counter + '<td><input type="number" name="time2" id="time9" placeholder="0" min="0" max="24" value="0"></td>' + 
			counter + '<td><input type="number" name="time3" id="time10" placeholder="0" min="0" max="24" value="0"></td>' +
			counter + '<td><input type="number" name="time4" id="time11" placeholder="0" min="0" max="24" value="0"></td>' +
			counter + '<td><input type="number" name="time5" id="time12" placeholder="0" min="0" max="24" value="0"></td>' +
			counter + '<td><input type="number" name="time6" id="time13" placeholder="0" min="0" max="24" value="0"></td>' + 
			counter + '<td><input type="number" name="time7" id="time14" placeholder="0" min="0" max="24" value="0"></td>' + 
			counter + '<td><div class="inner2">0</div></td>' + 
			counter + '<td>20 hours</td></tr>');
			counter++;
		$('table.entry').append(newRow);

			$("input[type='number']").bind('keyup mouseup', function() {
				daily = $(this).val();
				console.log(daily);


				var daily = 0;

				var sunday = $('#time8').val();
				var monday = $('#time9').val();
				var tuesday = $('#time10').val();
				var wednesday = $('#time11').val();
				var thursday = $('#time12').val();
				var friday = $('#time13').val();
				var saturday = $('#time14').val();

				var days = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];



	var total2 = days.reduce(add,0);
	function add(a,b) {
		var a1 = parseInt(a);
		var b1 = parseInt(b);
		return a1 + b1;
	}
	console.log (total2);

	$("div.inner2").html(total2 + "    hours");
	

				});

				});

			});

$("button.save").click(
		(function (){
	var total = totalweek1 + totalweek2;
	var totalweek1 = parseInt($("div.inner").val());
	var totalweek2 = parseInt($("div.inner2").val());
		
	 
	 
	 $("div.finaltotal").html($(total).val() + " hours");
			}

		)

		);

















