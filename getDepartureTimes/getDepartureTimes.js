let departureTimes="";
let times=[];
let hours=[];    
let n=0;
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
            departureTimes70MarsTerToFuveszkertWorkingDays();/*Füvészkert felé*/
        }
    });
};

let getDepartureTimesFor70SzechenyiTerWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Füvészkert'){
            departureTimes70SzechenyiTerToFuveszkertWorkingDays();/*Füvészkert felé*/
        }else{
            departureTimes70SzechenyiTerToMarsTerWorkingDays();/*Mars tér felé*/
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
            departureTimes90HSzegedIpariLogKpToLugasUtcaWorkingDays();
        }
    });
};

let getDepartureTimesFor90HLugasUtcaWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Szegedi Ipari Logisztikai Központ'){
            departureTimes90HLugasUtcaToSzegedIpariLogKpWorkingDays();
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