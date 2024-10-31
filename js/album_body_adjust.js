function adjustHeight(){
    const head = document.getElementsByTagName("header");
    const headHeight = head.offsetHeight;
    const aTitle = document.getElementById("album_title");
    const aTitleHeight = aTitle.offsetHeight;
    const aBody = document.getElementById("album_body");
    const aBodyHeight = aBody.offsetHeight;
    const foot = document.getElementsByTagName("footer");
    const footHeight = foot.offsetHeight>60?foot.offsetHeight:60;


    document.body.style.height = `calc(100.1vh + ${aBodyHeight}px + ${footHeight}px)`;
    aTitle.style.minHeight = `calc(100vh - ${headHeight}px)`;
    aTitle.style.maxHeight = `calc(100vh - ${headHeight}px)`;
}

window.addEventListener("load", adjustHeight);
window.addEventListener("resize", adjustHeight);
