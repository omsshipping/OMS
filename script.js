document.addEventListener("DOMContentLoaded", function () {
    let fadeElements = document.querySelectorAll(".fade-in, .fade-in-left, .fade-in-right");

    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateX(0)";
        }, index * 500);
    });
});
