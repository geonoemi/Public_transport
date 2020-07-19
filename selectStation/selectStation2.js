let select2Station=function(){
    let stations2 = [
        {val : 1, text: 'Személyi pályaudvar'},
        {val : 2, text: 'Anna-kút'},
        {val : 3, text: 'Európa-liget'}
    ];
    let stations2Div=$('<div>').attr('id', 'stations2Div');
  
    let label= $('<label>').attr('class','labels').text('Choose station'); 
    $(stations2Div).append(label);  
    $(tramsDiv).append(stations2Div);  

    let selectStation2 = $('<select>').attr('id','selectStation2').appendTo('#stations2Div');
  
    $(stations2).each(function() {
        selectStation2.append($('<option>').attr('value',this.val).text(this.text));
    });

    $('#selectStation2').on('change', function(){
        
        if(stations2Div.next().length>0){
            stations2Div.next().remove();     
        }
          
        selectedStation2=$('#selectStation2 :selected').text();

        if(((selectedStation2)==='Személyi pályaudvar')) { 
                
            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $('#tramsDiv').append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);

            selectWay2();

            emptyButton();
            getDepartureTimesFor2SzemelyiPalyaUdvarWorkingDays();
        }

        if(((selectedStation2)==='Anna-kút')) { 

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $('#tramsDiv').append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);

            selectWay2();

            emptyButton();
            getDepartureTimesFor2AnnaKutWorkingDays();
        }
        
        if(((selectedStation2)==='Európa-liget')) { 

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $('#tramsDiv').append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);

            selectWay2();

            emptyButton();
            getDepartureTimesFor2EuropaLigetWorkingDays();
        }
    });
};



