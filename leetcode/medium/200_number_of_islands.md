# 200. Number of Islands
* Difficulty: Medium
* [Link to Problem](https://leetcode.com/problems/number-of-islands/)

## Problem

Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

Example 2:

```
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```


## Whiteboard


## Solutions

```javascript
const numIslands = function(grid) {
  // initialize a count of islands
  let count = 0;
  
  const dfs = (x, y) => {
    // base case - if the position falls outside of grid or the position on grid is not an island
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[x].length || grid[x][y] === "0") return;
    
    // set the current position to not an island to prevent duplicate counting
    grid[x][y] = "0";
    
    // traverse through each direction (top, bottom, right, left)
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }
  
  // iterate through the each row
  for (let x = 0; x < grid.length; x++) {
    // iterate through each element in a row
    for (let y = 0; y < grid[x].length; y++) {
      // increment the count and traverse through the grid if the current position is an island
      if (grid[x][y] === "1") {
        count++;
        dfs(x, y);
      }
    }
  }
  
  // return the count
  return count;
};
```