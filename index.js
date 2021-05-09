const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

const navLinks2 = document.getElementById('other-navs');

//Letting user open hamburger menu for all pages
// Home page
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
// All other pages
hamburger.addEventListener('click', () => {
    navLinks2.classList.toggle('show');
});

// When the box is clicked takes user to the services page
document.getElementById("box1-btn").onclick = function () {
    location.href = "/src/pages/services.html";
};
document.getElementById("box2-btn").onclick = function () {
    location.href = "/src/pages/services.html";
};
document.getElementById("box3-btn").onclick = function () {
    location.href = "/src/pages/services.html";
};

// Pop up moodal
var closeBtn = document.getElementsByClassName('closeBtn')[0];

closeBtn.addEventListener('click', closePopup);
window.addEventListener('click', clickOutside);

function closePopup() {
    popup.style.display = 'none';
}

function clickOutside(evt){
    if(evt.target == popup){
     popup.style.display = 'none';
    }
}
