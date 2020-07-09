$(document).ready(function(){ 

    let chosenVehicle="";

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
        selectTrolleyFunction(); 
    });
});

   


   



          
        

