const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(maxSize) this.maxSize = maxSize;
		else this.maxSize = 30;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		try {
			if (this.size() == this.maxSize) {
				throw "Queue has max size";
			}
			this.heap.push(data, priority);
		} catch (e) {
			throw e;
		}
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
		return this.heap.size();
	}

	isEmpty() {
		if (this.heap.isEmpty()) return true;
		else return false;
	}
}

module.exports = PriorityQueue;
