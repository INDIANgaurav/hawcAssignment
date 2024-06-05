document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-btn');
    const contents = document.querySelectorAll('.category-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-category');
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
