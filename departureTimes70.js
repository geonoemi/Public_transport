/*70 from Füvészkert*/
let departureTimes70FuveszkertToMarsTerWorkingDays=function(){
        
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

/*70 from Mars-tér*/
let departureTimes70MarsTerToFuveszkertWorkingDays=function(){
        
    for( let h=6; h<22; h++) {	
        for(let m=22;m<60;m+=30) {

            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }	
    schedule(); 
};

/*70 from Széhenyi-tér*/
let departureTimes70SzechenyiTerToMarsTerWorkingDays=function(){
        
    for( let h=6; h<22; h++) {	
        for(let m=20;m<60;m+=30) {

            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }	
    schedule(); 
};
let departureTimes70SzechenyiTerToFuveszkertWorkingDays=function(){
        
    for( let h=6; h<22; h++) {	
        for(let m=22;m<60;m+=30) {

            departureTimes=h+":"+m;
            times[n]=departureTimes;
            hours[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
            n++;
        }
    }	
    schedule(); 
};