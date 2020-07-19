let departureTimesFor2SzemelyiPalyaUdvarToEuropaLigetWorkingDays=function(){

    for(let h=6; h<22;h++){
        for(let m=10;m<60;m+=10){
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }
}

let departureTimesFor2AnnaKutToSzemelyiPalyaUdvarWorkingDays=function(){

    for(let h=6; h<22;h++){
        for(let m=15;m<60;m+=10){
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }
    schedule(); 
};

let departureTimesFor2AnnaKutToEuropaLigetWorkingDays=function(){
    
    for(let h=6; h<22;h++){
        for(let m=15;m<60;m+=10){
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }
    schedule(); 
};

let departureTimesFor2EuropaLigetToSzemelyiPalyaudvarWorkingDays=function(){
    
    for(let h=6; h<22;h++){
        for(let m=10;m<60;m+=10){
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }
    schedule(); 
};