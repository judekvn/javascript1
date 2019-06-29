function hello(say) {

    return function(name) {
        console.log(say + ' ' + name);
    }
}

hello('Hola')('Dan');

var clos = hello('Hi');
clos('Nat')