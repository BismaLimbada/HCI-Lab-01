// HCI Lab 01: Miller's Law Demo
// Purpose: Demonstrating how chunking reduces cognitive units

let items = ['5','2','9','1','7','4','6','8'];
let chunked = [['5','2','9'], ['1','7','4'], ['6','8']];

// This output represents 8 separate items to remember
console.log("Ungrouped Data:", items.join(' '));

// This output represents 3 chunks, which is easier for STM (Short Term Memory)
console.log("Chunked Data:", chunked.map(c => c.join('')).join(' '));
