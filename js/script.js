"use strick"


if (document.body.clientWidth>991){
	//fullpage set
    $(function () {
        $("#fullpage").fullpage();
    })

    $(document).on('click', '#dwn', function(){
        fullpage_api.moveSectionDown();
    });
}

//features accordion
document.querySelectorAll('.features__title').forEach((e) => {
    e.addEventListener('click', ()=> {
        let cont = e.nextElementSibling;
        let rad = e.childNodes[1];
        let line = e.childNodes[3];
        if (cont.style.maxHeight) {
            document.querySelectorAll('.features__content').forEach((el) => el.style.maxHeight = null);
            document.querySelectorAll('.features__rad').forEach((el) => el.style.backgroundColor = null);
            document.querySelectorAll('.features__line').forEach((el) => el.style.height = null);

        } else {
            if (e.getAttribute('id')){
                document.querySelectorAll('.features__content').forEach((el) => el.style.maxHeight = null);
                document.querySelectorAll('.features__rad').forEach((el) => el.style.backgroundColor = null);
                document.querySelectorAll('.features__line').forEach((el) => el.style.height = null);

                rad.style.backgroundColor = 'white';
                cont.style.maxHeight = cont.scrollHeight + 'px';
            } else {
                document.querySelectorAll('.features__content').forEach((el) => el.style.maxHeight = null);
                document.querySelectorAll('.features__rad').forEach((el) => el.style.backgroundColor = null);
                document.querySelectorAll('.features__line').forEach((el) => el.style.height = null);

                line.style.height = '143px';
                rad.style.backgroundColor = 'white';
                cont.style.maxHeight = cont.scrollHeight + 'px';

            }
        } 
    })
})

//slider about
const swiper = new Swiper('.sample-slider', {
    loop: false,
    slidesPerView: 1,
    centeredSlides: true,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 300,
        stretch: 500,
        modifier: 1,
        scale: 1,
        slideShadows: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".about__arrow-p",
        prevEl: ".about__arrow-l",
    },
})

//back slider
const swiper2 = new Swiper(".mySwiper", { 
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".promo__padin",
        clickable: true,
    },
    navigation: {
        nextEl: ".promo__next",
        prevEl: ".promo__prev",
    },
});

//burger 
document.querySelector(".header__butbur").addEventListener('click', ()=> {
    document.querySelector('.header__butbur').classList.toggle("active");
    document.querySelector('.header__podl').classList.toggle('open');
    document.querySelector('body').classList.toggle('close');

})

//MultLang
const select = document.getElementById('lang');
const allLang = ['ru', 'eng', 'ua'];

select.addEventListener('change' , changeURLLang);

//Перенаправка на url с указанием языка
function changeURLLang() {
    let lang = select.value;
    location.href = window.location.pathname + "#" + lang;
    location.reload();
}

function changeLang() {
    let hash = window.location.hash;
    hash = hash.substring(1);
    console.log(hash);
    if (!allLang.includes(hash)) {
        location.href = window.location.pathname + "#eng";
        location.reload();
    }
    select.value = hash;
    for (let key in langArr) {
        let element =  document.querySelector('.lang-'+key);
        document.querySelector('.lang-'+key).innerHTML = langArr[key][hash];
        if (element) {
            element.innerHTML = langArr[key][hash];
        }
    }
}

changeLang();