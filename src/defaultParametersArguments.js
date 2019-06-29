function name(firstname, lastname, ...arg) {

    if(arguments.length === 0){
        return console.log('parameter missing')
    }

    firstname = firstname || 'john'
    lastname = lastname || 'doe'
    console.log(firstname)
    console.log(lastname)
    console.log(arg)
    console.log(arguments[0]) //like array not array

}

name()
name('ken', 'adams', 'john', 'jacob')


