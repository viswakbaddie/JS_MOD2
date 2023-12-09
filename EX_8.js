'use strict'
let arr = ['Johnny', 'DeeDee', 'Joey', 'Marky']

function concat(arr) {
  let str = ''
  for (let i of arr) {
    str += i
  }
  return str
}
document.querySelector('#target').innerHTML = `${concat(arr)}`