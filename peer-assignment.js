$(document).ready(function(){
  var arrayP = [{name: 'Tony', yearsOfExperience: 10}, {name: 'Carla', yearsOfExperience: 4}];
  updatePage();

  $('form').on('submit',function(event){
    event.preventDefault();
    var submissionArray = $(this).serializeArray();
    var newEmployeeObject = {};


    submissionArray.forEach(function(inputFieldObject){
      newEmployeeObject[inputFieldObject.name] = inputFieldObject.value;

    });
    arrayP.push(newEmployeeObject);
    updatePage();

  });


  function updatePage(){
    var totalYears = 0;
    $('#yearsIn').empty();
    arrayP.forEach(function(person){
      $('#yearsIn').append(
        '<tr>'+'<td>'+ person.name+ '</td>' +'<td>'+ "years of experience  " + person.yearsOfExperience + '</td>' +
        '</tr>'
      );
      totalYears += parseFloat(person.yearsOfExperience);


    });
    $('h4').text("Total Years of all employees  " + totalYears);

  }




});
