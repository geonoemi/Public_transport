let select4Station=function(){
    let stations4 = [
        {val : 1, text: 'Tarján'},
        {val : 2, text: 'Dugonics-tér'},
        {val : 3, text: 'Kecskés'}
    ];
    
    let stations4Div=$('<div>').attr('id', 'stations4Div');
    let label= $('<label>').attr('class','labels').text('Choose station'); 
    $(stations4Div).append(label);  
    $(tramsDiv).append(stations4Div);  

   
    let selectStation4 = $('<select>').attr('id','selectStation4').appendTo(stations4Div);
    $(stations4).each(function() {
        selectStation4.append($('<option>').attr('value',this.val).text(this.text));
    });

    $('#selectStation4').on('change', function(){
    
        if(stations4Div.next().length>0){
            stations4Div.next().remove();     
        }
  
        selectedStation4=$('#selectStation4 :selected').text();

        if(((selectedStation4)==='Tarján')) { 

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $(tramsDiv).append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);

            selectWay4();
            emptyButton();
            getDepartureTimesFor4TarjanWorkingDays();
        };

        if(((selectedStation4)==='Dugonics-tér')) { 

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $(tramsDiv).append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);

            selectWay4();
            emptyButton();
            getDepartureTimesFor4FDugonicsTerWorkingDays();
        };
        
        if(((selectedStation4)==='Kecskés')) { 

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $(tramsDiv).append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);

            selectWay4();
            emptyButton();
            getDepartureTimesFor4KecskesWorkingDays();
        };
    });
    
};