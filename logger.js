const url = 'http://myurl.io.log';

function log(message) {
	//Send an http request
	console.log(message);
}

module.exports.log = log;
