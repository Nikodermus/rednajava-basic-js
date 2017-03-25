//Select random
function simpleGame() {
    var random = Math.random();
    if (random < 0.333) {

        return 'rock';
    } else if (random < 0.67777 || random > 0.33) {


        return 'paper';

    } else {

        return 'scissors';

    };
};


function colorUser(useMe, resultIs) {

    $('.buttonGame').css('background-color', 'initial');
    if (resultIs === 'Human!') {
        var color = 'green';
    } else if (resultIs === 'Computer!') {
        var color = 'red'
    } else if (resultIs === 'Nobody!') {
        var color = 'gray'
    }
    setTimeout(function () {
        useMe.css('background-color', color);
    }, 10)

};

var computerChoice = simpleGame;



var compare = function (me, opponent) {
    $('#computer').html(opponent);

    if (me === 'rock') {



        if (opponent === 'rock') {
            return 'Nobody!';
        } else if (opponent === 'paper') {
            return 'Computer!';
        } else if (opponent === 'scissors') {
            return 'Human!';
        }
    } else if (me === 'paper') {

        if (opponent === 'paper') {
            return 'Nobody!';
        } else if (opponent === 'rock') {
            return 'Human!';
        } else if (opponent === 'scissors') {
            return 'Computer!';
        }

    } else if (me === 'scissors') {

        if (opponent === 'scissors') {
            return 'Nobody!';
        } else if (opponent === 'paper') {
            return 'Human!';
        } else if (opponent === 'rock') {
            return 'Computer!';
        }

    } else {
        return "That doesn't make any sense!";
    }


};

$("#scissors").on('click', function () {
    var result = compare('scissors', computerChoice());
    $("#decision").html(result);
    var $this = $(this);
    colorUser($this, result);
});

$("#paper").on('click', function () {
    var result = compare('paper', computerChoice());
    $("#decision").html(result);
    var $this = $(this);
    colorUser($this, result);
});

$("#rock").on('click', function () {
    var result = compare('rock', computerChoice());
    $("#decision").html(result);
    var $this = $(this);
    colorUser($this, result);
});
