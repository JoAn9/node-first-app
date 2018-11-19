const path = require('path');

const pathObj = path.parse(__filename);

// console.log(pathObj);

const os = require('os');

// console.log(os.totalmem());
// console.log(os.freemem());

const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

const files = fs.readdir('./', function(err, files) {
	if (err) console.log('Error', err);
	else console.log('Result', files);
});
console.log(files);
