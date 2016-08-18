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
		try {
			if(node.data == this.left.data && node.priority == this.left.priority) {
				this.left.parent = null;
				this.left = null;
			} else if(node.data == this.right.data && node.priority == this.right.priority) {
				this.right.parent = null;
				this.right = null;
			} else {
				throw new SyntaxError("Passed node is not a child of this node");
			}
		}
	}

	remove() {

	}

	swapWithParent() {

	}
}

module.exports = Node;
