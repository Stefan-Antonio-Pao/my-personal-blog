function adjustHeight(){
    const head = document.getElementsByTagName("header");
    const headHeight = head.offsetHeight;
    const pTitle = document.getElementById("poem_title");
    const pTitleHeight = pTitle.offsetHeight;
    const pBody = document.getElementById("poem_body");
    const pBodyHeight = pBody.offsetHeight;
    const foot = document.getElementsByTagName("footer");
    const footHeight = foot.offsetHeight>60?foot.offsetHeight:60;

    document.body.style.height = `calc(100.1vh + ${pBodyHeight}px + ${footHeight}px)`;
    pTitle.style.minHeight = `calc(100vh - ${headHeight}px)`;
    pTitle.style.maxHeight = `calc(100vh - ${headHeight}px)`;
}

window.addEventListener("load", adjustHeight);
window.addEventListener("resize", adjustHeight);
