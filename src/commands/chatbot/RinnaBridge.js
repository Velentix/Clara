/* Bridge for Rinna using Twitter
*
*
* Contributed by Capuccino
*/

const Twitter = require('twitter');
const RinnaBridge = new Twitter({
	consumer_key: '',
	consumer_secret: '',
	access_token_key: '',
	access_token_secret: ''
});

class RinnaClient {
	constructor () {
		this.message = message;
		this.response =response;
	}
	
	sendMessage(message) {
		
	}
	
	getResponse (response) {
		
	}
}