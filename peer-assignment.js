$(document).ready(function(){




  arrayP.forEach(function(input){
    $('#yearsIn').append(
      '<tr>'+'<td>'+ input.name + '</td>' +'<td>'+ "years of experience  " + input.yearsOfExperience + '</td>' +
      '</tr>'


    );

  });
  $('h4').append("Total Years of all employees  " + totalYears);

});



var arrayP = [{name: 'Tony', yearsOfExperience: 10}, {name: 'Carla', yearsOfExperience: 4}];
var totalYears = 0;

var totalYearsCalculator =function(arrayP){


  arrayP.forEach(function(input){
    totalYears += input.yearsOfExperience;

  });

  return totalYears;
}
console.log(totalYearsCalculator(arrayP));
