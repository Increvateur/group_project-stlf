/**
 * Created by JFCS on 4/24/16.
 */
myApp.factory("MockService", ["$http", function($http) {


    var Accounts = {};
    var Campaigns = {};
    var Contacts= {};
    var Donations = {};
    var Households = {};

    var getAccounts = function() {
        return $http.get("mockData/accounts").then(function(response) {
            Accounts.object = response.data;
            console.log("accounts in factory get",Accounts.object);
        });
    };
    var getContacts = function() {
        return $http.get("mockData/contacts").then(function(response) {
            Contacts.object = response.data;
            console.log("contacts in factory get",Contacts.object);

        });
    };
    var getCampaigns = function() {
        return $http.get("mockData/campaigns").then(function(response) {
            Campaigns.object = response.data;
            console.log('campaigns in factory get',Campaigns.object);

        });
    };
    var getDonations = function() {
        return $http.get("mockData/donations").then(function(response) {
            Donations.object = response.data;
            console.log('donations in factory get ', Donations.object);

        });
    };
    var getHouseholds = function() {
        return $http.get("mockData/households").then(function(response) {
            Households.object = response.data;
            console.log('households in factory get',Households.object);

        });
    };



    return {

        getAccounts : getAccounts,
        getCampaigns : getCampaigns,
        getContacts : getContacts,
        getDonations :getDonations,
        getHouseholds : getHouseholds,
        accounts : Accounts,
        contacts : Contacts,
        donations : Donations,
        campaigns: Campaigns,
        households: Households


    };

}]);
