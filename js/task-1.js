const itemsEl = document.querySelectorAll('.item')
console.log(`Number of elements: ${itemsEl.length}`);

itemsEl.forEach(item => {
    const titleItemEl = item.querySelector('.title-item');
    console.log(`Category: ${titleItemEl.textContent}`);
    const listEl = item.querySelector('.list-category')
    console.log(`Elements: ${listEl.querySelectorAll('.list-category-item').length}`)
});