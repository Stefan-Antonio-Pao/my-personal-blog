function adjustBodyHeight(){
    const part2 = document.getElementById("me_part2");
    const part2Height = part2.offsetHeight;


    document.body.style.height = `calc(100vh + ${part2Height}px + 60px)`;
    docu
}

window.addEventListener("load", adjustBodyHeight);
window.addEventListener("resize", adjustBodyHeight);
