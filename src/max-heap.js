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
		if(this.parentNodes.length == 0 && this.root == null) {
			this.root = node;
			this.parentNodes.push(node);
		} else {
			var i = 0;
			while(node.parent == null){
				if(this.parentNodes[i].left == null) {
					this.parentNodes.push(node);
					node.parent = this.parentNodes[i];
					this.parentNodes[i].left = node;
					i++;
					continue;
				} else if(this.parentNodes[i].right == null) {
					this.parentNodes.push(node);
					node.parent = this.parentNodes[i];
					this.parentNodes[i].right = node;
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
