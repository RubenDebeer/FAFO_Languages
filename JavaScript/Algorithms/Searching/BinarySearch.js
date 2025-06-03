const numbers = [2, 4, 1, 9, 20, 50, 87, 43, 7];

const sort_values = (values) => {
    for (let i = 0; i < values.length; i++) {
        for (let j = 1; j < values.length; j++) {
            if (values[j] < values[j - 1]) {
                let tempValue = values[j];
                values[j] = values[j - 1];
                values[j - 1] = tempValue;
            }
        }
    }
    return values;
}

const binary_Search = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);

        if (target > numbers[middle]) {
            left = middle + 1; // move right
        } else if (target < numbers[middle]) {
            right = middle - 1; // move left
        } else {
            return middle; // target found
        }
    }

    return -1; // target not found
};
const nums = [-1, 0, 2, 4, 6, 8];
const search = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {

        let middle = left + Math.floor((right - left) / 2);
        //      [-1,0,2,4,6,8]
        if (numbers[middle] > target) right = middle - 1;
        if (numbers[middle] < target) {
            left = middle + 1;
        } else {
            return middle
        }

    }
    return -1
}