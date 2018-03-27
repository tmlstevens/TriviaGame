var success = 'Great job, Sport! See if you can get another one right';
var statCorrect = 0;
var statWrong = 0;

var trivObject1 = {
    question: 'Which bass does not belong to the genus, Micropterus?',
    choices: ['smallmouth bass','redeye bass','Alabama bass','striped bass'],
    answer: 'striped bass',
};

var trivObject2 = {
    question: 'Which species of fish was introduced by European settlers?',
    choices: ['bla bass', 'shoal bass','rainbow trout','brown trout'],
    answer: ['brown trout'],
};

var trivObject3 = {
    question: 'Which species do not qualify in B.A.S.S.-sanctioned tournaments?',
    choices: ['Alabama bass', 'smallmouth bass','spotted bass','striped bass'],
    answer: 'striped bass',
};

var triviaArray = [trivObject1, trivObject2, trivObject3];
var triviaQuestionsArray = [trivObject1.question, trivObject2.question, trivObject3.question];
var triviaChoicesArray = [trivObject1.choices, trivObject2.choices, trivObject3.choices];
var triviaAnswersArray = [trivObject1.answer, trivObject2.answer, trivObject3.answer];

function getQuestion() {
    for (var i = 0; i < triviaArray.length; i++) {
        var question = $('<span>')
        $('#question').append(question);
        question.append(triviaArray[i].question);
        question.append('<br>');
        console.log(triviaArray[i].question);

        for (var j = 0; j < triviaArray.length; j++) {
            var choice = $('<span>');
            choice.attr('data-choice',triviaArray[j].choices[0]);
            choice.append(triviaChoicesArray[j]);
            $('#question').append(choice);
            choice.append('<br>');
            console.log(choice);
        };
        $('[data-choice]').click(function() {
            var myGuess = $(this).attr("data-choice");
            console.log(myGuess);
            if (myGuess == trivAnswer) {
                alert("Correct");
            }
            else if (myGuess!== trivAnswer) {
                alert("Wrong");
            }
        });
    }
};

$("#startGame").click(function() {
    $('#startGame').remove();
    getQuestion();
    timer.start();
    timer.theEnd();
});

var intervalId;
var clockRunning = false;
var timer = {
    time: 60,
    start: function() {
        if (!clockRunning) {
            intervalId = setInterval(timer.count, 1000);
            clockRunning = true;
        }
    }, 
    count: function() {
        timer.time--;
        nowTime = timer.time;
        var converted = timer.timeConverter(timer.time);
        $("#timer").text(converted);
    },
    timeConverter: function(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    },
    theEnd: function() {
        setTimeout(gameOver, 60000);
        function gameOver() {
            console.log('game OVER');
            clearInterval(intervalId);
        }
    },
};