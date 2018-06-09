$(function() {
	console.log("Loading fake countries");
	
	function loadFakeCountries() {
		$.getJSON("/api/countries/", function(countries) {
			console.log(countries);
			var message = "No country";
			var country = "";
			var capitalCity = "";
			var population = "";
			
			if(countries.length > 0) {
				country = countries[0].country;
				capitalCity = countries[0].capitalCity;
				population = countries[0].population;
				message = "Country: " + country + "\nCapital: " + capitalCity + "\nPopulation: " + population;
			}
			
			$(".intro-text").text(message);
		});
	};
	
	loadFakeCountries();
	setInterval(loadFakeCountries, 2000);
});