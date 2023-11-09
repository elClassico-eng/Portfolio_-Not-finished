"use strict";

const cursor = document.querySelector(".cursor");
let timeout;

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

function mouseStopped() {
    cursor.style.display = "none";
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
}

mouseStopped();
