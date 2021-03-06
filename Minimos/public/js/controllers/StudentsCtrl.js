/**
 * Created by Marta_ on 25/11/2016.
 */

angular.module('myApp').controller('StudentsCtrl',['$scope','$http','$routeParams' ,function($scope, $http, $routeParams){
    $scope.newstudent = {};

    // get all students
    $http.get('/students')
        .success(function(data) {
            $scope.students = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.CreateStudent = function () {
        $http.post('/students', $scope.newstudent)
            .success(function(data){
                $scope.newstudent = {}; //clear the form
                $scope.students = data;
            })
            .error(function(data){
                console.log('Error:' + data);
            });
    };

    $scope.DeleteStudent = function (id) {
        $http.delete('/students/' + id)
            .success(function(data){
                $scope.students = data;
            })
            .error(function(data){
                console.log('Error:' + data);
            });
    };
}]);