function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let n = i + 1; n < array.length; n++) {
      if (array[i] + array[n] === target)
        return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  0(n^2)
*/

/* 
  Add your pseudocode here
  iterate over each element of the array
    iterate after each element of the array that comes after the current element
      return true if the target is hit
  return false since the target was not hit
*/

/*
  Add written explanation of your solution here
  To find all possible sums, each number in the array must be
  matched with every other number in the array making the best possible
  Big 0 time complexity 0(n^2)
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
