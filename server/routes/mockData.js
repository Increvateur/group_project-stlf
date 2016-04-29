/**
 * Created by JFCS on 4/24/16.
 */
var express = require("express");
var router = express.Router();
var accounts = require("../mockData/accounts.json");
var campaigns = require("../mockData/campaigns.json");
var contacts = require("../mockData/contacts.json");
var donations = require("../mockData/donations.json");
var households = require("../mockData/households.json");




router.get("/accounts", function(req,res,next){
    res.send(accounts);
});

router.get("/campaigns", function(req,res,next){
    res.send(campaigns);
});

router.get("/contacts", function(req,res,next){
    res.send(contacts);
});

router.get("/donations", function(req,res,next){
    res.send(donations);
});

router.get("/households", function(req,res,next){
    res.send(households);
});

module.exports = router;