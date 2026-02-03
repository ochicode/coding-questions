function maxScoreIndices(nums: number[]): number[] {
    let onesOnRight = 0;
    for (const num of nums) {
        if (num === 1) onesOnRight++;
    }

    let zerosOnLeft = 0;
    let maxScore = 0;
    let result: number[] = [];

    for (let i = 0; i <= nums.length; i++) {
        const score = zerosOnLeft + onesOnRight;

        if (score > maxScore) {
            maxScore = score;
            result = [i];
        } else if (score === maxScore) {
            result.push(i);
        }

        if (i < nums.length) {
            if (nums[i] === 0) {
                zerosOnLeft++;
            } else {
                onesOnRight--;
            }
        }
    }

    return result;
};