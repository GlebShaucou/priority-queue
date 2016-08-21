const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');

const h = new MaxHeap();
window.h = h;

h.push(42, 15);
h.push(14, 32);
h.push(0, 0);
var detached = h.detachRoot();
console.log(detached);
h.restoreRootFromLastInsertedNode(detached);
console.log(h.parentNodes);
