var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send(generateFakeCountry());
});

app.get('/test', function(req, res) {
	res.send("Hello RES - test is working\n");
});

app.listen(3000, function() {
	console.log("Accepting HTTP requests on port 3000");
});


function generateFakeCountry() {
	var numberOfCountries = chance.integer({ min: 0, max: 10 });
	console.log("number of countries = " + numberOfCountries);
	
	var countries = [];
	
	for(var i = 0; i < numberOfCountries; i++) {
		var country     = chance.country({ full: true });
		var capitalCity = chance.city();
		var currency    = chance.currency();
		var population  = chance.integer({ min: 1, max: 7000000000 });
		
		countries.push({
			country:     country,
			capitalCity: capitalCity,
			currency:    currency,
			population:  population
		});
	};
	
	console.log("countries: ");
	console.log(countries);
	return countries;
}