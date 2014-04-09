angular.module('starter.services', [])

.factory('DueDilService', function ($http) {

  var apiKey = 'kmudq9cyzkmbakpg9992gjbj';

  return {
    search : function(companyName) {
      return $http({
        url: 'http://api.duedil.com/open/search?q='+ companyName +'&api_key=' + apiKey,
        method: 'GET'
      })
    },

    detail : function(companyName) {
      return $http({
        url: 'http://api.duedil.com/open/uk/company/'+ companyName + '?api_key=' + apiKey,
        method: 'GET'
      })
    }
  }
});
