let departureTimesFor3FTarjanToFonogyariUtWorkingDays=function(){

    for(let h=6; h<22;h++){
        for(let m=8;m<60;m+=12){
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }
    schedule(); 
};

let departureTimesFor3FDugonicsTerToFonogyariUtWorkingDays=function(){
   
    for(let h=6; h<22;h++){
        for(let m=15;m<60;m+=12){
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }
    schedule(); 
};

let departureTimesFor3FDugonicsTerToTarjantWorkingDays=function(){
    
    for(let h=6; h<22;h++){
        for(let m=15;m<60;m+=12){
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }
    schedule(); 
};

let departureTimesFor3FFonogyariUtToTarjanWorkingDays=function(){
    
    for(let h=6; h<22;h++){
        for(let m=30;m<60;m+=12){
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }
    schedule(); 
};