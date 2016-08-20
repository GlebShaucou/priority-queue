const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');

const h = new MaxHeap();
window.h = h;

h.push(42, 15);
console.log(h.root);
h.detachRoot();
console.log(h.root);
