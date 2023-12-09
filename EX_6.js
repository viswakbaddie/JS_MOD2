'use strict'
function dice(){
  let x = parseInt(Math.random()*6+1)
  return x
}
let z = 0
while (z!==6){
  z = dice()
  document.querySelector('#target').innerHTML += `<ul>${z}</ul>`


}