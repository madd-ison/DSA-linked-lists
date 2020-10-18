// Analyze the following function (without running it in an IDE) to determine 
// what problem it is trying to solve. What is the time complexity of this algorithm?

// function WhatDoesThisProgramDo(lst) {
//     let current = lst.head;
//     while (current !== null) {
//         let newNode = current;
//         while (newNode.next !== null) {
//             if (newNode.next.value === current.value) {
//                 newNode.next = newNode.next.next;
//             }
//             else {
//                 newNode = newNode.next;
//             }
//         }
//         current = current.next;
//     }
// }

// starts at the head
// while current has value
// set new node to current node
// if new node isn't the last node, 
// if the value of the next node is equal to the current node
// set pointer to two nodes away
// otherwise move to the next node
// move to the next

// this program will remove duplicates from a list
// O(n^2)