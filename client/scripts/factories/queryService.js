myApp.factory("QueryService", ["$http", function($http) {

    var data = {};
    var forceresponse  = {};
    var forceData = {};
    var arrResults = [];
    var arrSql = [];


    // TODO for each strSql, make an object, with label: label, and soql: strSql
    var strSql = "";

    strSql = "SELECT Donation_SubCategory__c, SUM(Amount) FROM  Opportunity WHERE StageName = 'Posted' AND Amount != null AND FiscalYear = 2014   GROUP BY Donation_SubCategory__c ";

    sqlObj = {query:"money raised YTD current year", sql: strSql};

    arrSql.push(sqlObj);

    strSql = "SELECT  COUNT(Id) FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' GROUP BY AccountId HAVING MIN(CloseDate) >= 2013-09-01 AND MIN(CloseDate) <= 2014-08-31";

    sqlObj = {query:"first time donors  current year", sql: strSql};

    arrSql.push(sqlObj);

    // strSql = "SELECT  COUNT(Id), SUM(AMount) FROM Opportunity WHERE (CloseDate > 2014-09-01 AND CloseDate < 2015-08-31) GROUP BY AccountId HAVING (SUM(Amount) >= 400 AND SUM(Amount) < 1000)  ";

    strSql = "SELECT  COUNT(Id), SUM(AMount) FROM Opportunity WHERE (CloseDate > 2014-09-01 AND CloseDate < 2015-08-31) GROUP BY AccountId HAVING ( SUM(Amount) < 95)  ";


    sqlObj = {query:"base donors current year", sql: strSql};

    arrSql.push(sqlObj);



    var getSalesforce = function(data){

        if (!forceresponse.accessToken){
            console.log("I want to do a check in getSalesforce to see if I need to auth. ", forceresponse.accessToken);
            $http.get("/salesforce/force").then(function(response){
                // console.log("get force", response.data);
                forceresponse.response = response.data;
                forceresponse.accessToken = response.data.accessToken;
                forceresponse.instanceUrl = response.data.instanceUrl;
                // pullData();
                fetchForce();

            });



        }else {
            console.log("DID NOT reauthroize");
            // pullData();
            fetchForce();
        }


    };

    var pullData = function(){


        console.log("in pull, stored instanceUrl=",forceresponse.instanceUrl);


        $http.get("/salesforce/pull", {
            params: { accessToken: forceresponse.accessToken, instanceUrl: forceresponse.instanceUrl  }
        }).then(function(response){
            console.log("Hey I got something", response.data.records);
            forceData.response  = response.data.records;
            fetchForce();
        });

    };

    var fetchForce = function(forceResult){

        var sqlIndex = 0;

        console.log("in fetch force, forceResult=", forceResult);
        if(forceResult){
            // we got a result. Push it into arrResults, increment counter, call the next
            // sql statement in the queue.
            // if counter less than sql array length, push it up, else done.
            var objRow = {

                result: forceResult,
                
                // query: arrSql[sqlIndex].query
            };

            arrResults.push(objRow);
            sqlIndex = arrResults.length;
            console.log("sql index", sqlIndex);
            arrResults[sqlIndex].query = arrSql[sqlIndex].query;


            if (arrResults.length == arrSql.length){
                // we are done
                console.log("Hey! In fetchForce in queryService, I think we are done!");
                forceData.arrResults = arrResults;
                viewData();
                // return;
            }


            // do a call where the index of the sql array = the length of the arrResults array
            // if forceResult.length < arrSql then all again else return

        }

        // console.log("in queryService.js funciton fetchForce, sqlIndex =", sqlIndex);
        // console.log("in queryService.js funciton fetchForce, query  =", arrSql[sqlIndex].query);

        console.log("getting ready to get in fetch. sqlIndex=", sqlIndex, "arrSql[sqlIndex]=", arrSql[sqlIndex].sql);
        $http.get("/salesforce/fetch", {
            params: {
                accessToken: forceresponse.accessToken,
                instanceUrl: forceresponse.instanceUrl,
                strSql: arrSql[sqlIndex].sql
             }
        }).then(function(response){
            // console.log("Hey I got something", response.data.records);
            // forceData.response  = response.data.records;
            fetchForce(response);
        });



    };

    var viewData = function(){

        // loop through arrResults
        // see what it is
        for(var i=0; i<arrResults.length; i++){
            console.log("ViewData! arrResults=", arrResults[i]);
        }


    };



    return{

        getSalesforce : getSalesforce,

        data : data,
        forceData : forceData,
        forceresponse : forceresponse,
        arrResults : arrResults,
        fetchForce : fetchForce
    };

}]);
