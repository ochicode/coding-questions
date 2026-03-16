function findDiagonalOrder(mat: number[][]): number[] {
    const m = mat.length;
    const n = mat[0].length;
    const result: number[] = [];

    for (let d = 0; d < m + n; d++) {
        if (d % 2 === 0) {
            let row = Math.min(d, m - 1);
            let col = d - row;
            while (row >= 0 && col < n) {
                result.push(mat[row][col]);
                row--;
                col++;
            }
        }
        else {
            let col = Math.min(d, n - 1);
            let row = d - col;
            while (col >= 0 && row < m) {
                result.push(mat[row][col]);
                row++;
                col--;
            }
        }
    }
    return result;
};