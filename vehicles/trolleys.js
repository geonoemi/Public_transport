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
            select8Station();
        }
    });
    $(selectTrolley).on('change',function(){  
        if(chosenTrolley=='10'){
            select10Station();  
        }
    });    
    $(selectTrolley).on('change',function(){  
        if(chosenTrolley=='19'){
            select19Station();
        }
    });    
};





