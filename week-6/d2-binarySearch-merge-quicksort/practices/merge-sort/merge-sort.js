// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
    // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if (arr.length === 1) return arr;

    // Divide the array in half
    const midPoint = Math.floor(arr.length / 2);
    const left = arr.slice(0, midPoint);
    const right = arr.slice(midPoint, arr.length);

    // Recursively sort the left half
    const sortedLeft = mergeSort(left);
    // Recursively sort the right half
    const sortedRight = mergeSort(right);

    // Merge the halves together and return
    return merge(sortedLeft, sortedRight);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
    // Create an empty return array
    const merged = [];

    // Point to the first value of each array
    let indexA = 0;
    let indexB = 0;

    // While there are still values in each array...
    while (indexA < arrA.length || indexB < arrB.length) {
        // O(n)
        // Compare the first values of each array
        // Add the smaller value to the return array
        // Move the pointer to the next value in that array
        if (indexA === arrA.length) {
            merged.push(arrB[indexB]);
            indexB++;
        } else if (indexB === arrB.length) {
            merged.push(arrA[indexA]);
            indexA++;
        } else if (arrA[indexA] < arrB[indexB]) {
            merged.push(arrA[indexA]);
            indexA++;
        } else if (arrB[indexB] < arrA[indexA]) {
            merged.push(arrB[indexB]);
            indexB++;
        }
    }

    // Return the return array
    // return [.... something] O(n) O(2n)
    return merged;
}

module.exports = [merge, mergeSort];
