const items = [
    { name: 'Bike', price: 100},
    { name: 'Car', price: 300},
    { name: 'Helo', price: 2000},
    { name: 'Cycle', price: 20},
    { name: 'Boat', price: 700},
]

//Filter
const filterItem = items.filter((item) => {
    return item.price < 500;
})

console.log(filterItem)


//Map
const mapItem = items.map((item) => {
    return item.name
})
console.log(mapItem)

//Find
const findItem = items.find((item) => {
    return item.price === 20
})
console.log(findItem)

//ForEach
items.forEach((item) => {
    console.log('My ' + item.name)
})

//Some
const someItem = items.some((item) => {
    return item.price === 20;
})
console.log(someItem) 

//every
const everyItem = items.every((item) => {
    return item.price <= 10;
})
console.log(everyItem) 


//reduce
const totalPrice = items.reduce((total, item) => {
    return item.name + total;
}, 0)
console.log(totalPrice) 