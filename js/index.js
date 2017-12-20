"use strict";
console.log("Strating Function");

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient({
	region : "us-east-2"
});

exports.handler = function(e, ctx, callback) {

	let scanningParameters = {
		TableName : 'logdata',
		Limit : 100
	};
	docClient.scan(scanningParameters, function(err, data) {
		if (err) {
			callback(err, null);
		} else {
			callback(null, data);
		}
	});
};