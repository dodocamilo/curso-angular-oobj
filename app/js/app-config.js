angular.module('helloWorldApp', [])
    .controller('HelloWorldController', HelloWorldController);

angular.$inject = ['$scope'];

function HelloWorldController($scope) {
    $scope.nome = "";

    $scope.myStyle = {};
    $scope.myClass = {};
    $scope.myStyle.width = '100px';
    $scope.myStyle.height = '100px';

    $scope.$watch('nome', function(newValue, oldValue) {
        if(newValue == oldValue)
            return;

        if(newValue != undefined && newValue == 'oobj') {
            $scope.myStyle.backgroundColor = 'green';
            $scope.myClass = 'blue';
        } else {
            $scope.myStyle.backgroundColor = 'yellow';
            $scope.myClass = 'red';
        }
    });
};