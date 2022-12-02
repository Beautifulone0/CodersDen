const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']
//Question 1 Find a union b
const aUb = [...a, ...b]
console.log(aUb)
//Question 2 Find a intersection b
let A = new Set(a)
let B = new Set(b)
const c = a.filter((num) => B.has(num))
const AnB = new Set(c)
console.log(AnB)
//Question 3 Find a with b
 let Aa = new Set(a)
 let Bb = new Set(b)
 const d = a.filter((num) => !B.has(num))
 const aWithb = new Set(d)
 console.log(aWithb)