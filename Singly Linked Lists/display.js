class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SL {
    constructor() {
        this.head = null;
    } 
    display() {
        var output = "";
        var runner = this.head;
        while(runner) {
            output += runner.value + ""
            runner =runner.next;
        }
        return output;
    }
}

// OR 

class SL {
    constructor() {
        this.head = null;
    } 
    display() {
        var output = "[";
        var runner = this.head;
        while(runner) {
            output += runner.value;
            if(runner.next) {
                output +=",";
            }
            runner = runner.next;
        }
        output += "]"
        return output;
    }
}