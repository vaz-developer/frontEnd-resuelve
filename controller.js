angular.module("MyFirtsApp",[]) 
	.controller("FirtsController",["$scope",function ($scope){
		$scope.conceptos = [];
		$scope.total = 0;

		//Agregamos metodos para nuestro controlador
		$scope.agregarConcepto = function(){
			//push agrega un nuevo elemento a un arreglo
			$scope.conceptos.push($scope.nuevoConcepto)
			$scope.nuevoConcepto = {};
		}
		$scope.erase = function(){
			 $scope.conceptos.splice(this.$index, 1);
		}

		$scope.total = function() {
        var total = 0;
        angular.forEach($scope.items, function(item) {
            total += item.c * item.pU;
        })

        return total;
    }

}]);
