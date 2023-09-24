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


