const LinkedList = require('./LinkedList')

function main() {
    let SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    // SLL.insertLast('Starbuck');
    // SLL.insertLast('Tauhida');
    // SLL.insertLast('Sam Gamgee')
    //                               X
    // Apollo -> Boomer -> Helo -> Husker -> Starbuck -> Tauhida

    const thirdFromEnd = function(lst) {
        let previous = null; //Apollo//Boomer//helo//Husker
        let current = lst.head; // Apollo //Boomer//Helo//Husker//Starbuck
        
        while(current.next.next) {
            previous = current;
            current = previous.next;
        }

        return previous.value;
    }

    console.log(thirdFromEnd(SLL))
              
}

main()