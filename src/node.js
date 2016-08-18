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
			if(node.data != this.left.data && node.data != this.right.data) {
				throw "Passed node is not a child of this node";	
			}
			if(node.data == this.left.data && node.priority == this.left.priority) {
				this.left.parent = null;
				this.left = null;
			} else {
			//if(node.data == this.right.data && node.priority == this.right.priority) {
				this.right.parent = null;
				this.right = null;
			} 
		} catch(e) {
			throw e;
		}
	}

	remove() {
		//try {
			if(this.parent != null) {
			//	throw "Node does not have a parent";
			//} else {
				var parent = this.parent;
				parent.removeChild(this);
			//}
		//} catch(e) {
		//	throw e;
		}
	}

	swapWithParent() {
		//Для проверки левый ли ребенок
		function isLeftChild(parent, node) {
			if(parent.left.data == node.data && parent.left.priority == node.priority) {
				return true;
			}
			return false;
		}
		//Для проверки правый ли ребенок
		function isRightChild(parent, node) {
			if(parent.right.data == node.data && parent.right.priority == node.priority) {
				return true;
			}
			return false;
		}
		
		try {
			if(this.parent == null) {
				throw "Node does not have a parent";
			} else {
				var oldParent = this.parent;
				var oldChild = this;
				var temp;
				//Старого родителя родителя присваиваем новому родителю и нового родителя родителю старого родителя 
				temp = oldParent.parent;
				oldParent.parent = oldChild;
				oldChild.parent = temp;
				// Сейчас temp это родитель старого родителя
				if(temp != null) {
					if(isLeftChild(temp, oldParent)) {
						temp.left = oldChild;
					}
					if(isRightChild(temp, oldParent)) {
						temp.right = oldChild;
					}	
				}
				
				//Меняем детей у нодов
				if(isLeftChild(oldParent, oldChild)) {
					oldParent.left = oldChild.left;
					oldChild.left = oldParent;
					oldParent.right.parent = oldChild;
					temp = oldParent.right;
					oldParent.right = oldChild.right;
					oldChild.right = temp;
				}
				if(isRightChild(oldParent, oldChild)) {
					oldParent.right = oldChild.right;
					oldChild.right = oldParent;
					oldParent.left.parent = oldChild;
					temp = oldParent.left;
					oldParent.left = oldChild.left;
					oldChild.left = temp;
				}
			}
		} catch(e) {
			throw e;
		}
	}
}

module.exports = Node;
