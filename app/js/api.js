(function(app){
  app.factory("libraryApi", [ "$q", "$http", function($q, $http){
    return ({
      test: function(){
        return $http.get("/api/library/test");
      }
    });
  }]);
})(angular.module("codon.api", []));
