var projects = require("../projects.json")
/*
 * GET home page.
 */

exports.view = function(req, res){
  // Here you should implement your random landing page rendering functionality

  if (Math.floor((Math.random() * 10) + 1) % 2 == 0)
  	res.render("index", projects);
  else
  	res.render("index_alternate", projects);
};