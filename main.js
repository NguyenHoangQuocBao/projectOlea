//  Initialize Swiper
// letswiper = new Swiper(".mySwiper", {
//     scrollbar: {
//       el: ".swiper-scrollbar",
//       hide: true,
//     },
//    });

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
// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);























