angular.module('directoryApp', [])
        .controller('directoryController', function () {

            var dirList = this;

            dirList.list = [
                {name: 'asd', age: 29},
                {name: 'fgh', age: 49},
                {name: 'jkl', age: 25},
                {name: 'mmno', age: 33}
            ];

            dirList.addPerson = function () {
                //Add the object to the list
                dirList.list.push({name: dirList.name, age: dirList.age});
                //Reset name and age after submit
                dirList.name = '';
                dirList.age = 0;
            }
        });




     