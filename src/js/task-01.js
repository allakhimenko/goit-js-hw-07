
const categories = document.querySelectorAll('#categories .item')
console.log (`В списке ${categories.length} категории.`)

const getEl = [...categories]
.map (
    category => `Категория: ${category.firstElementChild.textContent}
  Количество элементов: ${category.lastElementChild.children.length}`
)

.join ("\n")
console.log (getEl)
