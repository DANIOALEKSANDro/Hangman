var pass = "You won" //password
pass = pass.toUpperCase();

var length = pass.length;

var pass_ = "";

var img = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");
var gotIt = new Audio("gotIt.wav");

for(i=0; i<length; i++) {
    if(pass.charAt(i) == " ") pass_ = pass_ + " ";
    else pass_ = pass_ + "-";
}

function showPass() {
    document.getElementById("board").innerHTML = pass_;
}

window.onload = start;

var letters = new Array(26);
letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function start() {
    var divTxt = "";

    for(i=0; i<26; i++) {
        var element = "num" + i;
        divTxt = divTxt + '<div onclick="check('+i+')" id="'+element+'" class="letter">'+letters[i]+'</div>';
        if((i + 1) % 7 == 0) divTxt = divTxt + '<div style="clear: both;" ></div>'
    }

    document.getElementById("abc").innerHTML = divTxt;

    showPass();
}

String.prototype.setSign = function(place, sign) {
    if(place > this.length - 1) return this.toString();
    else return this.substr(0, place) + sign + this.substr(place + 1);
}

function check(nr) {
    
    var guessed = false;
    var element = "num" + nr;

    for(i=0; i<length; i++) {
        if(pass.charAt(i) == letters[nr]) {
            pass_ = pass_.setSign(i, letters[nr]);
            guessed = true;
        }
    }

    if(guessed == true) {
        yes.play();
        document.getElementById(element).style.background = "lime";
        document.getElementById(element).style.color = "green";
        document.getElementById(element).style.border = "3px solid #00C000"
        document.getElementById(element).style.cursor = "default";

        showPass();
    }
    else {
        no.play();
        document.getElementById(element).style.background = "tomato";
        document.getElementById(element).style.color = "red";
        document.getElementById(element).style.border = "3px solid red"
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick", ";");

        img++;
        var image = "img/s" + img + ".jpg";
        document.getElementById('playground').innerHTML = '<img src="'+image+'" />';
    }

    showPass();

    if(pass == pass_) {
        document.getElementById("abc").innerHTML = "<marquee>You did really win,<br/> CONGRATS! ;)</marquee>"
        gotIt.play();
    }
}