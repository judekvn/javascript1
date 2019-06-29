function greet() {
    this.name = 'John' //var name?
    this.location = 'Us'
    this.intro = function(){
        console.log('Hi I am '+ name + ' from ' + this.location)
    }
}

objJohn = new greet();

// console.log(objJohn.name)
console.log(objJohn.location)
objJohn.intro()


var coutry = {
    names: 'US',
    states: ['WY', 'TX', 'LA', 'CA'],
    list(){
        this.states.forEach(
            (state) => {
                console.log(this.names + " " + state)
            }
        )
        
    }

}

coutry.list()