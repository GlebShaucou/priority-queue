const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapTree = [];
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(this.parentNodes[this.parentNodes.length-1]);
	}

	pop() {
		if(this.heapTree.length != 0) {
			var detached = this.detachRoot();
			//restoreRootFromLastInsertedNode(detached);
			var tempArr = [];
			var len = this.heapTree.length;
			for(var i = 0; i < len; i++) {
				tempArr.push(this.heapTree[i]);
			}
			this.heapTree.length = 0;
			for (var i = 0; i < tempArr.length; i++) {
				this.push(tempArr[i].data, tempArr[i].priority);
			}

		return detached.data;
		}
	}

	detachRoot() {
		var detached = this.root;
		this.root = null;
			this.heapTree.shift();
			if(detached.left == null || detached.right == null) {
				this.parentNodes.shift();
			}
			// if(this.heapTree.length == ) {
			// 	detached = new Node();
			// }
			return detached;
	}

	restoreRootFromLastInsertedNode(detached) {
		var lastInsertedNode = this.heapTree.pop();
		this.parentNodes.pop();
		if(lastInsertedNode.parent.left.data == lastInsertedNode.data) {
			lastInsertedNode.parent.left = null;
		} else {
			lastInsertedNode.parent.right = null;
		}
		lastInsertedNode.left = detached.left;
		lastInsertedNode.right = detached.right;
		lastInsertedNode.parent = null;
		if(detached.left != null) {
			detached.left.parent = lastInsertedNode;
		}
		if(detached.right != null) {
			detached.right.parent = lastInsertedNode;
		}
		this.root = lastInsertedNode;
		this.heapTree.unshift(lastInsertedNode);
		if(lastInsertedNode.left == null || lastInsertedNode.right == null){
			this.parentNodes.unshift(lastInsertedNode);
		}
	}

	size() {
		return this.heapTree.length;
	}

	isEmpty() {
		if(this.heapTree.length == 0) return true;
		else return false;
	}

	clear() {
		this.root = null;
		this.parentNodes.length  = 0;
		this.heapTree.length = 0;
	}

	insertNode(node) {
		if(this.heapTree.length == 0) {
			this.root = node;
			this.heapTree.push(node);
		} else {
			var i = 0;
			while (node.parent == null) { //добавляем ноды в дерево
				if(this.heapTree[i].left == null || this.heapTree[i].right == null) {
					this.heapTree[i].appendChild(node);
					node.parent = this.heapTree[i];
					this.heapTree.push(node);
					continue;
				}
				i++;
			}
		}
		this.maintainParentNodes(); //готовим parentNodes
	}

	maintainParentNodes() { //готовим parentNodes
		this.parentNodes.length = 0;
			for (var i = 0; i < this.heapTree.length; i++) {
				if(this.heapTree[i].left == null || this.heapTree[i].right == null) {
					this.parentNodes.push(this.heapTree[i]);
				}
			}
	}

	shiftNodeUp(node) {
		if(node.parent == null) {
			this.root = node;
		} else if(node.priority > node.parent.priority) {
			if(node.parent.parent != null && (node.parent.priority > node.parent.parent.right.priority)) {
				swapWithLeft(node.parent.parent.right);
			}
			if(node.priority > node.parent.left.priority) {
				swapWithLeft(node);
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
		} else {
			return;
		}
		this.heapTree.length = 0;
		this.heapTree.push(this.root);
		var i = 0;
		while (this.heapTree[i].left != null) {
				this.heapTree.push(this.heapTree[i].left);
				if(this.heapTree[i].right != null) {
					this.heapTree.push(this.heapTree[i].right)
				}
				i++;
			}
		this.maintainParentNodes();
		return;

		function swapWithLeft(node) { // меняем местами нода на соседних узлах (левый и правый), если не выполняется условие кучи
			var temp;
			temp = node;
			node.parent.right = node.parent.left;
			node.parent.left = temp;

			temp = node.left;
			node.left = node.parent.right.left;
			node.parent.right.left = temp;

			temp = node.right;
			node.right = node.parent.right.right;
			node.parent.right.right = temp;
			if(node.left != null) {
					node.left.parent = node;
			}
			if(node.right != null) {
					node.right.parent = node;
			}
			if(node.parent.right.left != null) {
					node.parent.right.left = node.parent.right;
			}
			if(node.parent.right.right != null) {
					node.parent.right.right = node.parent.right;
			}
		}

	}

	shiftNodeDown(node) {
		if(node.left != null && node.priority < node.left.priority) {
			this.shiftNodeUp(node.left);
			if(node.left != null) {
				node.left.parent = node;
			}
			if(node.right != null) {
				node.right.parent = node;
			}
			this.shiftNodeDown(node);			
		} else if (node.right != null && node.priority < node.right.priority) {
			this.shiftNodeUp(node.right);
			if(node.left != null) {
				node.left.parent = node;
			}
			if(node.right != null) {
				node.right.parent = node;
			}
			this.shiftNodeDown(node);			
		} else {
			return;
		}
	}
}

module.exports = MaxHeap;
