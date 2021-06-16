// Add Front
class SLL {
    constructor() {
        this.head = null;
    } 
    addFront(value) {
        newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this
    }
    view() {
        var currentNode = this.head;
        while(currentNode) {
            console.log('current nodes value is ${currentNode.value}')
            currentNode = currentNode.next;
        }
    }
}