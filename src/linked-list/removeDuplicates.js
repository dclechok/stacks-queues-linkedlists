/**
 * Remove duplicate values, if any, from a sorted linked list.
 *
 * The algorithm should be O(n) time complexity, therefore it cannot use `find()`.
 *
 * @param sortedLinkedList
 *  a possibly empty link list with all values in lexical order.
 *
 * @returns {LinkedList}
 *  the original linked list with any duplicate values removed.
 */

function removeDuplicates(sortedLinkedList) {
  // TODO: implement an algorithm to remove duplicate values from a sorted linked list.
  let current = sortedLinkedList.head; //current node we're on
    while (current !== null && current.next !== null) { //while there is a node, and a next
      if (current.val === current.next.val){ //if current node val === next value then
        current.next = current.next.next;            //current.next === two nodes to right
      }
        current = current.next //if current node and next node are not equal - not duplicates
     
    }
    // returns the linked list with no duplicates
  console.log(sortedLinkedList.head);
  return sortedLinkedList;
}

module.exports = removeDuplicates;

// [1, a][2, b][3, a][4, c][5, d]
// 1 - a == 2 - b