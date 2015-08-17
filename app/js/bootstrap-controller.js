angular.module('helloWorldApp')
    .controller('BootstrapController', BootstrapController)
    .config( function($mdThemingProvider){

        // Configure a dark theme with primary foreground yellow

        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();

    });

BootstrapController.$inject = ['$scope', '$growl'];

function BootstrapController($scope, $growl) {
    $scope.pessoa = {};
    $scope.pessoa.nome = '';
    $scope.pessoa.sobrenome = '';
    $scope.pessoa.dataNascimento = '';
    $scope.pessoa.sexo = '';
    $scope.pessoa.cor = '';

    $scope.pessoas = [];

    $scope.gridOptions = {
        data: 'pessoas',
        columnDefs: [
            { name: 'Nome', field:'nome', cellTemplate: 'cell-template.html'},
            { name: 'Sobrenome', field: 'sobrenome'},
            { name: 'Data de Nascimento', field: 'dataNascimento'},
            { name: 'Sexo', field: 'sexo'},
            { name: 'Excluir', cellTemplate: 'cell-opcoes-template.html'}
        ],
        enableColumnMenus : false
    }

    $scope.gridOptions.rowTemplate = 'row-template.html';

    $scope.getRowStyle = function(row) {
        var rowStyle = {};
        if (angular.isDefined(row.entity.cor))
            rowStyle.backgroundColor = row.entity.cor;
        return rowStyle;
    }

    $scope.gridItemClick = function(row, col, colIndex) {
        alert(row);
    }

    $scope.gridExcluirClick = function(row, col, colIndex) {
        $scope.pessoas.splice($scope.pessoas.indexOf(colIndex), 1);
    }

    $scope.gridEditarClick = function(row, col, colIndex) {
        alert(row);
    }

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