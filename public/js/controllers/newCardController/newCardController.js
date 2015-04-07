app.controller('NewCardController', function($scope, $http){

	$scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
	};

	$scope.sendItUp = function(card){
		$http.post('/cards', card).
		success(function(){
			console.log($scope.newCardForm);
			$scope.newCard.question = null;
			$scope.newCard.category = null;
			$scope.newCard.answers = null;
			// $scope.newCard.answers[0].text = null;
			// $scope.newCard.answers[0].correct = null;
			// $scope.newCard.answers[1].text = null;
			// $scope.newCard.answers[1].correct = null;
			// $scope.newCard.answers[2].text = null;
			// $scope.newCard.answers[2].correct = null;
		}).
		error(function(){
			console.log("you suck");
		});
	};

});