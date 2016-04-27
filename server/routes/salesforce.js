var express = require("express");
var router = express.Router();
var path = require("path");
var jsforce  = require('jsforce');
var dotenv = require('dotenv').config();
var username = process.env.username;
var password = process.env.password;


//  TODO

router.get("/pull", function (req, res) {

    console.log("In pull on the serve, and req.params=", req.query.instanceUrl, req.query.accessToken);
  var conn = new jsforce.Connection({
      instanceUrl : req.query.instanceUrl,
      accessToken : req.query.accessToken
  });

  console.log("Connected?");

  // everything query, pulls all relevant data, this is currently set for Staff.

  // var query = "SELECT AccountId, Account.Name, RecordType.Name, Amount, CloseDate, Campaign.Name,";
  // query += " Donation_SubCategory__c, FiscalYear,";
  // query += " Account.npe01__One2OneContact__r.npo02__Household__r.Id, StageName FROM ";
  // query += "Opportunity WHERE StageName ='Posted'  AND Donation_SubCategory__c = 'Staff' limit 100";



// this query should show all the donations for a given fiscal year broken down by donation category, by fiscal year, for table 1.
  // var query = "SELECT Donation_SubCategory__c, SUM(Amount) FROM  Opportunity WHERE StageName = 'Posted' AND Amount != null AND FiscalYear = 2014   GROUP BY Donation_SubCategory__c ";



// this works for first time doners
 //var query = "SELECT  COUNT(Id) FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' GROUP BY AccountId HAVING MIN(CloseDate) >= 2013-09-01 AND MIN(CloseDate) <= 2014-08-31";

 // First Time: First donated this fiscal year
 // Current Retained: Donated this fiscal year and either of the past two fiscal years
 // L2YBNTY: Did not donate this fiscal year but donated in either of the past two fiscal year
 // Recovered: Donated this fiscal year and more than two fiscal years previous
 // Lost: Last donation before the past two fiscal years
 // Total Universe: Sum of all of the above, or all donors in our history


 // query for gift range THIS WORKS
 // var query = "SELECT  COUNT(Id), SUM(AMount) FROM Opportunity GROUP BY AccountId HAVING (SUM(Amount) >= 400 AND SUM(Amount) < 1000)  ";

 var query = "SELECT  COUNT(Id), SUM(AMount) FROM Opportunity WHERE (CloseDate > 2014-09-01 AND CloseDate < 2015-08-31) GROUP BY AccountId HAVING (SUM(Amount) >= 400 AND SUM(Amount) < 1000)  ";




  conn.query(query, function(err, result) {
      if (err) { return console.error(err); }
      console.log("total : " + result.totalSize);
      console.log("fetched : " + result.records.length);
      res.status(200).send(result);

    });



});



router.get("/force", function (req, res) {
  var conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
    // loginUrl : 'https://test.salesforce.com'
  });

  var username = process.env.username;
  var password = process.env.password;

  console.log(" in index username = ", username);
  conn.login(username, password, function(err, userInfo) {
    if (err) { return console.error(err); }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
    console.log("acces token", conn.accessToken);
    console.log("conn insrtance url",conn.instanceUrl);
    // logged in user property
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);

    // ...
    var creds = {};
    creds.accessToken = conn.accessToken;
    creds.instanceUrl = conn.instanceUrl;
    creds.userInfoId = userInfo.id;
    creds.userInfoOrganizationId = userInfo.organizationId;

    res.status(200).send(creds);

    // var query = 'SELECT id, name FROM account LIMIT 10';
    //
    //
    // conn.query(query, function(err, result) {
    //     console.log("total : " + result.totalSize);
    //     console.log("fetched : " + result.records.length);
    //     res.status(200).send(result);
    //
    //   });






    // res.send('JSForce Connect Successed!', creds);
  });

});







// copied in for Villains TODO remove Movie code above




module.exports = router;
