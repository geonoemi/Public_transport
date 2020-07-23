

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
                      if (times[j] < 10){
                        times[j] = '0' + times[j];  
                      }                 
                        let hourP=$('<p>').attr('class','hoursP').text(times[j]);     
                        pDiv.append(hourP);
                    } 
                }
            }
        });  
};
/*  

var timerId; // current timer if started

function clockStart() {
  if (timerId) return

  timerId = setInterval(update, 1000);
  update(); 
}


function update() {
  var date = new Date();

  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (hours < 10) hours = '0' + hours
  if (minutes < 10) minutes = '0' + minutes
  if (document.getElementById('clock')) {
    document.getElementById('clock').innerHTML = hours + ':' + minutes;
  }

  if (document.getElementById('clock-medium')) {
    document.getElementById('clock-medium').innerHTML = hours + ':' + minutes;
  }

}

*/