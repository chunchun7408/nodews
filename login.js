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
		if ( userArr[i].username == params.username ) {
			if ( userArr[i].password == params.password ) {
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