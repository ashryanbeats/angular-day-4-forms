app.controller('NewCardController', function($scope, $http){

	$scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
	}

	$scope.sendItUp = function(card){
		console.log(card);
		$http.post('/cards', card).
		success(function(){
			console.log("Yay")
		}).
		error(function(){
			console.log("you suck")
		});
	};

});