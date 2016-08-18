const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	push(data, priority) {
		
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		
	}

	clear() {
		
	}

	insertNode(node) {
		if(this.parentNodes.length == 0) {
			this.root = node;
			this.parentNodes.push(node);
		}
		var heap = this.parentNodes;
		for(var i = 0; i < heap.length; i++) {
			if(heap[i].left == null) {
				heap[i].left = node;
				node.parent = heap[i];
				heap.push(node);
			} else if (heap[i].right == null) {
				heap[i].right = node;
				node.parent = heap[i];
				heap.push(node);
			}
		}
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
