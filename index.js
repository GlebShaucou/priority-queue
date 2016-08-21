const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');

const h = new MaxHeap();
window.h = h;

h.push(0, 0);
			h.push(15, 2);
			h.push(42, 13);

      console.log(h);
