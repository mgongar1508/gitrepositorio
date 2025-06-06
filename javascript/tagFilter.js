const activeTags = new Set();

document.querySelectorAll('.tag').forEach(button => {
button.addEventListener('click', () => {
    const tag = button.dataset.tag;

    if (activeTags.has(tag)) {
        activeTags.delete(tag);
        button.classList.remove('active');
    } else {
        activeTags.add(tag);
        button.classList.add('active');
    }  

    filterItems();  
    });
});

function filterItems() {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
    const itemTags = item.dataset.tags.split(',');

    const shouldShow = [...activeTags].every(tag => itemTags.includes(tag));

    item.style.display = shouldShow || activeTags.size === 0 ? 'block' : 'none';
    });
}