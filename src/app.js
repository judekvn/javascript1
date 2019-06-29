function clos(){
    var x = 1;
    console.log('clos exec')
        return function enc(y){
            console.log(x + y)
    }
    
}

var inv = clos();
inv(2)
