
/*71A from Katalin utca*/
let departureTimes71AKatalinUtcaToMarsTerWorkingDays=function(){

    let departureTimes="";
    let times=[];
    let n=0;

    for( let h=6; h<22; h++) {	
        for(let m=10;m<60;m+=10) {
           
            departureTimes=h+":"+m;
            times[n]=departureTimes;
            n++;
        }
    }	
    
    let departureTimesDiv=$('<div>').attr('id', 'departureTimesDiv');
    let departureTimesLabel=$('<label>').attr('class', 'labels').text("Departure times");
    let timesDiv=$('<div>').attr('id', 'timesDiv');
    $('body').children().remove();
    $('body').append(departureTimesDiv);
    $(departureTimesDiv).append(timesDiv);

    let selectHourLabel=$('<label>').attr('class','labels').text('Choose hour').appendTo(timesDiv);
    let selectHour = $('<select>').attr('id','selectHour').appendTo(timesDiv);

    for(let i=6;i<22;i++){
        selectHour.append($('<option>').text(i));
    }
    
    let pDiv=$('<div>').attr('id', 'pDiv');
    $(timesDiv).append(pDiv);

    $(selectHour).on('change',function(){ 

        if(pDiv.children().length>0){
            pDiv.children().remove();     
        }
    });

    $(selectHour).on('change',function(){ 
        $(selectHour).after(departureTimesLabel);
        let chosenHour=$('#selectHour :selected').text();
        if((chosenHour)==='8'){
         
            for(let i=0;i<times.length;i++){
                if((times[i]).startsWith("8")){
                    console.log(times[i]);  
                    let hour8=$('<p>').attr('class','hoursP').text(times[i]).appendTo(timesDiv);  
                    pDiv.append(hour8);
               } 
            }
           /* pDiv.slideDown();*/

        }
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