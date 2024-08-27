/*
Given a sorted array of distinct integers, 
write a function indexEqualsValue that returns 
the lowest index for which array[index] == index.
Return -1 if there is no such index.

Your algorithm should be very performant.

[input] array of integers (with 0-based nonnegative indexing)
[output] integer

Examples:
  input: [-8,0,2,5]
  output: 2 # since array[2] == 2

  input: [-1,0,3,6]
  output: -1 # since no index in array satisfies array[index] == index
*/


// Solution

function indexEqualsValue(a) {
  let start = 0, end = a.length;
  let neg = -1;
  while(start < end){
    let i = Math.floor((start + end) / 2);
    if (a[i] > i){
      end = i;
    } else if(a[i] < i) {
      start = i+1;
    } else {
      neg = i;
      end = i;
    } 
  }
  return neg;
}

// or