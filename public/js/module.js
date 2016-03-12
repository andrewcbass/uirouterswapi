'use strict';

var app = angular.module('routingApp', ['ui.router']);

app.run(function(SwapiService) {
  SwapiService.getPeople(1);

});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: '/html/home.html'})
  //  .state('about', { url: '/about', templateUrl: '/html/about.html', controller: 'aboutCtrl' })
    .state('swPeople', { url: '/people', templateUrl: '/html/people.html', controller: 'peopleCtrl'})
    //.state('stateName', {configObjec})

    //example below
    .state('swPerson', {
      url: '/person/:personId',
      templateUrl: '/html/person.html',
      controller: 'personCtrl'
    })

  $urlRouterProvider.otherwise('/');
});
