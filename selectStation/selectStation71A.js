let select71AStation=function(){
   
    let stations71A = [
        {val : 1, text: 'Mars-tér'},
        {val : 2, text: 'Katalin utca'},
        {val : 3, text: 'Napfényfürdő'}
    ];
    let stations71ADiv=$('<div>').attr('id', 'stations71ADiv');
  
    let label= $('<label>').attr('class','labels').text('Choose station'); 
    $(stations71ADiv).append(label);  
    $(busDiv).append(stations71ADiv);  

    let selectStation71A = $('<select>').attr('id','selectStation71A').appendTo('#stations71ADiv');
  
    $(stations71A).each(function() {
        selectStation71A.append($('<option>').attr('value',this.val).text(this.text));
    });

    $(selectStation71A).on('change', function(){
    
        if(stations71ADiv.next().length>0){
            stations71ADiv.next().remove();     
        }
      
        selectedStation71A=$('#selectStation71A :selected').text();
    
        if(((selectedStation71A)==='Katalin utca'))/*||((selectedStation71A)==='Mars-tér') || ((selectedStation71A)==='Napfényfürdő'))*/ {

            selectWayTramFunction();
            selectWay71A();
            emptyButton();
            getDepartureTimesFor71AKatalinUtcaWorkingDays();
        }

        if((selectedStation71A)==='Mars-tér'){

            selectWayTramFunction();
            selectWay71A();
            emptyButton();
            getDepartureTimesFor71AMarsTerWorkingDays();
        }

        if((selectedStation71A)==='Napfényfürdő'){

            selectWayTramFunction();
            selectWay71A();
            emptyButton();
            getDepartureTimesFor71ANapfenyfurdoWorkingDays();
        }
    });
};