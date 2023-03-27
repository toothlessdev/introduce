const MIN_INDEX = 0;
const MAX_INDEX = 2;
let currentIndex = 0;

document.querySelector("#prev-btn").addEventListener("click", function () {
    if (currentIndex - 1 < MIN_INDEX) currentIndex = MAX_INDEX;
    else currentIndex--;
    document.querySelector(".music-container").style.transform = "translateX(" + currentIndex * -100 + "vw)";
});

document.querySelector("#next-btn").addEventListener("click", function () {
    if (currentIndex + 1 > MAX_INDEX) currentIndex = MIN_INDEX;
    else currentIndex++;
    document.querySelector(".music-container").style.transform = "translateX(" + currentIndex * -100 + "vw)";
});

// Scroll Behavior

function Mapping(scroll_begin, scroll_end, value_begin, value_end, scroll_y) {
    return (scroll_y * (value_end - value_begin)) / (scroll_end - scroll_begin) + value_begin - ((value_end - value_begin) * scroll_begin) / (scroll_end - scroll_begin);
}

let triggered = false;
// window.addEventListener("scroll", function () {
//     //console.log(scrollY);

//     if (350 > scrollY) {
//         this.document.querySelector("#info-mbti-left").style.transform = "translateY(-100px)";
//         this.document.querySelector("#info-mbti-right").style.transform = "translateY(-100px)";
//         triggered = false;
//     }

//     if (350 < scrollY && scrollY < 750 && !triggered) {
//         console.log(Mapping(350, 750, 0.5, 1, scrollY));
//         this.document.querySelector("#info-mbti-left").style.transform = "translateY(" + Mapping(350, 750, 0, -100, scrollY) + "px)";
//         this.document.querySelector("#info-mbti-left").style.opacity = Mapping(350, 750, 0.3, 1, scrollY);

//         this.document.querySelector("#info-mbti-right").style.transform = "translateY(" + Mapping(350, 750, 0, -100, scrollY) + "px)";
//         this.document.querySelector("#info-mbti-right").style.opacity = Mapping(350, 750, 0.3, 1, scrollY);
//     } else if (scrollY > 750) triggered = true;
// });

window.addEventListener("scroll", scrollBehavior);

function scrollBehavior() {
    var element_mbti = this.document.querySelector("#info-mbti-left");
    console.log(scrollY);

    if (scrollY > 300) {
        this.document.querySelector(".info-description").style.transform = "translateY(-200px)";
        this.document.querySelector(".info-description").style.opacity = 0;
    } else if (scrollY <= 300) {
        this.document.querySelector(".info-description").style.transform = "translateY(0px)";
        this.document.querySelector(".info-description").style.opacity = 1;
    }

    if (scrollY < 430) {
        this.document.querySelector("#info-mbti-left").style.transform = "translateY(0px)";
        this.document.querySelector("#info-mbti-right").style.transform = "translateY(0px)";

        this.document.querySelector("#info-mbti-left").style.opacity = 0;
        this.document.querySelector("#info-mbti-right").style.opacity = 0;
    } else if (430 < scrollY && scrollY < 1500) {
        this.document.querySelector("#info-mbti-left").style.transform = "translateY(-100px)";
        this.document.querySelector("#info-mbti-left").style.opacity = 1;

        this.document.querySelector("#info-mbti-right").style.transform = "translateY(-100px)";
        this.document.querySelector("#info-mbti-right").style.opacity = 1;
    } else if (scrollY > 1400) {
        this.document.querySelector("#info-mbti-left").style.transform = "translateY(-200px)";
        this.document.querySelector("#info-mbti-right").style.transform = "translateY(-200px)";

        this.document.querySelector("#info-mbti-left").style.opacity = 0;
        this.document.querySelector("#info-mbti-right").style.opacity = 0;
    } else if (scrollY > 980) {
    }
}
