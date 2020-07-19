let chosenBus;

let appendBuses=function(){

    let busDiv=$('<div>').attr('id', 'busDiv');
    let label= $('<label>').attr('class','labels').text('Choose bus');  
    $('.optionDiv').append(label); 
    
    let buttonDiv = $('<div>').attr('id','buttonDiv');
    $(busDiv).append(buttonDiv);

    let button70=$('<button>').attr('class','button').text('70');
    let button71A=$('<button>').attr('class','button').text('71A');
    let button90H=$('<button>').attr('class','button').text('90H');

    $(buttonDiv).append(button70);
    $(buttonDiv).append(button71A);
    $(buttonDiv).append(button90H);
  /*  let bus = [
                {val : 1, text: '70'},
                {val : 2, text: '71A'},
                {val : 3, text: '90H'}
    ];    

    let selectBus = $('<select>').attr('id','selectBus').appendTo('.optionDiv');

    $(bus).each(function() {
     selectBus.append($('<option>').attr('value',this.val).text(this.text));
    });*/

    $('.optionDiv').append(busDiv);
    chooseBus();
};

let chooseBus=function(){

    $('.button').on('click', function(){
        
        emptyButton();

        chosenBus=$(this).text();

        if(chosenBus=='70'){
            select70Station();
        }
        if(chosenBus=='71A'){
            select71AStation();  
        }
        if(chosenBus=='90H'){
            select90HStation();
        }
    });
};

  /*  $(selectBus).on('change',function(){ 

        let empty=  $(selectBus).next();
        if(empty.children().length>0){
            empty.children().remove();     
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
};*/




