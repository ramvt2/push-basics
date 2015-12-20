var gcm = require('node-gcm');
var serverKey = 'AIzaSyD9X8UYJVWyAggeRAtwegqpEuknCpPOqMQ';

/*
Fusion:
ServerKey: AIzaSyD9X8UYJVWyAggeRAtwegqpEuknCpPOqMQ
ClientID (APP): 896724701541

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

var regIds = [
    'dKyPWI3kFs8:APA91bHef9Sn4ERRQGIU7SnNaTfDH0Ym2mpQYsWvnFJkTvkAnd51w1DYuu3PAByDHbQqV3uxU-9zM9wlzWDhj5o0TjJPeWxRNGnTw2NWsbembx_nJ-xKmeaeOg4ukhrp6vcak7XcysIO',
    'dBbsew1zgW8:APA91bEHwlL46LpTSrlycpLrN9yKRKMyMRuc7TvpXyr9bimskzEJqANgr8L02BkFE5GQ_S7K9sCKp3sntzyexNeGtezDY5AKwjxtP_hzYXjq0D70v-FCVRkKmknZ8yZJwq5_q5aCwur9'
];

var sender = new gcm.Sender(serverKey);

sender.sendNoRetry(message, regIds, function (err, data) {
    console.log('err', JSON.stringify(err));
    console.log('data', JSON.stringify(data));
});