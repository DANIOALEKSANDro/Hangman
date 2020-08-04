var pass = "You won" //password
pass = pass.toUpperCase();

var length = pass.length;

var pass_ = "";

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
        divTxt = divTxt + '<div class="letter">'+letters[i]+'</div>';
        if((i + 1) % 7 == 0) divTxt = divTxt + '<div style="clear: both;" ></div>'
    }

    document.getElementById("abc").innerHTML = divTxt;

    showPass();
}