/*71A from Katalin utca*/
let departureTimes71AKatalinUtcaToMarsTerWorkingDays=function(){

    let departureTimes="";
    let times=[];
    let n=0;

    for( let h=6; h<22; h++) {	
        for(let m=10;m<60;m+=10) {
           
            departureTimes=h+":"+m;
            times[n]=departureTimes.slice(0,departureTimes.indexOf(":"));
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
    let hours=[];
    let h=0;
    for(let i=6;i<22;i++){
        selectHour.append($('<option>').text(i));
        hours[h]=i;
        h++;
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
        console.log(chosenHour); /*látja mit választott */
        for(let j=times[0];j<times.length;j++){
         /*   console.log('times: '+ times[j]);*/
           /* for(let i=0;i<times.length;i++){*/
                if(times[j]===(chosenHour)){
                    console.log('j: '+times[j]); 

                 /*   for(let i=0;i<times.length;i++){
                        if((times[i]).startsWith(j)){*/
                            
                            let hourP=$('<p>').attr('class','hoursP').text(times[j]).appendTo(timesDiv);  
                            pDiv.append(hourP);
                            pDiv.slideDown();
                         
                    
                }
           
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