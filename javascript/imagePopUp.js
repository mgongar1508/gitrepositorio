function openLightbox(src) {
    const modal = document.getElementById('lightbox');
    const modalImg = document.getElementById('lightbox-img');
    modal.style.display = 'block';
    modalImg.src = src;
  }

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}