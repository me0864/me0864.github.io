/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var dishes = function(){
  $('.article').click(function() {
    $(this).children('.description').toggle('fast');
    });
}
/*
var dishes = function () {
    $('.article').click(function () {
        $('.article').removeClass('current');
        $('.description').hide();

        $(this).addClass('current');
        $(this).children('.description').show();
    });

    $(document).keypress(function (event) {
        if (event.which === 111) {
            $('.description').hide();

            $('.current').children('.description').show();
        }

        else if (event.which === 110) {
            var currentArticle = $('.current');
            var nextArticle = currentArticle.next();

            currentArticle.removeClass('current');
            nextArticle.addClass('current');
        }
    });
}
*/
$(document).ready(dishes);


var slides = function () {

    $('.arrow-next').click(function () {
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();

        if (nextSlide.length == 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');

    });
    $('.arrow-prev').click(function () {
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();

        if (prevSlide.length == 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').first();
        }
        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });

};


$(document).ready(slides);

$(document).ready(function(){
	$(".trigger").click(function(){
		$(".panel").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});

$(document).ready(function(){
	$(".hours-click").click(function(){
		$(".hours").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});

$(document).ready(function(){
	$(".hours-close").click(function(){
		$(".hours").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});

$(document).ready(function(){
    $(".thumbnail").hover(function() {
        $(this).siblings('h5').addClass("fav-hover")
        }, function() {
        $(this).siblings('h5').removeClass("fav-hover");
    });
});

$(document).ready(function(){
	$(".contacts-show").click(function(){
		$(".contacts").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});

$(document).ready(function(){
	$(".contacts-close").click(function(){
		$(".contacts").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});

$(document).ready(function(){
	$(".thumbnail-chinese").click(function(){
		$(".dishes-chinese").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});

$(document).ready(function(){
	$(".thumbnail-vegetarian").click(function(){
		$(".dishes-vegetarian").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});

$(document).ready(function(){
	$(".thumbnail-specials").click(function(){
		$(".dishes-specials").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});

$(document).ready(function(){
	$("li").click(function() {
        var myClass = $(this).attr("class");
        $(".description").hide();
        $(".dish-"+myClass).show("fast");
        });
});


