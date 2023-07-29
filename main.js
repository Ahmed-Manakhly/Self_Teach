//change nav bar

window.addEventListener('scroll', () => {
    document.querySelector("nav").classList.toggle('window-scroll', window.scrollY > 8);
    document.querySelector(".logo").classList.toggle('logo-scroll', window.scrollY > 8);
});




//to open the answers

let ferq = document.querySelectorAll(".f__icon");
ferq.forEach(e => {
    e.onclick = () => {
        e.parentElement.classList.toggle("open");
        if (e.firstChild.className === "uil uil-plus") {
            e.firstChild.className = "uil uil-minus";
        } else {
            e.firstChild.className = "uil uil-plus"
        };
    }
});

//appearabce of the menu
let mymenu = document.querySelector(".nav__menu");
let myclose = document.querySelector("#close__menu__btn");
let myopen = document.querySelector("#open__menu__btn");

myopen.addEventListener('click', function() {
    mymenu.style.display = "flex";
    myopen.style.display = "none";
    myclose.style.display = "inline-block";
});

myclose.addEventListener('click', function() {
    mymenu.style.display = "none";
    myclose.style.display = "none";
    myopen.style.display = "inline-block";
});

//up button
let up = document.createElement("button");
let up_text = document.createTextNode("To Top");
up.appendChild(up_text);
document.body.appendChild(up);
up.style.cssText = " border-radius: 4px ; position : fixed ; bottom : 20px ; right : 20px ; display : none; cursor : pointer;";
up.className = "btn btn-primary"
window.onscroll = function() {
    if (window.scrollY >= 250) {
        up.style.display = "block";
    } else {
        up.style.display = "none";
    }
};
up.onclick = function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

// Sidebar

const container = document.querySelector(".courses__container-");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let x = 0;
let timer;

prev.addEventListener('click', () => {
    x = x + 45;
    clearTimeout(timer)
    updategallery();

});

next.addEventListener('click', () => {
    x = x - 45;
    clearTimeout(timer)
    updategallery();
});

function updategallery() {
    container.style.transform = `perspective(1000px) rotateY(${x}deg)`
    timer = setTimeout(() => {
        x = x - 45;
        updategallery()
    }, 3000)
}

updategallery()

// ============================= c-sat section
const ratingCon = document.querySelector('.rating__container');
const stars = document.querySelectorAll('.fa-star');
const faces = document.querySelectorAll('.fa-3x');
const root = document.querySelector(':root')

stars.forEach((str, index) => {
    str.addEventListener('click', () => {
        root.style.setProperty('--face-changing-order', index);
        updateRating(index);
    });
});

function updateRating(index) {
    stars.forEach((str, i) => {
        if (i <= index) {
            str.classList.add('active');
        } else {
            str.classList.remove('active');
        };
    });
};
//===================================================slider

var sliderItems = Array.from(document.querySelectorAll('.slider__container__t .testimonials'));
var itemsLength = sliderItems.length;
var currentIndex = 1;
var slidCounter = document.querySelector('.slider__container__t #slider__number');
//buttons
const prevButton = document.querySelector('.slider__control__t #prev');
const nextButton = document.querySelector('.slider__control__t #next');

//functions of buttons 
prevButton.onclick = prevSlid;
nextButton.onclick = nextSlid;


function nextSlid() {
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        currentIndex++;
        theChecker();
    }
};

function prevSlid() {
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        currentIndex--;
        theChecker();
    }
};
//creat pagination
var pagination = document.createElement('ul');
pagination.setAttribute('id', 'pagination-ul');
//creat pagination ele's based on sliderItems
for (let i = 1; i <= itemsLength; i++) {
    let paginationLi = document.createElement('li');
    paginationLi.setAttribute('data-index', i);
    paginationLi.appendChild(document.createTextNode(i));
    pagination.appendChild(paginationLi);
};
document.getElementById('indicators').appendChild(pagination);
const paginationul = document.getElementById('pagination-ul');
let paginationlis = Array.from(document.querySelectorAll('#pagination-ul li'));

for (let i = 0; i < paginationlis.length; i++) {
    paginationlis[i].onclick = function() {
        currentIndex = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}
theChecker();

function theChecker() {
    removeActiveS()
    slidCounter.textContent = 'Slide# ' + (currentIndex) + ' of ' + (itemsLength);
    sliderItems[currentIndex - 1].classList.add('active');
    paginationul.children[currentIndex - 1].classList.add('active');
    if (currentIndex === 1) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }

    if (currentIndex === itemsLength) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }

};

function removeActiveS() {
    sliderItems.forEach((ele) => {
        ele.classList.remove('active');

    })

    paginationlis.forEach((item) => {
        item.classList.remove('active');
    })
}