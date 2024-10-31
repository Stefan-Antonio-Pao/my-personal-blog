function adjustHeight(){
    const head = document.getElementsByTagName("header");
    const headHeight = head.offsetHeight;
    const pTitle = document.getElementById("poem_title");
    const pTitleHeight = pTitle.offsetHeight;
    const pBody = document.getElementById("poem_body");
    const pBodyHeight = pBody.offsetHeight;


    document.body.style.height = `calc(100vh + ${pBodyHeight}px + 60px)`;
    pTitle.style.minHeight = `calc(100vh - ${headHeight}px)`;
}

window.addEventListener("load", adjustHeight);
window.addEventListener("resize", adjustHeight);
