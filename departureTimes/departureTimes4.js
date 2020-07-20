let departureTimesFor3FTarjanToKecskesWorkingDays=function(){

    for( h=6; h<22;h++){
        for( m=6;m<60;m+=12){
            departureTimesFunction();
        }
    }
    schedule(); 
};

let departureTimesFor3FDugonicsTerToTarjanWorkingDays=function(){

    for( h=6; h<22;h++){
        for( m=9;m<60;m+=12){
            departureTimesFunction();
        }
    }
    schedule(); 
};

let departureTimesFor3FDugonicsTerToKecskesWorkingDays=function(){

    for( h=6; h<22;h++){
        for( m=12;m<60;m+=12){
            departureTimesFunction();
        }
    }
    schedule(); 
};

let departureTimesFor3FKecskesToTarjanWorkingDays=function(){
    for( h=6; h<22;h++){
        for( m=5;m<60;m+=12){
            departureTimesFunction();
        }
    }
    schedule(); 
};