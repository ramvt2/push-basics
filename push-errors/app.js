// node app.js > result.txt

var async = require('async');
var fs = require('fs');
var Converter = require("csvtojson").Converter;

var pid = 9;

var fsRead = fs.createReadStream('./Android_NotRegistered_'+pid+'.csv');
var converter = new Converter({constructResult:true});

var resp = {};
var jobs = [];

var i = 0;
converter.on('record_parsed', function(row){
	jobs.push(processRow(row));
});
converter.on('end_parsed', function(){
	async.parallel(jobs, function(){
		console.log(Object.keys(resp));
	});
});
fsRead.pipe(converter);

function processRow(row) {
	return function process(done) {
		var msg = row.message;
		var arr = msg.split(', ');
		var udid = 'PID:'+pid+':HSET:UDID:'+arr[1].split(':')[1];
		resp[udid] = true;
		done();
	};
}