//Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// Ketika hamburgerMenu di klik
document
  .querySelector("#hamburger-menu")
  .addEventListener("click", function () {
    navbarNav.classList.toggle("active");
  });

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").addEventListener('click', function(e) {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
});


// Toggle class active untuk shoping-cart

const shopingCart = document.querySelector(".shoping-cart");

document.querySelector("#shopping-cart-button").addEventListener('click', function(){
  shopingCart.classList.toggle("active");
});


// --------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------


// Klik diluar Element
const hamburgerE = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
const shopingCartButton = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburgerE.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!shopingCartButton.contains(e.target) && !shopingCart.contains(e.target)) {
    shopingCart.classList.remove("active");
  }
});




// Modal Box

const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-bottom");

itemDetailButtons.forEach((btn) => {
  btn.addEventListener('click', function(e){
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  });
});


// Klik tombol close modal box
document.querySelector(".modal .modal-container .close-icon").addEventListener('click', function(e){
  itemDetailModal.style.display = 'none';
  e.preventDefault();
});

// Klik diluar modal
window.addEventListener('click',function(e){
  if(e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
});