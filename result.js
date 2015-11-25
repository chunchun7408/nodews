var resData;
var cmdId = "";

var response = function (conn) {
	conn.sendText(JSON.stringify(resData));
}

var setCmdId = function (id) {
	cmdId = id;
}

var setSuccess = function (conn, data) {
	resData = {};
	resData.code = 200;
	resData.data = data || {};
	resData.cmdId = cmdId;
	response(conn);
}

var setError = function (conn, msg, code) {
	resData = {};
	resData.code = code || 0;
	resData.msg = msg || "";
	resData.cmdId = cmdId;
	response(conn);
}

module.exports.setSuccess = setSuccess;
module.exports.setError = setError;
// module.exports.response = response;
module.exports.codeObj = {
	error: 0,
	notlogin: -200
}