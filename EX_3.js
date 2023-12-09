'use strict'
const l = []
for(let i = 0; i<6; i++){
  l.push(prompt('enter dog name'))
}
l.sort()
l.reverse()
for(let i of l){
  document.querySelector('#target').innerHTML += `<li>${i}</li>`
}