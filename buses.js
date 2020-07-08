let chosenBus="";

let busFunction=function(){

    let busDiv=$('<div>').attr('id', 'busDiv');
    let label= $('<label>').attr('class','labels').text('Choose bus');  
    $('.optionDiv').append(label); 
    
    let bus = [
                {val : 1, text: '70'},
                {val : 2, text: '71A'},
                {val : 3, text: '90H'}
    ];    

    let selectBus = $('<select>').attr('id','selectBus').appendTo('.optionDiv');
    $('.optionDiv').append(busDiv);

    $(bus).each(function() {
     selectBus.append($('<option>').attr('value',this.val).text(this.text));
    });
};

let selectBusFunction=function(){

    $(selectBus).on('change',function(){ 

        let isEmpty=  $(selectBus).next();

        if(isEmpty.children().length>0){
            isEmpty.children().remove();     
        }
    });   

    $(selectBus).on('change',function(){  

        chosenBus=$('#selectBus :selected').text();

        if(chosenBus=='70'){
            select70Station();
        }
    });
    $(selectBus).on('change',function(){  

        if(chosenBus=='71A'){
            select71AStation();  
        }
    });    
    $(selectBus).on('change',function(){  

        if(chosenBus=='90H'){
            select90HStation();
        }
    });    
};




