var intro = {
    fullname() {
        return this.firstname + ' ' + this.lastname
    }
}

function name(firstname, lastname) {
    return {
        firstname,
        lastname,
    }
}

function nameObj(firstname, lastname) {
    intObj = Object.create(intro)
    intObj.firstname = firstname;
    intObj.lastname = lastname;
    return intObj
}


var peter = name('peter', ' pan')
peter.fullname = intro.fullname
console.log(peter.fullname())

var james = nameObj('james', 'gunn')
console.log(james.fullname())