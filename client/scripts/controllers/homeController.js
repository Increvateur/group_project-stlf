/**
 * Created by JFCS on 4/22/16.
 */
myApp.controller("HomeController", ["$scope", '$filter',"MockService",
    function($scope,$filter,MockService) {

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









        //getAccounts : getAccounts,
        //    getCampaigns : getCampaigns,
        //    getContacts : getContacts,
        //    getDonactions :getDonations,
        //    getHouseholds : getHouseholds,
        //    accounts : Accounts,
        //    contacts : Contacts,
        //    donations : Donations,
        //    campaigns: Campaigns,
        //    households: Households



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
