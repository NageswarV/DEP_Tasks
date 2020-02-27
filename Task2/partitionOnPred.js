
/*
Write a function which partitions a list of items based on a given predicate.
After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts) are items for which the predicate function returned false (resp. true).
NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) should be preserved relative to each other.
For convenience and utility, the partition function should return the boundary index. In other words: the index of the first T value in items.
*/


// partition the items array so that all values for which pred returns true are
// at the end, returning the index of the first true value
function partitionOn(pred, items) {
var itemsEven=items.filter(pred);
itemsOdd = items.filter(function(val){
 return !pred(val);
})
val=itemsOdd.length;
itemsNew=itemsOdd.concat(itemsEven);
items.length=0;
for(i=0;i<itemsNew.length;i++)
  items.push(itemsNew[i]);
return val;
}