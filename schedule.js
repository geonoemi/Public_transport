let schedule=function(){
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
        
            for(let j=hours[0];j<hours.length;j++){
            
                if(hours[j]===(chosenHour)){
                    if((times[j]).startsWith(hours[j])){
                        console.log(times[j]);
                                
                        let hourP=$('<p>').attr('class','hoursP').text(times[j]);     
                        pDiv.append(hourP);
                    } 
                }
            }
        });  
};