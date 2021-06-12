const EventEmitter = require('events');

// Create Class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event Listner
myEmitter.on('event', () => console.log('Event Fired...'));

// Init Event
myEmitter.emit('event');
