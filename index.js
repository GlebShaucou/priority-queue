const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');
//const Queue = require('../src/queue');

const h = new MaxHeap();
window.h = h;

h.root = new Node(0, 3);
	h.root.appendChild(new Node(1, 20));
	h.root.appendChild(new Node(2, 7));
	h.root.left.appendChild(new Node(3, 5));

	h.parentNodes = [
				h.root.left,
				h.root.right,
				h.root.left.left,
			];
			h.shiftNodeDown(h.root);
						console.log(h);
