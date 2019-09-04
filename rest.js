const nodeRestClient = require('node-rest-client').Client;
// for server to call the RESTful API
const restClient = new nodeRestClient();
// Python Flask server listen on port 5000 by default
EXECUTOR_SERVER_URL = 'http://localhost:5000/build_and_run';
// reigster a method
restClient.registerMethod('build_and_run', EXECUTOR_SERVER_URL,
'POST');
// jsonParser: middleware, used to parse the body of the POST request
router.post('build_and_run', jsonParser, (req, res) => {
	const code = req.body.code;
	const lang = req.body.lang;
	console.log('lang: ', lang, 'code: ', code);
	restClient.methods.build_and_run(
	{
		data: {code: code, lang: lang},
		headers: {'Content-Type': 'application/json'}
 	},
 	(data, response) => {
		// response: raw data, data: parsed response
		const text = `Build output: ${data['build']}, execute output:
		${data['run']}`;
		res.json(text);
	})
})