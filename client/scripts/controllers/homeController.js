/**
 * Created by JFCS on 4/22/16.
 */
myApp.controller("HomeController", ["$scope", "$filter", "MockService", "$uibModal",
    // testing data for front end practice.

    function($scope, $filter, MockService, $uibModal) {

        var mockService = MockService;

        $scope.rowCollection = [];
        $scope.itemsByPage=15;
        $scope.accounts = [];
        $scope.donations = [];
        $scope.campaigns = [];
        $scope.contacts = [];
        $scope.households = [];

        $scope.contacts = mockService.contacts;
        //mockService.getAccounts();
        mockService.getContacts();

        console.log($scope.contacts);
        //mockService.getDonations();
        //mockService.getCampaigns();
        //mockService.getHouseholds();

        $scope.open = function(size) {

            var modalInstance = $uibModal.open({
              animation: true,
              templateUrl: './assets/views/templates/chartContent.html',
              controller: 'ChartContentController',
              size: size,
              keyboard: true,
      				backdrop: 'static'
            });
          };








    //    random person generator. testing only.

    //    var   nameList = ['Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa'];
    //    var   familyName = ['Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez'];
    //
    //function createRandomItem() {
    //
    //    var    firstName = nameList[Math.floor(Math.random() * 4)];
    //    var    lastName = familyName[Math.floor(Math.random() * 4)];
    //    var    age = Math.floor(Math.random() * 100);
    //    var    email = firstName + lastName + '@whatever.com';
    //    var    balance = Math.random() * 3000;
    //
    //    return {
    //        firstName: firstName,
    //        lastName: lastName,
    //        age: age,
    //        email: email,
    //        balance: balance
    //    };
    //}

    //for (var j = 0; j < 200; j++) {
    //    $scope.rowCollection.push(createRandomItem());
    //}







}]);

myApp.controller("ChartContentController", ["$scope", "$uibModalInstance", function($scope, $uibModalInstance) {

	$scope.chartType = function(type) {
		if (type == "piechart") {
			$scope.load = $scope.piechart;
		} else {
			$scope.load = $scope.bargraph;
		}
	};

  $scope.piechart = function(data) {

    AmCharts.makeChart("chartdiv",
			{
				"type": "pie",
				"angle": 20,
				"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
				"depth3D": 20,
				"titleField": "country",
				"valueField": "litres",
				"fontSize": 12,
				"theme": "default",
				"allLabels": [],
				"balloon": {},
				"titles": [],
				"dataProvider": [
					{
						"country": "Events",
						"litres": "356.9"
					},
					{
						"country": "Ireland",
						"litres": 131.1
					},
					{
						"country": "Germany",
						"litres": 115.8
					},
					{
						"country": "Australia",
						"litres": 109.9
					},
					{
						"country": "Austria",
						"litres": 108.3
					},
					{
						"country": "UK",
						"litres": 65
					},
					{
						"country": "Belgium",
						"litres": "20"
					}
				]
			}
		);
  };

	$scope.bargraph = function(data) {

    AmCharts.makeChart("chartdiv",
			{
				"type": "serial",
				"categoryField": "date",
				"dataDateFormat": "YYYY-MM-DD",
				"autoMarginOffset": 40,
				"marginRight": 60,
				"marginTop": 60,
				"fontSize": 13,
				"theme": "default",
				"categoryAxis": {
					"parseDates": true
				},
				"chartCursor": {
					"enabled": true
				},
				"chartScrollbar": {
					"enabled": true
				},
				"trendLines": [],
				"graphs": [
					{
						"columnWidth": 0.44,
						"cornerRadiusTop": 8,
						"dashLength": 4,
						"fillAlphas": 0.51,
						"id": "AmGraph-1",
						"lineAlpha": 0.44,
						"title": "graph 1",
						"type": "column",
						"valueField": "column-1"
					},
					{
						"bullet": "square",
						"bulletBorderAlpha": 1,
						"bulletBorderThickness": 1,
						"bulletSize": 16,
						"id": "AmGraph-2",
						"lineThickness": 3,
						"title": "graph 2",
						"valueField": "column-2"
					}
				],
				"guides": [],
				"valueAxes": [
					{
						"id": "ValueAxis-1",
						"title": ""
					}
				],
				"allLabels": [],
				"balloon": {},
				"titles": [],
				"dataProvider": [
					{
						"date": "2014-03-01",
						"column-1": 8,
						"column-2": 5
					},
					{
						"date": "2014-03-02",
						"column-1": 6,
						"column-2": 7
					},
					{
						"date": "2014-03-03",
						"column-1": 2,
						"column-2": 3
					},
					{
						"date": "2014-03-04",
						"column-1": 1,
						"column-2": 3
					},
					{
						"date": "2014-03-05",
						"column-1": 2,
						"column-2": 1
					},
					{
						"date": "2014-03-06",
						"column-1": 3,
						"column-2": 2
					},
					{
						"date": "2014-03-07",
						"column-1": 6,
						"column-2": 8
					}
				]
			}
		);
	};

$scope.load = $scope.piechart;

$scope.close = function () {
    $uibModalInstance.close();
  };

}]);
