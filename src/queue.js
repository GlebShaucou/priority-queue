const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(maxSize) this.maxSize = maxSize;
		else this.maxSize = 30;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		//if (this.heap.size() < this.maxSize) {
			this.heap.push(data, priority);
		//}
	}

	shift() {
			try {
				if (this.isEmpty()) {
					throw "Queue is empty";
				}
				var shifted = this.heap.pop();
				return shifted;
			} catch (e) {
				throw e;
			}
	}

	size() {

	}

	isEmpty() {
		if (this.heap.isEmpty()) return true;
		else return false;
	}
}

module.exports = PriorityQueue;
