var resData;

var response = function (conn) {
	conn.sendText(JSON.stringify(resData));
}

var setSuccess = function (conn, data) {
	resData = {};
	resData.code = 200;
	resData.data = data || {};
	response(conn);
}

var setError = function (conn, code, msg) {
	resData = {};
	resData.code = 0;
	resData.msg = msg || resData.msg;
	response(conn);
}

module.exports.setSuccess = setSuccess;
module.exports.setError = setError;
// module.exports.response = response;
module.exports.codeObj = {
	error: 0,
	notlogin: -200
}