let chosenBus="";

let busFunction=function(){
        let busDiv=$('<div>').attr('id', 'busDiv');
        let label= $('<label>').attr('class','labels').text('Choose bus');   
        $('.optionDiv').append(label);
      
        let buses = [
                    {val : 1, text: '70'},
                    {val : 2, text: '71A'},
                    {val : 3, text: '90H'}
                    ];
        let selectBus = $('<select>').attr('id','selectBus').appendTo('.optionDiv');
        $('.optionDiv').append(busDiv);
        $(buses).each(function() {
            selectBus.append($('<option>').attr('value',this.val).text(this.text));
        });
    };

    let selectBusFunction=function(){

        $('#selectBus').on('change',function(){ 
             let isEmpty=  $('#selectBus').next();
             if(isEmpty.children().length>0){
                 isEmpty.children().remove();     
             }
        });

        $('#selectBus').on('change',function(){  
            chosenBus=$('#selectBus :selected').text();
            if(chosenBus=='70'){
               console.log('your chosen bus is: '+chosenTram);    
               select70Station();
            }
        });
        $('#selectBus').on('change',function(){  
            if(chosenBus=='71A'){
                console.log('your chosen bus is: '+chosenBus);  
                select71AStation(); 
            }
        });
        $('#selectBus').on('change',function(){  
            if(chosenBus=='90H'){
                console.log('your chosen bus is: '+chosenBus);
                select90HStation();
            }
        });    
    };

    let select70Station=function(){
        let stations70 = [
            {val : 1, text: 'Füvészkert'},
            {val : 2, text: 'Mars-tér'},
            {val : 3, text: 'Széchenyi-tér'}
        ];
        let stations70Div=$('<div>').attr('id', 'stations70Div');
      
        let label= $('<label>').attr('class','labels').text('Choose station'); 
        $(stations70Div).append(label);  
        $(busDiv).append(stations70Div);  
    
        $('#stations70Div').on('change',function(){  
            let isEmpty=$(this);
            if(isEmpty.children().length>0){
                isEmpty.children().remove();
            }
        });
        let selectStation70 = $('<select>').attr('id','selectStation70').appendTo('#stations70Div');
      
        $(stations70).each(function() {
            selectStation70.append($('<option>').attr('value',this.val).text(this.text));
        });
    };

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
    
        $('#stations71ADiv').on('change',function(){  
            let isEmpty=$(this);
            if(isEmpty.children().length>0){
                isEmpty.children().remove();
            }
        });
        let selectStation71A = $('<select>').attr('id','selectStation71A').appendTo('#stations71ADiv');
      
        $(stations71A).each(function() {
            selectStation71A.append($('<option>').attr('value',this.val).text(this.text));
        });
    };

    let select90HStation=function(){
        let stations90H = [
            {val : 1, text: 'Mars-tér'},
            {val : 2, text: 'Katalin utca'},
            {val : 3, text: 'Napfényfürdő'}
        ];
        let stations90HDiv=$('<div>').attr('id', 'stations90HDiv');
      
        let label= $('<label>').attr('class','labels').text('Choose station'); 
        $(stations90HDiv).append(label);  
        $(busDiv).append(stations90HDiv);  
    
        $('#stations90HDiv').on('change',function(){  
            let isEmpty=$(this);
            if(isEmpty.children().length>0){
                isEmpty.children().remove();
            }
        });
        let selectStation90H = $('<select>').attr('id','selectStation90H').appendTo('#stations90HDiv');
      
        $(stations90H).each(function() {
            selectStation90H.append($('<option>').attr('value',this.val).text(this.text));
        });
    };