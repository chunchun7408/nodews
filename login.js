var userArr = [
	{
		username: 'dtsx',
		password: 'dtsx'
	},
	{
		username: 'dthyc',
		password: 'dthyc'
	}
]

var index = function(params) {
	for (var i in userArr) {
		if ( userArr[i].username == params.accountName ) {
			if ( userArr[i].password == params.pwd ) {
				console.log('login success');
				return true;
			}
			else {
				// password error
			}
		}
		else {
			// username not found
		}
	}
	return false;
}

exports.index = index;