const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');


for (let btn of infoBtns) {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        this.parentNode.querySelector('.info-hint').classList.toggle('none');
    });
}



document.addEventListener('click', function () {
    for (let hint of infoHints) {
        hint.classList.add('none');
    }
});




for (let hint of infoHints) {
    hint.addEventListener('click', (e) =>  e.stopPropagation());
};

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    freeMode: true,
    slidesPerView: 4,
    spaceBetween: 42,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 42,
        },
        1230: {
            slidesPerView: 4,
            spaceBetween: 42,
        },
    },


    // Navigation arrows
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
});

//tabs

const tabsBtn = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');
for (let btn of tabsBtn) {
    btn.addEventListener('click', function () {
        for (let btn of tabsBtn) {
            // console.log(this.dataset.tab);
            btn.classList.remove('tab-controls__btn--active');
        }
        this.classList.add('tab-controls__btn--active');

        for (let product of tabsProducts) {

			console.log('Current tab:', this.dataset.tab);
            if (this.dataset.tab === 'All') {
                console.log(this.dataset.tab);
				product.classList.remove('none');
			} else {
				if (product.dataset.tabValue === this.dataset.tab) {
					product.classList.remove('none');
				} else {
					product.classList.add('none');
				}
			}
		}
        swiper.update();
    });
};

const mobileNavOpenBtn = document.querySelector('.nav__btn');
const mobileNav = document.querySelector('.mobile-nav-wrapper');
const mobileNavCloseBtn = document.querySelector('.mobile-nav_btn-close');
const mobileCart = document.querySelector('.cart');
const furnitureDropDown = document.querySelector('.mobile-nav__link--dropdown');
const furnitureMenu = document.querySelector('.mobile-sub-nav');
mobileNavOpenBtn.addEventListener('click', function () {
    mobileNav.classList.add('mobile-nav-wrapper--open');
    mobileCart.classList.add('none');
    mobileNavOpenBtn.classList.add('none');
});
mobileNavCloseBtn.addEventListener('click', function () {
    mobileNav.classList.remove('mobile-nav-wrapper--open');
    mobileCart.classList.remove('none');
    mobileNavOpenBtn.classList.remove('none');
});

furnitureDropDown.onclick = function () {
    furnitureMenu.classList.toggle('none');
};

