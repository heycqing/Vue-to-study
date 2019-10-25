var person_data = {
    name: "xiaoming"
}

function Person(data){
    this.name = data.name
    console.log(this.name)
}

// Person.prototype.name = ''
// Person.prototype.setName = function(data){
//     this.name = data.name
//     console.log(this.name)
// }

var man = new Person(person_data)