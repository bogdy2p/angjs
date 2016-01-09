angular.module('directoryApp', [])
        .controller('directoryController', function ($scope) {
            $scope.list = [
                {name: 'Ion', age: 29},
                {name: 'Vasile', age: 49},
                {name: 'Trei', age: 25},
                {name: 'Gicu', age: 33}
            ]
        });