function makeGreetings(lang) {
    return function(firstname, lastname){

        if(lang === 'en'){
            console.log('Hello ' + firstname + ' ' + lastname)
        }

        if(lang === 'es'){
            console.log('Hola ' + firstname + ' ' + lastname)
        }
    }
}

var english = makeGreetings('en');
var spanish = makeGreetings('es');

english('Tom', 'Hiddleton')
spanish('chris', 'hemsworth')
