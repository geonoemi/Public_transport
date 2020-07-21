let departureTimes10KlinikakToViztoronyTerWorkingDays=function(){
        
    for(  h=6; h<22; h++) {	
        for( m=4;m<60;m+=30) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};

let departureTimes10ViztoronyTerToKlinikakWorkingDays=function(){
        
    for(  h=6; h<22; h++) {	
        for( m=6;m<60;m+=30) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};