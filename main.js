/** 
var inputElement1 = document.querySelector('input[type="text"]');
console.log(inputElement1);
var inputValue;
inputElement1.onchange = function (e) {
    console.log('giá trị là: ' + e.target.value);  
    e.target.value = inputValue;
    console.log(e.target.value);
    
}

var inputElement2 = document.querySelector('input[type="checkbox"]');
//console.log(inputElement2);

inputElement2.onchange = function (e) {
    console.log(e.target); // lấy ra element đang gọi sự kiện events
    console.log(e);
    console.log(e.target.checked);
    
}


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
**/

var buttonBackToTop = document.querySelector('.boxElement');
console.log(buttonBackToTop);


window.onscroll = function() {
    if (document.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonBackToTop.style.display = "block";
    } else {
        buttonBackToTop.style.display = "none";
    }
};

buttonBackToTop.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};


    

