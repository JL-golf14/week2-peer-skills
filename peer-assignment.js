$(document).ready(function(){



  $('form').on('submit',function(event){
    event.preventDefault();
    var submissionArray = $(this).serializeArray();
    var newEmployeeObject = {};


    submissionArray.forEach(function(inputFieldObject){
      newEmployeeObject[inputFieldObject.name] = inputFieldObject.value;

    });
arrayP.push(newEmployeeObject);
    var totalYears = 0;
    arrayP.forEach(function(person){
      $('#yearsIn').append(
        '<tr>'+'<td>'+ person.name+ '</td>' +'<td>'+ "years of experience  " + person.yearsOfExperience + '</td>' +
        '</tr>'
      );
      totalYears += person.yearsOfExperience;
    });
    $('h4').append("Total Years of all employees  " + totalYears);

  });

  var arrayP = [{name: 'Tony', yearsOfExperience: 10}, {name: 'Carla', yearsOfExperience: 4}];

});
