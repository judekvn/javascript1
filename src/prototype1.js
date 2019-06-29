var cat = {
    firstname: 'Tom',
    lastname: 'Cat',
    job: 'Cartoon',

    country(){
        return 'US'
    },

    fullname(){
        if(this.job){
            return (this.firstname + ' ' + this.lastname)
        }
   
    }
}

var mouse = {
    firstname: 'Jerry',
    lastname: 'Mouse',

    country(){
        
        return 'US'
    }
}

mouse.__proto__ = cat;

console.log(mouse.job)
console.log(mouse.fullname())


