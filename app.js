var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.set("view engine", "ejs");

/*------R O U T E S---------*/

app.get("/", function(req, res){
	var url = "http://pokeapi.co/api/v2/generation/";
	request(url, function(err, resp, body){
		if(!err && resp.statusCode == 200){
			var data = JSON.parse(body);
			res.render("generations", {data: data});
		}
	});
});

app.get("/list", function(req, res){
	res.send("list page!");
});

app.get("/info", function(req, res){
	res.send("info page!");
});

app.listen("3000", function(){
	console.log("PokemonAPI-NodeJS at port 3000");
});


/*------F U N C T I O N S---------*/

function search(source, name) {
	//source has to be an array
    var results;
    name = name.toLowerCase();
    results = source.filter(function(entry) {
        return entry.name.toLowerCase().indexOf(name) !== -1;
    });
    return results;
}