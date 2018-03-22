var question1 = {
    question: 'Which bass does not belong to the genus, Micropterus?',
    wrong: ['smallmouth bass','redeye bass','Alabama bass'],
    right: 'striped bass',
};

var question2 = {
    question: 'Which species of fish was introduced by European settlers?',
    wrong: ['smallmouth bass', 'shoal bass','rainbow trout'],
    right: ['brown trout'],
};

var question3 = {
    question: 'Which species do not qualify for weigh-in in B.A.S.S. sanctioned tournaments?',
    wrong: ['Alabama bass', 'smallmouth bass','spotted bass'],
    right: 'striped bass',
};
var triviaArray = [question1, question2, question3];

var success = 'Great job, Sport! See if you can get another one right';
var statCorrect = 0;
var statWrong = 0;

window.onload = function() {
    // timer.start();
    // $("#reset").on("click", timer.reset);  // change this to be done automatically
    $("#startGame").on("click", timer.start);
  };
    var intervalId;
    var clockRunning = false;

    var timer = {
        time: 0,
        reset: function() {
            timer.time = 0;
            timer.lap = 1;
            $("#timer").text("00:00");
            },
        start: function() {
            if (!clockRunning) {
                intervalId = setInterval(timer.count, 1000);
                clockRunning = true;
            }
        },
        stop: function() {
            clearInterval(intervalId);
            clockRunning = false;
        },
        count: function() {
            timer.time++;
            var converted = timer.timeConverter(timer.time);
            console.log(converted);
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
        }
    };