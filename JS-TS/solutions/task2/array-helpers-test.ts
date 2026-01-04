import { mapArray, filterArray, reduceArray, partition, groupBy } from './array-helpers';

console.log(mapArray([1,2,3], (n,i) => n + i));

console.log(filterArray([1,2,3,4], (n) => n % 2 === 0));

console.log(reduceArray([1,2,3], (acc,n) => acc + n, 0));

const [evens, odds] = partition([1,2,3,4], (n) => n % 2 === 0);
console.log(evens, odds);

console.log(groupBy(['hi', 'hello', 'yo'], w => w.length));
