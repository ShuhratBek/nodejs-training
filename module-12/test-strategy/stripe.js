var Billing = require("./../processes/billing");
var billing = new Billing({stripeKey : "z5AkFOxXhZ1N7VBHHQnBpnPwS7WftE5e"});
var fs = require("fs");

billing.createSubscription({
  email : "test3@test.com",
  name : "John Doe",
  plan : "commander",
  card : {
    number : "4000000000000002",
    exp_month : 10,
    exp_year : 2019,
    name : "John Doe"
  }
}, function(err,res){
  console.log(err);
});
