const tabItems = Array.from(document.querySelectorAll('.tab_item'))
const contentItems = Array.from(document.querySelectorAll('.content_item'))

const clearActiveClass = (element, className = 'is_active') => {
  element.find(item => item.classList.remove(`${ className }`))
}

const setActiveClass = (element, index, className = 'is_active') => {
  element[index].classList.add(`${ className }`)
}

const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {
  
    clearActiveClass(tabItems)
    clearActiveClass(contentItems)
    
    setActiveClass(tabItems, index)
    setActiveClass(contentItems, index)
  })
}

tabItems.forEach(checkoutTabs)

// ------------------------------------------------------ //
// ------------------ Клики по кнопкам ------------------ //
// ------------------------------------------------------ //

function closeOrder(){
  document.getElementById("checkout").style.animation = "hideOrder .1s linear forwards";
  document.getElementById("body").style.overflow = "visible";
  setTimeout(() => { document.getElementById("checkout").style.display = "none"; }, 100);
}

function openOrder(){
  document.getElementById("checkout").style.animation = "showOrder .1s linear forwards";
  document.getElementById("body").style.overflow = "hidden";
  document.getElementById("checkout").style.display = "block";
}

// ------------------------------------------------------ //

const taboItems = Array.from(document.querySelectorAll('.otab_oitem'))
const contentoItems = Array.from(document.querySelectorAll('.ocontent_oitem'))

const clearActiveClasso = (oelement, classoName = 'is-active') => {
  oelement.find(oitem => oitem.classList.remove(`${ classoName }`))
}

const setActiveClasso = (oelement, oindex, classoName = 'is-active') => {
  oelement[oindex].classList.add(`${ classoName }`)
}

const checkoutTabso = (oitem, oindex) => {
  oitem.addEventListener('click', () => {
  
    clearActiveClasso(taboItems)
    clearActiveClasso(contentoItems)
    
    setActiveClasso(taboItems, oindex)
    setActiveClasso(contentoItems, oindex)
  })
}

taboItems.forEach(checkoutTabso)

// ------------------------------------------------------ //