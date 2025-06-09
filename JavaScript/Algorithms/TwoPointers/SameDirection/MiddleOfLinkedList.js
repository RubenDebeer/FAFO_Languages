// When: 
/*
    The slow pointer moves one step at a time, while the fast pointer moves two steps.
    This technique allows you to uncover properties about the structure of the list
    in a single pass—often identifying key positions such as the middle node.
*/
// How:
/*
    To find the middle node, we utilize two pointers:
    •	Slow pointer moves 1 step at a time.
    •	Fast pointer moves 2 steps at a time.
    •	When the fast pointer reaches the end, the slow pointer will be at the middle.

    Because the fast pointer skips ahead twice as fast, 
    the slow pointer will be halfway when the fast one reaches the end.*/

// Implementation:

// Given the head of a singly linked list, return the middle node.
// If there are two middle nodes (i.e. the number of nodes is even), return the second one.

const find_middle =  (head) => {
    let slow = head;
    let fast = head; 

    while(fast != null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
