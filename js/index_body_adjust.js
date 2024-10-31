function adjustBodyHeight(){
    const head = document.getElementsByTagName("header");
    const headHeight = head.offsetHeight;
    const part1 = document.getElementsByTagName("me_part1");
    const part1Height = part1.offsetHeight;
    const part2 = document.getElementById("me_part2");
    const part2Height = part2.offsetHeight;
    const foot = document.getElementsByTagName("footer");
    const footHeight = foot.offsetHeight>60?foot.offsetHeight:60;

    document.body.style.height = `calc(100vh + ${part2Height}px + ${footHeight}px)`;
    part1.style.minHeight = `calc(100vh - ${headHeight}px)`;
    part1.style.maxHeight = `calc(100vh - ${headHeight}px)`;
}

window.addEventListener("load", adjustBodyHeight);
window.addEventListener("resize", adjustBodyHeight);
