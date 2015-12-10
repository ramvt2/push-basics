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
        msgId: 123456,
        smallIcon: 'small_icon',
        iconColor: '#09ff5d' || '',
        sound: 'default',
        pageId: 0
    }
});

var regIds = ['e_1s19fa51Q:APA91bG_j8_b8Sa0dXbggkLkZb35aMRbXodmS6Q-vY89meOOKbk2kA5dnMi-4kprLP8kow_WWf59SzqyPWuGJT60FktU0AshPjQij2cozkMqlqN0ME1cAy6cSfijZo8K1O6d5e-a1EYa'];

var sender = new gcm.Sender(serverKey);

sender.sendNoRetry(message, regIds, function (e, data) {
    console.log('err', JSON.stringify(err));
    console.log('data', JSON.stringify(data));
});