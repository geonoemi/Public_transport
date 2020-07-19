$(document).ready(function(){ 

    let chosenVehicle="";

    /*$('#vehicles').on('change',function(){ 
        let isEmpty=$('.optionDiv');
        if(isEmpty.children().length>0){
            isEmpty.children().remove();
        }
        chosenVehicle=$('#vehicles :selected').text();
        console.log('your chosen vehicle is: '+chosenVehicle);
    });*/

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

   


   



          
        

