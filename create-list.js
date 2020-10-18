class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}
class LinkedList {
    constructor() {
        this.head = null
    }
    // create new node item and point head there
    insertFirst(item) {
        this.head = new _Node(item, this.head)
    }
    insertLast(item) {
        // check for first item in the list
        if(this.head === null) {
            // if there are no items, this item becomes the first
            this.insertFirst(item)
        } else {
            let tempNode = this.head
            // move through the list until you reach the end
            while(tempNode.next !== null) {
                tempNode = tempNode.next
            }
            // set end node's pointer to new node
            // set new node's pointer to null, as there is nothing after it
            tempNode.next = new _Node(item, null)
        }
    }
    insertBefore(item, key) {

        let currNode = this.head;
        let previousNode = this.head;

        // If key points to head
        if (key === 0) {
            this.insertFirst(item)
        }
        else {
            let count = 0;
            // Count to node
            while (count < key) {
                // Return null if key isn't found
                if (currNode.next === null) {
                    return null;
                }
                else {
                    count++;
                    previousNode = currNode
                    currNode = currNode.next
                }
            }
            // Insert new node
            previousNode.next = new _Node(item, currNode);
        }
    }
    insertAfter(item, key) {

        let currNode = this.head;
        let previousNode = this.head;
        
        // Count to node
        let count = 0;

        while (count <= key) {

            // Return null if key isn't found
            if (currNode === null) {
                return null;
            }
            else {
                count++;
                previousNode = currNode
                currNode = currNode.next
            }
        }

        // If key refers to last item
        if (currNode === null) {
            // Insert new node and set next pointer to null
            previousNode.next = new _Node(item, null);
        }
        else {
            // Otherwise, insert new node and set next pointer to next node
            previousNode.next = new _Node(item, currNode);
        }
    }
    insertAt(item, key) {
        // Keep track of previous
        let previousNode = this.head; 
        // Start at head
        let currNode = this.head;
        // Keep track of next
        let nextNode = this.head;

        // If key points to head
        if (key === 0) {
            // Insert node at head and set pointer to the next node
            this.head = new _Node(item, this.head.next)
        }
        else {
            // Count to node
            let count = 0;
            
            while (count < key) {
                // Return null if key isn't found
                if (nextNode === null) {
                    return null;
                }
                else {
                    count++;
                    previousNode = currNode 
                    currNode = currNode.next 
                    nextNode = currNode.next
                }
            }

            // key points to last item
            if (nextNode === null) {
                // Insert new node and set next pointer to null
                previousNode.next = new _Node(item, null);
            }
            else {
                // Otherwise, insert new node and set next pointer to next node
                previousNode.next = new _Node(item, nextNode);
            }
        }
    }
    find(item) {
        // start with first item 
        let currNode = this.head
        // if there are no items
        if(!this.head) {
            return null
        }
        // check for item
        while (currNode.value !== item) {
            //if you reach the end of the list
            if(currNode.next === null) {
                return null;
            } else {
                // keep looking
                currNode = currNode.next
            }
        }
        // this is the item
        return currNode
    }
    remove(item) {
        // if there's nothing in the list
        if(!this.head) {
            return null
        }
        // if item = first item in the list, make the next node head
        if(this.head.value === item) {
            this.head = this.head.next
            return
        }
        // start w the head
        let currNode = this.head
        // keep track of previous
        let previousNode = this.head

        // for as long as there are nodes and you haven't found item
        while ((currNode !== null) && (currNode.value !== item)) {
            // save previous
            previousNode = currNode
            currNode = currNode.next
        }
        // no more items
        if (currNode === null) {
            console.log('Item not found')
            return
        }
        // previous node skips current node and points to the next one
        previousNode.next = currNode.next
    }
}

module.exports = LinkedList;
