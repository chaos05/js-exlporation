// var $ = require('jQuery');

var userProto = {
	name: '',
	email: '',
	alias: '',
	showInSearch: true,
	colorScheme: 'light'
};

function createUser(options) {
	return $.extend({}, userProto, options);
}

var newUser = createUser({
	name: 'Eric',
	alias: 'The Dome',
	showInSearch: false
});

// console.log("User name: " + newUser.name);


var obj = {
	value: 2
};

function setValue(obj, val) {
	var instance = $.extend({}, obj);
	instance.value = val;

	return instance;
}

var objB = setValue(obj, 3);

