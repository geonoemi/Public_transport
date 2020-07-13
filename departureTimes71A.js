/*71A from Katalin utca*/
let departureTimes71AKatalinUtcaToMarsTerWorkingDays=function(){

    for( let h=6; h<22; h++) {	/*6-22-ig megy az órákon*/
        for(let m=10;m<60;m+=10) {
           
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }	
    schedule();      
};

let departureTimes71AKatalinUtcaToNapfenyfurdoWorkingDays=function(){
    
    for( let h=6; h<22; h++) {	
        for(let m=15;m<55;m+=10) {

            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }	
    schedule(); 
};
/*71A from Mars tér*/
let departureTimes71AMarsTerToNapfenyfurdoWorkingDays=function(){
        
    for( let h=6; h<22; h++) {	
        for(let m=11;m<60;m+=10) {
           
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }	
    schedule(); 
};
/*71A from Napfényfürdő*/   
let departureTimes71ANapfenyfurdoToMarsTerWorkingDays=function(){
    
    for( let h=6; h<22; h++) {	
        for(let m=16;m<55;m+=10) {
         
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }	
    schedule(); 
};