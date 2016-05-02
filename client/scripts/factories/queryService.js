myApp.factory("QueryService", ["$http", function($http) {

    var data = {};
    var forceresponse  = {};
    var forceData = {};
    var arrResults = [];
    var arrSql = [];
    var sqlIndex = 0;


    // TODO for each strSql, make an object, with label: label, and soql: strSql

    //end date
    // for ytd, fiscal year start date until end date for fiscal year end date is in, plus 2 previous.
    // full fiscal years for the 2 fiscal years PRIOR to the fiscal year end date is in.
    // ytd - fiscal year start to end date of fiscal year containing end date
    // ytd-1
    // ytd-2
    // fy-1
    // fy-2

    // fiscal year is 1 sep to aug 31
    // current fiscal year start is 1 sep before end date, and aug 31 after end date
    // ytd is 1 sep before end date until end date
    // ytd is 1 sep before end date -1 year
    var strSql = "";


    var selEndDate = new Date("12-31-2015");

    var ytdStart = new Date();
    var ytdEnd = new Date();
    var ytdM1Start = new Date();
    var ytdM1End = new Date();
    var ytdM2Start = new Date();
    var ytdM2End = new Date();
    var ytdM3Start = new Date();
    var ytdM3End = new Date();
    var ytdM4Start = new Date();
    var ytdM4End = new Date();
    var fyM1Start = new Date();
    var fyM1End = new Date();
    var fyM2Start = new Date();
    var fyM2End = new Date();
    var fyM3Start = new Date();
    var fyM3End = new Date();
    var fyM4Start = new Date();
    var fyM4End = new Date();


    ytdEnd = new Date(selEndDate);


    // ytd start - figure out fiscal year start previous to this date
    ytdStart =  new Date("09/01/" + selEndDate.getFullYear());



    if (ytdStart > ytdEnd){
        ytdStart = new Date("09/01/" + (selEndDate.getFullYear()-1));
    }



    ytdM1Start = new Date(ytdStart);
    ytdM1Start.add({"years":-1});

    ytdM2Start = new Date(ytdStart);
    ytdM2Start.add({"years":-2});

    ytdM3Start = new Date(ytdStart);
    ytdM3Start.add({"years":-3});

    ytdM4Start = new Date(ytdStart);
    ytdM4Start.add({"years":-4});


    ytdM1End = new Date(ytdEnd);
    ytdM1End.add({"years":-1});

    ytdM2End = new Date(ytdEnd);
    ytdM2End.add({"years":-2});

    ytdM3End = new Date(ytdEnd);
    ytdM3End.add({"years":-3});

    ytdM4End = new Date(ytdEnd);
    ytdM4End.add({"years":-4});





    //fiscal year start and end, first full fiscal year before end date

    fyM1End = new Date("08/31/" + selEndDate.getFullYear());

    if (fyM1End > selEndDate){
        fyM1End = new Date("08/31/" + (selEndDate.getFullYear()-1));

    }
    // one year PRIOR
    fyM2End = new Date(fyM1End);
    fyM2End.add({"years":-1});
    fyM3End = new Date(fyM1End);
    fyM3End.add({"years":-2});
    fyM4End = new Date(fyM1End);
    fyM4End.add({"years":-3});

    fyM1Start = new Date(ytdM1Start);
    fyM2Start = new Date(ytdM2Start);
    fyM3Start = new Date(ytdM3Start);
    fyM4Start = new Date(ytdM4Start);

    selEndDate = selEndDate.toFormat("YYYY-MM-DD");
    ytdStart = ytdStart.toFormat("YYYY-MM-DD");
    ytdEnd = ytdEnd.toFormat("YYYY-MM-DD");
    ytdM1Start = ytdM1Start.toFormat("YYYY-MM-DD");
    ytdM1End = ytdM1End.toFormat("YYYY-MM-DD");
    ytdM2Start = ytdM2Start.toFormat("YYYY-MM-DD");
    ytdM2End = ytdM2End.toFormat("YYYY-MM-DD");

    ytdM3Start = ytdM3Start.toFormat("YYYY-MM-DD");
    ytdM3End = ytdM3End.toFormat("YYYY-MM-DD");

    ytdM4Start = ytdM4Start.toFormat("YYYY-MM-DD");
    ytdM4End = ytdM4End.toFormat("YYYY-MM-DD");

    fyM1Start = fyM1Start.toFormat("YYYY-MM-DD");
    fyM1End = fyM1End.toFormat("YYYY-MM-DD");
    fyM2Start = fyM2Start.toFormat("YYYY-MM-DD");
    fyM2End = fyM2End.toFormat("YYYY-MM-DD");
    fyM3Start = fyM3Start.toFormat("YYYY-MM-DD");
    fyM3End = fyM3End.toFormat("YYYY-MM-DD");
    fyM4Start = fyM4Start.toFormat("YYYY-MM-DD");
    fyM4End = fyM4End.toFormat("YYYY-MM-DD");





    console.log("selEndDate", selEndDate);

    console.log("ytdStart", ytdStart);
    console.log("ytdEnd", ytdEnd);
    console.log("ytdM1Start", ytdM1Start);
    console.log("ytdM1End", ytdM1End);
    console.log("ytdM2Start", ytdM2Start);
    console.log("ytdM2End", ytdM2End);
    console.log("ytdM3Start", ytdM3Start);
    console.log("ytdM3End", ytdM3End);
    console.log("ytdM4Start", ytdM4Start);
    console.log("ytdM4End", ytdM4End);



    console.log("fyM1Start", fyM1Start);
    console.log("fyM1End", fyM1End);
    console.log("fyM2Start", fyM2Start);
    console.log("fyM2End", fyM2End);
    console.log("fyM3Start", fyM3Start);
    console.log("fyM3End", fyM3End);
    console.log("fyM4Start", fyM4Start);
    console.log("fyM4End", fyM4End);




    var myKey = "";

    // new query first with new dates
    myKey = "a1";
    strSql = "SELECT Donation_SubCategory__c, SUM(Amount) FROM  Opportunity WHERE StageName = 'Posted' AND Amount != null AND CloseDate >= " + ytdStart + " AND CloseDate <=" + ytdEnd + "  GROUP BY Donation_SubCategory__c ";

    sqlObj = {key: myKey, query:"money raised YTD START AND END RATE this is NEW SPARTA", sql: strSql};

    arrSql.push(sqlObj);


    // new query first with new dates PREV YEAR
    myKey = "a2";
    strSql = "SELECT Donation_SubCategory__c, SUM(Amount) FROM  Opportunity WHERE StageName = 'Posted' AND Amount != null AND CloseDate >= " + ytdM1Start + " AND CloseDate <=" + ytdM1End + "  GROUP BY Donation_SubCategory__c ";

    sqlObj = {key: myKey, query:"year -1 money raised YTD START AND END RATE this is NEW SPARTA", sql: strSql};

    arrSql.push(sqlObj);

    // new query first with new dates PREV YEAR 2 back
    myKey = "a3";
    strSql = "SELECT Donation_SubCategory__c, SUM(Amount) FROM  Opportunity WHERE StageName = 'Posted' AND Amount != null AND CloseDate >= " + ytdM2Start + " AND CloseDate <=" + ytdM2End + "  GROUP BY Donation_SubCategory__c ";

    sqlObj = {key: myKey, query:"year -2 money raised YTD START AND END RATE this is NEW SPARTA", sql: strSql};

    arrSql.push(sqlObj);

    // new query first with new dates First Fiscal YEar before select date
    myKey = "a4";
    strSql = "SELECT Donation_SubCategory__c, SUM(Amount) FROM  Opportunity WHERE StageName = 'Posted' AND Amount != null AND CloseDate >= " + fyM1Start + " AND CloseDate <=" + fyM1End + "  GROUP BY Donation_SubCategory__c ";

    sqlObj = {key: myKey, query:"First Fiscal YEar before select date", sql: strSql};

    arrSql.push(sqlObj);

    // second fiscal year before select date
    myKey = "a5";
    strSql = "SELECT Donation_SubCategory__c, SUM(Amount) FROM  Opportunity WHERE StageName = 'Posted' AND Amount != null AND CloseDate >= " + fyM2Start + " AND CloseDate <=" + fyM2End + "  GROUP BY Donation_SubCategory__c ";

    sqlObj = {key: myKey, query:"SECOND Fiscal YEar before select date", sql: strSql};

    arrSql.push(sqlObj);

    // TODO Now I need to get the TOTALS

    // total for ytd selected
    myKey = "b1";
    strSql = "SELECT  SUM(Amount) FROM  Opportunity WHERE StageName = 'Posted' AND Amount != null AND CloseDate >= " + ytdStart + " AND CloseDate <=" + ytdEnd ;

    sqlObj = {key: myKey, query:"TOTAL amount for ytd selected", sql: strSql};

    arrSql.push(sqlObj);

    // total for ytd selected -1
    myKey = "b2";
    strSql = "SELECT  SUM(Amount) FROM  Opportunity WHERE StageName = 'Posted' AND Amount != null AND CloseDate >= " + ytdM1Start + " AND CloseDate <=" + ytdM1End ;

    sqlObj = {key: myKey, query:"TOTAL amount for ytd selected -1", sql: strSql};

    arrSql.push(sqlObj);

    // total for ytd selected -2
    myKey = "b3";
    strSql = "SELECT  SUM(Amount) FROM  Opportunity WHERE StageName = 'Posted' AND Amount != null AND CloseDate >= " + ytdM2Start + " AND CloseDate <=" + ytdM2End ;

    sqlObj = {key: myKey, query:"TOTAL amount for ytd selected -2", sql: strSql};

    arrSql.push(sqlObj);

    // total for FY before selected
    myKey = "b4";
    strSql = "SELECT  SUM(Amount) FROM  Opportunity WHERE StageName = 'Posted' AND Amount != null AND CloseDate >= " + fyM1Start + " AND CloseDate <=" + fyM1End ;

    sqlObj = {key: myKey, query:"TOTAL amount for First full fiscal year before selected", sql: strSql};

    arrSql.push(sqlObj);

    // total for second FY before selected
    myKey = "b5";
    strSql = "SELECT  SUM(Amount) FROM  Opportunity WHERE StageName = 'Posted' AND Amount != null AND CloseDate >= " + fyM2Start + " AND CloseDate <=" + fyM2End ;

    sqlObj = {key: myKey, query:"TOTAL amount for Second full fiscal year before selected", sql: strSql};

    arrSql.push(sqlObj);













    // first time donors ytd
    myKey = "c1";
    strSql = "SELECT  COUNT(Id) FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' GROUP BY AccountId HAVING MIN(CloseDate) >= " + ytdStart + " AND MIN(CloseDate) <= " + ytdEnd ;

    sqlObj = {key: myKey, query:"first time donors  YTD SELECTED", sql: strSql};

    arrSql.push(sqlObj);

    // first time donors ytd-1
    myKey = "c2";
    strSql = "SELECT  COUNT(Id) FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' GROUP BY AccountId HAVING MIN(CloseDate) >= " + ytdM1Start + " AND MIN(CloseDate) <= " + ytdM1End ;

    sqlObj = {key: myKey, query:"first time donors  YTD SELECTED -1", sql: strSql};

    arrSql.push(sqlObj);

    // first time donors ytd-2
    myKey = "c3";
    strSql = "SELECT  COUNT(Id) FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' GROUP BY AccountId HAVING MIN(CloseDate) >= " + ytdM2Start + " AND MIN(CloseDate) <= " + ytdM2End ;

    sqlObj = {key: myKey, query:"first time donors  YTD SELECTED -2", sql: strSql};

    arrSql.push(sqlObj);

    // first time donors first fy
    myKey = "c4";
    strSql = "SELECT  COUNT(Id) FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' GROUP BY AccountId HAVING MIN(CloseDate) >= " + fyM1Start + " AND MIN(CloseDate) <= " + fyM1End ;

    sqlObj = {key: myKey, query:"first time donors  First FY before selected", sql: strSql};

    arrSql.push(sqlObj);

    // first time donors second fy
    myKey = "c5";
    strSql = "SELECT  COUNT(Id) FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' GROUP BY AccountId HAVING MIN(CloseDate) >= " + fyM2Start + " AND MIN(CloseDate) <= " + fyM2End ;

    sqlObj = {key: myKey, query:"first time donors  Second FY before selected", sql: strSql};

    arrSql.push(sqlObj);

    // everything query, pulls all relevant data, this is currently set for Staff.

 // var query = "SELECT AccountId, Account.Name, RecordType.Name, Amount, CloseDate, Campaign.Name,";
 // query += " Donation_SubCategory__c, FiscalYear,";
 // query += " Account.npe01__One2OneContact__r.npo02__Household__r.Id, StageName FROM ";
 // query += "Opportunity WHERE StageName ='Posted'  AND Donation_SubCategory__c = 'Staff' limit 100";

 // SELECT ID,
 //       (SELECT StageName, Effective_Date__c, Expiration_Date__c
 //        FROM Opportunities
 //        WHERE StageName='Closed Won' AND Effective_Date__c < TODAY AND Expiration_Date__c > TODAY)
 // FROM Account where Id In (Select AccountId From Opportunity WHERE StageName='Closed Won' AND Effective_Date__c < TODAY AND Expiration_Date__c > TODAY)
 // And Id In (Select AccountId From Opportunity Where StageName = 'Closed AND Expiration_Date__c < TODAY AND Expiration_Date__c > LAST_365_DAYS)




    // TODO current retained donors. They donated this fiscal year and either of the previous two.

    // strSql = "SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate >= 2015-09-01 AND CloseDate <= 2015-12-31 ";
    // strSql += "AND ((CloseDate >= 2014-09-01 AND CloseDate <= 2015-08-31) OR (CloseDate >= 2013-09-01 AND CloseDate <= 2014-08-31)) GROUP BY AccountId";
    //
    //
    // sqlObj = {query:"*** working on Current retained donors", sql: strSql};
    //
    // arrSql.push(sqlObj);



    // donor amounts
    // strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE (CloseDate > 2014-09-01 AND CloseDate < 2015-08-31) GROUP BY AccountId HAVING (SUM(Amount) >= 400 AND SUM(Amount) < 1000)  ";


    // base selected YTD
    myKey = "m1";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate >=" + ytdStart + " AND CloseDate < =" + ytdEnd + " GROUP BY AccountId HAVING ( SUM(Amount) <= 95 )  ";


    sqlObj = {key: myKey, query:"BASE donors Selected YTD", sql: strSql};

    arrSql.push(sqlObj);

    // base selected YTD -1
    myKey = "m2";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate >= " + ytdM1Start + " AND CloseDate < =" + ytdM1End + " GROUP BY AccountId HAVING ( SUM(Amount) <= 95  )  ";


    sqlObj = {key: myKey, query:"BASE donors Selected YTD -1", sql: strSql};

    arrSql.push(sqlObj);

    // base selected YTD -2
    myKey = "m3";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + ytdM2Start + " AND CloseDate < =" + ytdM2End + " GROUP BY AccountId HAVING ( SUM(Amount) <= 95 )  ";


    sqlObj = {key: myKey, query:"BASE donors Selected YTD -2", sql: strSql};

    arrSql.push(sqlObj);

    // base selected FY -1
    myKey = "m4";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + fyM1Start + " AND CloseDate < =" + fyM1End + " GROUP BY AccountId HAVING ( SUM(Amount) <= 95 )  ";


    sqlObj = {key: myKey, query:"BASE donors first FY before selected", sql: strSql};

    arrSql.push(sqlObj);

    // base selected FY -2
    myKey = "m5";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + fyM2Start + " AND CloseDate < =" + fyM2End + " GROUP BY AccountId HAVING ( SUM(Amount) <= 95 )  ";


    sqlObj = {key: myKey, query:"BASE donors SECOND FY before selected", sql: strSql};

    arrSql.push(sqlObj);

    // intermediate

    // intermediate selected YTD
    myKey = "n1";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + ytdStart + " AND CloseDate < =" + ytdEnd + " GROUP BY AccountId HAVING ( SUM(Amount) < 400 AND SUM(Amount) > 95 )  ";

    // strSql = "SELECT  COUNT(Id), SUM(Amount), Account.Name FROM Opportunity WHERE CloseDate >= " + ytdStart + " AND CloseDate < =" + ytdEnd + " GROUP BY Account.Name HAVING ( SUM(Amount) < 400 AND SUM(Amount) >= 95 )  ORDER BY Account.Name ";


    sqlObj = {key: myKey, query:"INTERMEDIATE donors Selected YTD", sql: strSql};

    arrSql.push(sqlObj);

    // intermediate selected YTD -1
    myKey = "n2";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + ytdM1Start + " AND CloseDate < =" + ytdM1End + " GROUP BY AccountId HAVING ( SUM(Amount) < 400 AND SUM(Amount) > 95 )  ";


    sqlObj = {key: myKey, query:"INTERMEDIATE donors Selected YTD -1", sql: strSql};

    arrSql.push(sqlObj);

    // intermediate selected YTD -2
    myKey = "n3";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + ytdM2Start + " AND CloseDate < =" + ytdM2End + " GROUP BY AccountId HAVING ( SUM(Amount) < 400 AND SUM(Amount) > 95 )  ";


    sqlObj = {key: myKey, query:"INTERMEDIATE donors Selected YTD -2", sql: strSql};

    arrSql.push(sqlObj);

    // intermediate selected FY -1
    myKey = "n4";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + fyM1Start + " AND CloseDate < =" + fyM1End + " GROUP BY AccountId HAVING ( SUM(Amount) < 400 AND SUM(Amount) > 95 ) ";


    sqlObj = {key: myKey, query:"INTERMEDIATE donors first FY before selected", sql: strSql};

    arrSql.push(sqlObj);

    // intermediate selected FY -2
    myKey = "n5";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + fyM2Start + " AND CloseDate < =" + fyM2End + " GROUP BY AccountId HAVING ( SUM(Amount) < 400 AND SUM(Amount) > 95 )  ";


    sqlObj = {key: myKey, query:"INTERMEDIATE donors SECOND FY before selected", sql: strSql};

    arrSql.push(sqlObj);

    // large >= 400 < 1000

    // large selected YTD
    myKey = "o1";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + ytdStart + " AND CloseDate < =" + ytdEnd + " GROUP BY AccountId HAVING ( SUM(Amount) < 1000 AND SUM(Amount) >= 400 )  ";

    // strSql = "SELECT  COUNT(Id), SUM(Amount), Account.Name FROM Opportunity WHERE CloseDate >= " + ytdStart + " AND CloseDate < =" + ytdEnd + " GROUP BY Account.Name HAVING ( SUM(Amount) < 400 AND SUM(Amount) >= 95 )  ORDER BY Account.Name ";


    sqlObj = {key: myKey, query:"LARGE donors Selected YTD", sql: strSql};

    arrSql.push(sqlObj);

    // large selected YTD -1
    myKey = "o2";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + ytdM1Start + " AND CloseDate < =" + ytdM1End + " GROUP BY AccountId HAVING ( SUM(Amount) < 1000 AND SUM(Amount) >= 400 )  ";


    sqlObj = {key: myKey, query:"LARGE donors Selected YTD -1", sql: strSql};

    arrSql.push(sqlObj);

    // large selected YTD -2
    myKey = "o3";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + ytdM2Start + " AND CloseDate < =" + ytdM2End + " GROUP BY AccountId HAVING ( SUM(Amount) < 1000 AND SUM(Amount) >= 400 )  ";


    sqlObj = {key: myKey, query:"LARGE donors Selected YTD -2", sql: strSql};

    arrSql.push(sqlObj);

    // large selected FY -1
    myKey = "o4";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + fyM1Start + " AND CloseDate < =" + fyM1End + " GROUP BY AccountId HAVING ( SUM(Amount) < 1000 AND SUM(Amount) >= 400 ) ";


    sqlObj = {key: myKey, query:"LARGE donors first FY before selected", sql: strSql};

    arrSql.push(sqlObj);

    // large selected FY -2
    myKey = "o5";
    strSql = "SELECT   COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + fyM2Start + " AND CloseDate < =" + fyM2End + " GROUP BY AccountId HAVING ( SUM(Amount) < 1000 AND SUM(Amount) >= 400 )  ";


    sqlObj = {key: myKey, query:"LARGE donors SECOND FY before selected", sql: strSql};

    arrSql.push(sqlObj);

    // major > 1000

    // major selected YTD
    myKey = "p1";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + ytdStart + " AND CloseDate < =" + ytdEnd + " GROUP BY AccountId HAVING (  SUM(Amount) >= 1000 )  ";

    // strSql = "SELECT  COUNT(Id), SUM(Amount), Account.Name FROM Opportunity WHERE CloseDate >= " + ytdStart + " AND CloseDate < =" + ytdEnd + " GROUP BY Account.Name HAVING ( SUM(Amount) < 400 AND SUM(Amount) >= 95 )  ORDER BY Account.Name ";


    sqlObj = {key: myKey, query:"MAJOR donors Selected YTD", sql: strSql};

    arrSql.push(sqlObj);

    // major selected YTD -1
    myKey = "p2";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + ytdM1Start + " AND CloseDate < =" + ytdM1End + " GROUP BY AccountId HAVING (  SUM(Amount) >= 1000 )  ";


    sqlObj = {key: myKey, query:"MAJOR donors Selected YTD -1", sql: strSql};

    arrSql.push(sqlObj);

    // major selected YTD -2
    myKey = "p3";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + ytdM2Start + " AND CloseDate < =" + ytdM2End + " GROUP BY AccountId HAVING (  SUM(Amount) >= 1000 )  ";


    sqlObj = {key: myKey, query:"MAJOR donors Selected YTD -2", sql: strSql};

    arrSql.push(sqlObj);

    // major selected FY -1
    myKey = "p4";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + fyM1Start + " AND CloseDate < =" + fyM1End + " GROUP BY AccountId HAVING (  SUM(Amount) >= 1000 )  ";


    sqlObj = {key: myKey, query:"MAJOR donors first FY before selected", sql: strSql};

    arrSql.push(sqlObj);

    // major selected FY -2
    myKey = "p5";
    strSql = "SELECT   COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + fyM2Start + " AND CloseDate < =" + fyM2End + " GROUP BY AccountId HAVING (  SUM(Amount) >= 1000 )  ";


    sqlObj = {key: myKey, query:"MAJOR donors SECOND FY before selected", sql: strSql};

    arrSql.push(sqlObj);

    // total > 0

    // total selected YTD
    myKey = "q1";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + ytdStart + " AND CloseDate < =" + ytdEnd + " GROUP BY AccountId HAVING (  SUM(Amount) >= 0 )  ";

    // strSql = "SELECT  COUNT(Id), SUM(Amount), Account.Name FROM Opportunity WHERE CloseDate >= " + ytdStart + " AND CloseDate < =" + ytdEnd + " GROUP BY Account.Name HAVING ( SUM(Amount) < 400 AND SUM(Amount) >= 95 )  ORDER BY Account.Name ";


    sqlObj = {key: myKey, query:"TOTAL donors Selected YTD", sql: strSql};

    arrSql.push(sqlObj);

    // total selected YTD -1
    myKey = "q2";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + ytdM1Start + " AND CloseDate < =" + ytdM1End + " GROUP BY AccountId HAVING (  SUM(Amount) >= 0 )  ";


    sqlObj = {key: myKey, query:"TOTAL donors Selected YTD -1", sql: strSql};

    arrSql.push(sqlObj);

    // total selected YTD -2
    myKey = "q3";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + ytdM2Start + " AND CloseDate < =" + ytdM2End + " GROUP BY AccountId HAVING (  SUM(Amount) >= 0 )  ";


    sqlObj = {key: myKey, query:"TOTAL donors Selected YTD -2", sql: strSql};

    arrSql.push(sqlObj);

    // total selected FY -1
    myKey = "q4";
    strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + fyM1Start + " AND CloseDate < =" + fyM1End + " GROUP BY AccountId HAVING (  SUM(Amount) >= 0 )  ";


    sqlObj = {key: myKey, query:"TOTAL donors first FY before selected", sql: strSql};

    arrSql.push(sqlObj);

    // total selected FY -2
    myKey = "q5";
    strSql = "SELECT   COUNT(Id), SUM(Amount) FROM Opportunity WHERE  StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND  CloseDate >= " + fyM2Start + " AND CloseDate < =" + fyM2End + " GROUP BY AccountId HAVING (  SUM(Amount) >= 0 )  ";


    sqlObj = {key: myKey, query:"TOTAL donors SECOND FY before selected", sql: strSql};

    arrSql.push(sqlObj);

    // CURRENT RETAINED DONORS REFERENCE


    //REFERENCE
    // base selected YTD
    // myKey = "r1";
    // strSql = "SELECT  COUNT(Id), SUM(Amount) FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate >= " + ytdStart + " AND CloseDate < =" + ytdEnd + " GROUP BY AccountId HAVING ( SUM(Amount) < 95 )  ";
    //
    //
    // sqlObj = {key: myKey, query:"BASE donors Selected YTD", sql: strSql};
    //
    // arrSql.push(sqlObj);

    //------
    //TODO OOOOHHHH!!!!
    // SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Contact WHERE LastName LIKE 'apple%') AND Id IN (SELECT AccountId FROM Opportunity WHERE isClosed = false )


    // current retained YTD
    // donated ytd and FYm1

    myKey = "d1a";

    strSql = "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdStart + " AND CloseDate < " + ytdEnd +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM1Start + " AND CloseDate < " + ytdM1End +") ";

    sqlObj = {key: myKey, query:"donated ytd and ytdm1", sql: strSql};

    arrSql.push(sqlObj);

    // donated ytd and FYm1

    myKey = "d1b";

    strSql = "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdStart + " AND CloseDate < " + ytdEnd +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM2Start + " AND CloseDate < " + ytdM2End +") ";

    sqlObj = {key: myKey, query:"donated ytd and ytdm2", sql: strSql};

    arrSql.push(sqlObj);

    // current retained YTD Minus 1
    // donated ytd m1 and m2

    myKey = "d2a";

    strSql = "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM1Start + " AND CloseDate < " + ytdM1End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM2Start + " AND CloseDate < " + ytdM2End +") ";

    sqlObj = {key: myKey, query:"donated ytdm1 and ytdm2", sql: strSql};

    arrSql.push(sqlObj);

    // donated ytd m2 and m3

    myKey = "d2b";

    strSql = "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM1Start + " AND CloseDate < " + ytdM1End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM3Start + " AND CloseDate < " + ytdM3End +") ";

    sqlObj = {key: myKey, query:"donated y2dm1 and ytdm3", sql: strSql};

    arrSql.push(sqlObj);

    // current retained YTD Minus 2
    // donated ytd m3 and m3

    myKey = "d3a";

    strSql = "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM2Start + " AND CloseDate < " + ytdM2End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM3Start + " AND CloseDate < " + ytdM3End +") ";

    sqlObj = {key: myKey, query:"donated y2dm2 and ytdm3", sql: strSql};

    arrSql.push(sqlObj);

    // donated ytd m2 and m4

    myKey = "d3b";

    strSql = "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM2Start + " AND CloseDate < " + ytdM2End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM4Start + " AND CloseDate < " + ytdM4End +") ";

    sqlObj = {key: myKey, query:"donated y2dm2 and ytdm4", sql: strSql};

    arrSql.push(sqlObj);

    // current retained FYm1
    // donated fym1 and fym2

    myKey = "d4a";

    strSql = "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM1Start + " AND CloseDate < " + fyM1End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM2Start + " AND CloseDate < " + fyM2End +") ";

    sqlObj = {key: myKey, query:"donated fym1 and fym2", sql: strSql};

    arrSql.push(sqlObj);

    // donated fym1 and fym3

    myKey = "d4b";

    strSql = "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM1Start + " AND CloseDate < " + fyM1End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM3Start + " AND CloseDate < " + fyM3End +") ";

    sqlObj = {key: myKey, query:"donated fym1 and fym3", sql: strSql};

    arrSql.push(sqlObj);

    // current retained FYm1
    // donated fym1 and fym2

    myKey = "d5a";

    strSql = "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM2Start + " AND CloseDate < " + fyM2End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM3Start + " AND CloseDate < " + fyM3End +") ";

    sqlObj = {key: myKey, query:"donated fym2 and fym3", sql: strSql};

    arrSql.push(sqlObj);

    // donated fym1 and fym3

    myKey = "d5b";

    strSql = "SELECT Id, Name FROM Account WHERE Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM2Start + " AND CloseDate < " + fyM2End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM4Start + " AND CloseDate < " + fyM4End +") ";

    sqlObj = {key: myKey, query:"donated fym2 and fym4", sql: strSql};

    arrSql.push(sqlObj);

    //-----------
    // l2ybnty YTD
    // NOT donated ytd and FYm1

    myKey = "e1a";

    strSql = "SELECT Id, Name FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdStart + " AND CloseDate < " + ytdEnd +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM1Start + " AND CloseDate < " + ytdM1End +") ";

    sqlObj = {key: myKey, query:"NOT donated ytd and ytdm1", sql: strSql};

    arrSql.push(sqlObj);

    // NOT donated ytd and FYm1

    myKey = "e1b";

    strSql = "SELECT Id, Name FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdStart + " AND CloseDate < " + ytdEnd +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM2Start + " AND CloseDate < " + ytdM2End +") ";

    sqlObj = {key: myKey, query:"NOT donated ytd and ytdm2", sql: strSql};

    arrSql.push(sqlObj);

    ///--------

    // ltybnty  YTD Minus 1
    // not donated ytd m1 and m2

    myKey = "e2a";

    strSql = "SELECT Id, Name FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM1Start + " AND CloseDate < " + ytdM1End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM2Start + " AND CloseDate < " + ytdM2End +") ";

    sqlObj = {key: myKey, query:"NOT donated ytdm1 and ytdm2", sql: strSql};

    arrSql.push(sqlObj);

    // donated ytd m2 and m3

    myKey = "e2b";

    strSql = "SELECT Id, Name FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM1Start + " AND CloseDate < " + ytdM1End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM3Start + " AND CloseDate < " + ytdM3End +") ";

    sqlObj = {key: myKey, query:"NOT donated y2dm1 and ytdm3", sql: strSql};

    arrSql.push(sqlObj);

    // ltybnty YTD Minus 2
    // donated ytd m3 and m3

    myKey = "e3a";

    strSql = "SELECT Id, Name FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM2Start + " AND CloseDate < " + ytdM2End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM3Start + " AND CloseDate < " + ytdM3End +") ";

    sqlObj = {key: myKey, query:"NOT donated y2dm2 and ytdm3", sql: strSql};

    arrSql.push(sqlObj);

    // donated ytd m2 and m4

    myKey = "e3b";

    strSql = "SELECT Id, Name FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM2Start + " AND CloseDate < " + ytdM2End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + ytdM4Start + " AND CloseDate < " + ytdM4End +") ";

    sqlObj = {key: myKey, query:"NOT donated y2dm2 and ytdm4", sql: strSql};

    arrSql.push(sqlObj);

    // ltybnty FYm1
    // donated fym1 and fym2

    myKey = "e4a";

    strSql = "SELECT Id, Name FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM1Start + " AND CloseDate < " + fyM1End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM2Start + " AND CloseDate < " + fyM2End +") ";

    sqlObj = {key: myKey, query:"NOT donated fym1 and fym2", sql: strSql};

    arrSql.push(sqlObj);

    // donated fym1 and fym3

    myKey = "e4b";

    strSql = "SELECT Id, Name FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM1Start + " AND CloseDate < " + fyM1End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM3Start + " AND CloseDate < " + fyM3End +") ";

    sqlObj = {key: myKey, query:"NOT donated fym1 and fym3", sql: strSql};

    arrSql.push(sqlObj);

    // ltybnty FYm1
    // donated fym1 and fym2

    myKey = "e5a";

    strSql = "SELECT Id, Name FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM2Start + " AND CloseDate < " + fyM2End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM3Start + " AND CloseDate < " + fyM3End +") ";

    sqlObj = {key: myKey, query:"NOT donated fym2 and fym3", sql: strSql};

    arrSql.push(sqlObj);

    // donated fym1 and fym3

    myKey = "e5b";

    strSql = "SELECT Id, Name FROM Account WHERE Id NOT IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM2Start + " AND CloseDate < " + fyM2End +")";

    strSql += "AND  Id IN (SELECT AccountId FROM Opportunity WHERE StageName = 'Posted' AND RecordTypeID = '012800000002KPtAAM' AND CloseDate > " + fyM4Start + " AND CloseDate < " + fyM4End +") ";

    sqlObj = {key: myKey, query:"NOT donated fym2 and fym4", sql: strSql};

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

        console.log("in fetch force, forceResult=", forceResult);
        if(forceResult){
            // we got a result. Push it into arrResults, increment counter, call the next
            // sql statement in the queue.
            // if counter less than sql array length, push it up, else done.

            // arrResults.push(forceResult.data.records);
            arrResults.push(forceResult.data);

            sqlIndex = arrResults.length;
            console.log("sql index", sqlIndex);


            if (arrResults.length == arrSql.length){
                // we are done
                console.log("Hey! In fetchForce in queryService, I think we are done!");
                forceData.arrResults = arrResults;
                parseResults();
                return;
            }
            // do a call where the index of the sql array = the length of the arrResults array
            // if forceResult.length < arrSql then all again else return
        }

        console.log("getting ready to get in fetch. sqlIndex=", sqlIndex, "arrSql[sqlIndex]=", arrSql[sqlIndex].sql);
        $http.get("/salesforce/fetch", {
            params: {
                accessToken: forceresponse.accessToken,
                instanceUrl: forceresponse.instanceUrl,
                key: arrSql[sqlIndex].key,
                strSql: arrSql[sqlIndex].sql,
                queryInfo: arrSql[sqlIndex].query
             }
        }).then(function(response){
            // console.log("Hey I got something", response.data.records);
            // forceData.response  = response.data.records;
            fetchForce(response);
        });
    };

    var parseResults = function(){

        //base
        var totalBaseSelYTD = totalResults("m1");
        var totalBaseSelYTDm1 = totalResults("m2");
        var totalBaseSelYTDm2 = totalResults("m3");
        var totalBaseFYm1 = totalResults("m4");
        var totalBaseFYm2 = totalResults("m5");

        console.log("totalBaseSelYTD =", totalBaseSelYTD);
        console.log("totalBaseSelYTDm1 =", totalBaseSelYTDm1);
        console.log("totalBaseSelYTDm2 =", totalBaseSelYTDm2);
        console.log("totalBaseFYm1 =", totalBaseFYm1);
        console.log("totalBaseFYm2 =", totalBaseFYm2);

        // intermediate

        var totalInterSelYTD = totalResults("n1");
        var totalInterSelYTDm1 = totalResults("n2");
        var totalInterSelYTDm2 = totalResults("n3");
        var totalInterFYm1 = totalResults("n4");
        var totalInterFYm2 = totalResults("n5");

        console.log("totalInterSelYTD =", totalInterSelYTD);
        console.log("totalInterSelYTDm1 =", totalInterSelYTDm1);
        console.log("totalInterSelYTDm2 =", totalInterSelYTDm2);
        console.log("totalInterFYm1 =", totalInterFYm1);
        console.log("totalInterFYm2 =", totalInterFYm2);

        // large

        var totalLargeSelYTD = totalResults("o1");
        var totalLargeSelYTDm1 = totalResults("o2");
        var totalLargeSelYTDm2 = totalResults("o3");
        var totalLargeFYm1 = totalResults("o4");
        var totalLargeFYm2 = totalResults("o5");

        console.log("totalLargeSelYTD =", totalLargeSelYTD);
        console.log("totalLargeSelYTDm1 =", totalLargeSelYTDm1);
        console.log("totalLargeSelYTDm2 =", totalLargeSelYTDm2);
        console.log("totalLargeFYm1 =", totalLargeFYm1);
        console.log("totalLargeFYm2 =", totalLargeFYm2);

        // major

        var totalMajorSelYTD = totalResults("p1");
        var totalMajorSelYTDm1 = totalResults("p2");
        var totalMajorSelYTDm2 = totalResults("p3");
        var totalMajorFYm1 = totalResults("p4");
        var totalMajorFYm2 = totalResults("p5");

        console.log("totalMajorSelYTD =", totalMajorSelYTD);
        console.log("totalMajorSelYTDm1 =", totalMajorSelYTDm1);
        console.log("totalMajorSelYTDm2 =", totalMajorSelYTDm2);
        console.log("totalMajorFYm1 =", totalMajorFYm1);
        console.log("totalMajorFYm2 =", totalMajorFYm2);
        //
        // total
        var totalAllSelYTD = totalResults("q1");
        var totalAllSelYTDm1 = totalResults("q2");
        var totalAllSelYTDm2 = totalResults("q3");
        var totalAllFYm1 = totalResults("q4");
        var totalAllFYm2 = totalResults("q5");


        console.log("totalAllSelYTD =", totalAllSelYTD);
        console.log("totalAllSelYTDm1 =", totalAllSelYTDm1);
        console.log("totalAllSelYTDm2 =", totalAllSelYTDm2);
        console.log("totalAllFYm1 =", totalAllFYm1);
        console.log("totalAllFYm2 =", totalAllFYm2);

        var crdSelYTD = countInEither("d1a","d1b");
        var crdSelYTDm1 = countInEither("d2a","d2b");
        var crdSelYTDm2 = countInEither("d3a","d3b");
        var crdFym1 = countInEither("d4a","d4b");
        var crdFym2 = countInEither("d5a","d5b");

        console.log("crdSelYTD", crdSelYTD);
        console.log("crdSelYTDm1", crdSelYTDm1);
        console.log("crdSelYTDm1", crdSelYTDm2);
        console.log("crdFym1", crdFym1);
        console.log("crdFym2", crdFym2);

        var l2ybntyYTD = countInEither("e1a","e1b");
        var l2ybntyYTDM1 = countInEither("e2a","e2b");
        var l2ybntyYTDM2 = countInEither("e3a","e3b");
        var l2ybntyFym1 = countInEither("e4a","e4b");
        var l2ybntyFym2 = countInEither("e5a","e5b");


        console.log("l2ybntyYTD", l2ybntyYTD);
        console.log("l2ybntyYTDM1", l2ybntyYTDM1);
        console.log("l2ybntyYTDM2", l2ybntyYTDM2);
        console.log("l2ybntyFym1", l2ybntyFym1);
        console.log("l2ybntyFym2", l2ybntyFym2);









    };

    var totalResults = function(myKey){

        // loop through results and do manual calculations

        for(var i=0; i<arrResults.length; i++){
            if (arrResults[i].myKey == myKey){
                // total results
                // console.log("HEY THERE! ");
                var mySet = arrResults[i].result.records;
                var myCash = 0;
                // console.log("myset length", mySet.length);
                for (x=0; x<mySet.length; x++)
                {
                    // console.log("myset ", x, mySet[x]);
                    myCash = myCash + mySet[x].expr1;
                }
                // console.log("myCash = ", myCash);
                return myCash;

            }
        }


    };

    var countInEither = function(key1, key2){

        var arrComp = [];
        var mySet = {};

        // loop through results and do manual calculations

        for(var i=0; i<arrResults.length; i++){
            if (arrResults[i].myKey == key1){
                // total results
                // console.log("HEY THERE! ");
                mySet = arrResults[i].result.records;

                // console.log("myset length", mySet.length);
                for (x=0; x<mySet.length; x++)
                {
                    // console.log("myset ", x, mySet[x]);
                    arrComp.push(mySet[x].Id);
                }


            }
        }
        for(i=0; i<arrResults.length; i++){
            if (arrResults[i].myKey == key2){
                // total results
                // console.log("HEY THERE! ");
                mySet = arrResults[i].result.records;

                // console.log("myset length", mySet.length);
                for (x=0; x<mySet.length; x++)
                {
                    // console.log("myset ", x, mySet[x]);
                    arrComp.push(mySet[x].Id);
                }


            }
        }
        // got both loaded in new array

        var o = {},  l = arrComp.length, r = [];
        for(i=0; i<l;i+=1) o[arrComp[i]] = arrComp[i];
        for(i in o) r.push(o[i]);
        // console.log("count",r.length);
        return r.length;


        // console.log("Hoping for a total of records unique to these two arrays", counts);


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
