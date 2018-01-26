angular.module("tableApp",[]) 
	.controller("tableController",["$scope",function ($scope){

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

		$scope.subtotal = function() {
        	var subtotal = 0;
        	angular.forEach(this.items.concepts, function(typeConcept) {
            	subtotal += typeConcept.amount * typeConcept.price;
        	})

        return subtotal;
    }

}]);
