angular.module('helloWorldApp')
    .controller('BootstrapController', BootstrapController);

BootstrapController.$inject = ['$scope', '$growl'];

function BootstrapController($scope, $growl) {
    $scope.pessoa = {};
    $scope.pessoa.nome = '';
    $scope.pessoa.sobrenome = '';
    $scope.pessoa.dataNascimento = '';
    $scope.pessoa.sexo = '';

    $scope.pessoas = [];

    $scope.salvar = function() {
        if($scope.myForm.$invalid) {

            var obj = {};
            obj.class = 'success';
            obj.timeout = 4000;
            $growl.box("Erro", "Existem erros no formulário", obj).open();
        }
        $scope.pessoas.push($scope.pessoa);
        $scope.limpar();
    };

    $scope.excluir = function() {
        $scope.pessoas.splice($scope.pessoas.indexOf($scope.pessoa), 1);
        $scope.limpar();
    };

    $scope.limpar = function() {
        $scope.pessoa = {};
        $scope.myForm.itNome.$setPristine();
    };

    $scope.editar = function(pessoa) {
        $scope.pessoa = pessoa;
    };
}