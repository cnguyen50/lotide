const assertArrays = require('../assertArraysEqual');

([1, 2, 3], [1, 2, 3]), true;
([1, 2, 3], [3, 2, 3]), false;