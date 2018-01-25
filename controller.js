angular.module("MyFirtsApp",[]) 
	.controller("FirtsController",["$scope",function ($scope){

		$scope.items =  {
			conceptos: [{
				cantidad: 0,
				unidades: 0,
				precio: 0,
				total: 0
			}]
		};


		//Agregamos metodos para nuestro controlador
		$scope.agregarConcepto = function(){
			//push agrega un nuevo elemento a un arreglo
			$scope.items.conceptos.push({
				cantidad: 1,
				unidades: 0,
				precio: 0,
				total: 0
			});
		}; 

		$scope.erase = function(){
			 $scope.items.conceptos.splice(index, 1);
		}

		$scope.total = function() {
        var total = 0;
        angular.forEach(this.items.conceptos, function(typeConcepto) {
            total += typeConcepto.cantidad * typeConcepto.precio;
        })

        return total;
    }

}]);
