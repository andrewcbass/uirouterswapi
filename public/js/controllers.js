'use strict';

var app = angular.module('routingApp');
var page = 1;

app.controller('peopleCtrl', function($scope, SwapiService, $state) {

  //want to watch: $scope.people = SwapiService.people;
  $scope.$watch(function() { //watch function
    //return the thing to watch
    return SwapiService.people;
  }, function(newVal, oldVal) { //listener function

    $scope.people = newVal;
    //triggered when watched thing changes

  })

  $scope.pagePrev = function() {
    if(page > 1) {
      page = page - 1;
      $scope.people = SwapiService.getPeople(page);
    }
  }

  $scope.page = function(pg) {
    page = pg;
    $scope.people = SwapiService.getPeople(pg);
  }

  $scope.pageNext = function() {
    if(page < 9) {
      page = page + 1;
      $scope.people = SwapiService.getPeople(page);
    }
  }

  $scope.detail = function(person) {

    var id = person.url.slice(27, person.url.length - 1);


    $state.go('swPerson', {
      personId: id
    })

  }

});

app.controller('personCtrl', function($scope, $state, $stateParams, SwapiService) {

  $scope.$watch(function() { //watch function
    //return the thing to watch
    return SwapiService.person;
  }, function(newVal, oldVal) { //listener function

    $scope.person = newVal;
    console.log('NEWVAL', newVal);
    //triggered when watched thing changes

  })
  SwapiService.getPerson($stateParams.personId);
  
})
