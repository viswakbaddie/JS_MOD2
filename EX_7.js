function dice(x){
  const roll = parseInt(Math.random()*x+1)
  return roll

}
let face = parseInt(prompt('enter number of faces'))
let z = 0
while (z!==face){
  z = dice(face)
  document.querySelector('#target').innerHTML += `<ul>${z}</ul>`
}