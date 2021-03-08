function asyncData(httpMethod, url, callback) {
	fetch(url)
		.then(response => response.json())
		.then(data => callback(data));
}
export { asyncData };
