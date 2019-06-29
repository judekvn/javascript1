var ar1 = [1, 2, 3]
var ar2 = ar1
var ar3 = [].concat(ar1)

ar2.push(4, 5)
ar3.push(0, 0)

console.log(ar1)
console.log(ar2)
console.log(ar3)

var person1 = {
    firstname: 'Mickey',
    lastname: 'Mouse',
    address: {
        area: "AnnaNagar",
        city: "Madurai",
        country: "India"
    }
 };

var person2 = Object.assign({}, person1)
var person3 = {...person1}

person2.firstname = 'Jerry'
person3.firstname = 'Mc'
person3.lastname = 'Donald'



console.log(person1)
console.log(person2)
console.log(person3)

var person4 = JSON.parse(JSON.stringify(person1))
person4.firstname = 'Donald'
person4.lastname = 'Trump'
person4.address.city = 'WA'
person4.address.area = 'White House'
person4.address.city = 'US'

console.log(person4)