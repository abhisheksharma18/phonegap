/**
 * Created by kitu on 3/9/2016.
 */
var app = angular.module("ecommerce",['ngRoute'])
    .config(['$routeProvider',function($routeProvider){
        $routeProvider.when('/main',
            {
                templateUrl:'main.html',
                controller:'MainCtrl'
            })
            .when('/product',
            {
                templateUrl:'product.html',
                controller:'ProductCtrl'
            })
            .when('/whatsnew',
            {
                templateUrl:'whatsnew.html',
                controller:'NewCtrl'
            })
            .otherwise({
                redirectTo:'/main'
            });

    }])
    .controller('MainCtrl',['$scope','$http',function($scope,$http){
        $http.get('json/dell-streak-7.json').then(function(response){
            $scope.main=response.data;
            console.log(response.data);
        });
        console.log("This is main controller");
    }])
    .controller('ProductCtrl',['$scope',function($scope){
        console.log("This is products controller");
    }])
    .controller('NewCtrl',['$scope',function($scope){
        console.log("This is whats new controller");
    }]);
