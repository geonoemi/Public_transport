$(document).ready(function(){ 
    let chosenVehicle="";
    let stations="";

    $('#vehicles').on('change',function(){ 
        let isEmpty=$('.optionDiv');
        if(isEmpty.children().length>0){
            isEmpty.children().remove();
        }
        chosenVehicle=$('#vehicles :selected').text();
        console.log('your chosen vehicle is: '+chosenVehicle);
    });

    $('#tramIMG').on('click',function(){   
        $('#main').remove();
        tramFunction();
        selectTramFunction();
    });

    $('#busIMG').on('click',function(){   
        $('#main').remove();
        busFunction();
        selectBusFunction();
    });

    $('#trolleyIMG').on('click',function(){   
        $('#main').remove();
        trolleyFunction();
        selectTrolleyFunction();    ;
    });


  /*  $('#vehicles').on('change',function(){   
        $('#publicTransportIMG').remove();  
        if(chosenVehicle=='Tram'){
            tramFunction();
            selectTramFunction();
        }
        
        if(chosenVehicle=='Bus'){
           busFunction();
           selectBusFunction();
        }
        
        if(chosenVehicle=='Trolley'){
           trolleyFunction();
           selectTrolleyFunction();          
        }
    });*/

    $('chosenTram').on('change',function(){  
      
    });

});

   


   



          
        

