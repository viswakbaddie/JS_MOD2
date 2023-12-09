no = parseInt(prompt('enter number of participants'))
const l = []
for(let i = 0; i<no; i++){
  l.push(prompt('enter name'))

}
l.sort()
for(let i of l){
  document.querySelector('#target').innerHTML += `<li>${i}</li>`
}
