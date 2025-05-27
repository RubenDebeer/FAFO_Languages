const numbers = [2, 4, 1, 9, 20, 50, 87, 43, 2];

const search = (list, term) => {
    let i = 0;
    while (i < list.length) {
        if (list[i] == term) {
            return true
        }
        i++;
    }
    return false;
}

const searchFaster = (list, term) => {
    let index = 0;
    do {
        if (list[index] == term) {
            return true;
        }
        index++;
    }
    while (index < list.length)
    return false;
}

// Safer option without having to role the dice with a while 
const searchSafer = (list, term) => {
    for (number of list) {
        if (number == term) {
            return true;
        }
    }
    return false;
}

console.log(searchSafer(numbers, 2));