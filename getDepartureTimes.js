let getDepartureTimesFor70FuveszkertWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Mars-tér'){
            departureTimes70FuveszkertToMarsTerWorkingDays();/*Mars tér felé*/
        }
    });
};

let getDepartureTimesFor70MarsTerWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Füvészkert'){
            departureTimes70MarsTerToFuveszkertWorkingDays();/*Mars tér felé*/
        }
    });
};

let getDepartureTimesFor70SzechenyiTerTerWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Füvészkert'){
            departureTimes70SzechenyiTerToFuveszkertWorkingDays();/*Mars tér felé*/
        }else{
            departureTimes70SzechenyiTerToMarsTerWorkingDays();
        }
    });
};

let getDepartureTimesFor71AKatalinUtcaWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Mars-tér'){
            departureTimes71AKatalinUtcaToMarsTerWorkingDays();/*Mars tér felé*/
        }else{
            departureTimes71AKatalinUtcaToNapfenyfurdoWorkingDays();/*Napfényfürdő felé*/
        }
    });
};

let getDepartureTimesFor71AMarsTerWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Napfényfürdő'){
            departureTimes71AMarsTerToNapfenyfurdoWorkingDays();
        }
    });
};

let getDepartureTimesFor71ANapfenyfurdoWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Mars-tér'){
            departureTimes71ANapfenyfurdoToMarsTerWorkingDays();
        }
    });
};

let getDepartureTimesFor90HSzegedIpariLogKpWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Lugas utca'){
            departureTimes90HSzegedIparuLogKpToLugasUtcaWorkingDays();
        }
    });
};

let getDepartureTimesFor90HLugasUtcaWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Szegedi Ipari Logisztikai Központ'){
            departureTimes90HLugasUtcaToSzegedIparuLogKpWorkingDays();
        }
    });
};

let getDepartureTimesFor90HRokusiViztoronyWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Szegedi Ipari Logisztikai Központ'){
            departureTimes90HRokusiViztoronyToSzegedIpariLogKpWorkingDays();
        }else{
            departureTimes90HRokusiViztoronyToLugasUtcaWorkingDays();
        }
    });
};