/*70 from Füvészkert*/
let departureTimes70FuveszkertToMarsTerWorkingDays=function(){
        
    for( let h=6; h<22; h++) {	
        for(let m=12;m<60;m+=30) {
            let departureTimes=" "+h+":"+m+"\n";
            console.log(departureTimes);
        }	
    }		
};

/*70 from Mars-tér*/
let departureTimes70MarsTerToFuveszkertWorkingDays=function(){
        
    for( let h=6; h<22; h++) {	
        for(let m=22;m<60;m+=30) {
            let departureTimes=" "+h+":"+m+"\n";
            console.log(departureTimes);
        }	
    }		
};

/*70 from Széhenyi-tér*/
let departureTimes7SzechenyiTerToMarsTerWorkingDays=function(){
        
    for( let h=6; h<22; h++) {	
        for(let m=20;m<60;m+=30) {
            let departureTimes=" "+h+":"+m+"\n";
            console.log(departureTimes);
        }	
    }		
};
let departureTimes7SzechenyiTerToFuveszkertWorkingDays=function(){
        
    for( let h=6; h<22; h++) {	
        for(let m=22;m<60;m+=30) {
            let departureTimes=" "+h+":"+m+"\n";
            console.log(departureTimes);
        }	
    }		
};

/*71A from Katalin utca*/
    let departureTimes71AKatalinUtcaToMarsTerWorkingDays=function(){
        let departureTimes="";
        let times=[];
        let n=0;
        for( let h=6; h<22; h++) {	
            for(let m=10;m<60;m+=10) {
               
                departureTimes=h+":"+m;
                times[n]=departureTimes;
              /*  console.log(times[n]);*/
                n++;
            }
        }	
    	
        let departureTimesDiv=$('<div>').attr('id', 'departureTimesDiv');
        let departureTimesLabel=$('<label>').attr('class', 'labels').text("Departure times");
        let timesDiv=$('<div>').attr('id', 'timesDiv');
        $('body').children().remove();
        $('body').append(departureTimesDiv);
        $(departureTimesDiv).append(departureTimesLabel);
        $(departureTimesDiv).append(timesDiv);

        let selectHour = $('<select>').attr('id','selectHour').appendTo(timesDiv);
        for(let i=6;i<22;i++){
            selectHour.append($('<option>').text(i));
        }
        /*$(times).each(function() {
            console.log(this);           
        });*/
        $(selectHour).on('change',function(){ 
            let chosenHour=$('#selectHour :selected').text();
            console.log(chosenHour);
        });        

    };
    let departureTimes71AKatalinUtcaToNapfenyfurdoWorkingDays=function(){
        
        for( let h=6; h<22; h++) {	
            for(let m=15;m<55;m+=10) {
                let departureTimes=" "+h+":"+m+"\n";
                /*console.log(departureTimes);*/
            }	
        }		
    };
/*71A from Mars tér*/
    let departureTimes71AMarsTerToNapfenyfurdoWorkingDays=function(){
            
        for( let h=6; h<22; h++) {	
            for(let m=11;m<60;m+=10) {
                let departureTimes=" "+h+":"+m+"\n";
                console.log(departureTimes);
            }	
        }		
    };
 /*71A from Napfényfürdő*/   
    let departureTimes71ANapfenyfurdoToMarsTerWorkingDays=function(){
        
        for( let h=6; h<22; h++) {	
            for(let m=16;m<55;m+=10) {
                let departureTimes=" "+h+":"+m+"\n";
                console.log(departureTimes);
            }	
        }		
    };

/*for 90H Szeged Ipari Log.kp*/
    let departureTimes90HSzegedIparuLogKpToLugasUtcaWorkingDays=function(){
            
        for( let h=6; h<22; h++) {	
            for(let m=18;m<55;m+=12) {
                let departureTimes=" "+h+":"+m+"\n";
                console.log(departureTimes);
            }	
        }		
    };

/*for 90H Rókusi víztorony*/
    let departureTimes90HRokusiViztoronyToSzegedIpariLogKpWorkingDays=function(){
                
        for( let h=6; h<22; h++) {	
            for(let m=14;m<55;m+=12) {
                let departureTimes=" "+h+":"+m+"\n";
                console.log(departureTimes);
            }	
        }		
    };
    let departureTimes90HRokusiViztoronyToLugasUtcaWorkingDays=function(){
                
        for( let h=6; h<22; h++) {	
            for(let m=17;m<55;m+=12) {
                let departureTimes=" "+h+":"+m+"\n";
                console.log(departureTimes);
            }	
        }		
    };

/*for 90H Lugas utca*/
    let departureTimes90HLugasUtcaToSzegedIparuLogKpWorkingDays=function(){
                
        for( let h=6; h<22; h++) {	
            for(let m=17;m<55;m+=12) {
                let departureTimes=" "+h+":"+m+"\n";
                console.log(departureTimes);
            }	
        }		
    };





