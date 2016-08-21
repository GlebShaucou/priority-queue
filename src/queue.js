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

	}

	size() {

	}

	isEmpty() {

	}
}

module.exports = PriorityQueue;
