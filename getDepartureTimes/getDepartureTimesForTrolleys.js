

let getDepartureTimesFor8MakkoshazWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Klinikák'){
            departureTimes8MakkoshazToKlinikakWorkingDays();/*Klinikák felé*/
        }
    });
};

let getDepartureTimesFor8KlinikakWorkingDays=function(){
    
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Makkosház'){
            departureTimes8KlinikakToMakkoshazWorkingDays();/*Makkosház felé*/
        }
    });
};

 let getDepartureTimesFor10KlinikakWorkingDays=function(){
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Víztorony-tér'){
            departureTimes10KlinikakToViztoronyTerWorkingDays();
        }
    });
 };

 let getDepartureTimesFor10ViztoronyTerWorkingDays=function(){
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Klinikák'){
            departureTimes10ViztoronyTerToKlinikakWorkingDays();/*Makkosház felé*/
        }
    });
 };

 let getDepartureTimesFor19SzegedIpariLogisztikaiKozpontWorkingDays=function(){
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Lugas utca'){
            departureTimes19SzegedIpariLogisztikaiKozpontToLugasUtcaWorkingDays();/*Lugas utca felé*/
        }
    });
 };

 let getDepartureTimesFor19RokusiViztoronyWorkingDays=function(){
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Lugas utca'){
            departureTimes19RokusiViztoronyToLugasUtcaWorkingDays();/*Lugas utca felé*/
        }
        if((selectedWay)==='Szegedi Ipari Logisztikai Központ'){
            departureTimes19RokusiViztoronyToSzegedIpariLogisztikaiKozpontWorkingDays();/*Lugas utca felé*/
        }
    });
 };

 let getDepartureTimesFor19LugasUtcaWorkingDays=function(){
    $(selectWay).on('change',function(){
        let selectedWay=$('#selectWay :selected').text();
        if((selectedWay)==='Szegedi Ipari Logisztikai Központ'){
            departureTimes19LugasUtcaToSzegedIpariLogisztikaiKozpontWorkingDays();/*Lugas utca felé*/
        }
    });
 };