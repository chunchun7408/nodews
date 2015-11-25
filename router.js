var router = function (conn, data) {
	var controller_str = data.cmdId;
	if ( ! controller_str ) {
		console.log('error controller');
		return false;
	};

	var method_str = data.method || "index";
	var controller = require('./' + data.class);
	if ( controller[method_str] ) {
		// 兼容现有客户端格式
		if ( ! data.params ) {
			for (var i in data) {
				if ( i == 'cmdId' || i == 'method' ) {
					continue;
				}
				data.params[i] = data[i];
			}
		};
		return controller[method_str](conn, data.params);
	};
}

exports.router = router;