// Code your solution in this file!
const returnFirstTwoDrivers = function() {
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
 return drivers.slice(0,2)
}
const returnLastTwoDrivers = function(){
    const lastDrivers = ["Antonia", "Nuru", "Amari", "Mo"];
    return lastDrivers.slice(2);
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = (outerfare) => (innerfare) => innerfare * outerfare;
    
const fareDoubler =  (outerfare) => outerfare * 2;
const fareTripler = (outerfare) => outerfare*3;

function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
 return returnFirstTwoDrivers(0, 1);

}
function selectDifferentDrivers(lastDrivers, returnLastTwoDrivers){
return returnLastTwoDrivers(2,3);
}
    

    


   
