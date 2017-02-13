

var personArray = [{name: "Bob"}, {name: 'Carla'}];

for (var i = 0; i < personArray.length; i++) {
  console.log(personArray[i].name + ' is at index '+ i);
}

personArray.forEach(function(person){                ///  same result as top
console.log(person.name);


});
