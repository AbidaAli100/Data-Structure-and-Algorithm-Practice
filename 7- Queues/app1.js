class Queue {
    constructor() {
        this.item = ["ali"];
        this.size = 5;
    }
    enqueue(item) {
        this.item.push(item);
        this.item.size + 1;
    }
    dequeue() {
        this.item.shift();
        this.size--;
    }

}
let myQueue = new Queue();
myQueue.enqueue("Abida");
myQueue.dequeue();
console.log(myQueue);