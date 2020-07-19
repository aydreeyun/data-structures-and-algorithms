# Data Structures and Algorithms

## Introduction
Data structures and algorithms (__DS&A__) are pivotal when it comes to technical interviews, especially at Big N companies and Unicorns. However, these concepts are often very difficult to grasp due to the vast amount of information needed to fully understand each data structure.\
\
This repo will serve as a hub for all information regarding data structures and algorithms. Whether you have a big interview coming up or you want to rejog your memory on these concepts, having all the information stored in an organized repo will help immensely with this process. I will also be adding sample interview questions from Big N Companies and popular LeetCode questions.\
\
All topics covered will be written in ___JavaScript___.

## Big O Notation
As programmers, we need to determine if certain algorithms are too costly on time or space as applications scale larger. We use Big O Notation to measure the __time__ and __space__ complexity of an algorithm to determine if it is efficient. Big O ALWAYS measures the worst case scenario for an algorithm in order to best prepare for inefficiency. Each line of code must be measured, then we drop all constants and select the most dominant term to determine the Big O Notation.\
\
Below is a list of Big O Notations ordered from most efficient to least:
* __CONSTANT__ - O(1)
  * No loops involved
* __LOGARITHMIC__ - O(logn)
  * Searching algorithms such as _Binary Search_ on sorted arrays, divide and conquer
* __LINEAR__ - O(n)
  * Iterations - for and while loops
* __LOGLINEAR__ - O(nlogn)
  * Most efficient sorting algorithms such as _Merge Sort_ and _Quick Sort_* (Technically O(n^2) but extremely rare worst case)
* __QUADRATIC__ - O(n^2)
  * Involves nested loops, inefficient sorting algorithm such as _Bubble Sort_
* __EXPONENTIAL__ - O(2^n)
  * Recursive algorithm that solves a problem of size n such as _Fibonacci_
* __FACTORIAL__ - O(n!)
  * Algorithms that create loops for every element such as _Permutations_

Here is a [link](https://www.bigocheatsheet.com/) to a cheat sheet that provides more information on Big O.

## Data Structures Covered
* Arrays
* Hash Tables
* Linked Lists (Singly and Doubly)
* Stacks
* Queues
* Trees
  * Heaps
  * Tries
* Graphs

## Algorithms Covered
* Recursion
  * Factorial
  * Fibonacci
* Sorting
  * Bubble Sort
  * Selection Sort
  * Insertion Sort
  * Merge Sort
  * Quick Sort
* Searching
  * DFS/BFS
  * Dijkstra's
* Dynamic Programming
  * Memoization
