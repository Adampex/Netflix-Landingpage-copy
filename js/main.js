
const tabItems = document.querySelectorAll('.tabs-inner');
const tabContentItems = document.querySelectorAll('.tab-content-item');
const hiddenIconItems = document.querySelectorAll('.fa-times');
const baseIconItems = document.querySelectorAll('.fa-plus');

// Select tab content item
function selectItem(e) {
    
    let itemVisible = false;
    // grab content item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    const hiddenIconItem = document.querySelector(`#${this.id}-icon`);
    const baseIconItem = document.querySelector(`#${this.id}-basic`);
    // add show class
    if (tabContentItem.classList.contains('show')) {
        removeShow();
    } else {
        removeShow();
        tabContentItem.classList.add('show');
        hiddenIconItem.classList.add('show');
        baseIconItem.classList.add('hide');

    }
    
}


function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
    hiddenIconItems.forEach(item => item.classList.remove('show'));
    baseIconItems.forEach(item => item.classList.remove('hide'));
}

// Clicking on the tabs
tabItems.forEach(item => item.addEventListener('click', selectItem));
