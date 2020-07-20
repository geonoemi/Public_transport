let select19Station=function(){
    let stations19 = [
        {val : 1, text: 'Szegedi Ipari Logisztikai Központ'},
        {val : 2, text: 'Rókusi víztorony'},
        {val : 3, text: 'Lugas utca'}
    ];
    let stations19Div=$('<div>').attr('id', 'stations19Div');
  
    let label= $('<label>').attr('class','labels').text('Choose station'); 
    $(stations19Div).append(label);  
    $(trolleyDiv).append(stations19Div);  

    let selectStation19 = $('<select>').attr('id','selectStation19').appendTo('#stations19Div');
  
    $(stations19).each(function() {
        selectStation19.append($('<option>').attr('value',this.val).text(this.text));
    });

    $('#selectStation19').on('change', function(){
    
        if(stations19Div.next().length>0){
            stations19Div.next().remove();     
        }
      
        selectedStation19=$('#selectStation19 :selected').text();
    
        if((selectedStation19)==='Szegedi Ipari Logisztikai Központ') { 

                let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
                let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
                $(trolleyDiv).append(selectWayDiv);
                $(selectWayDiv).append(selectWayLabel);
                
                selectWay19();
                emptyButton();
                getDepartureTimesFor19SzegedIpariLogisztikaiKozpontWorkingDays();
        }

        if((selectedStation19)==='Rókusi víztorony') {

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $(trolleyDiv).append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);

            selectWay19();
            emptyButton();
            getDepartureTimesFor19RokusiViztoronyWorkingDays();
        }

        if((selectedStation19)==='Lugas utca') { 

            let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
            let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
            $(trolleyDiv).append(selectWayDiv);
            $(selectWayDiv).append(selectWayLabel);
          
            selectWay19();
            emptyButton();
            getDepartureTimesFor19LugasUtcaWorkingDays();
        }
    });
};
