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
			if(node.parent == null || (node.parent.data != this.data && node.parent.priority != this.priority)) {
				throw new Error();	
			}
			if(node.data == this.left.data && node.priority == this.left.priority) {
				this.left.parent = null;
				this.left = null;
			} 
			if(node.data == this.right.data && node.priority == this.right.priority) {
				this.right.parent = null;
				this.right = null;
			} 
		} catch(e) {
			console.log(e);
		}
	}

	remove() {
		try {
			if(this.parent == null) {
				throw new Error();
			} else {
				var parent = this.parent;
				parent.removeChild(this);
			}
		} catch(e) {
			console.log(e);
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
				throw new Error();
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
					temp = oldParent.right;
					oldParent.right = oldChild.right;
					if(oldParent.right != null) {
						oldParent.right.parent = oldParent;	
					}
					oldChild.right = temp;
				}
				if(isRightChild(oldParent, oldChild)) {
					oldParent.right = oldChild.right;
					oldChild.right = oldParent;
					temp = oldParent.left;
					oldParent.left = oldChild.left;
					if(oldParent.left != null) {
						oldParent.left.parent = oldParent;	
					}
					oldChild.left = temp;
				}
			}
		} catch(e) {
			console.log(e);
		}
	}
}

module.exports = Node;
