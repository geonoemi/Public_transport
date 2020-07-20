/*71A from Katalin utca*/
let departureTimes71AKatalinUtcaToMarsTerWorkingDays=function(){

    for(  h=6; h<22; h++) {	/*6-22-ig megy az órákon*/
        for( m=10;m<60;m+=10) {
            departureTimesFunction();
        }
    }	
    schedule();      
};

let departureTimes71AKatalinUtcaToNapfenyfurdoWorkingDays=function(){
    
    for(  h=6; h<22; h++) {	
        for( m=15;m<55;m+=10) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};
/*71A from Mars tér*/
let departureTimes71AMarsTerToNapfenyfurdoWorkingDays=function(){
        
    for(  h=6; h<22; h++) {	
        for( m=11;m<60;m+=10) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};
/*71A from Napfényfürdő*/   
let departureTimes71ANapfenyfurdoToMarsTerWorkingDays=function(){
    
    for(  h=6; h<22; h++) {	
        for( m=16;m<55;m+=10) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};