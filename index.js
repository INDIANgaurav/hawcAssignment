document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-btn');
    const contents = document.querySelectorAll('.category-content');
console.log(contents)
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            console.log("button -> " ,button , "buttons ->" ,buttons)

            const category = button.getAttribute('data-category');
            console.log(category)
            contents.forEach(content => {
                content.classList.remove('active');
                if (content.getAttribute('data-category') === category) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Default selection
    document.getElementById('default-btn').click();
});
