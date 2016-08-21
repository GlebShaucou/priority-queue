const MaxHeap = require('./src/max-heap');
const Node = require('./src/node');

const h = new MaxHeap();
window.h = h;

h.root = new Node(0, 10);
			h.root.appendChild(new Node(1, 5));
			h.root.appendChild(new Node(2, 7));
			h.root.left.appendChild(new Node(3, 20));

/**
        10                       20
       /  \                     /  \
      5    7  - shift up ->   10   7
     /                        /
    20                       5
**/

			h.parentNodes = [
				h.root.left,
				h.root.right,
				h.root.left.left,
			];

			h.shiftNodeUp(h.root.left.left);
			console.log(h);
