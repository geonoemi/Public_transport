let chosenBus="";
  let busFunction=function(){
        let busDiv=$('<div>').attr('id', 'busDiv');
        let label= $('<label>').text('Choose bus:');   
        $(busDiv).append(label);
        $('.optionDiv').append(busDiv);
        let buses = [
                    {val : 1, text: '70'},
                    {val : 2, text: '71A'},
                    {val : 3, text: '90H'}
                    ];
        let selectBus = $('<select>').attr('id','selectBus').appendTo('.optionDiv');
        $(buses).each(function() {
            selectBus.append($('<option>').attr('value',this.val).text(this.text));
        });
    }
    let selectBusFunction=function(){
        $('#selectBus').on('change',function(){  
            chosenBus=$('#selectBus :selected').text();
            if(chosenBus=='70'){
               console.log('your chosen bus is: '+chosenTram);    
            }
            if(chosenBus=='71A'){
                console.log('your chosen bus is: '+chosenBus);    
            }
            if(chosenBus=='90H'){
                console.log('your chosen bus is: '+chosenBus);
            }
        });    

    };