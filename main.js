this.document.querySelector(".main-container").style.transform = "translateY(0px)";
this.document.querySelector(".main-container").style.opacity = 1;

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

let trig_plan = false;

window.addEventListener("scroll", scrollBehavior);

function scrollBehavior() {
    // console.log(scrollY);

    if (scrollY > 300) {
        this.document.querySelector(".main-container").style.transform = "translateY(-200px)";
        this.document.querySelector(".main-container").style.opacity = 0;

        this.document.querySelector(".about-me-items").style.transform = "translateX(0px)";
        this.document.querySelector(".about-me-items").style.opacity = 1;
    } else if (scrollY <= 300) {
        this.document.querySelector(".main-container").style.transform = "translateY(0px)";
        this.document.querySelector(".main-container").style.opacity = 1;

        this.document.querySelector(".about-me-items").style.transform = "translateX(-100px)";
        this.document.querySelector(".about-me-items").style.opacity = 0;
    }

    // project
    if (scrollY > 3500) {
        this.document.querySelector(".project-container-txt").style.transform = "translateY(0px)";
        this.document.querySelector(".project-container-txt").style.opacity = 1;
    } else {
        this.document.querySelector(".project-container-txt").style.transform = "translateY(100px)";
        this.document.querySelector(".project-container-txt").style.opacity = 0;
    }

    // plan

    if (scrollY > 4500) {
        if (trig_plan == false) {
            console.log("triggered on");
            trig_plan = true;
            const elements_left = this.document.getElementsByClassName("item-left");
            for (let i = 0; i < elements_left.length; i++) {
                const element = elements_left.item(i);
                element.style.opacity = 1;
                element.style.transform = "translateX(0px)";
            }
            const elements_right = this.document.getElementsByClassName("item-right");
            for (let i = 0; i < elements_right.length; i++) {
                const element = elements_right.item(i);
                element.style.opacity = 1;
                element.style.transform = "translateX(0px)";
            }
        }
    } else {
        if (trig_plan == true) {
            console.log("triggered off");
            trig_plan = false;
            const elements_left = this.document.getElementsByClassName("item-left");
            for (let i = 0; i < elements_left.length; i++) {
                const element = elements_left.item(i);
                element.style.opacity = 0;
                element.style.transform = "translateX(-700px)";
            }
            const elements_right = this.document.getElementsByClassName("item-right");
            for (let i = 0; i < elements_right.length; i++) {
                const element = elements_right.item(i);
                element.style.opacity = 0;
                element.style.transform = "translateX(700px)";
            }
        }
    }
}
