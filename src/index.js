module.exports = function towelSort(matrix) {
    let out = [];

    if (arguments.length != 1) {
        return out;
    }

    for (let i = 0; i < matrix.length; i++) {
        if (Array.isArray(matrix[i]) && i % 2 == 1) {
            out.push(matrix[i].reverse());
        } else {
            out.push(matrix[i]);
        }
    }

    return out.flat();
};
