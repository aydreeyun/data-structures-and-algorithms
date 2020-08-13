# 253. Meeting Rooms II
* Difficulty: Medium
* [Link to Problem](https://leetcode.com/problems/meeting-rooms-ii/)

## Problem
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

Example 1:

```
Input: [[0, 30],[5, 10],[15, 20]]
Output: 2
```

Example 2:

```
Input: [[7,10],[2,4]]
Output: 1
```


## Whiteboard


## Solutions

```javascript
const minMeetingRooms = function(intervals) {
  // create an array sorted by the intervals by starting times
  const starts = intervals.slice().sort((a, b) => a[0] - b[0]);
  // create an array sorted by the intervals by ending times
  const ends = intervals.slice().sort((a, b) => a[1] - b[1]);
  
  // initialize how many rooms are needed
  let rooms = 0;
  // initialize index if a meeting has ended
  let ended = 0;
  
  // iterate through the intervals array
  for (let i = 0; i < intervals.length; i++) {
    // increment the number of rooms if the starting time is less than the current meeting's ending time
    if (starts[i][0] < ends[ended][1]) rooms++;
    // if start time is greater than the current meeting's ending time, the meeting has ended (increment the ended index)
    else ended++;
  }
  
  // return the amount of rooms
  return rooms;
};
```