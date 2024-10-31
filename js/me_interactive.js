const imageContainer = document.getElementById("part2-1-1-1");
const image = document.getElementById("my_portrait");
const para = document.getElementById("my_name");

imageContainer.addEventListener('mouseenter', () => {
    image.style.transform = "rotate(720deg)";
    image.src = "../img/portrait1.PNG";
    para.style.color = "black";
    para.style.textShadow = "2px 2px 0 lightgray";
})
imageContainer.addEventListener('mouseleave', () => {
    image.style.transform = "rotate(0deg)";
    image.src = "../img/portrait2.JPG";
    para.style.color = "lightgray";
    para.style.textShadow = "none";
})