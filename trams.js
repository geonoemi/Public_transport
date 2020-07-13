let chosenTram="";

let tramFunction=function(){
    let tramsDiv=$('<div>').attr('id', 'tramsDiv');
    let label= $('<label>').attr('class','labels').text('Choose tram');  
    $('.optionDiv').append(label); 
    
    let buttonDiv = $('<div>').attr('id','buttonDiv');
    
    $(tramsDiv).append(buttonDiv);
    let button2=$('<button>').attr('class','button').attr('value','2').text('2');
    console.log(button2.text());
    let button3F=$('<button>').attr('class','button').text('3F');
    let button4=$('<button>').attr('class','button').text('4');

    $(buttonDiv).append(button2);
    $(buttonDiv).append(button3F);
    $(buttonDiv).append(button4);

    $('.optionDiv').append(tramsDiv);
   
    $(button2).on('click',function(){
        console.log('2-es gomb felirata:'+(this).val());
    });
    
    selectTramFunction();
};

let selectTramFunction=function(){

};
   

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
};

let select3FStation=function(){
    let stations3F = [
        {val : 1, text: 'Tarján'},
        {val : 2, text: 'Dugonics-tér'},
        {val : 3, text: 'Fonógyári út'}
    ];
    
    let stations3FDiv=$('<div>').attr('id', 'stations3FDiv');
    let label= $('<label>').attr('class','labels').text('Choose station'); 
    $(stations3FDiv).append(label);  
    $(tramsDiv).append(stations3FDiv);  

    let selectStation3F = $('<select>').attr('id','selectStation3F').appendTo('#stations3FDiv');
    $(stations3F).each(function() {
        selectStation3F.append($('<option>').attr('value',this.val).text(this.text));
    });
};

let select4Station=function(){
    let stations4 = [
        {val : 1, text: 'Tarján'},
        {val : 2, text: 'Dugonics-tér'},
        {val : 3, text: 'Kecskés'}
    ];
    
    let stations4Div=$('<div>').attr('id', 'stations4Div');
    let label= $('<label>').attr('class','labels').text('Choose station'); 
    $(stations4Div).append(label);  
    $(tramsDiv).append(stations4Div);  

   
    let selectStation4 = $('<select>').attr('id','selectStation4').appendTo(stations4Div);
    $(stations4).each(function() {
        selectStation4.append($('<option>').attr('value',this.val).text(this.text));
    });
};