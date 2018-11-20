const EventEmitter = require('events');

const url = 'http://myurl.io/log';

class Logger extends EventEmitter {
	log(message) {
		console.log(message);
		this.emit('messageLogged', { id: 1, url: 'http://' });
	}
}

// module.exports.log = log;
module.exports = Logger;
