let departureTimes8MakkoshazToKlinikakWorkingDays=function(){
        
    for(  h=6; h<22; h++) {	
        for( m=5;m<60;m+=30) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};
let departureTimes8KlinikakToMakkoshazWorkingDays=function(){
        
    for(  h=6; h<22; h++) {	
        for( m=2;m<60;m+=30) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};