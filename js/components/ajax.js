function ajax(httpMethod, url) {
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

	return true;
}

export { ajax };
