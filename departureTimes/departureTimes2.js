
let departureTimesFor2SzemelyiPalyaUdvarToEuropaLigetWorkingDays=function(){

    for( h=6; h<22;h++){
        for( m=3;m<60;m+=10){
            departureTimesFunction();
        }
    }
}

let departureTimesFor2AnnaKutToSzemelyiPalyaUdvarWorkingDays=function(){

    for( h=6; h<22;h++){
        for( m=8;m<60;m+=10){
            departureTimesFunction();
        }
    }
    schedule(); 
};

let departureTimesFor2AnnaKutToEuropaLigetWorkingDays=function(){
    
    for( h=6; h<22;h++){
        for( m=15;m<60;m+=10){
            departureTimesFunction();
        }
    }
    schedule(); 
};

let departureTimesFor2EuropaLigetToSzemelyiPalyaudvarWorkingDays=function(){
    
    for( h=6; h<22;h++){
        for( m=7;m<60;m+=10){
            departureTimesFunction();
        }
    }
    schedule(); 
};