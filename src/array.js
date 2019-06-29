var arr = [
    1,
    true,
    {
        name: "Ken",
        age: 10
    },
    function info(nam, ag){
        console.log(nam + ' ' + 'is '+ ag + ' years old')
    }

]

arr[3](arr[2].name, arr[2].age)