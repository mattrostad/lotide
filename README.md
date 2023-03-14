# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mattrostad/lotide`

**Require it:**

`const _ = require('@mattrostad/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual()`: A function that takes in 2 values and returns true if they are equal and false otherwise.
* `head()`: A function that takes in an array and returns the first element in the array.
* `tail()`: A function that takes in an array and returns everything except the first element of the array.
* `eqArrays()`: A function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.
* `assertArraysEqual()`: A function that prints an appropriate message after comparing the two arrays.
* `without()`: A function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.
* `flatten()`: A function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.
* `middle()`: A function that takes in an array and returns middle most element of the array.
* `countOnly()`: A function that takes in a collection of items and returns a specific subset of those items.
* `countLetters()`: A function that takes in a sentence and returns a count of each of the letters in the sentence.
* `letterPositions()`: A function that takes in a string and returns all indices of letter positions in the string.
* `findKeyByValue()`: A function that takes in an object and a value and returns the first key that corresponds to that value.
* `eqObjects()`: A function that takes in 2 objects and return true if they are equal and false otherwise.
* `assertObjectsEqual()`: A function that takes in 2 objects and returns true if they are equal and false otherwise.
* `map()`: A function that takes in an array and a callback and returns a new array based on the results of the callback on each item in the array.
* `takeUntil()`: A function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.
* `findKey()`: A function that takes in an object and callback and returns the first key that meets the criteria specified in callback.
