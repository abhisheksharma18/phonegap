/**
 * Created by kitu on 3/10/2016.
 */
angular.module('templateStore.templates',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/templates',{
        templateUrl : 'templates/templates.html',
        controller : 'TemplateCtrl'
    })
        .when('/templates/:templateId',{
            templateUrl:'templates/templatesdetail.html',
            controller:'TemplatesDetailCtrl'
        });
}])
.controller('TemplateCtrl',['$scope','$http',function($scope,$http){
        $http.get('json/templates.json').success(function(data){
            $scope.templates=data;
            console.log(data);

        });
        console.log($scope);
    }])
    .controller('TemplatesDetailCtrl',['$scope','$routeParams','$http','$filter',function($scope,$routeParams,$http,$filter){
        var templateId = $routeParams.templateId;
        $http.get('json/templates.json').success(function(data){
            $scope.template=$filter('filter')(data,function(d){
                return d.id == templateId;
            })[0];
            $scope.mainImage = $scope.template.images[0].name;
            console.log($scope);

        });

        $scope.setImage=function(image){
            $scope.mainImage = image.name;
        }
    }]);