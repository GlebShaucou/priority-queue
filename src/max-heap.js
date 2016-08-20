const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		//this.heapTree = [];
		this.heapEmpty = true;
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
	}

	pop() {
		if(!this.isEmpty()) {
			var root = this.parentNodes.pop();
			this.heapTree.pop();
			//корректируем индексы нодов
			// for(var i = 0; i < this.parentNodes.length; i++) {
			// 	parentNodes[i].index = i;
			// }
			return root;
		}
	}

	detachRoot() {
		var root = this.root;
		this.root = null;
		//this.parentNodes.unshift(root);
		return this.parentNodes[0];
	}

	restoreRootFromLastInsertedNode(detached) {
		var lastInsertedNode = this.parentNodes.pop();
		lastInsertedNode.parent.right = null;
		this.root = lastInsertedNode;
		detached.left.parent = lastInsertedNode;
		detached.right.parent = lastInsertedNode;
		lastInsertedNode.left = detached.left;
		lastInsertedNode.right = detached.right;
	}

	size() {
		if(!this.isEmpty()) {
			return this.parentNodes.length + 1;
		}
		return 0;
	}

	isEmpty() {
		return this.heapEmpty;
	}

	clear() {
		this.root = null;
		this.parentNodes.length  = 0;
		//this.heapTree.length = 0;
		this.heapEmpty = true;
	}

	insertNode(node) {
		if(this.parentNodes.length == 0 && this.root == null) {
			this.root = node;
			//node.index = 0;
			this.parentNodes.push(node);
			//this.heapTree.push(node);
			this.heapEmpty = false;
		} else {
			var i = 0;
			while(node.parent == null){
				if(this.parentNodes[i].left == null) {
					this.parentNodes.push(node);
					//this.heapTree.push(node);
					//node.index = i;
					node.parent = this.parentNodes[i];
					this.parentNodes[i].left = node;
					i++;
					continue;
				} else if(this.parentNodes[i].right == null) {
					this.parentNodes.push(node);
					//this.heapTree.push(node);
					//node.index = i;
					node.parent = this.parentNodes[i];
					this.parentNodes[i].right = node;
					i++;
					continue;
				}
				i++;
			}
			if(this.parentNodes[0].left != null && this.parentNodes[0].right != null) {
				this.parentNodes.shift();
			}
		}
	}

	shiftNodeUp(node) {
		if(node.parent != null) {
		while(node.priority > node.parent.priority) {
			if(node.parent.data == this.root.data && node.parent.priority == this.root.priority) {
					node.swapWithParent();
					this.root = node;
					break;
			}
			node.swapWithParent();
		}

		//делаем parentNodes на основе упорядоченной кучи
		this.parentNodes.length = 0;
		this.parentNodes.push(this.root);
		var i = 0;
		while (this.parentNodes[i].left != null) {
			this.parentNodes.push(this.parentNodes[i].left);
			if(this.parentNodes[i].right != null) {
				this.parentNodes.push(this.parentNodes[i].right)
			}
			i++;
		}
		this.parentNodes.shift();
		}
	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
