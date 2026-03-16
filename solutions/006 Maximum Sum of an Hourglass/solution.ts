function maxSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let max = 0;

    for (let i = 0; i <= m - 3; i++) {
        for (let j = 0; j <= n - 3; j++) {
            const sum = grid[i][j] + grid[i][j + 1] + grid[i][j + 2]
                + grid[i + 1][j + 1]
                + grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2];
            max = Math.max(max, sum);
        }
    }
    return max;
};