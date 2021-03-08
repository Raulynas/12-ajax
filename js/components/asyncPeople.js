async function asyncPeople(httpMethod, url, dataToSend) {
	// laukiam kol suvaiksios uzklausa
	let response;

	if (httpMethod === 'GET') {
		response = await fetch(url);
	}

	if (httpMethod === 'POST') {
		response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'appliction/json; charset=utf-8',
			},
			body: JSON.stringify(dataToSend),
		});
	}

	// laukiam kol is uzklausos perskaitys info pries formatuojant i json
	const data = await response.json();

	let HTML = '';
	for (const person of data) {
		HTML += `<div class="person">
            <div class="name">${person.name}</div>
            <div class="age">${person.age}</div>
        </div>`;
	}
	document.querySelector('body').innerHTML = HTML;
	return true;
}
export { asyncPeople };
