function Name(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Name.prototype.intro = function() {
    return this.firstname + ' ' + this.lastname;
}

var tim = new Name('Tim', 'Thompson')
console.log(tim)
console.log(tim.intro())

var Name1 = new Function('firstname', 'lastname', `
this.firstname = firstname;
this.lastname = lastname;`)

var dan = new Name1('dan', 'brown')
console.log(dan) 