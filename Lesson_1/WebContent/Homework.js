'use strict'

let admin;
let name = 'John';
admin = name;
console.log(admin);


let login = 'Admin';
let password = 'TheMaster';

if (login != 'Admin'){
	console.log('I dont know you');
	console.log('Canceled');
}else if(login == 'Admin'){
	if(password != 'TheMaster'){
		console.log('Wrong password');
		console.log('Canceled');
	}else if(password == 'TheMaster'){
		console.log('Welcome!');
	};
}