function load() {
	fetch("https://omdb-api.now.sh/?s=star%20wars")
		.then(response => console.log(response))
}