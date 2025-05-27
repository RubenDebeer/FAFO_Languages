const numbers = [2, 4, 1, 9, 20, 50, 87, 43, 7];

const sort_values = (values) => {
    for(let i = 0; i < values.length ; i++){
        for(let j = 1; j < values.length; j++){
            if(values[j] < values[j-1]){
                let tempValue = values[j];
                values[j] = values[j-1];
                values[j-1] = tempValue;
            }
        }
    }
    return values;
}

const search_Binary = (search_term, values) => {
    
    const sorted_values = sort_values(values);

    let left = 0;
    let right = sorted_values.length - 1;

    while (left <= right) {

        let middle = Math.floor((left + right) / 2)
        let middle_value = sorted_values[middle];

        if (middle_value === search_term) {
            return true;
        }

        if (middle_value < search_term) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return false
}

console.log(search_Binary(21,numbers));