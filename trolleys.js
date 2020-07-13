let chosenTrolley="";

let appendTrolleys=function(){
    let trolleyDiv=$('<div>').attr('id', 'trolleyDiv');
    let label= $('<label>').attr('class','labels').text('Choose trolley');  
    $('.optionDiv').append(label); 
    
    let trolley = [
                {val : 1, text: '8'},
                {val : 2, text: '10'},
                {val : 3, text: '19'}
                ];    
    let selectTrolley = $('<select>').attr('id','selectTrolley').appendTo('.optionDiv');
    $('.optionDiv').append(trolleyDiv);
    $(trolley).each(function() {
     selectTrolley.append($('<option>').attr('value',this.val).text(this.text));
    });

    chooseTrolley();
};

let chooseTrolley=function(){

    $('#selectTrolley').on('change',function(){ 
        let isEmpty=  $('#selectTrolley').next();
        if(isEmpty.children().length>0){
            isEmpty.children().remove();     
        }
    });   

    $(selectTrolley).on('change',function(){  
        chosenTrolley=$('#selectTrolley :selected').text();
        if(chosenTrolley=='8'){
            console.log('your chosen trolley is: '+chosenTrolley);
            select8Station();
        }
    });
    $(selectTrolley).on('change',function(){  
        if(chosenTrolley=='10'){
            console.log('your chosen trolley is: '+chosenTrolley);  
            select10Station();  
        }
    });    
    $(selectTrolley).on('change',function(){  
        if(chosenTrolley=='19'){
            console.log('your chosen trolley is: '+chosenTrolley);    
            select19Station();
        }
    });    
};

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
    
        let empty=$('#selectStation8 :selected').text();
            console.log(empty);
            if(stations8Div.next().length>0){
            stations8Div.next().remove();     
            }
      
        selectedStation8=$('#selectStation8 :selected').text();
    
        if(((selectedStation8)==='Klinikák')||((selectedStation8)==='Makkosház')) {

                let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
                let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
                $('#trolleyDiv').append(selectWayDiv);
                $(selectWayDiv).append(selectWayLabel);
                selectWay8();
        }
    });
};

let selectWay8=function(){
    let way=[
        {val : 1, text: 'Makkosház'},
        {val : 2, text : 'Klinikák'}
    ];
    let selectWay = $('<select>').attr('id','selectWay').appendTo(selectWayDiv);
    $(way).each(function(){
        $(selectWay).append($('<option>').attr('value', this.val).text(this.text));
    });
}

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
    
        if(((selectedStation10)==='Klinikák')||((selectedStation10)==='Víztorony-tér')) {
            console.log(selectedStation10);
                let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
                let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
                $('#trolleyDiv').append(selectWayDiv);
                $(selectWayDiv).append(selectWayLabel);
                selectWay10();
        }
    });
};

let selectWay10=function(){
    let way=[
        {val : 1, text: 'Víztorony-tér'},
        {val : 2, text : 'Klinikák'}
    ];
    let selectWay = $('<select>').attr('id','selectWay').appendTo(selectWayDiv);
    $(way).each(function(){
        $(selectWay).append($('<option>').attr('value', this.val).text(this.text));
    });
}

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
    
        let empty=$('#selectStation19 :selected').text();
            console.log(empty);
            if(stations19Div.next().length>0){
            stations19Div.next().remove();     
            }
      
        selectedStation19=$('#selectStation19 :selected').text();
    
        if(((selectedStation19)==='Szegedi Ipari Logisztikai Központ') ||((selectedStation19)==='Rókusi víztorony')||((selectedStation19)==='Lugas utca')) {
            console.log(selectedStation19);
                let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
                let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
                $('#trolleyDiv').append(selectWayDiv);
                $(selectWayDiv).append(selectWayLabel);
                selectWay19();
        }
    });
};

let selectWay19=function(){
    let way=[
        {val : 1, text: 'Szegedi Ipari Logisztikai Központ'},
        {val : 2, text : 'Lugas utca'}
    ];
    let selectWay = $('<select>').attr('id','selectWay').appendTo(selectWayDiv);
    $(way).each(function(){
        $(selectWay).append($('<option>').attr('value', this.val).text(this.text));
    });
};


