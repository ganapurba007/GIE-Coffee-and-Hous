// Toggle class active hambuerger menu
const navbarNav = document.querySelector('.navbar-nav');

// Toggle class hambureger menu
document.querySelector('#hamburger-menu').onclick = (e) => {
	navbarNav.classList.toggle('active');
	e.preventDefault();
};

// Toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box')

document.querySelector('#search-button').onclick = (e) => {
	searchForm.classList.toggle('active');
	searchBox.focus();
	e.preventDefault();
};

//Toggle class active shopping cart
const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (e) => {
	shoppingCart.classList.toggle('active');
	e.preventDefault();
};


// Klik diluar element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
	if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
		navbarNav.classList.remove('active');
	}

	if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
		searchForm.classList.remove('active');
	}


	if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
		shoppingCart.classList.remove('active');
	}
});




// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
	btn.onclick = (e) => {
		itemDetailModal.style.display = 'flex';
		e.preventDefault();
	};
});






// Klik tombol close
const close = document.querySelector('.close-icon');

close.onclick = (e) => {
	itemDetailModal.style.display = 'none';
	e.preventDefault();
}


window.onclick = (e) => {
	if (e.target === itemDetailModal) {
		itemDetailModal.style.display = 'none';
	}
}