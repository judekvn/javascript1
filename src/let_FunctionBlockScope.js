var a = 1;
let b = 2;

function scop(){
    var a = 11;
    var b = 22;   
    let d = 4;
    console.log(a)
    console.log(b)
    console.log(d)
}

// scop();
// console.log(a)
// console.log(b)

function loop(){
    let i = 0;
    for (let i = 0; i < 5; i++){
        console.log(i)
    }
    console.log(i)
    {
        let y = 'yyy';
        console.log(y)
    }
    console.log(y)
}

loop();