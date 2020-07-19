let chosenTram="";

let appendTrams=function(){

    let tramsDiv=$('<div>').attr('id', 'tramsDiv');
    let label= $('<label>').attr('class','labels').text('Choose tram');  
    $('.optionDiv').append(label); 
    
    let buttonDiv = $('<div>').attr('id','buttonDiv');
    $(tramsDiv).append(buttonDiv);

    let button2=$('<button>').attr('class','button').text('2');
    let button3F=$('<button>').attr('class','button').text('3F');
    let button4=$('<button>').attr('class','button').text('4');

    $(buttonDiv).append(button2);
    $(buttonDiv).append(button3F);
    $(buttonDiv).append(button4);

    $('.optionDiv').append(tramsDiv);
    chooseTram();
};

let emptyButton=function(){
    let empty=  $(buttonDiv).next();
        if(empty.length>0){
            empty.remove();     
        }
};

let chooseTram=function(){

    $('.button').on('click', function(){
        
        emptyButton();

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

   

