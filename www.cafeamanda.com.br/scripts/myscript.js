// MODAL 01
var modal01 = document.getElementById('modal01');

var img01 = document.getElementById('image01');

var modalImg01 = document.getElementById("img01");

img01.onclick = function(){
    modal01.style.display = "block";
    modalImg01.src = this.src;
}

var span01 = document.getElementsByClassName("close")[0];

span01.onclick = function() {
  modal01.style.display = "none";
}

// MODAL 02
var modal02 = document.getElementById('modal02');

var img02 = document.getElementById('image02');

var modalImg02 = document.getElementById("img02");

img02.onclick = function(){
    modal02.style.display = "block";
    modalImg02.src = this.src;
}

var span02 = document.getElementsByClassName("close")[1];

span02.onclick = function() {
  modal02.style.display = "none";
}

// MODAL 03
var modal03 = document.getElementById('modal03');

var img03 = document.getElementById('image03');

var modalImg03 = document.getElementById("img03");

img03.onclick = function(){
    modal03.style.display = "block";
    modalImg03.src = this.src;
}

var span03 = document.getElementsByClassName("close")[2];

span03.onclick = function() {
  modal03.style.display = "none";
}

// MODAL 04
var modal04 = document.getElementById('modal04');

var img04 = document.getElementById('image04');

var modalImg04 = document.getElementById("img04");

img04.onclick = function(){
    modal04.style.display = "block";
    modalImg04.src = this.src;
}

var span04 = document.getElementsByClassName("close")[3];

span04.onclick = function() {
  modal04.style.display = "none";
}
