(function(app){
  app.controller("mainCtrl", [ "$scope", "libraryApi", function($scope, $library){
    $library.test()
      .then(function(resp){
        $(".helix")
          .append(new Helix({
            colors: {
              left: 0x0F0F0F,
              right: 0x0F0F0F
            },
            data: resp.data
          }));
      }, function(resp){
        $scope.error = "Couldn't fetch artists";
      });
  }]);
})(angular.module("codon", [ "ui.router", "codon.api" ]));
