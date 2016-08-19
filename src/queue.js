const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(maxSize) this.maxSize = maxSize;
		else this.maxSize = 30;
		
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		try {
			if(this.maxSize > this.size()) {
				this.heap.push(data, priority);
			} else {
				throw "The queue has max size";
			}
		} catch(e) {
			throw e;
		}
	}

	shift() {

	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
