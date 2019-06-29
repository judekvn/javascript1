function stat(){
    console.log('statement')
}
stat();


var exprs = function(){
    console.log('expression')
}
exprs();


function stat2(a){
    console.log('statement')
    console.log(a)
}
stat2({
    statement: 'object'
});

function stat3(a){
    console.log('statement')
    a();
}
stat3(function(){
    console.log('statement function')
})


var exprs2 = function(a){
    console.log('expression')
    console.log(a)
}
exprs2('exp');

