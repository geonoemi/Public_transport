/*for 90H Szeged Ipari Log.kp*/

let departureTimes90HSzegedIpariLogKpToLugasUtcaWorkingDays=function(){
            
    for( let h=6; h<22; h++) {	
        for(let m=18;m<55;m+=12) {

            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }	
    schedule(); 
};

/*for 90H Rókusi víztorony*/
let departureTimes90HRokusiViztoronyToSzegedIpariLogKpWorkingDays=function(){
            
    for( let h=6; h<22; h++) {	
        for(let m=14;m<55;m+=12) {

            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }	
    schedule(); 
};
let departureTimes90HRokusiViztoronyToLugasUtcaWorkingDays=function(){
            
    for( let h=6; h<22; h++) {	
        for(let m=17;m<55;m+=12) {

            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }	
    schedule(); 
};

/*for 90H Lugas utca*/
let departureTimes90HLugasUtcaToSzegedIpariLogKpWorkingDays=function(){
            
    for( let h=6; h<22; h++) {	
        for(let m=17;m<55;m+=12) {

            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }	
    schedule(); 
};