/*
You’re allowed to eat from one pile per hour.
You eat at a constant speed k bananas per hour.
If a pile has fewer than k bananas, you eat all of it in one hour.
The goal is to find the smallest possible value of k so that you can finish all piles in h hours.*/


//[1,4,3,2]
// L k    R

const minEatingSpeed = (piles, h) => {
    let l = 1;
    let r = Math.max(...piles);
    let res = r;

    while (l <= r) {
        const k = l + Math.floor((r - l) / 2);

        let totalTime = 0;
        for (const p of piles) {
            totalTime += Math.ceil(p / k);
        }
        if (totalTime <= h) {
            res = k;
            r = k - 1;
        } else {
            l = k + 1;
        }
    }
    return res;
}