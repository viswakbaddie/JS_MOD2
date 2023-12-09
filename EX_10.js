`use strict`
let l = []
const a = parseInt(prompt('enter number of candidates'))
for(let i = 0; i<a; i++){
  let dict = {}
  let name = prompt(`enter name of ${i} candidate`)
  dict = {name:`${name}`, vote:0}
  l.push(dict)

}
let v = parseInt(prompt('enter number of voters'))
for(let i = 0; i<v; i++){
  let vote = prompt(`enter name of candidate; voter number = ${i}`)
  for(let j of l){
    if(j.name === vote){
      j.vote +=1
    }
  }
}
let big = 0
let winner = ''
for(let i of l){
  if(i.vote>big){
    big = i.vote
    winner = i.name
  }

}
console.log(`The winner is ${winner} with ${big} votes.`)
console.log('results:')
for(let i of l){
  console.log(`${i.name}: ${i.vote} votes`)
}