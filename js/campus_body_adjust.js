function adjustHeight(){
    const head = document.getElementById("campus_header");
    const headHeight = head.offsetHeight;
    const cTitle = document.getElementById("campus_title");
    const cTitleHeight = cTitle.offsetHeight;
    const cSection = document.getElementsByClassName("campus_section");
    const cSectionHeight = cSection.offsetHeight;
    const foot = document.getElementsByTagName("footer");
    const footHeight = foot.offsetHeight>60?foot.offsetHeight:60;
    const s1 = document.getElementById("campus_1");
    const s2 = document.getElementById("campus_2");
    const s3 = document.getElementById("campus_3");


    document.body.style.height = `calc(100.1vh + 100.1vh)`;
    cTitle.style.minHeight = `calc(100.1vh - ${headHeight}px)`;
    cTitle.style.maxHeight = `calc(100.1vh - ${headHeight}px)`;
    s1.style.minHeight = `calc(100.1vh - ${footHeight}px)`;
    s1.style.maxHeight = `calc(100.1vh - ${footHeight}px)`;
    s2.style.minHeight = `calc(100.1vh - ${footHeight}px)`;
    s2.style.maxHeight = `calc(100.1vh - ${footHeight}px)`;
    s3.style.minHeight = `calc(100.1vh - ${footHeight}px)`;
    s3.style.maxHeight = `calc(100.1vh - ${footHeight}px)`;
}

window.addEventListener("load", adjustHeight);
window.addEventListener("resize", adjustHeight);
