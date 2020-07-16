let chosenTram="";

let tramFunction=function(){

    let tramsDiv=$('<div>').attr('id', 'tramsDiv');
    let label= $('<label>').attr('class','labels').text('Choose tram');  
    $('.optionDiv').append(label); 
    
    let buttonDiv = $('<div>').attr('id','buttonDiv');
    
    $(tramsDiv).append(buttonDiv);
    let button2=$('<button>').attr('class','button').attr('value','2').text('2');
    let button3F=$('<button>').attr('class','button').text('3F');
    let button4=$('<button>').attr('class','button').text('4');

    $(buttonDiv).append(button2);
    $(buttonDiv).append(button3F);
    $(buttonDiv).append(button4);

    $('.optionDiv').append(tramsDiv);
    
    selectTramFunction();
};

let selectTramFunction=function(){

    $('.button').on('click', function(){
        
        let isEmpty=  $(buttonDiv).next();

        if(isEmpty.length>0){
            isEmpty.remove();     
        }

        chosenTram=$(this).text();

        if(chosenTram=='2'){
            select2Station();
        }
        if(chosenTram=='3F'){
            select3FStation();
        }
        if(chosenTram=='4'){
            select4Station();
        }
    });
};
let selectWayFunction=function(){
    
    let selectWayDiv=$('<div>').attr('id', 'selectWayDiv');
    let selectWayLabel=$('<label>').attr('class','labels').text('Choose way');
    $('#tramsDiv').append(selectWayDiv);
    $(selectWayDiv).append(selectWayLabel);
    if(selectWayDiv.children().length>0){
        selectWayDiv.children().remove();
    }
}
   

