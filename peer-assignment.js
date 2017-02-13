

    var arrayP = [{name: 'Tony', yearsOfExperience: 10}, {name: 'Carla', yearsOfExperience: 4}];
var totalYears = 0;

var taco =function(arrayP){


    arrayP.forEach(function(input){
      totalYears += input.yearsOfExperience;

    });

return totalYears;
}
console.log(taco(arrayP));
