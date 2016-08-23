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
			var oldRoot = this.root;
			var detached = this.detachRoot();

			// var tempArr = [];
			// var len = this.heapTree.length;
			// for(var i = 0; i < len; i++) {
			// 	tempArr.push(this.heapTree[i]);
			// }
			// this.heapTree.length = 0;
			// for (var i = 0; i < tempArr.length; i++) {
			// 	this.push(tempArr[i].data, tempArr[i].priority);
			// }

			// if(this.heapTree.length == 0) {
			// 	this.heapTree[this.heapTree.length] = detached;
			// }

			//detached
			if(detached != null) {
				//if(this.heapTree[this.heapTree.length] == 0) { // < -- внимание!
				if(this.heapTree.length == 0) {
					//fake call
					var fakeNode = new Node("x", "x");
					this.restoreRootFromLastInsertedNode(fakeNode);
					this.shiftNodeDown(detached);
				} else {
					// var newRoot = this.heapTree[this.heapTree.length-1];
					// if(detached.left != null && (newRoot.priority != detached.left.priority)) {
					// 	newRoot.left = detached.left;
					// } else {
					// 	newRoot.left = null;
					// }
					// if(detached.right != null && (newRoot.priority != detached.right.priority)) {
					// 	newRoot.right = detached.right;
					// } else {
					// 	newRoot.right = null;
					// }

					// if(newRoot.parent != null && newRoot.parent.left != null && (newRoot.parent.left.data == newRoot.data)) {
					//  	newRoot.parent.left = null;
					// }
					// if(newRoot.parent != null && newRoot.parent.right != null && (newRoot.parent.right.data == newRoot.data)) {
					//  	newRoot.parent.right = null;
					// }
					// newRoot.parent = null;
					// if(newRoot.left != null) {
					// 	newRoot.left.parent = newRoot;
					// }
					// if(newRoot.right != null) {
					// 	newRoot.right.parent = newRoot;
					// }
					// this.root = newRoot;
					this.restoreRootFromLastInsertedNode(detached);
					this.shiftNodeDown(this.root);
				}

			}

			//-----------------------------
			// this.heapTree.length = 0;
			// this.heapTree[this.heapTree.length] = this.root;
			// var i = 0;
			// while (this.heapTree[i].left != null) {
			// 		this.heapTree[this.heapTree.length] = this.heapTree[i].left;
			// 		if(this.heapTree[i].right != null) {
			// 			this.heapTree[this.heapTree.length] = this.heapTree[i].right;
			// 		}
			// 		i++;
			// }
			//-----------------------------
			// this.restoreRootFromLastInsertedNode(detached);
			// this.shiftNodeDown(this.root);

		return oldRoot.data;
		}
	}

	detachRoot() {
		if (this.root != null) {
			var detached = this.root;
			this.root = null;

			// if(this.heapTree.length == 1) {
			// 	return new Node();
			// }

			this.heapTree.shift();
			if(detached.left == null || detached.right == null) {
				this.parentNodes.shift();
			}
			return detached;
		}
	}

	restoreRootFromLastInsertedNode(detached) {
		if (detached.data == "x") {
			return;
		}
		var newRoot = this.heapTree[this.heapTree.length-1];
		if(detached.left != null && (newRoot.priority != detached.left.priority)) { // < -- внимание!
			newRoot.left = detached.left;
		} else {
			// if (newRoot.left != null) {
			// 	newRoot.left = null;
			// }
			newRoot.left = null; // < -- внимание!
		}
		if(detached.right != null && (newRoot.priority != detached.right.priority)) { // < -- внимание!
			newRoot.right = detached.right;
		} else {
			newRoot.right = null;
		}

		if(newRoot.parent != null && newRoot.parent.left != null && (newRoot.parent.left.data == newRoot.data)) {
		 	newRoot.parent.left = null;
		}
		if(newRoot.parent != null && newRoot.parent.right != null && (newRoot.parent.right.data == newRoot.data)) {
		 	newRoot.parent.right = null;
		}
		newRoot.parent = null;
		if(newRoot.left != null) {
			newRoot.left.parent = newRoot;
		}
		if(newRoot.right != null) {
			newRoot.right.parent = newRoot;
		}
		this.root = newRoot;
		this.heapTree.unshift(this.root);
		//this.heapTree.length = this.heapTree.length - 1; // < -- внимание!
		// if(this.root.left == null || this.root.right == null){
		// 	this.parentNodes.unshift(this.root);
		// }
		this.buildHeapTree();
		this.parentNodes.length = 0;
		for (var i = 0; i < this.heapTree.length; i++) {
			if (this.heapTree[i].left == null || this.heapTree[i].right == null) {
				this.parentNodes[this.parentNodes.length] = this.heapTree[i];
			}
		}

		// var lastInsertedNode = this.heapTree[this.heapTree.length-1];
		// this.heapTree.length = this.heapTree.length - 1;
		// this.parentNodes.length = this.parentNodes.length - 1;
		// if(lastInsertedNode.parent.left.data == lastInsertedNode.data) {
		// 	lastInsertedNode.parent.left = null;
		// } else {
		// 	lastInsertedNode.parent.right = null;
		// }
		// lastInsertedNode.left = detached.left;
		// lastInsertedNode.right = detached.right;
		// lastInsertedNode.parent = null;
		// if(detached.left != null) {
		// 	detached.left.parent = lastInsertedNode;
		// }
		// if(detached.right != null) {
		// 	detached.right.parent = lastInsertedNode;
		// }
		// this.root = lastInsertedNode;
		// this.heapTree.unshift(lastInsertedNode);
		// if(lastInsertedNode.left == null || lastInsertedNode.right == null){
		// 	this.parentNodes.unshift(lastInsertedNode);
		// }
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

	shiftNodeUp(node) {
		if(node.parent == null) {
			this.root = node;
      return;
		} if(node.priority > node.parent.priority) {
			node.swapWithParent();
			this.shiftNodeUp(node);
		} else {
			return;
		}
    this.buildHeapTree();
    this.maintainParentNodes();
    return;
	}

	shiftNodeDown(node) {
		if (node.left != null && node.right == null && (node.priority < node.left.priority)) {
			//node.left.swapWithParent();
      this.shiftNodeUp(node.left);
			this.shiftNodeDown(node);
		} else if (node.left != null && node.right != null && (node.left.priority > node.right.priority) && (node.priority < node.left.priority)) {
			//node.left.swapWithParent();
      this.shiftNodeUp(node.left);
			this.shiftNodeDown(node);
		} else if (node.left != null && node.right != null && (node.left.priority < node.right.priority) && (node.priority < node.right.priority)) {
			//node.right.swapWithParent();
      this.shiftNodeUp(node.right);
			this.shiftNodeDown(node);
		} else {
			// this.buildHeapTree();
			// this.maintainParentNodes();
			return;
		}
		this.buildHeapTree();
		this.maintainParentNodes();
		return;
	}

	buildHeapTree() {//готовим массив heapTree
		this.heapTree.length = 0;
		this.heapTree[this.heapTree.length] = this.root;
		var i = 0;
		while (this.heapTree[i].left != null) {
				this.heapTree[this.heapTree.length] = this.heapTree[i].left;
				if(this.heapTree[i].right != null) {
					this.heapTree[this.heapTree.length] = this.heapTree[i].right;
				}
				i++;
		}
	}

	maintainParentNodes() { //готовим parentNodes
		this.parentNodes.length = 0;
			for (var i = 0; i < this.heapTree.length; i++) {
				if(this.heapTree[i].left == null || this.heapTree[i].right == null) {
					this.parentNodes.push(this.heapTree[i]);
				}
			}
	}
}

module.exports = MaxHeap;
