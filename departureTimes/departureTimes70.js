/*70 from Füvészkert*/
let departureTimes70FuveszkertToMarsTerWorkingDays=function(){
        
    for(  h=6; h<22; h++) {	
        for( m=12;m<60;m+=30) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};

/*70 from Mars-tér*/
let departureTimes70MarsTerToFuveszkertWorkingDays=function(){
        
    for(  h=6; h<22; h++) {	
        for( m=22;m<60;m+=30) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};

/*70 from Széhenyi-tér*/
let departureTimes70SzechenyiTerToMarsTerWorkingDays=function(){
        
    for(  h=6; h<22; h++) {	
        for( m=20;m<60;m+=30) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};
let departureTimes70SzechenyiTerToFuveszkertWorkingDays=function(){
        
    for(  h=6; h<22; h++) {	
        for( m=22;m<60;m+=30) {
            departureTimesFunction();
        }
    }	
    schedule(); 
};