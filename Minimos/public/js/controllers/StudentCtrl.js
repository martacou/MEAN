/**
 * Created by Marta_ on 25/11/2016.
 */

angular.module('myApp').controller('StudentCtrl',['$scope','$http','$routeParams' ,function($scope, $http, $routeParams){
    $scope.Phone = {};
    var StudentID = window.location.href.split("/").pop();

    // when landing on the page, get all subjects
    $http.get('/students/' + StudentID)
        .success(function(data) {
            $scope.student = data;
            $scope.phonename = data.phones[0].name;
            $scope.phonenum = data.phones[0].number;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


}]);