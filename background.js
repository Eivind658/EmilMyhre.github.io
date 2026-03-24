let imageIndex = 0;

function UpdateBackground() {
    el.background[imageIndex].classList.remove("showing");
    imageIndex++;
    if (imageIndex >= el.background.length) {
        imageIndex = 0;
    }
    el.background[imageIndex].classList.add("showing");
}


setInterval(UpdateBackground, 3000);