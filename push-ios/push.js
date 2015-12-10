var apn = require('apn');
var isProd = false;
var project = 'conecta/enterprise';
var options = {
	 'cert': './certs/'+ project + '/' + (isProd ? 'prod' : 'dev') + '/cert.pem',
	 'key': './certs/'+ project + '/' + (isProd ? 'prod' : 'dev') + '/key.pem',
	 'passphrase': 'push',
	 'production': isProd
};
var apnConnection = new apn.Connection(options);

var token = 'edd84dea166716a87d9980b5c79f16fc54cf5df35dfab25aa01c48c76239c54e';
var myDevice = new apn.Device(token);

var note = new apn.Notification();

note.expiry = ~~(+new Date()/1000) + 24*3600;
note.badge = 6;
note.sound = "default";
note.alert = {
	title: "Title",
	body: "You have a new message!!"
};
note.payload = {
	msgId: 654321,
	pageId: 0
};
note.contentAvailable = true;

apnConnection.pushNotification(note, myDevice);

apnConnection.on('error', function(data){
 console.log('error', data);
});

apnConnection.on('transmissionError', function(data){
 console.log('transmissionError', data);
});

apnConnection.on('socketError', function(data){
 console.log('socketError', data);
});

apnConnection.on('transmitted', function(data){
 console.log('transmitted', data);
});

apnConnection.on('completed', function(){
 console.log('completed');
 apnConnection.shutdown();
});