let select8Station=function(){

    let stations8 = [
        {val : 1, text: 'Makkosház'},
        {val : 2, text: 'Klinikák'}
    ];
    let stations8Div=$('<div>').attr('id', 'stations8Div');
  
    let label= $('<label>').attr('class','labels').text('Choose station'); 
    $(stations8Div).append(label);  
    $(trolleyDiv).append(stations8Div);  

    let selectStation8 = $('<select>').attr('id','selectStation8').appendTo('#stations8Div');
  
    $(stations8).each(function() {
        selectStation8.append($('<option>').attr('value',this.val).text(this.text));
    });

    $('#selectStation8').on('change', function(){
    
            if(stations8Div.next().length>0){
            stations8Div.next().remove();     
            }
      
        selectedStation8=$('#selectStation8 :selected').text();
    
        if(((selectedStation8)==='Klinikák')) { 
              
            selectWayTrolleyFunction();
            selectWay8();
            emptyButton();
            getDepartureTimesFor8KlinikakWorkingDays();
        }

        if(((selectedStation8)==='Makkosház')) { 

            selectWayTrolleyFunction();
            selectWay8();
            emptyButton();
            getDepartureTimesFor8MakkoshazWorkingDays();
        }
    });
};

let selectWayTrolleyFunction=function(){

    let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
    let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
    $(trolleyDiv).append(selectWayDiv);
    $(selectWayDiv).append(selectWayLabel);
}