var gcm = require('node-gcm');

var FABLife = 'AIzaSyD3TF8eBjT5XtXUZNeJgFJDPc2IIlpTJ94';
var Conecta = 'AIzaSyDl2ljeiVBwBg85BkBFLhZ3551v-HRXjCQ';
var Uninovelas = 'AIzaSyA2TY3bxG5oiFIq2qhBVgMZNmQoQeEkQNc';

var message = new gcm.Message({
    timeToLive: 24*3600,
    data: {
        title: 'msg.title',
        subtitle: 'msg.text',
        msgId: 77,
        smallIcon: 'small_icon',
        sound: 'default',
        pageId: 55
    }
});

var regIds = ['APA91bF5kaGRQEX8VXJPTVkdUkXwrlKdUJUhz9zb7XukN7zfb7QarOlUKQb91QI0o9gACbmmy9z0Bnod4gL4yi9gcGb8Pj4KJP19HNUaB-VHMcMDSKL9HjBz4QZCCxoUhvE9-JTRKZro'];

var sender = new gcm.Sender(Conecta);

sender.send(message, regIds, function (err, result) {
    if(err) console.error(err);
    else    console.log(result);
});
