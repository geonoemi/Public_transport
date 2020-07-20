let h;
let m;

let departureTimesFunction=function(){
    
    departureTimes=h+":"+m;
    times[n]=departureTimes;
    hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
    n++;
}

let departureTimesFor3FTarjanToFonogyariUtWorkingDays=function(){

    for( h=6; h<22;h++){
        for( m=8;m<60;m+=12){
            departureTimesFunction();
        }
    }
    schedule(); 
};

let departureTimesFor3FDugonicsTerToFonogyariUtWorkingDays=function(){
   
    for( h=6; h<22;h++){
        for( m=15;m<60;m+=12){
            departureTimesFunction();
        }
    }
    schedule(); 
};

let departureTimesFor3FDugonicsTerToTarjantWorkingDays=function(){
    
    for( h=6; h<22;h++){
        for( m=15;m<60;m+=12){
            departureTimesFunction();
        }
    }
    schedule(); 
};

let departureTimesFor3FFonogyariUtToTarjanWorkingDays=function(){
    
    for( h=6; h<22;h++){
        for( m=30;m<60;m+=12){
            departureTimesFunction();
        }
    }
    schedule(); 
};