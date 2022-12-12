import _ from 'lodash'
import printMe from './print'

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    const btn = document.createElement('button')
    btn.innerHTML = "Click me!"
    btn.onclick = printMe
    element.appendChild(btn)
    return element;
}

document.body.appendChild(component());