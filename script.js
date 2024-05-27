// модальное окно
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal){
        modal.style.display="none";
    }
}

// бургер меню
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const menuButton= document.querySelector(".menuButton");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    }
}
  
menuButton.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
)

// аккардеон1
const boxes = Array.from(document.querySelectorAll(".box"));

boxes.forEach((box) => {
    box.addEventListener("click", box1Handler);
});

function box1Handler(e){
    e.preventDefault();
    let currentBox = e.target.closest(".box");
    let currentContent = e.target.nextElementSibling;
    currentBox.classList.toggle("active");
    if(currentBox.classList.contains("active")){
        currentContent.style.maxHeight = currentContent.scrollHeight + "px";
    } else {
        currentContent.style.maxHeight = 0;
    }
}

// слайдер1
let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const firstNum = document.querySelector('.firstSliderNumber');
const secondNum = document.querySelector('.secondSliderNumber');
const thirdNum = document.querySelector('.thirdSliderNumber');

document.querySelector('.firstSliderButton2').addEventListener('click', function(){
    offset = offset - 1802;
    if(offset < -3604){
        offset = 0;
    }
    if(offset == 0){
        firstNum.style.color = '#FCD54C';
        secondNum.style.color = '#FFFFFF';
        thirdNum.style.color = '#FFFFFF';
    }else if(offset == -1802){
        firstNum.style.color = '#FFFFFF';
        secondNum.style.color = '#FCD54C';
        thirdNum.style.color = '#FFFFFF';
    }else{
        firstNum.style.color = '#FFFFFF';
        secondNum.style.color = '#FFFFFF';
        thirdNum.style.color = '#FCD54C';
    }
    sliderLine.style.left = offset + "px";
});

document.querySelector('.firstSliderButton1').addEventListener('click', function(){
    offset = offset + 1802;
    if(offset > 0){
        offset = -3604;
    }
    if(offset == 0){
        firstNum.style.color = '#FCD54C';
        secondNum.style.color = '#FFFFFF';
        thirdNum.style.color = '#FFFFFF';
    }else if(offset == -1802){
        firstNum.style.color = '#FFFFFF';
        secondNum.style.color = '#FCD54C';
        thirdNum.style.color = '#FFFFFF';
    }else{
        firstNum.style.color = '#FFFFFF';
        secondNum.style.color = '#FFFFFF';
        thirdNum.style.color = '#FCD54C';
    }
    sliderLine.style.left = offset + "px";
});

// аккардеон2
const boxes2 = Array.from(document.querySelectorAll(".box2"));

boxes2.forEach((box2) => {
  box2.addEventListener("click", box2Handler);
});

function box2Handler(e) {
  e.preventDefault();
  let currentBox2 = e.target.closest(".box2");
  let currentContent2 = e.target.nextElementSibling;
  currentBox2.classList.toggle("active");
  if (currentBox2.classList.contains("active")) {
    currentContent2.style.maxHeight = currentContent2.scrollHeight + "px";
  } else {
    currentContent2.style.maxHeight = 0;
  }
}

//фильтр
const filterButtons = document.querySelectorAll('.button');
const cards = document.querySelectorAll('.cards');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filterValue = button.dataset.filter;
    cards.forEach((card) => {
      if (filterValue === 'all' || card.classList.contains(filterValue)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});