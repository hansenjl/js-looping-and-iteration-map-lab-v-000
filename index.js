// Code your solution in this file.


function lowerCaseDrivers(array){
  array.map(function (driver) { return driver.toLowerCase() })
}

function nameToAttributes(array){
   array.map(function (driver) { return {firstName: driver.split(',')[0], lastName:driver.split(',')[1] } })
}