 // document.write('working....');
 // console.log('');

 // $(".left-arrow").show();
var numImgs = $('div.carousel-image-holder img').length;

var addId = numImgs;



if(numImgs == 2){       
    var clicked = 0;
    imgCount = numImgs-2;
}else if(numImgs <= 1){
    $(".right-arrow").hide();       
}else{
    var clicked = 1;        
    imgCount = numImgs-1;
}
if(numImgs > 2){
 for (var i=0; i<numImgs; i++){
$("ul").prepend('<li class="carousel-buttons" id="carousel'+addId+'"></li>');
var addId = addId - 1;
  }
}else{

}


$(".carousel-buttons").click(function(){

var findIdClicked = $(this).attr("id");

var splitString = findIdClicked.split("carousel")   
var findTheNumb = splitString[1];

$(".carousel-buttons").removeClass("active");
$(this).addClass("active");
clicked = parseInt(findTheNumb);
 var adjustNumberforSlide = findTheNumb-1;

$(".carousel-image-holder").animate({"left": -(600*adjustNumberforSlide)+"px"});        
console.log(clicked);

if(findTheNumb == 1){
    $(".left-arrow").hide();
    $(".right-arrow").show();
}else if (findTheNumb == numImgs){
    $(".right-arrow").hide();
    $(".left-arrow").show();
}else{
    $(".right-arrow").show();
    $(".left-arrow").show();
}
});


$(".carousel-buttons-container").find("li").first().addClass("active"); 


$(".right-arrow").click(function(){

    if (clicked < imgCount){

    $(".carousel-image-holder").animate({"left": "-=600px"});


        console.log(clicked);
    }else{
    $(".carousel-image-holder").animate({"left": "-=600px"});
    $(".right-arrow").hide();

        console.log(clicked);
    }

    clicked = clicked+1;
    $(".left-arrow").show();
    $(".carousel-buttons").removeClass("active");
    $("#carousel"+clicked).addClass("active");

});

$(".left-arrow").click(function(){

    if (clicked > 2){

    $(".carousel-image-holder").animate({"left": "+=600px"});

        console.log(clicked);
    }else{
    $(".carousel-image-holder").animate({"left": "+=600px"});
    $(".left-arrow").hide();

        console.log(clicked);
    }

    $(".right-arrow").show();
    clicked = clicked-1;
    $(".carousel-buttons").removeClass("active");
    $("#carousel"+clicked).addClass("active");


});