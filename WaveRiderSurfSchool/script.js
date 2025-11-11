const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// open dropdown navigation menu when hamburger is clicked
// turn hamburger into x when dropdown menu is opened
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    toggleButton.classList.toggle('open') 
})

// open pop up 
let popup = document.getElementById('popup');
let popup2 = document.getElementById('popup2');
let closeBtn = document.getElementById('cancelButton');


// Open popup window for download cards and dim the background when button clicked
function openPopup() {
    popup.classList.add("open-popup")
    document.getElementById("overlay").style.display = "block";
};

// Close popup window for download cards and remove dimmed background
function closePopup() {
    popup.classList.remove("open-popup")
    document.getElementById("overlay").style.display = "none";
};

// modal container

let openBtn = document.getElementById('bookBtn');
let modalContainer = document.getElementById('modal-container');
let closeModal = document.getElementById('close-btn');

// Event Listeners

openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block'; 
})

closeModal.addEventListener('click', function() {
    modalContainer.style.display = 'none';
})


window.addEventListener('click', function(e){
    if(e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})
