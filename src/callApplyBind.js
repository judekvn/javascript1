var person1 = {
    firstname: 'Mickey',
    lastname: 'Mouse',

    fullname(initial, surname){
        return (this.firstname + '' + this.lastname + initial + surname)
    }
}

console.log(person1.fullname('M', 'M'))

var person2 = {
    firstname: 'Tom',
    lastname: 'Jerry',
}

console.log(person1.fullname.call(person2, 'T', 'M'))
console.log(person1.fullname.apply(person2, ['T', 'M']))

const name = person1.fullname.bind(person2, 'T', 'M')
console.log(name())

function multiply(a,b){
    return a*b
}

let multiplyByTwo = multiply.bind(this, 2)

console.log(multiplyByTwo(4))
