var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great!</h1>", function(error) {
	if(error) {
		return console.log(error);
	} else {
		return console.log("Congrats");
	}
});
var myPhotoLocation = 'https://i.pinimg.com/originals/a6/7f/28/a67f28a42d42b08fc95e7e3bd786180f.jpg';
https.get(myPhotoLocation, function(response){
	response.pipe(fs.createWriteStream(__dirname + "/mystar.jpg"));
});