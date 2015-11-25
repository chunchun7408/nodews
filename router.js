var fs = require('fs');
var result = require('./result');

var router = function (conn, data) {
	var controller_str = data.cmdId;
	if ( ! controller_str ) {
		console.log('error controller');
		return false;
	};

	var method_str = data.method || "index";

	fs.exists('./'+controller_str+'.js', function(exists) {
	    if (exists) {
	    	var controller = require('./' + controller_str);
	    	// 兼容现有客户端格式
			if ( ! data.params ) {
				data.params = {};
				for (var i in data) {
					if ( i == 'cmdId' || i == 'method' ) {
						data.params["_" + i] = data[i];
						continue;
					}
					data.params[i] = data[i];
				}
			};
			return controller[method_str](conn, data.params);
	    }
	    else {
	    	result.setCmdId(controller_str);
	    	result.setError(conn, '未识别的命令');
				console.log('module not found');
	    }
	});
}

exports.router = router;