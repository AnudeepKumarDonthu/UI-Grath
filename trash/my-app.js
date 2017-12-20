var app = angular.module("MyApp", [ "chart.js" ]);

app
		.controller(
				"MainController",
				function($scope, $interval, $http) {
					$scope.labels = [ '2006', '2007', '2008', '2009', '2010',
							'2011', '2012' ];
					$scope.series = [ 'Series A', 'Series B' ];

					$scope.data = [ [ 65, 59, 80, 81, 56, 55, 40 ],
							[ 28, 48, 40, 19, 86, 27, 90 ] ];
					$http
							.get(
									"https://kmel2422a2.execute-api.us-east-2.amazonaws.com/prod/getlogfiledata")
							.then(function(response) {
								$scope.myData = response.data;
							});
					$scope.labels = [];
					$scope.series = [];
					$scope.data = [ [] ];
				});