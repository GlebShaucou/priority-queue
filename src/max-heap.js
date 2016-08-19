const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
	}

	pop() {
		
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.heapSize;
	}

	isEmpty() {
		if(this.size() == 0) return true;
		return false;
	}

	clear() {
		this.root = null;
		this.parentsNode.length  = 0;
		this.heapSize = 0;
	}

	insertNode(node) {
		if(this.parentNodes.length == 0 && this.root == null) {
			this.root = node;
			this.parentNodes.push(node);
			this.heapSize++;
		} else {
			var i = 0;
			while(node.parent == null){
				if(this.parentNodes[i].left == null) {
					this.parentNodes.push(node);
					node.parent = this.parentNodes[i];
					this.parentNodes[i].left = node;
					this.heapSize++;
					i++;
					continue;
				} else if(this.parentNodes[i].right == null) {
					this.parentNodes.push(node);
					node.parent = this.parentNodes[i];
					this.parentNodes[i].right = node;
					this.heapSize++;
					i++;
					continue;
				}
				i++;
			}
		}		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
