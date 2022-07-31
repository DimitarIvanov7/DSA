var islandPerimeter = function (grid, sc, sr, memo = {}) {
  console.log(sc + " " + sr);
  if (sc + "/" + sr in memo) return memo[sc + "/" + sr];
  if (sc < 0 || sr < 0) return 1;

  if (grid[sc] === undefined || grid[sc][sr] === undefined) return 1;

  if (grid[sc][sr] === 0) return 1;

  memo[sc + "/" + sr] = 0;

  return (
    islandPerimeter(grid, sc + 1, sr, memo) +
    islandPerimeter(grid, sc - 1, sr, memo) +
    islandPerimeter(grid, sc, sr + 1, memo) +
    islandPerimeter(grid, sc, sr - 1, memo)
  );
};

const data = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
];

const answer = islandPerimeter(data, 0, 1);

console.log(answer);
