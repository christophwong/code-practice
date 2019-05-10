function buildFlippedObject(obj, count, type) {
  while (count > 0) {
    if (!obj[count]) {
      obj[count] = [type];
    } else {
      obj[count] = obj[count].concat(type);
    }
    count--;
  }
  return obj;
}
function getTypesPerCountInclusive(countPerType) {
  let flippedObj = {};
  Object.keys(countPerType).forEach(type => {
    const count = countPerType[type];
    flippedObj = Object.assign(
      flippedObj,
      buildFlippedObject(flippedObj, count, type)
    );
  });
  return flippedObj;
}

// a function that returns the max number of unique types after half is removed
function solution(T) {
  const length = T.length;
  
  if (length < 2 || length % 2 == 1) {
    throw new Error("Array must adhere to even length and size limits.");
  }
  
  const leftOverLength = length / 2
  const set = new Set(T)
  const setSize = set.size

  // let countPerType = {};
  // let maxCount = 0
  // T.forEach(type => {
  //   type = type.toString();
  //   if (countPerType[type]) {
  //     const count = countPerType[type] + 1;
  //     countPerType[type] = count;
  //     maxCount = count > maxCount ? count : maxCount
  //   } else {
  //     countPerType[type] = 1;
  //   }
  // });
  // typesPerCountInclusive = getTypesPerCountInclusive(countPerType);
  // typesPerCountInclusive[maxCount]


  return setSize < leftOverLength ? setSize : leftOverLength
}

module.exports = {
  solution
};
