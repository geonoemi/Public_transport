/*for 90H Szeged Ipari Log.kp*/

let departureTimes90HSzegedIpariLogKpToLugasUtcaWorkingDays=function(){
            
    for(  h=6; h<22; h++) {	
        for( m=18;m<55;m+=12) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};

/*for 90H Rókusi víztorony*/
let departureTimes90HRokusiViztoronyToSzegedIpariLogKpWorkingDays=function(){
            
    for(  h=6; h<22; h++) {	
        for( m=14;m<55;m+=12) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};
let departureTimes90HRokusiViztoronyToLugasUtcaWorkingDays=function(){
            
    for(  h=6; h<22; h++) {	
        for( m=17;m<55;m+=12) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};

/*for 90H Lugas utca*/
let departureTimes90HLugasUtcaToSzegedIpariLogKpWorkingDays=function(){
            
    for(  h=6; h<22; h++) {	
        for( m=17;m<55;m+=12) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};