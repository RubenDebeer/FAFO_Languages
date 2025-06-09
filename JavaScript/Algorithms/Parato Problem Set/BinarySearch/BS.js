const nums = [-1, 0, 2, 4, 6, 8];
const search = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {

        let middle = left + Math.floor((right - left) / 2);
        //[-1,0,2,4,6,8]
        if (numbers[middle] > target) right = middle - 1;
        if (numbers[middle] < target) {
            left = middle + 1;
        } else {
            return middle
        }
    }
    return -1
}