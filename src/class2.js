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

class Detail extends Name {
    constructor(fname, lname, rel) {
        super(fname, lname);
        this.rel = rel;
    }
    relat(){
        return this.rel
    }
}

var will = new Detail('Will', 'Smith', 'Father')
console.log(will.fullname())
console.log(will.relat())
