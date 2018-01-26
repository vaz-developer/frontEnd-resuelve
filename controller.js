angular.module("tableApp",[]) 
	.controller("tableController",["$scope","$log",function ($scope, $log){

		$scope.$log = $log;

		$scope.items =  {
			concepts: [{
				amount: 0,
				units: 0,
				price: 0,
				total: 0
			}]
		};
		//Push new concept
		$scope.newConcept = function(){
			$scope.items.concepts.push({
				amount: 0,
				units: 0,
				price: 0,
				total: 0
			});
		}; 
		//Delete concept
		$scope.erase = function(eraseConcept){
			 $scope.items.concepts.splice(eraseConcept, 1);
		}
		//Delete all rows
		$scope.eraseAll = function(eraseAll){
			 $scope.items.concepts.splice(eraseAll);
		}
		//Operation of subtotal
		$scope.subtotal = function() {
        	var subtotal = 0;
        	angular.forEach($scope.items.concepts, function(typeConcept) {
            	subtotal += typeConcept.amount * typeConcept.price;
        	})

        return subtotal;
    }

}]);
