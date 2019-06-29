var person = {
    firstname: 'John',
    lastname: 'Doe',

    fullname(){
        return (this.firstname + '' + this.lastname)
    }
}

var printName = (function(greet) {
    console.log( greet + ' ' + this.fullname())
});

printName.call(person, 'Hi')
printName.apply(person, ['Hi'])

var display = printName.bind(person)
display('Hi') 