/**
 * Created by kprasad on 3/1/16.
 */


//include any external angular modules in the array
var app = angular.module('skill-search', ['ui.router']);

//I need to route different URLs, and configure my app with services needed
app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
        //For the /home requests, route it to a custom template, and use MainCtrl controller
        $stateProvider.state('search', {url:'/search', templateUrl:'/search.html', controller:'SearchCtrl'});
        //For everything else, route to home, for now
        $urlRouterProvider.otherwise('search');
    }
]);

//Now define our controller
app.controller('SearchCtrl', [
    '$scope',
    function($scope, posts){

        $scope.searchForSkills = function(){
            if($scope.title === '') {return;}

        }

    }]);
