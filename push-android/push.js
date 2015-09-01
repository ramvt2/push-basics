var gcm = require('node-gcm');
var serverKey = 'AIzaSyD3TF8eBjT5XtXUZNeJgFJDPc2IIlpTJ94';

/*
FABLife: 
ServerKey: AIzaSyD3TF8eBjT5XtXUZNeJgFJDPc2IIlpTJ94
ClientID (APP): 690234740055

Conecta:
ServerKey: AIzaSyDl2ljeiVBwBg85BkBFLhZ3551v-HRXjCQ
ClientID (APP): 208976847098

Uninovelas:
ServerKey: AIzaSyA2TY3bxG5oiFIq2qhBVgMZNmQoQeEkQNc
ClientID: 504826086468

Boom:
ServerKey: AIzaSyBlBrwWxaYwEg7JrL2cTGIITkfk9nODnIM
*/

var message = new gcm.Message({
    timeToLive: 24*3600,
    data: {
        title: 'msg.title',
        subtitle: 'msg.text',
        msgId: 69,
        smallIcon: 'small_icon',
        iconColor: '#09ff5d' || '',
        sound: 'default',
        pageId: 55
    }
});

var regIds = ['cj01rDTono4:APA91bEtFVgYjkdFqiDy3c6elu4lnHzDCfnx7vD6ixq6Wl8pZ7q9QJmC-_vWHqAnprnCGVuc6jvHBZ0xbXzHgy3zTtoUmm0wyR4ILdh34_jYWUm0M8hzvJ_1LQURhL9VSf1eEk6niLq1'];

var sender = new gcm.Sender(serverKey);

sender.send(message, regIds, function (err, result) {
    if(err) console.error(err);
    else    console.log(result);
});