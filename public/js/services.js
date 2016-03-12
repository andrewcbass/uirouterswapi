'use strict';

var app = angular.module('routingApp');

app.service('SwapiService', function($http) {
    this.getPeople = function(num) {
      $http.get('https://swapi.co/api/people/?page=' + num)
      .then(res => {
        //this is now refering to SwapiService.people b/c =>
        this.people = res.data.results;
      }, err => {
        console.error('SwapiService error: ', err);
      })
    };

    this.getPerson = function(num) {
      $http.get('https://swapi.co/api/people/' + num)
      .then(res => {
        this.person = res.data;
      }, err => {
        console.log('SwapiService error: ', err);
      })
    };
});
