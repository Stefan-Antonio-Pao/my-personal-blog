function adjustBodyHeight(){
    const head = document.getElementsByTagName("header");
    const headHeight = head.offsetHeight;
    const main = document.getElementsByTagName("main");
    const mainHeight = main.offsetHeight;
    const foot = document.getElementsByTagName("footer");
    const footHeight = foot.offsetHeight>60?foot.offsetHeight:60;

    document.body.style.height = `calc(100vh + 10vh + ${footHeight}px)`;
    main.style.minHeight = `calc(100vh - ${headHeight}px + 10vh)`;
    main.style.maxHeight = `calc(100vh - ${headHeight}px) + 10vh`;
}

window.addEventListener("load", adjustBodyHeight);
window.addEventListener("resize", adjustBodyHeight);
