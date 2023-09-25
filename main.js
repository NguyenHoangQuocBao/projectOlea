

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   });

let status1 = "more";

function toggleText1()
{
    if (status1 == "less") {
        document.getElementsByClassName("seemore-text-1")[0].style.display = "none";
        document.getElementsByClassName("seemore-text-1")[1].style.display = "none";
        document.getElementById("toggle-info-1").innerText = "Xem Thêm Thông Tin Bác Sĩ";
        status1 = "more";
    } else if (status1 == "more") {
        document.getElementsByClassName("seemore-text-1")[0].style.display = "block";
        document.getElementsByClassName("seemore-text-1")[1].style.display = "block";
        document.getElementById("toggle-info-1").innerText = "Thu gọn";
        status1 = "less"
    }
}

let status2 = "more";

function toggleText2()
{
    if (status2 == "less") {
        document.getElementsByClassName("seemore-text-2")[0].style.display = "none";
        document.getElementsByClassName("seemore-text-2")[1].style.display = "none";
        document.getElementById("toggle-info-2").innerText = "Xem Thêm Thông Tin Bác Sĩ";
        status2 = "more";
    } else if (status2 == "more") {
        document.getElementsByClassName("seemore-text-2")[0].style.display = "block";
        document.getElementsByClassName("seemore-text-2")[1].style.display = "block";
        document.getElementById("toggle-info-2").innerText = "Thu gọn";
        status2 = "less"
    }
}


const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; 
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; 
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);











