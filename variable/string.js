var a=[{num1:'123'},{num2:'456'},{num2:'456'}]
var c = [{ num1: '123' }, { num2: '456' }, { num2: '456' }]
var b = [1, 2, 3, 4, { num1: 123 }]
var d = { num1: { test1: 123 }, num2: { test2: 456 } }
var e = { num1: { test1: 123 }, num2: { test2: 456 } }
//console.log(a.join());
/* console.log(b.join());
console.log(b.toString());
console.log(b.join() === b.toString()) */
/* console.log(JSON.stringify(a))
console.log(JSON.stringify(c))

console.log(JSON.stringify(a) === JSON.stringify(c)) */
//console.log(JSON.stringify(d) === JSON.stringify(e))
var f = JSON.parse(JSON.stringify(d))
f.num1.test1=8787
console.log(f)
console.log(d);


 




