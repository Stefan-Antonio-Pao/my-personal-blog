let currentSection = 0;
let isThrottled = false; // 节流标志位
let timeLimit = 1500;
const cHeader = document.getElementById("campus_header");
const sections = document.getElementsByClassName("campus_section");
let list = [cHeader];
for (let i = 0; i < sections.length; i++) {
    list.push(sections[i]);
}

function scrollToSection(index, direction) {
    if (isThrottled) return;
    if (index >= 0 && index <= 1) {
        currentSection = index;
        list[index].scrollIntoView({ behavior: 'smooth' });
        if (index=== 1 && direction === "up") {
            list[index].style.display = "flex";
            list[index+1].style.display = "none";
        }
        // 设置节流，防止连续滚动触发
        isThrottled = true;
        setTimeout(() => {
            isThrottled = false;
        }, timeLimit); // 节流时间，可以根据需要调整
    }
    else if (index >= 2 && index <= sections.length) {
        currentSection = index;
        list[index].scrollIntoView({ behavior: 'smooth' });
        if (direction === "down") {
            list[index].style.display = "flex";
            list[index-1].style.display = "none";
        }
        if (direction === "up") {
            list[index].style.display = "flex";
            list[index+1].style.display = "none";
        }
        // 设置节流，防止连续滚动触发
        isThrottled = true;
        setTimeout(() => {
            isThrottled = false;
        }, timeLimit); // 节流时间，可以根据需要调整
    }
}

window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // 向下滚动
        scrollToSection(currentSection + 1, "down");
        console.log(currentSection);
    } else {
        // 向上滚动
        scrollToSection(currentSection - 1, "up");
        console.log(currentSection);
    }
});

// 禁用浏览器自动恢复的滚动位置
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});