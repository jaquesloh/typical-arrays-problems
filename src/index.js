exports.max = function max(num) {
    if (!num || !num.length) {
        return 0;
    }
    let maxNum = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > maxNum) {
            maxNum = num[i];
        }
    }
    return maxNum;
};

exports.min = function min(num) {
    if (!num || !num.length) {
        return 0;
    }
    let minNum = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] < minNum) {
            minNum = num[i];
        }
    }
    return minNum;
};

exports.avg = function avg(num) {
    if (!num || !num.length) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum / num.length;
};
