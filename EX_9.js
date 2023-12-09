'use strict'
let arr1 = [1,2,3,4,5,6,7]
function even(arr){
  let arr2 = []
  for(let i of arr){
    if(i%2===0){
      arr2.push(i)
    }
  }
  return arr2
}
let x = even(arr1)
console.log(arr1)
console.log(x)
