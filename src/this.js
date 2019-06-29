function a(){
     console.log(this)
     this.newvar = 'global';
 }

a()
console.log(newvar)

var c = {
    name: 'object name',
    change: function(){
        var self = this
        self.name = 'object prop update by method '
        console.log(self)

        var setname = function(newname){
            newname = newname || 'set name'
            self.name = newname
        }
        setname('object prop set via func inside obj method using self')
        console.log(self)
    }
}
console.log(c.name)
c.change()
console.log(c.name)