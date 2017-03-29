//Select random

function hardCore() {
    var random = Math.random();
    if (random < 0.20) {

        return 'rock';
    } else if (random > 0.20 && random < 0.40) {


        return 'paper';

    } else if (random > 0.40 && random < 0.60) {

        return 'scissors';

    } else if (random > 0.60 && random < 0.80) {
        return 'spock';
    } else {
        return 'lizard';
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

var computerChoice = hardCore;



var compare = function (me, opponent) {
    $('#computer').html(opponent);
    /* COMIENZAS A EDITAR*/
    if (me === 'rock') {



        if (opponent === 'rock') {
            return 'Nobody!';
        } else if (opponent === 'paper') {
            return 'Computer!';
        } else if (opponent === 'scissors') {
            return 'Human!';
        } else if (opponent === 'lizard') {
            return 'Human!';
        } else if (opponent === 'spock') {
            return 'Computer!';
        }
    } else if (me === 'paper') {

        if (opponent === 'paper') {
            return 'Nobody!';
        } else if (opponent === 'rock') {
            return 'Human!';
        } else if (opponent === 'scissors') {
            return 'Computer!';
        } else if (opponent === 'lizard') {
            return 'Computer!';
        } else if (opponent === 'spock') {
            return 'Human!';
        }

    } else if (me === 'scissors') {

        if (opponent === 'scissors') {
            return 'Nobody!';
        } else if (opponent === 'paper') {
            return 'Human!';
        } else if (opponent === 'rock') {
            return 'Computer!';
        } else if (opponent === 'lizard') {
            return 'Human!';
        } else if (opponent === 'spock') {
            return 'Computer!';
        }

    } else if (me === 'lizard') {
        if (opponent === 'lizard') {
            return 'Nobody!';
        } else if (opponent === 'scissors') {
            return 'Computer!';
        } else if (opponent === 'paper') {
            return 'Human!';
        } else if (opponent === 'rock') {
            return 'Computer!';
        } else if (opponent === 'spock') {
            return 'Human!';
        }

    } else if (me === 'spock') {
        if (opponent === 'spock') {
            return 'Nobody!';
        } else if (opponent === 'scissors') {
            return 'Human!';
        } else if (opponent === 'paper') {
            return 'Computer!';
        } else if (opponent === 'rock') {
            return 'Human!';
        } else if (opponent === 'lizard') {
            return 'Computer!';
        }

    }

    /* NO EDITES MAS*/
    else {
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
$("#spock").on('click', function () {
    var result = compare('spock', computerChoice());
    $("#decision").html(result);
    var $this = $(this);
    colorUser($this, result);
});
$("#lizard").on('click', function () {
    var result = compare('lizard', computerChoice());
    $("#decision").html(result);
    var $thisz = $(this);
    colorUser($this, result);
});
