var result = require('./result');

var userArr = [
	{
		username: 'dtsx',
		password: 'dtsx',
		nickname: '阿星',
		avatar: 'https://avatars1.githubusercontent.com/u/11454843'
	},
	{
		username: 'dthyc',
		password: 'dthyc',
		nickname: '阿春',
		avatar: 'https://avatars0.githubusercontent.com/u/5555239'
	}
]

var index = function(conn, params) {
	result.setCmdId(params._cmdId);
	for (var i in userArr) {
		if ( userArr[i].username == params.accountName ) {
			if ( userArr[i].password == params.pwd ) {
				result.setSuccess(conn, {nickname: userArr[i].nickname, avatar: userArr[i].avatar});
				console.log('login success');
				return true;
			}
			else {
				result.setError(conn, '密码错误！');
				console.log('密码错误！');
				return false;
			}
			break;
		}
	}
		
	result.setError(conn, '用户不存在！');
	console.log('用户不存在！');
	return false;
}

exports.index = index;