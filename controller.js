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
				cantidad: 0,
				unidades: 0,
				precio: 0,
				total: 0
			});
		}; 

		$scope.erase = function(borrarConcepto){
			 $scope.items.conceptos.splice(borrarConcepto, 1);
		}

		$scope.subtotal = function() {
        	var subtotal = 0;
        	angular.forEach(this.items.conceptos, function(typeConcepto) {
            	subtotal += typeConcepto.cantidad * typeConcepto.precio;
        	})

        return subtotal;
    }

}]);
