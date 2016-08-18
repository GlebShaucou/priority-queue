class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if(this.left == null) {
			this.left = node;
			node.parent = this;
		} else if(this.right == null) {
			this.right = node;
			node.parent = this;
		}
	}

	removeChild(node) {
		
	}

	remove() {

	}

	swapWithParent() {

	}
}

module.exports = Node;
