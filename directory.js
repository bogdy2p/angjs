angular.module('directoryApp', [])
        .controller('directoryController', function ($scope) {
            $scope.list = [
                {name: 'Ion', age: 29},
                {name: 'Vasile', age: 49},
                {name: 'Trei', age: 25},
                {name: 'Gicu', age: 33}
            ];

            $scope.addPerson = function () {
                //Add the object to the list.
                $scope.list.push({name: $scope.name, age: $scope.age});
                //Reset name and age after submit
                $scope.name = '';
                $scope.age = 0;
            }
        });