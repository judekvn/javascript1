var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Banana", "Orange", "Apple", "Mango"];
var num = [ 1, 2, 3, 4, 5, 6];
var num1 = [ 1, 2, 3, 4, 5, 6];

//concat
var conca = arr1.concat(arr2).concat(arr3)
console.log(conca)

//entries
var ent = arr3.entries()
for (x of ent) {
    console.log(x)
}

//every
var eve = num.every(() => {return num > 2;})
console.log(eve)

//fill
console.log(num)
var fil = num.fill(2, 4)
console.log(fil)
console.log(num)


//find
var fin = num.find((num) => {return num > 2;})
console.log(fin)

//findindexof
var finId = arr3.findIndex((arr3) => {return arr3 == "Orange";})
console.log(finId)

//from
var ar = Array.from(arr1)
console.log(ar)

//includes
console.log(ar.includes(2))

//indexof
console.log(num.indexOf(3))

//isarray
console.log(Array.isArray(ar))

//join
console.log(num.join(' '))

//keys
console.log(arr3.keys())

//lastindexof
console.log(arr3.lastIndexOf('Mango'))

//pop

console.log(num1)
console.log(num1.length)
console.log(num1.pop())
console.log(num1)

//push
console.log(num1.push(6))
console.log(num1)
//shift
console.log(num1.shift())
console.log(num1)

//unshif
console.log(num1.unshift(1))
console.log(num1)

//reverse and sort
console.log(num1.reverse().sort())

//value of
console.log(num1.valueOf())

//slice
console.log(num)
console.log(num.slice(5))
console.log(num)
console.log(num.splice(4))
console.log(num)













