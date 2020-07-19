let select3FStation=function(){
    let stations3F = [
        {val : 1, text: 'Tarján'},
        {val : 2, text: 'Dugonics-tér'},
        {val : 3, text: 'Fonógyári út'}
    ];
    
    let stations3FDiv=$('<div>').attr('id', 'stations3FDiv');
    let label= $('<label>').attr('class','labels').text('Choose station'); 
    $(stations3FDiv).append(label);  
    $(tramsDiv).append(stations3FDiv);  

    let selectStation3F = $('<select>').attr('id','selectStation3F').appendTo('#stations3FDiv');
    $(stations3F).each(function() {
        selectStation3F.append($('<option>').attr('value',this.val).text(this.text));
    });

    $('#selectStation3F').on('change', function(){
        
        if(stations3FDiv.next().length>0){
            stations3FDiv.next().remove();     
        }
  
        selectedStation3F=$('#selectStation3F :selected').text();

        if(((selectedStation3F)==='Tarján')) { 

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $('#tramsDiv').append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);
            
            selectWay3F();

            emptyButton();
            getDepartureTimesFor3FTarjanWorkingDays();
        }

        if(((selectedStation3F)==='Dugonics-tér')) { 

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $('#tramsDiv').append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);

            selectWay3F();

            emptyButton();
            getDepartureTimesFor3FDugonicsTerWorkingDays();
        }
        
        if(((selectedStation3F)==='Fonógyári út')) { 

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $('#tramsDiv').append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);

            selectWay3F();

            emptyButton();
            getDepartureTimesFor3FFonogyariUtWorkingDays();
        }
    });
};