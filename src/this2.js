var myFunc = function(name) {
    return console.log(this.name);
};

var name = 'Jo';
myFunc()

var obj = {
    name: 'Ken',
    f: myFunc
};

obj.f()


objEx = {
    name: 'loren'
}

myFunc.apply(objEx)
var bindProp = myFunc.bind(objEx)
bindProp()