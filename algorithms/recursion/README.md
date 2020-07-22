# Recursion
Recursion is a concept of when a function calls itself within the function. A recursive function consists of 2 rules: it MUST have a base case and a recursive step. A base case is the recurisve function's exit condition, without it the function will infinitely call until a stack overflow is reached. Using recursion, we can write cleaner code.


## Iteration vs. Recursion
Anything that can be done recursively can be done iteratively.\
\
Sometimes, recursion will be less efficient than iteratively. An example of this can be found in fibonacci where there are 2 recursive calls for every stack. As the number of stacks increase, the time it takes to solve the problem will become extremely slow. The time complexity of this function will effectively reach O(2^n) where as the iterative version would be O(n).\
\
However, some problems are better off solved recursively than iteratively. For example, sorting algorithms and tree/graph traversals will be much harder to implement using iteration than with recursion.