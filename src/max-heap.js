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
		return this.parentNodes.length;
	}

	isEmpty() {
		if(this.size() == 0) return true;
		return false;
	}

	clear() {
		this.root = null;
		this.parentsNode.length  = 0;
	}

	insertNode(node) {
		var originPush = Array.prototype.push();
		if(this.parentNodes.length == 0 && this.root == null) {
			this.root = node;
			this.parentNodes.originPush(node);
		} else {
			var i = 0;
			while(node.parent == null){
				if(this.parentNodes[i].left == null) {
					this.parentNodes.originPush(node);
					node.parent = this.parentNodes[i];
					this.parentNodes[i].left = node;
					i++;
					continue;
				} else if(this.parentNodes[i].right == null) {
					this.parentNodes.originPush(node);
					node.parent = this.parentNodes[i];
					this.parentNodes[i].right = node;
					i++;
					continue;
				}
				i++;
			}
			if(this.parentNodes[0].left != 0 && this.parentNode[0].right != 0) {
				this.parentNodes.shift();
			}
			
		}		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
