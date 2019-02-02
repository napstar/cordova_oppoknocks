// Define the  module
var oppoKnoocksApp = angular.module('oppoKnoocksApp', ['ngRoute']);

// Define the `PhoneListController` controller on the `phonecatApp` module
oppoKnoocksApp.controller('CameraController', function CameraController($scope,$log,$q, CameraFactory) {
  $scope.message ="Camera";
  $scope.imgURL='';

  $scope.takepic = function() {
  
    CameraFactory.takePicture();
}

});
oppoKnoocksApp.controller('BackGeoController', function BackGeoController($scope,$log,$q) {
  $scope.message ="Back Geo";

});
oppoKnoocksApp.controller('GoogleMapsController', function GoogleMapsController($scope,$log,$q,GoogleMapsFactory) {
  $scope.message ="Google Maps";
  // $scope.getGoogleMap=function(){
  //   var promise =GoogleMapsFactory.getGoogleMap();
  //   promise.then(
  //      function(payload)
  //      {
  //       $scope.mapData = payload.data;
  //      },
  //      function(err)
  //      {
  //      console.log('error in loading maps', err);
  //      }
  //   );

    
  // };
  $scope.getGoogleMap2=function(){
  //  let   cordova= {};
     const apiKEY="AIzaSyA5Ti9F4VNAoFtRynoHPsbxiatN_JTY9tE";
     //let url="https://maps.googleapis.com/maps/api/js?key="+apiKEY+"&sensor=true";
    // let params = {};
    // let headers = {};
    // cordova.plugin.http.get(url, 
    //     params, headers, (response) => {
    //   console.log(response.status);
    // }, function(response) {
    //   console.error(response.error);
    // });
  //   let headers = new Headers();

  // headers.append('Content-Type', 'application/json');
  // headers.append('Accept', 'application/json');

  // headers.append('Access-Control-Allow-Origin', '*');
  // headers.append('Origin','http://localhost:8000');
  //   var request = new Request(url);

  //   fetch(request, {mode: 'no-cors'}).then(function(response) {
  //       // Convert to JSON
  //       alert("success");
  //       console.log(response);
  //       return response.json();
  //   }).then(function(j) {
  //       // Yay, `j` is a JavaScript object
  //       console.log(j);
  //       console.log(JSON.stringify(j));
  //   }).catch(function(error) {
  //     alert(error);
  //       console.log('Request failed', error)
  //   });
  var googleMapOption = {
    zoom: 4,
    center: new google.maps.LatLng(25, 80),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  $scope.gMap = new google.maps.Map(document.getElementById('map'), googleMapOption);
    
   };
  

  var init = function () {
    var map;

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
    $scope.loadScript = function() {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA5Ti9F4VNAoFtRynoHPsbxiatN_JTY9tE&callback=init';
      document.body.appendChild(script);
      setTimeout(function() {
          $scope.initialize();
      }, 500);
  }
    // var promise =GoogleMapsFactory.getGoogleMap();
    // promise.then(
    //    function(payload)
    //    {
    //     console.log('Success in loading maps', payload.data);
    //     $scope.mapData = payload.data;
    //    },
    //    function(err)
    //    {
    //    console.log('error in loading maps', err);
    //    alert(err);
    //    }
    // )
    // .then();
 };
  
 init();
});
oppoKnoocksApp.controller('DeviceGalleryController', function DeviceGalleryController($scope,$log,$q) {
  $scope.message ="DeviceGallery";

});
oppoKnoocksApp.controller('SQLController', function SQLController($scope,$log,$q) {
  $scope.message ="SQLController";

});
oppoKnoocksApp.controller('FileTransferController', function FileTransferController($scope,$log,$q) {
  $scope.message ="File Transfer";

});

oppoKnoocksApp.factory("GoogleMapsFactory",function($http,$q){
  let deferred = $q.defer();
  const apiKEY="AIzaSyA5Ti9F4VNAoFtRynoHPsbxiatN_JTY9tE";
  let strAPI="https://maps.googleapis.com/maps/api/js?key="+apiKEY+"&sensor=true";
  return{
    getGoogleMap:function(){
      return $http.get(strAPI);
    },
    getGoogleMap2:function(){
      return $http.get(strAPI);
    }
  }

});

oppoKnoocksApp.factory('CameraFactory', function ($q) {
  var deferred = $q.defer();
  var cameraOptions = {
    quality: 90,
    destinationType: Camera.DestinationType.FILE_URI,
    encodingType: Camera.EncodingType.JPEG,
    targetWidth: 200,
    targetHeight: 350
  };
  return {
    takePicture: function () {
      let $image = $('#photo');
      navigator.camera.getPicture(function (imageURI) {

    
        console.log(imageURI);
        $image.show();
        image.attr('src', imageURI);
        

      }, function (errorMessage) {
        
        alert('The following error occured: ' + errorMessage);
        deferred.reject(error);
      }, cameraOptions);
      return deferred.promise;
    }

  }

});







oppoKnoocksApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/Camera', {
    templateUrl: 'camera.html',
    controller: "CameraController"
  }).when("/BackGeo", {
    templateUrl: "BackGeo.html"
    ,
    controller: "BackGeoController"
})
.when("/GoogleMap", {
  templateUrl: "GoogleMaps.html"
  ,
    controller: "GoogleMapsController"
})
.when("/DeviceGallery", {
  templateUrl: "DeviceGallery.html"
  ,
    controller: "DeviceGalleryController"
})
.when("/SQL", {
  templateUrl: "SQL.html"
  , controller: "SQLController"
}).when("/FileTransfer", {
  templateUrl: "FileTransfer.html"
  ,    controller: "FileTransferController"
})
   .otherwise({
    templateUrl: 'default.html' ,
     controller: "BackGeoController"
     
  });
}]);
 