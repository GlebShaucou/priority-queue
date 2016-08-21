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
		if(!this.isEmpty()) {
			var retData = this.root.data;
			var tempArr = [];
			var newRoot = this.detachRoot();
			tempArr.push(newRoot);
			for(var i = 1; i < this.parentNodes.length; i++) {
				tempArr[i] = this.parentNodes[i];
			}
			this.clear();
			for (var i = 0; i < tempArr.length; i++) {
				this.push(tempArr[i].data, tempArr[i].priority);
			}

			return retData;
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
			this.heapTree.push(node);
			this.heapEmpty = false;
		} else {
			var i = 0;
			while(node.parent == null){
				if(this.parentNodes[i].left == null) {
					this.parentNodes.push(node);
					this.heapTree.push(node);
					//node.index = this.heapTree.length-1;
					node.parent = this.parentNodes[i];
					this.parentNodes[i].left = node;
					i++;
					continue;
				} else if(this.parentNodes[i].right == null) {
					this.parentNodes.push(node);
					this.heapTree.push(node);
					//node.index = this.heapTree.length-1;
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
		var $this = this;
		if(node.parent == null) {
			$this.root = node;
			//orderParentNodes($this);
			return;
		}
		//делаем parentNodes на основе упорядоченной кучи
		// function orderParentNodes($this, nodeInd, parentInd) {
		// 	if(node.parent != null) {
		// 		var temp = $this.heapTree[nodeInd];
		// 		$this.heapTree[nodeInd] = $this.heapTree[parentInd];
		// 		$this.heapTree[parentInd] = temp;
		// 		$this.parentNodes.length = 0;
		// 		for(var i = 0; i < $this.heapTree.length; i++) {
		// 			$this.parentNodes.push($this.heapTree[i]);
		// 		}
		// 	}
		// }


		//перемещаем ноды вверх, выполняется условие кучи
		if(node.priority > node.parent.priority) {

			if(node.priority > node.parent.left.priority) {// боковая перестановка ноды с большим приоритетом находятся левее
					var temp;
					temp = node.parent.right;
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
					//приводим в порядок parentNodes после боковой перестановки
					// temp = $this.parentNodes[0];
					// $this.parentNodes[0] = $this.parentNodes[1];
					// $this.parentNodes[1] = temp;
					//orderParentNodes($this, node.index, node.parent.right.index);
			 	}

				if(node.parent.data == $this.root.data && node.parent.priority == $this.root.priority) {
					// var temp;
					// temp = $this.root;
					$this.root = node;
					//$this.parentNodes.unshift(temp);
					//
					// temp = $this.parentNodes[0];
					// $this.parentNodes[0] = $this.parentNodes[1];
					// $this.parentNodes[1] = temp;
					node.swapWithParent();
					return;
				}

				//orderParentNodes($this, node.index, node.parent.index);
				node.swapWithParent();
				this.shiftNodeUp(node);
		}
		//orderParentNodes($this);
		return;

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
