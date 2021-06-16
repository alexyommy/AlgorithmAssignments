class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    } 
    // Add Front
    addFront(value) {
        // Write a method that accepts a value and creates a new node.
        // Assign it to the list head head, and return a pointer to the new head node

        // Create a new node
        newNode = new Node(value);
        // Attach a new node to the existing list
        newNode.next = this.head;
        // Reassign list's head
        this.head = newNode;
        // Return the head
        return this
    }

    // Remove Front
    removeFront() {
        // Write a method to remove the head node andreturn the new list head node. If the list is empty, return null
        if(this.head) {
            this.head = this.head.next;
        }
        return this.head;
    }

    // Front
    front(){
        if(this.head) {
            this.head = this.head.value;
        }
        return null;
    }
    
    view() {
        var currentNode = this.head;
        while(currentNode) {
            console.log('current nodes value is ${currentNode.value}')
            currentNode = currentNode.next;
        }
    }
}