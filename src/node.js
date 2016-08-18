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
				throw new Error();
			}
		} catch(e) {
			console.log(e);
		}
	}

	remove() {
		try {
			if(this.parent == null) {
				throw new Error;
			} else {
				var parent = this.parent;
				parent.removeChild(this);
			}
		} catch(e) {
			console.log(e);
		}
	}

	swapWithParent() {
		
		function isLeftChild(parent, node) {
			if(parent.left.data == node.data && parent.left.priority == node.priority) {
				return true;
			}
			return false;
		}
		
		function isRightChild(parent, node) {
			if(parent.right.data == node.data && parent.right.priority == node.priority) {
				return true;
			}
			return false;
		}
		
		try {
			if(this.parent == null) {
				throw new Error();
			} else {
				var oldParent = this.parent;
				var oldChild = this;
				if(isLeftChild(oldParent, oldChild)) {
					
				}
			}
		} catch(e) {
			console.log(e);
		}
	}
}

module.exports = Node;
