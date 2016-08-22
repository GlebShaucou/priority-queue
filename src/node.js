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
				this.right.parent = null;
				this.right = null;
			}
		} catch(e) {
			throw e;
		}
	}

	remove() {
		if(this.parent != null) {
			var parent = this.parent;
			parent.removeChild(this);
		}
	}

	swapWithParent() {
		if(this.parent != null) {

			var oldParent = this.parent;
			var oldChild = this;
			var temp;
			//Старого родителя родителя присваиваем новому родителю и нового родителя родителю старого родителя
			temp = oldParent.parent;
			oldParent.parent = oldChild;
			oldChild.parent = temp;
			// Сейчас temp это родитель старого родителя
			if(temp != null) { //переопределяем детей родителя старого родителя
				if(isLeftChild(temp, oldParent)) { // левый ли ребенок
					temp.left = oldChild;
				}
				if(isRightChild(temp, oldParent)) { // правый ли ребенок
					temp.right = oldChild;
				}
			}

			//Меняем детей у oldChild и oldParent
			if(isLeftChild(oldParent, oldChild)) {
				oldParent.left = oldChild.left;

				if(oldParent.left != null) {
					oldParent.left.parent = oldParent;
				}

				oldChild.left = oldParent;
				if(oldParent.right != null) {
					oldParent.right.parent = oldChild;
				}
				temp = oldParent.right;
				oldParent.right = oldChild.right;
				oldChild.right = temp;
			}
			if(isRightChild(oldParent, oldChild)) {
				oldParent.right = oldChild.right;

				if(oldParent.right != null) {
					oldParent.right.parent = oldParent;
				}

				oldChild.right = oldParent;
				if(oldParent.left != null) {
					oldParent.left.parent = oldChild;
				}
				temp = oldParent.left;
				oldParent.left = oldChild.left;
				oldChild.left = temp;
			}

			//Для проверки левый ли ребенок
			function isLeftChild(parent, node) {
				if(parent.left != null && parent.left.data == node.data && parent.left.priority == node.priority) {
					return true;
				}
				return false;
			}
			//Для проверки правый ли ребенок
			function isRightChild(parent, node) {
				if(parent.right != null && parent.right.data == node.data && parent.right.priority == node.priority) {
					return true;
				}
				return false;
			}
		}
	}

	swapWithLeft() { // меняем местами ноды на соседних узлах (левый и правый), если не выполняется условие кучи
		if(this.parent != null) {
			var temp;
			var parent = this.parent;
			var oldRight = this;
			var oldLeft = this.parent.left;

			parent.left = oldRight;
			parent.right = oldLeft;
			//левые дочерние ноды
			temp = oldRight.left;
			oldRight.left = oldLeft.left;
			oldLeft.left = temp;
			// правые дочерние ноды
			temp = oldRight.right;
			oldRight.right = oldLeft.right;
			oldLeft.right = temp;
			// меняем родителей детей, если дети существуют есть
			if(oldRight.left != null) {
				oldRight.left.parent = oldRight;
			}
			if(oldRight.right != null) {
				oldRight.right.parent = oldRight;
			}

			if(oldLeft.left != null) {
				oldLeft.left.parent = oldLeft;
			}
			if(oldLeft.right != null) {
				oldLeft.right.parent = oldLeft;
			}
		}
	}

}

module.exports = Node;
