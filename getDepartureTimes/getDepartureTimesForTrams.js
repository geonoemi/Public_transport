let getDepartureTimesFor2SzemelyiPalyaUdvarWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Európa-liget'){
            departureTimesFor2SzemelyiPalyaUdvarToEuropaLigetWorkingDays();
        }
    }); 
};

let getDepartureTimesFor2AnnaKutWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Személyi pályaudvar'){
            departureTimesFor2AnnaKutToSzemelyiPalyaUdvarWorkingDays();
        }
        if((selectedWay)==='Európa-liget'){
            departureTimesFor2AnnaKutToEuropaLigetWorkingDays();
        }
    }); 
};

let getDepartureTimesFor2EuropaLigetWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Személyi pályaudvar'){
            departureTimesFor2SzemelyiPalyaUdvarToMarsTerWorkingDays();
        }
    }); 
};

let getDepartureTimesFor3FTarjanWorkingDays=function(){

    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Fonógyári út'){
            departureTimesFor3FTarjanToFonogyariUtWorkingDays();
        }
    }); 
}

let getDepartureTimesFor3FDugonicsTerWorkingDays=function(){

    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Fonógyári út'){
            departureTimesFor3FDugonicsTerToFonogyariUtWorkingDays();
        }
        if((selectedWay)==='Tarján'){
            departureTimesFor3FDugonicsTerToTarjantWorkingDays();
        }
    }); 
}

let getDepartureTimesFor3FFonogyariUtWorkingDays=function(){

    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Tarján'){
            departureTimesFor3FFonogyariUtToTarjanWorkingDays();
        }
    }); 
}

let getDepartureTimesFor4TarjanWorkingDays=function(){

    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Kecskés'){
            departureTimesFor3FTarjanToKecskesWorkingDays();
        }
    }); 
}

let getDepartureTimesFor4FDugonicsTerWorkingDays=function(){

    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Tarján'){
            departureTimesFor3FDugonicsTerToTarjanWorkingDays();
        }
        if((selectedWay)==='Kecskés'){
            departureTimesFor3FDugonicsTerToKecskesWorkingDays();
        }
    }); 
}

let getDepartureTimesFor4KecskesWorkingDays=gunction(){

    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Tarján'){
            departureTimesFor3FKecskesToTarjanWorkingDays();
        }
      
    }); 
}