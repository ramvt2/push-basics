var apn = require('apn');
var isProd = true;
var project = 'conecta/enterprise';
var options = {
	 'cert': './certs/'+ project + '/' + (isProd ? 'prod' : 'dev') + '/cert.pem',
	 'key': './certs/'+ project + '/' + (isProd ? 'prod' : 'dev') + '/key.pem',
	 'passphrase': 'push',
	 'production': isProd
};
var apnConnection = new apn.Connection(options);

var token = '9df37608c0854888597685437c5f005c9484e784960780c35c2d061f78bfab92';
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
	msgId: 9,
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