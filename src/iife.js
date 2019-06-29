var greet = function(name){
    console.log(name + ' from func');
    return name + ' from var';
}('value');

console.log(greet);

(function(name){
    console.log('Inside IIFE ',name);
}('John'));