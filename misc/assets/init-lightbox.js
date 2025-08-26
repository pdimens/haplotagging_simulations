document.addEventListener('DOMContentLoaded', function() {
    // Convert plot images to lightbox links
    const images = document.querySelectorAll('.output_png img, .jp-OutputArea-output img');
    images.forEach(img => {
        const link = document.createElement('a');
        link.href = img.src;
        link.setAttribute('data-lightbox', 'plots');
        img.parentNode.insertBefore(link, img);
        link.appendChild(img);
    });
});