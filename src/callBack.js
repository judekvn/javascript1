function calb(){
    var hello = 'Hello';

    setTimeout(function() {
        console.log(hello)
    }, 3000);
}

calb();

function hof(callback) {
    console.log('hof work finished')
    callback();
}

hof( function() {
    console.log('call back')
})