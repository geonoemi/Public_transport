let select10Station=function(){
    let stations10 = [
        {val : 1, text: 'Víztorony-tér'},
        {val : 2, text: 'Klinikák'}
    ];
    let stations10Div=$('<div>').attr('id', 'stations10Div');
  
    let label= $('<label>').attr('class','labels').text('Choose station'); 
    $(stations10Div).append(label);  
    $(trolleyDiv).append(stations10Div);  

    let selectStation10 = $('<select>').attr('id','selectStation10').appendTo('#stations10Div');
  
    $(stations10).each(function() {
        selectStation10.append($('<option>').attr('value',this.val).text(this.text));
    });

    $('#selectStation10').on('change', function(){
    
        
        if(stations10Div.next().length>0){
            stations10Div.next().remove();     
        }
      
        selectedStation10=$('#selectStation10 :selected').text();
    
        if(((selectedStation10)==='Klinikák')) { 
            
            selectWayTrolleyFunction();   
            selectWay10();
            emptyButton();
            getDepartureTimesFor10KlinikakWorkingDays();
        }

        if(((selectedStation10)==='Víztorony-tér')) { 
           
            selectWayTrolleyFunction(); 
            selectWay10();
            emptyButton();
            getDepartureTimesFor10ViztoronyTerWorkingDays();

    }
    });
};