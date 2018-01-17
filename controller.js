angular.module("MyFirtsApp",[]) 
	.controller("FirtsController",["$scope",function ($scope){
		$scope.nombre = "Evelyn"; 
		$scope.nuevoConcepto = {};	
		$scope.conceptos = [
		];
		//Agregamos metodos para nuestro controlador
		$scope.agregarConcepto = function(){
			//push agrega un nuevo elemento a un arreglo
			$scope.conceptos.push($scope.nuevoConcepto)
			$scope.nuevoConcepto = {};
		}
		$scope.erase = function(){
			 $scope.conceptos.splice(this.$index, 1);
		}
	}]);
