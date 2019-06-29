var a = 1;

function execA(){
    var a = 2
    execB();
}

function execB(){
    console.log(a)
}

execA()