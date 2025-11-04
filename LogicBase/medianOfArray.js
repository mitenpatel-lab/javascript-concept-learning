var findMedianSortedArrays = function (nums1, nums2) {

    const mergeArray = nums1.concat(nums2);
    const sortedArray = mergeArray.sort((a, b) => a - b);
    if (sortedArray.length % 2 != 0)
        return sortedArray[Math.round(sortedArray.length / 2) - 1];
    else {
        const median = ((sortedArray[(sortedArray.length / 2) - 1]) + (sortedArray[sortedArray.length / 2])) / 2
        return median;
        console.log(median);
    }
};