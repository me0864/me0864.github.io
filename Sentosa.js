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
$(document).ready(dishes);

$(document).ready(function(){
	$(".trigger").click(function(){
		$(".panel").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});
/*
$(document).ready(function(){
    $(".thumbnail").hover(function() {
        $(this).siblings('h5').addClass("fav-hover")
        }, function() {
        $(this).siblings('h5').removeClass("fav-hover");
    });
});
*/

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
	$(".icon-closechinese").click(function(){
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
	$(".icon-closevegetarian").click(function(){
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
	$(".icon-closespecials").click(function(){
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


