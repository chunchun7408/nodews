var factory = function (conn, data) {
	switch(data.method) {
		case "login":
			var login = require('./login');
			login.login(data.data.username, data.data.password);
			break;
		default:
			break;
	}
}

exports.factory = factory;