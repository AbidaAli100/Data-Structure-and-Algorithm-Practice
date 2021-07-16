class Queue {
    constructor() {
        this.item = ["ali", "Fahad"];
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
    dequeueCustomMethod() {
        for (let i = 0; i < this.item.length - 1; i++) {
            this.item[i] = this.item[i + 1];
            console.log(this.item[i]);
        }
    }
}
let myQueue = new Queue();
myQueue.enqueue("Abida");
myQueue.dequeue();
myQueue.dequeueCustomMethod();
console.log(myQueue);