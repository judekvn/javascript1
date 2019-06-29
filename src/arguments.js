function argu(a, b){
    //argument looks like an array but not a array
    console.log(arguments)
    var d = Array.from(arguments)
    console.log(d[0])
    console.log(Array.from(arguments))
}

// argu('ar1', 'ar2')

function arg(...a){
    //argument looks like an array but not a array
    console.log(a)
    console.log(a[0])

    console.log(Array.from(a))
    var d = Array.from(a)
    console.log(d[0])
    
    var c = [1, 2, 3, 4]
    console.log(c[0])
    console.log(Array.from(c[1]))
    
}

arg('ar1', 'ar2')