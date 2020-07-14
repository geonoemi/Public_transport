let departureTimes10KlinikakToViztoronyTerWorkingDays=function(){
        
    for( let h=6; h<22; h++) {	
        for(let m=12;m<60;m+=30) {

            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }	
    schedule(); 
};

let departureTimes10ViztoronyTerToKlinikakWorkingDays=function(){
        
    for( let h=6; h<22; h++) {	
        for(let m=12;m<60;m+=30) {

            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }	
    schedule(); 
};