(function(window){

    let divCamHeight=0;
    divCamHeight=$("#divCamera").height();

    $('#btnCamera').click(function(){
       alert("clicked");
       //animate hieght
       $("#divCamera" ).height("700px");;
         //show closebutton
         $('#btnCloseCamera').show();
         takePic();
    });
    $('#btnCloseCamera').click(function(){
        $('#btnCloseCamera').hide();
        $( "#divCamera" ).animate({
        
            height: divCamHeight, 
             }, 1500 );
    });
    function  mungol(){alert("test click");}
    function takePic()
    {
        var camerOptions = { 
            quality: 90,
            destinationType: Camera.DestinationType.FILE_URI,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 200,
            targetHeight: 350
        };
    
        navigator.camera.getPicture(function(imageURI){
    
            var image = $('#photo');
            image.attr('src', imageURI);
            $('#share-container').show();
            
        }, function(errorMessage){
            alert('The following error occured: ' + errorMessage)
        }, camerOptions);
    }
})(window); 