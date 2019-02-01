// Define the  module
var oppoKnoocksApp = angular.module('oppoKnoocksApp', ['ngRoute']);

// Define the `PhoneListController` controller on the `phonecatApp` module
oppoKnoocksApp.controller('CameraController', function CameraController($scope,$log,$q, CameraFactory,$routeProvider) {
  $scope.message ="Fuck You";
  $scope.takepic = function() {
  
    CameraFactory.takePicture();
}

});
oppoKnoocksApp.controller('BackGeoController', function BackGeoController($scope,$log,$q) {
  $scope.message ="Back Geo";

});
oppoKnoocksApp.controller('GoogleMapsController', function GoogleMapsController($scope,$log,$q) {
  $scope.message ="Google Maps";

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
      navigator.camera.getPicture(function (imageURI) {

        var image = $('#photo');
        image.attr('src', imageURI);
        $('#share-container').show();

      }, function (errorMessage) {
        alert('The following error occured: ' + errorMessage)
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
 