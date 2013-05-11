httpsqs-nodejs
==============

NodeJS wrapper for httpsqs

## Install

```
npm install httpsqs
```

## How to use

```js
//require httpsqs module
var httpsqs = require('httpsqs');
//create httpsqs queue instance, queue name needed!
var queue = new httpsqs({name: 'test'});
//push to queue
queue.push('test', function(result) {
	console.log(result);
});
//read from queue
queue.shift(function(result) {
	console.log(result);
});
//view queue status, return json when success or false
queue.status(function(result) {
	console.log(result);
});

queue.push('test', function(result) {
	console.log(result);
});
// view queue data using provided position
queue.view(2, function(result) {
	console.log(result);
});
// reset queue
queue.reset(function(result) {
	console.log(result);
});
//set queue length
queue.maxQueue(1000, function(result) {
	console.log(result);
}); 
```
