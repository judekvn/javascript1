 var person = new Object();

 person.firstname = 'Tom';
 person['lastname'] = 'Jerry';

 person.address = new Object();

 person.address.city = 'Chennai';
 person['address']['country'] = 'India';
 person['address'].area = 'AnnaNagar';

 console.log(person)
 console.log(person.address)
 console.log(person.address.country)
 console.log(person.address.area)

 var person1 = {
    firstname: 'Mickey',
    lastname: 'Mouse',
    address: {
        area: "AnnaNagar",
        city: "Madurai",
        country: "India"
    }
 };

 console.log(person1)
 console.log(person1.address)
 console.log(person1.address.country)
 console.log(person1.address.area)

 function cartoon(show){
    var showName = show.firstname + ' ' + show.lastname;
    console.log(showName)
 }

 cartoon(person)
 cartoon(person1)