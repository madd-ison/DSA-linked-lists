const LinkedList = require('./create-list')

function main() {
    let SLL = new LinkedList();

    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');

    SLL.remove('Husker');

    SLL.insertBefore('Athena', 1);
    SLL.insertAfter('Hotdog', 3);
    SLL.insertAt('Kat', 3);

    SLL.remove('Tauhida');

}

main()