const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');

const h = new MaxHeap();
window.h = h;

h.push(42, 15);
			h.push(15, 14);
			h.push(0, 16);
			h.push(100, 100);
      console.log(h);

console.log(h.pop());
console.log(h.pop());
console.log(h.pop());
console.log(h.pop());
