a();
console.log(c);
// console.log(d);



function b(){
    console.log('called b!')
    var d = 'hello world';
    console.log(d)
};

function a(){
    b();
    console.log('called a!')
};


var c = 'C';
console.log(c)