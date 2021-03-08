function ajax(httpMethod, url, callback) {
	const allowMethods = [
		'GET', // gauti informacija
		'POST', //sukurti
		'PUT', // atnaujinti
		'DELETE', // istrinti
	];

	if (!allowMethods.includes(httpMethod)) {
		console.warn('Netinkamas uzklausos metodas');
		return false;
	}

	if (typeof url !== 'string' || url === '') {
		console.warn('Netinkama nuoroda');
		return false;
	}

	const xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			try {
				const parseData = JSON.parse(xhttp.responseText);
				callback(parseData);
			} catch (error) {
				console.error('Gautas nevalidus JSON is serverio', error);
			}
		}
	};
	xhttp.open(httpMethod, url, true); // if true, user can keep searching while downloading
	xhttp.send();

	return true;
}

export { ajax };
