/*
Global Actions Sheet

  Author:   Author Name
  Date:     DAY - MONTH - YEAR
  Project:  Project Name

*/

//Smooth Scroll

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
});


//Generate cards needed



var card = '<div class="square"> \
<figure class = "front" > \
</figure> \
<figure class = "back" > \
</figure> \
</div > ';

var randomArray = [];


function getCant() {
    var title = $(this).text();
    return title;
}

function cardLoop(cant) {
    $('.cards--container').empty();
    setTimeout(
        function () {
            for (i = 0; i < cant; i++) {
                $('.cards--container').append(card);
            }
        }, 10)
}

function cardStyle(cant) {
    setTimeout(
        function () {
            $('.square').css('width', 'calc(100% / ' + cant / 2 + ')');
        }, 10)

}

function createCard(cant) {
    cardLoop(cant);
    cardStyle(cant);
    createRandom(cant)
}

function createRandom(cant) {

    for (i = 0; i < cant; i++) {
        randomArray[i] = Math.floor(Math.random() * 9);
    }

}

$('.chose').click(
    function () {
        var title = $(this).val();
        createCard(title);
    },
);


$('.square').click(
    function () {
        $('.square').addClass('active');
    }
)



//Timing ends

var end = new Date();
var endTime = end.getTime();
var timeTaken = end - start;
console.log('Execution time is : ' + timeTaken);
