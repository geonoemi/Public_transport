let departureTimesFor3FTarjanToKecskesWorkingDays=function(){

    for(let h=6; h<22;h++){
        for(let m=6;m<60;m+=12){
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }
    schedule(); 
};

let departureTimesFor3FDugonicsTerToTarjanWorkingDays=function(){

    for(let h=6; h<22;h++){
        for(let m=9;m<60;m+=12){
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }
    schedule(); 
};

let departureTimesFor3FDugonicsTerToKecskesWorkingDays=function(){

    for(let h=6; h<22;h++){
        for(let m=12;m<60;m+=12){
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }
    schedule(); 
};

let departureTimesFor3FKecskesToTarjanWorkingDays=function(){
    for(let h=6; h<22;h++){
        for(let m=5;m<60;m+=12){
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }
    schedule(); 
};