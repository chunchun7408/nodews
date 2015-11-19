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
return userArr;

var login = function(username, password) {
	for (var i in userArr) {
		if ( userArr[i].username == username ) {
			if ( userArr[i].password == password ) {
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

exports.login = login;