
//burger
$('.modal__content').hide();
$('.mobile-tab').hide();
$('.blure').hide();
$('.overflow').hide();

$('#burg').on('click', function(){
  $('.mobile-tab').slideToggle();
  $('.blure').slideToggle();
  $(this).closest('body').toggleClass('active')
})


$('#demo-modal').on('click', function(){
    $('.modal__content').slideToggle();
    $('.blure').slideToggle();
    $(this).closest('body').toggleClass('active')
    $('header').hide();
  })


///

$(document).ready(function() {    
    $("body").css("opacity", "1");
  });

//cлайдер========================================================================================

new Swiper('.image-slider', {
    //Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    //количество слайдов для показа
    slidesPerView: 1.37,
    breakpoints: {
        612: {
            slidesPerView: 1.17,
        }     
    },
    //отступ между слайдами
    //spaceBetween: -19,
    //количество пролистываемых слайдов
    slidesPerGroup: 1,
    //бесконечное прокручивание
    loop: true,
    //количество дублирующих слайдов
  //  loopedSlides: 3,
    //свободный режим
  //  freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
    },
});

//select==============================================================================================

const selectButton = document.querySelector('.main-screen__select_button');
const selectList = document.querySelector('.main-screen__list');
const selectListItems = document.querySelectorAll('.main-screen__list-item');

//Клик по кнопке. Открыть, закрыть select
selectButton.addEventListener('click', function() {
    selectList.classList.toggle('main-screen__list--visible');
    this.classList.add('main-screen__select_button--active');
});

//Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
selectListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        selectButton.innerText = this.innerText;
        selectButton.focus();
        selectList.classList.toggle('main-screen__list--visible');
    })
})

//Клик снаружи дропдауна. Закрыть дропдаун
document.addEventListener('click', function (e) {
    if (e.target !== selectButton) {
        selectButton.classList.remove('main-screen__select_button--active');
        selectList.classList.remove('main-screen__list--visible');
    }
})


//Кнопки

const ANIMATEDCLASSNAME = "animated";
const ELEMENTS = document.querySelectorAll(".HOVER");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {
	let addAnimation = false;
	// Elements that contain the "FLASH" class, add a listener to remove
	// animation-class when the animation ends
	if (element.classList[1] == "FLASH") {
		element.addEventListener("animationend", e => {
			element.classList.remove(ANIMATEDCLASSNAME);
		});
		addAnimation = true;
	}

	// If The span element for this element does not exist in the array, add it.
	if (!ELEMENTS_SPAN[index])
		ELEMENTS_SPAN[index] = element.querySelector("span");

	element.addEventListener("mouseover", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

		// Add an animation-class to animate via CSS.
		if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
	});

	element.addEventListener("mouseout", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
	});
});



