const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result1 = tail([5,6,7])
assertEqual(result1[0], 6) 
assertEqual(result1[1], 7) 
assertEqual(result1.length, 2) 