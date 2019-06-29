class Name {

    constructor(fname, lname) {
         this.fname = fname;
         this.lname = lname;
    }

    fullname() {
        return this.fname + ' ' + this.lname;
    }
}

var jade = new Name('Jaden', 'Smith')
console.log(jade.fullname())