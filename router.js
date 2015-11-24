var controller = require('./login');

var router = function (conn, data) {
	var controller_str = data.class;
	if ( ! controller_str ) {
		console.log('error controller');
		return false;
	};

	var method_str = data.method || "index";
	var controller = require('./' + data.class);
	if ( controller[method_str] ) {
		return controller[method_str](conn, data.params);
	};
}

exports.router = router;