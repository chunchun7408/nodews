var resData = {
	code: 0,
	msg: '',
	data: {}
}

var set = function (code, data, msg) {
	resData.code = code || resData.code;
	resData.data = data || resData.data;
	resData.msg = msg || resData.msg;
}

var response = function (conn) {
	return resData;
	conn.sendText(JSON.stringify(resData));
}

module.exports.set = set;
module.exports.response = response;
module.exports.codeObj = {
	success: 200,
	error: 0,
	notlogin: -200
}