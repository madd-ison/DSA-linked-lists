const LinkedList = require('./LinkedList')

function main() {
    let SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');

    const reverseList = function(lst) {
        let previous = null; 
        let current = lst.head; 
        let next = current; 
        while (current) {
            next = current.next; 
            current.next = previous; 
            previous = current; 
            current = next; 
        }
        lst.head = previous;
        return lst;
    }

    // Apollo -> Boomer -> Helo -> Husker -> Starbuck -> Tauhida

    function reverseLstRecursive(lst, previous=null, current=lst.head, next=current) {
        // previous = previous || null; 
        // current = current || lst.head; 
        // next = next || current; 
        
        if (!current) {
            lst.head = previous;
        } else {
            next = current.next; 
            current.next = previous; 
            previous = current; 
            current = next; 
            return reverseLstRecursive(lst, previous, current, next)
        }

        lst.head = previous;
        return lst;
    }
    
    const display = function(linkedList, arr) {
        arr = arr || [];
    
        // Edge case (if list is empty)
        if (!linkedList.head && !linkedList.value) {
            return arr;
        }
    
        // Base case
        if (linkedList.value && !linkedList.next) {
            arr.push(linkedList.value);
        }
    
        if (linkedList.head) {
          arr.push(linkedList.head.value);
          if (linkedList.head.next) {
              return display(linkedList.head.next, arr);
          }
        }
    
        if (linkedList.next) {
            arr.push(linkedList.value);
            return display(linkedList.next, arr);
        }
    
        return arr;
    }

    console.log(display(reverseLstRecursive(SLL)))
              
}

main()