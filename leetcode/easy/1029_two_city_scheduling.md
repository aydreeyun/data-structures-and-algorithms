# 1029. Two City Scheduling
* Difficulty: Easy
* [Link to Problem](https://leetcode.com/problems/two-city-scheduling/)

## Problem
There are 2N people a company is planning to interview. The cost of flying the i-th person to city A is costs[i][0], and the cost of flying the i-th person to city B is costs[i][1].

Return the minimum cost to fly every person to a city such that exactly N people arrive in each city.

Example 1:

```
Input: [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 to have half the people interviewing in each city.
```
 

Note:
* 1 <= costs.length <= 100
* It is guaranteed that costs.length is even.
* 1 <= costs[i][0], costs[i][1] <= 1000


## Whiteboard


## Solutions

```javascript
const twoCitySchedCost = function(costs) {
  // set a total cost for the costs of the first city
  let totalCost = 0;
  // record the difference between the second and first city in an array;
  const refunds = [];
  
  // iterate through the cost array
  for (let i = 0; i < costs.length; i++) {
    // add the first city cost to total cost 
    totalCost += costs[i][0];
    
    // push the difference between second and first city to refunds array
    refunds.push(costs[i][1] - costs[i][0]);
  }
  
  // sort the refunds array ascending
  refunds.sort((a, b) => a - b);
  
  // iterate through the refunds array HALFWAY 
  for (let i = 0; i < refunds.length / 2; i++) {
    // add the differences to the total cost to decrease
    totalCost += refunds[i];
  }
  
  // return the total cost
  return totalCost;
};
```