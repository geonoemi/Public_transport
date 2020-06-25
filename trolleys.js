let chosenTrolley="";
let trolleyFunction=function(){
    let trolleyDiv=$('<div>').attr('id', 'busDiv');
    let label= $('<label>').text('Choose trolley:'); 
    $(trolleyDiv).append(label);  
    $('.optionDiv').append(trolleyDiv);
    let trolleys = [
                    {val : 1, text: '8'},
                    {val : 2, text: '10'},
                    {val : 3, text: '19'}
                    ];
   let selectTrolley = $('<select>').attr('id','selectTrolley').appendTo('.optionDiv');
    $(trolleys).each(function() {
        selectTrolley.append($('<option>').attr('value',this.val).text(this.text));
    });
};
let selectTrolleyFunction=function(){
    $('#selectTrolley').on('change',function(){  
        chosenTrolley=$('#selectTrolley :selected').text();
        if(chosenTrolley=='8'){
            console.log('your chosen trolley is: '+chosenTrolley);
        }
        if(chosenTrolley=='10'){
            console.log('your chosen trolley is: '+chosenTrolley);

        }
        if(chosenTrolley=='19'){
            console.log('your chosen trolley is: '+chosenTrolley);
        }
    });    
};