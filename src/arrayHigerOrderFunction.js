const items = [
    { name: 'Bike', price: 100, year: 2000},
    { name: 'Car', price: 300, year: 2008},
    { name: 'Helo', price: 2000, year: 2005},
    { name: 'Truck', price: 300, year: 2002},
    { name: 'Boat', price: 1500, year: 2010},
    { name: 'Ship', price: 5000, year: 2010},
    { name: 'Bus', price: 1500, year: 2010},
    { name: 'Satelite', price: 10000, year: 2015},
];

const speed = [ 150, 200, 400, 150, 600, 200, 100, 800];

items.forEach((item, index) => {
    console.log(index + " " + item.name +
     " " + item.price)
})

//filter
const filt = items.filter(item => item.price > 2000 
    && item.year > 2010)
console.log(filt)

//map
const vehicle = items.map( item => 
 ` The ${item.name} price is ${item.price}`)
console.log(vehicle)

const speedMiles = speed.map(x => x*.621)
.filter(y => y > 200).map(z => `${z} M/hr`)
console.log(speedMiles)

//sort
const sortedYr = items.sort((a,b) => a.year > b.year ? 1 : -1)
console.log(sortedYr)

const sortSpeed = speed.sort( (a,b) => a-b)
console.log(sortSpeed)

//reduce
const sumSpeed = speed.reduce((total, speed) => {
    return total + speed
}, 0)
console.log(sumSpeed)
