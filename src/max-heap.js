const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapTree = [];
		this.heapEmpty = true;
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(this.parentNodes[this.parentNodes.length-1]);
	}

	pop() {
		if(this.heapTree.length != 0) {
			var retData = this.root.data;
			// console.log(this.heapTree);
			var tempArr = [];
			this.root = null;
			this.heapTree.shift();
			// console.log(this.heapTree);
			var len = this.heapTree.length;
			for(var i = 0; i < len; i++) {
				tempArr.push(this.heapTree[i]);
			}
			this.heapTree.length = 0;
			for (var i = 0; i < tempArr.length; i++) {
				this.push(tempArr[i].data, tempArr[i].priority);
			}
		// 	var tempArr = [];
		// 	var newRoot = this.detachRoot();
		// 	tempArr.push(newRoot);
		// 	for(var i = 1; i < this.parentNodes.length; i++) {
		// 		tempArr[i] = this.parentNodes[i];
		// 	}
		// 	this.clear();
		// 	for (var i = 0; i < tempArr.length; i++) {
		// 		this.push(tempArr[i].data, tempArr[i].priority);
		// 	}
		//
		// 	return retData;
		return retData;
		}
	}

	detachRoot() {
		// var root = this.root;
		// this.root = null;
		// //this.parentNodes.unshift(root);
		// return this.parentNodes[0];
	}

	restoreRootFromLastInsertedNode(detached) {
		// var lastInsertedNode = this.parentNodes.pop();
		// lastInsertedNode.parent.right = null;
		// this.root = lastInsertedNode;
		// detached.left.parent = lastInsertedNode;
		// detached.right.parent = lastInsertedNode;
		// lastInsertedNode.left = detached.left;
		// lastInsertedNode.right = detached.right;
	}

	size() {
		// if(!this.isEmpty()) {
		// 	return this.parentNodes.length + 1;
		// }
		// return 0;
	}

	isEmpty() {
		//return this.heapEmpty;
	}

	clear() {
		this.root = null;
		this.parentNodes.length  = 0;
		this.heapTree.length = 0;
		// this.heapEmpty = true;
	}

	insertNode(node) {
		if(this.heapTree.length == 0) {
			this.root = node;
			this.heapTree.push(node);
		} else {
			var i = 0;
			while (node.parent == null) { //добавляем ноды в дерево
				if(this.heapTree[i].left == null) {
					this.heapTree[i].left = node;
					node.parent = this.heapTree[i];
					this.heapTree.push(node);
					continue;
				}
				if(this.heapTree[i].right == null) {
					this.heapTree[i].right = node;
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
		//var $this = this;
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

		function swapWithLeft(node) {
			var temp;
			temp = node;
			// console.log(node.parent);
			// console.log(temp);
			node.parent.right = node.parent.left;
			// console.log(node.parent.right);
			node.parent.left = temp;
			// console.log(node.parent.left);

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

		// var $this = this;
		// if(node.parent == null) {
		// 	$this.root = node;
		// 	//orderParentNodes($this);
		// 	return;
		// }
		// //делаем parentNodes на основе упорядоченной кучи
		// // function orderParentNodes($this, nodeInd, parentInd) {
		// // 	if(node.parent != null) {
		// // 		var temp = $this.heapTree[nodeInd];
		// // 		$this.heapTree[nodeInd] = $this.heapTree[parentInd];
		// // 		$this.heapTree[parentInd] = temp;
		// // 		$this.parentNodes.length = 0;
		// // 		for(var i = 0; i < $this.heapTree.length; i++) {
		// // 			$this.parentNodes.push($this.heapTree[i]);
		// // 		}
		// // 	}
		// // }
		//
		//
		// //перемещаем ноды вверх, выполняется условие кучи
		// if(node.priority > node.parent.priority) {
		//
		// 	if(node.priority > node.parent.left.priority) {// боковая перестановка ноды с большим приоритетом находятся левее

		// 			//приводим в порядок parentNodes после боковой перестановки
		// 			// temp = $this.parentNodes[0];
		// 			// $this.parentNodes[0] = $this.parentNodes[1];
		// 			// $this.parentNodes[1] = temp;
		// 			//orderParentNodes($this, node.index, node.parent.right.index);
		// 	 	}
		//
		// 		if(node.parent.data == $this.root.data && node.parent.priority == $this.root.priority) {
		// 			// var temp;
		// 			// temp = $this.root;
		// 			$this.root = node;
		// 			//$this.parentNodes.unshift(temp);
		// 			//
		// 			// temp = $this.parentNodes[0];
		// 			// $this.parentNodes[0] = $this.parentNodes[1];
		// 			// $this.parentNodes[1] = temp;
		// 			node.swapWithParent();
		// 			return;
		// 		}
		//
		// 		//orderParentNodes($this, node.index, node.parent.index);
		// 		node.swapWithParent();
		// 		this.shiftNodeUp(node);
		// }
		// //orderParentNodes($this);
		// return;

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
