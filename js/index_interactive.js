document.getElementById("know_me_button").onclick = function(){
    window.location.href = "html/me.html";
};

const imageContainer = document.getElementById("part2-1-1-1");
const image = document.getElementById("my_portrait");
imageContainer.addEventListener('mouseenter', () => {
    image.style.transform = "rotate(720deg)";
    image.src = "portrait2.JPG";
})
imageContainer.addEventListener('mouseleave', () => {
    image.style.transform = "rotate(0deg)";
    image.src = "portrait1.PNG";
})