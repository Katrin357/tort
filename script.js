function rateProduct(productId, rating) {
    const stars = document.querySelectorAll(`.card:nth-child(${productId}) .star`);

    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.images img');

    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            // Получаем второе изображение (следующее в DOM после текущего изображения)
            const hoverImage = image.nextElementSibling;
            
            // Скрываем текущее изображение и показываем второе изображение
            image.style.display = 'none';
            hoverImage.style.display = 'block';
        });

        image.addEventListener('mouseleave', () => {
            // Получаем второе изображение (следующее в DOM после текущего изображения)
            const hoverImage = image.nextElementSibling;
            
            // Скрываем второе изображение и показываем текущее изображение
            hoverImage.style.display = 'none';
            image.style.display = 'block';
        });
    });
});
