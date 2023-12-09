'use strict'
let k = true
const l = []
while (k){
  let num = parseInt(prompt('enter number'))
  if(num === 0){
    k = false
  }
  else{
    l.push(num)
  }
}
l.sort()
l.reverse()
for(const i of l){
  console.log(i)
}