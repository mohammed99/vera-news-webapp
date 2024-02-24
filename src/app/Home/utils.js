

export function formatDateTime(dataTimeString){
     const noUCLString = dataTimeString.slice(0,-5).split("T");
     return noUCLString[0] + " at " + noUCLString[1]; 

}