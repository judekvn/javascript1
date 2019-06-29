function mapForEach(arr, fn) {

    var newarr = [];

    for(var i = 0; i < arr.length; i++) {
        newarr.push(
            fn(arr[i])
        )
    };
    
    return newarr; 
}

 
var arr1 = [ 1, 2, 3]
console.log(arr1)

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
})

console.log(arr2)

var arr3 = mapForEach(arr1, function(item) {
    return item > 2;
})

console.log(arr3)

var checkLimit = function(limiter, item) {
    return item > limiter;
}

var arr4 = mapForEach(arr1, checkLimit.bind(this, 1))
console.log(arr4)













