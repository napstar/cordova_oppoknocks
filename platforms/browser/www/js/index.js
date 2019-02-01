
var app = {
    // Application Constructor
    initialize: function() {
      //  document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
      this.bindEvents();
    },
 // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
       /* this.receivedEvent('deviceready');
        var btn=document.getElementById("btnCamera");
        btn.addEventListener('click',mungol,false);*/
        app.receivedEvent('deviceready');
    },
   
    // Update DOM on a Received Event
    receivedEvent: function(id) {
       /* var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);*/
    }
};

app.initialize();
//function  mungol(){alert("mungol");}