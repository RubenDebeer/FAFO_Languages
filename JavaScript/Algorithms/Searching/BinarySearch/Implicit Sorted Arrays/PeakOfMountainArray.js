// 0 1 2 3 2 1 0
// Feasible function  arr[i] > arr[i+1]
// F F F T F F F

// posi > posi P1

const findPeak = ( elements ) => {
    let left = 0; 
    let right = elements.length-1;
    let index = -1;

    while( left <= right ){
        let mid = left + Math.floor((right-left)/2);

        if (elements[mid] >= elements[mid + 1]){
            index = mid;
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return left;
}

let arra = [0,1,2,3,2,1,0];
//          1 2 3
console.log(findPeak([10, 20, 15, 2, 23, 90, 67]));

console.log(arra[2]);

