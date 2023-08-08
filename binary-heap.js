class MinHeap {
    constructor(){
        this.heap = [];
    }

    //insert new element
    insert(value){
        this.heap.push(value);
        //represents the last index
        this.bubbleUp(this.heap.length - 1);
    }
    
    //always removes min element 
    remove(){
        if (this.isEmpty()) {
            return null;
          }
          
          const min = this.heap[0];
          const last = this.heap.pop();
    }
    //returns length of heap/array
    size(){
        return this.heap.length;
    }

    //check if array is empty
    checkIfEmpty(){
        return this.heap.length === 0;
    }

    //move element up after its been placed at end off tree/array (if needs)
    //will always be last element in array
    bubbleUp(index) {
        //console.log(index);
        let parentIndex = Math.floor((index-1)/2);
        while(index > 0 && this.heap[index] < this.heap[parentIndex]){
            console.log('came here');
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    printTree() {
        this.printTreeNode(0, '', '');
      }
    
      printTreeNode(index, prefix, childPrefix) {
        if (index < this.heap.length) {
          console.log(prefix + this.heap[index]);
          const leftChildIndex = 2 * index + 1;
          const rightChildIndex = 2 * index + 2;
          if (leftChildIndex < this.heap.length || rightChildIndex < this.heap.length) {
            this.printTreeNode(rightChildIndex, childPrefix + '├── ', childPrefix + '│   ');
            this.printTreeNode(leftChildIndex, childPrefix + '└── ', childPrefix + '    ');
          }
        }
      } 
}


// Create an instance of the MinHeap class
const minHeap = new MinHeap();

// Insert elements into the heap
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(20);
minHeap.insert(3);
//minHeap.insert(8);

console.log('Heap after insertions:', minHeap.heap);

// Extract the minimum element from the heap
//const minElement = minHeap.extractMin();
//console.log('Extracted min element:', minElement);
//console.log('Heap after extraction:', minHeap.heap);

// Check the size and emptiness of the heap
console.log('Heap size:', minHeap.size());
console.log('Is heap empty?', minHeap.checkIfEmpty());

minHeap.printTree();