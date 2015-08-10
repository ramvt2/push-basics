var apn = require('apn');
var isProd = false;
var project = 'conecta/enterprise';
//var project = 'boom/store';
//var project = 'push_test';
var feedbackOptions = {
	'batchFeedback': true,
	'interval': 60,
	'cert': './certs/'+ project + '/' + (isProd ? 'prod' : 'dev') + '/cert.pem',
	'key': './certs/'+ project + '/' + (isProd ? 'prod' : 'dev') + '/key.pem',
	'passphrase': 'push',
	'production': false
};

var feedback = new apn.Feedback(feedbackOptions);
feedback.on("feedback", function(devices) {
	console.log('devices', devices);
	devices.forEach(function(item) {
		console.log('item', item);
	});
});