const b1 = document.querySelector('.b1')
const b2 = document.querySelector('.b2')

export function changeStyle(node, className, text) {
    node.classList.add(className)
    node.innerHTML = text
}