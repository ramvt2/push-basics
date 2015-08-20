var apn = require('apn');
var isProd = true;
var project = 'fablife/enterprise';
var options = {
	 'cert': './certs/'+ project + '/' + (isProd ? 'prod' : 'dev') + '/cert.pem',
	 'key': './certs/'+ project + '/' + (isProd ? 'prod' : 'dev') + '/key.pem',
	 'passphrase': 'push',
	 'production': isProd
};
var apnConnection = new apn.Connection(options);

var token = 'a7fed2e95fdc11570cccbac4a46c29f4bd28ef93779ca7e49044628698727632';
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

apnConnection.on('transmissionError', function(data){
 console.log('transmissionError', data);
});

apnConnection.on('transmitted', function(data){
 console.log('transmitted', data);
});

apnConnection.on('completed', function(){
 console.log('completed');
 apnConnection.shutdown();
});