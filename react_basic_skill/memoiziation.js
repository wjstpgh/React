function addTo80(n){
  console.log('add');
  return n+80;
}

let cache={};
function memoizedAddto80(n){
  if (n in cache){
    console.log('its memo');
    return cache[n];
  }
  else {
    console.log('not memo');
    cache[n]=n+80;
    return cache[n];
  }
}

console.log(memoizedAddto80(5));
console.log(memoizedAddto80(6));