function people(data) {
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

export { people };
