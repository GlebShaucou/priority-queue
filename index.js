const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');
const Queue = require('../src/queue');

const q = new Queue();
window.q = q;

q.push(0, 1);
console.log(q);
