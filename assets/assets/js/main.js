"use strict";
let apiKey= "db6e8ce4-0891-43da-8978-9811a4cabd07";
let url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    qString = "?CMC_PRO_API_KEY=" + apiKey + "&start=1&limit=5&convert=USD";

fetch(url + Qstring)
     .then(function(resp){
	 console.log(resp);
     });