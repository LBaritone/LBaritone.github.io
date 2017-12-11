/**** Funtion to track user scroll in case we decide we want to pause video on scroll
 * I kind of like having it continue to play over the website but we can add in that
 * functionality later if you want
window.onscroll = function (e) {

}
*/


var gun_container = document.getElementById('gun_icons');
var car_container = document.getElementById('vis2car');
var drug_container = document.getElementById('vis2drugs');

function append_gun_icons(i) {
	gun_container.insertAdjacentHTML('beforeend', '<i id="gun_icon_' + i + '" class="fa fa-male fa-4x" aria-hidden="true"></i>');
	$('#gun_icon_' + i).css('visibility', 'visible').hide().fadeIn(150);

    if (--i > -1) {
		setTimeout(function () { append_gun_icons(i); }, 100);
    }
}
function append_car_icons(i) {
	car_container.insertAdjacentHTML('beforeend', '<i id="car_icon_' + i + '" class="fa fa-male fa-4x" aria-hidden="true"></i>');
	$('#car_icon_' + i).css('visibility', 'visible').hide().fadeIn(250);

    if (--i > -1) {
  		setTimeout(function () { append_car_icons(i); }, 50);
    }
}
function append_drug_icons(i) {
	drug_container.insertAdjacentHTML('beforeend', '<i id="drug_icon_' + i + '" class="fa fa-male fa-4x" aria-hidden="true"></i>');
	$('#drug_icon_' + i).css('visibility', 'visible').hide().fadeIn(250);

    if (--i > -1) {
		setTimeout(function () { append_drug_icons(i); }, 50);
    }
}


$(window).on("scroll.scroll1", function () {
	var window_top = $(window).scrollTop();
	var window_bottom = $(window).scrollTop() + $(window).height();
	var window_middle = (window_top + window_bottom) / 2.0;

	var target_top = $(".vis2_section").position().top;
	var target_bottom = $(".vis2_section").position().top + $(window).height();


	// console.log("middle: " + window_middle);
	// console.log("top: " + target_top);
	// console.log("bottom: " + target_bottom);

	if(window_middle > target_top && window_middle < target_bottom) {
		$('#vis2_title').fadeOut(4000);
		setTimeout(function () { 
			$('#vis2_title').remove();
		}, 4000);

		setTimeout(function () { 
			$('#gun_text').css('visibility', 'visible').hide().fadeIn(2000);
			$('#vis2gun').css('visibility', 'visible').hide().fadeIn(3000);
			append_gun_icons(13);
			setTimeout(function() {
				$('.red1').css('color', '#DF4515');
			}, 1000);
		}, 4000);

		setTimeout(function () { 
			$('#car_text').css('visibility', 'visible').hide().fadeIn(2000);
			$('#vis2car_icon').css('visibility', 'visible').hide().fadeIn(3000);
			$('#car_row').css('background-color', '#464a4d').hide().fadeIn(1000);	
			append_car_icons(38);
			setTimeout(function() {
				$('.red2').css('color', '#DF4515');
			}, 1000);
		}, 5600);

		setTimeout(function () { 
			$('#drug_text').css('visibility', 'visible').hide().fadeIn(2000);
			$('#vis2can').css('visibility', 'visible').hide().fadeIn(3000);
			$('#drug_row').css('background-color', '#3d4143').hide().fadeIn(1000);
			append_drug_icons(52);
			setTimeout(function() {
				$('.red3').css('color', '#DF4515');
			}, 1000);
		}, 8200);

		

		$(this).off('scroll.scroll1'); 
	}
});


// $(document).ready(function() {
// 	$(".expand").hover(
// 		//on mouseover
// 		function() {
// 			$(this).animate({
// 				width: '+=2.5vw'
// 				}, 'fast' 
// 			);
// 		},
// 		//on mouseout
// 		function() {
// 			$(this).animate({
// 				width: '-=2.5vw',
// 				}, 'fast'
// 			);
// 		}
// 	);

// });


// var vis2_svg = d3.select("#vis2").append("svg")
//     .attr("id", "")
//     .attr("width", $(window).width())
//     .attr("height", $(window).height())
//     .style("background-color", "#4f5357");


// vis2_svg.append("rect")
//     .attr("x", 0)
//     .attr("y", 0)
//     .attr("width", $(window).width())
//     .attr("height", $(window).height())
//     .attr("opacity", 0.95)
//     .attr("class", "vis2_overlay")
//     .style("fill", "#4f5357");
// var vis2_overlay_button = vis2_svg.append("rect")
//     .attr("x", 500)
//     .attr("y", 177)
//     .attr("width", 220)
//     .attr("height", 45)
//     .attr("class", "vis2_overlay vis2_overlay_button")
//     .attr("id", "vis2_overlay_button")
//     .attr("rx", 4)
//     .attr("ry", 4)
//     .attr("fill", "#DF4515");
// vis2_svg.append("text")
//     .attr("x", 514)
//     .attr("y", 208)
//     .attr("class", "vis2_overlay")
//     .attr("id", "vis2_overlay_button_text")
//     .style("font-family", "Verdana")
//     .style("fill", "white")
//     .style("font-size", 22)
//     .text("See Deaths");


// document.getElementById("vis2_overlay_button").addEventListener("click", function(){vis2_overlay()});
// document.getElementById("vis2_overlay_button_text").addEventListener("click", function(){vis2_overlay()});

// function vis2_overlay(){
//     vis2_svg.selectAll(".vis2_overlay").transition().duration(500).attr("opacity", 0);

// 	setTimeout(function () { 
// 		$('#gun_text').css('visibility', 'visible').hide().fadeIn(2000);
// 		$('#vis2gun').css('visibility', 'visible').hide().fadeIn(3000);
// 		append_gun_icons(13);
// 	}, 400);

// 	setTimeout(function () { 
// 		$('#car_text').css('visibility', 'visible').hide().fadeIn(2000);
// 		$('#vis2car_icon').css('visibility', 'visible').hide().fadeIn(3000);
// 		$('#car_row').css('background-color', '#464a4d').hide().fadeIn(1000);	
// 		append_car_icons(38);
// 	}, 2000);

// 	setTimeout(function () { 
// 		$('#drug_text').css('visibility', 'visible').hide().fadeIn(2000);
// 		$('#vis2can').css('visibility', 'visible').hide().fadeIn(3000);
// 		$('#drug_row').css('background-color', '#3d4143').hide().fadeIn(1000);
// 		append_drug_icons(52);
// 	}, 4600);
// }

// document.getElementById("vis2_overlay_button_text").addEventListener("mouseover", function(){

//     vis2_overlay_button.style("fill", "#c83e12");
// });
// document.getElementById("vis2_overlay_button_text").addEventListener("mouseout", function(){
//     vis2_overlay_button.style("fill", "#DF4515");
// });








