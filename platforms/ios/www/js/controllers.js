angular.module('starter.controllers', [])

.controller('DueDilCtrl', function($scope, DueDilService) {

  var doSearch = function(query) {
    DueDilService.search(query)
      .success(function (response, status) {
        $scope.companies = response;
        $scope.status = status;
      })
      .error (function (response, status) {
      $scope.companies = response;
      $scope.status = status;
    })
  };

  $scope.search = function(queryText) {
    doSearch(queryText);
  }
})

.controller('DueDilDetailCtrl', function($scope, $stateParams, DueDilService) {

    DueDilService.detail($stateParams.idNumber)
      .success(function(response, status) {
        $scope.company = response;
        $scope.errStatus = status;
      })
      .error (function (response, status) {
      $scope.company = response;
      $scope.errStatus = status;
    })
});
