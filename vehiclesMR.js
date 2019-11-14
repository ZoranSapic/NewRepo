import {createRandomString} from'./createRandomString.js'; 

class Vehicle {
    constructor(manufacturer, modelType, year) {
     this.manufacturer=manufacturer;
      this.modelType=modelType;
      this.year=year;
    }
    honk() {
        alert('Honk! Honk! '+ this.modelType);
    }
    drive() {
        return 'We are moving! '+ this.modelType;
    }
  }


//function uncommented for GIT purposes
function createRandomStringGIT(numOfLetters) {
    var word = String.fromCharCode(Math.random()*26+65);

    for (i=1; i<numOfLetters; i++) {
        word += String.fromCharCode(Math.random()*26+97);
    }

    return word;
}

//added a comment, once more

var listOfVehicles = new Array();

var manufacturer = createRandomString(5);

for(var x = 0; x < 10; x++ ) {

var manufacturer = createRandomString(5);
var modelType = createRandomString(10); 
var yearOfProd = Math.round(Math.random() * 30 + 1990);

var testCar = new Vehicle(manufacturer, modelType, yearOfProd); 

listOfVehicles[x]=testCar;

}
for (var j=0; j<listOfVehicles.length; j++) {
  document.getElementById("txtArea1").value+=listOfVehicles[j].manufacturer + " " + listOfVehicles[j].modelType + " " + listOfVehicles[j].year +" j="+j+"\n";
}

function compare( a, b ) {
    if ( a.manufacturer < b.manufacturer ){
      return -1;
    }
    if ( a.manufacturer > b.manufacturer ){
      return 1;
    }
    return 0;
  }
  
  listOfVehicles.sort( compare );


//write them out (txtArea2):
for (j=0; j<listOfVehicles.length; j++) {
    document.getElementById("txtArea2").value+=listOfVehicles[j].manufacturer + " " + listOfVehicles[j].modelType + " " + listOfVehicles[j].year +" j="+j+"\n";
}
