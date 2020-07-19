$(document).ready(function(){ 

    let chosenVehicle="";

    $('#tramIMG').on('click',function(){   
        $('#main').remove();
        appendTrams();
    });

    $('#busIMG').on('click',function(){   
        $('#main').remove();
        appendBuses();
       
    });

    $('#trolleyIMG').on('click',function(){   
        $('#main').remove();
        appendTrolleys();
        
    });
});

   


   



          
        

