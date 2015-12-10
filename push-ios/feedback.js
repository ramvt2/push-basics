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
	'production': isProd
};

var feedback = new apn.Feedback(feedbackOptions);

feedback.on('error', function(d){
	console.log('error', d);
});
feedback.on('feedbackError', function(d){
	console.log('feedbackError', d);
});
feedback.on('feedback', function(feedbackItems) {
	console.log('feedbackItems.length', feedbackItems.length);

	feedbackItems.forEach(function(feedbackItem) {
		console.log('Device: ' + feedbackItem.device.toString('hex') + ' has been unreachable, since: ' + feedbackItem.time);
	});
});