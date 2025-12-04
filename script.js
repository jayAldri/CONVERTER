// YEAR LEAP CHECKER

function checkLeapYear() {

  let yearInput = parseInt(document.getElementById('year-input').value);

  if(yearInput === 1){
    document.getElementById('year-level').innerHTML = "Freshman";
    return;
  } else if (yearInput === 2){
    document.getElementById('year-level').innerHTML = "Sophomore";
    return;
  } else if (yearInput === 3){
    document.getElementById('year-level').innerHTML = "Junior";
    return;
  } else if (yearInput === 4){
    document.getElementById('year-level').innerHTML = "Senior";
    return;
  } else {
    document.getElementById('year-level').innerHTML = "Invalid year number";
  }
}

document.getElementById('year-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    checkLeapYear();
  }
});
 document.getElementById('year-level').style.color = '#14ff34';
 document.getElementById('year-level').style.backgroundColor = 'black';
 document.getElementById('year-level').style.padding = '10px';
 document.getElementById('year-level').style.borderRadius = '10px';





/*GRADE EQUIVALENCY*/

function checkGradeEquivalency() {

  let gradeInput = parseFloat(document.getElementById('grade-input').value);

  if(gradeInput >= 96 && gradeInput <= 100){
    document.getElementById('grade-equivalency').innerHTML = "A";
    return;
  } else if (gradeInput >= 90 && gradeInput < 96){
    document.getElementById('grade-equivalency').innerHTML = "B+";
    return;
  } else if (gradeInput >= 89 && gradeInput < 95){
    document.getElementById('grade-equivalency').innerHTML = "B";
    return;
  } else if (gradeInput >= 80 && gradeInput < 84){
    document.getElementById('grade-equivalency').innerHTML = "C+";
    return;
  } else if (gradeInput >= 75 && gradeInput < 79){
    document.getElementById('grade-equivalency').innerHTML = "C";
    return;
  } else if (gradeInput >= 0 && gradeInput < 75){
    document.getElementById('grade-equivalency').innerHTML = "INC";
    return; 
  } else {
    document.getElementById('grade-equivalency').innerHTML = "Invalid grade";
  }
}




//ANO MERON?

document.getElementById('grade-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    checkGradeEquivalency();
  }
});
 document.getElementById('grade-equivalency').style.color = '#14ff34';
 document.getElementById('grade-equivalency').style.backgroundColor = 'black';
 document.getElementById('grade-equivalency').style.padding = '10px';
 document.getElementById('grade-equivalency').style.borderRadius = '10px';





