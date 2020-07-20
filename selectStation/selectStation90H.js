let select90HStation=function(){

    let stations90H = [
        {val : 1, text: 'Szegedi Ipari Logisztikai Központ'},
        {val : 2, text: 'Rókusi víztorony'},
        {val : 3, text: 'Lugas utca'}
    ];
    let stations90HDiv=$('<div>').attr('id', 'stations90HDiv');
  
    let label= $('<label>').attr('class','labels').text('Choose station'); 
    $(stations90HDiv).append(label);  
    $(busDiv).append(stations90HDiv);  

    let selectStation90H = $('<select>').attr('id','selectStation90H').appendTo('#stations90HDiv');
  
    $(stations90H).each(function() {
        selectStation90H.append($('<option>').attr('value',this.val).text(this.text));
    });

    $(selectStation90H).on('change', function(){

        if(stations90HDiv.next().length>0){
            stations90HDiv.next().remove();     
        }
      
        selectedStation90H=$('#selectStation90H :selected').text();
    
        if((selectedStation90H)==='Szegedi Ipari Logisztikai Központ') {

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $(busDiv).append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);

            selectWay90H();
            emptyButton();
            getDepartureTimesFor90HSzegedIpariLogKpWorkingDays();
        }

        if((selectedStation90H)==='Rókusi víztorony') {

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $(busDiv).append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);
            selectWay90H();
            emptyButton();
            getDepartureTimesFor90HRokusiViztoronyWorkingDays();
        }

        if((selectedStation90H)==='Lugas utca') {

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $(busDiv).append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);

            selectWay90H();
            emptyButton();
            getDepartureTimesFor90HLugasUtcaWorkingDays();
        }
    });
};