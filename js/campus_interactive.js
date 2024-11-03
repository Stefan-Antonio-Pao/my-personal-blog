document.querySelectorAll('.letter_button').forEach(button => {
    button.addEventListener('click', function () {
        const letter = this.getAttribute('data-letter');
        const items = document.querySelectorAll('.course_item');

        items.forEach(item => {
            if (letter === "0") item.classList.remove('hidden');
            else if (item.textContent.startsWith(letter)) item.classList.remove('hidden');
            else item.classList.add('hidden');
            console.log(letter);
            console.log(item.textContent.startsWith(letter));
            console.log(item.classList);
        })
    });
});