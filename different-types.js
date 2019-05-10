// a function that returns the max number of unique types after half is removed
function solution(T) {
  const length = T.length;
  
  if (length < 2 || length % 2 == 1) {
    throw new Error("Array must adhere to even length and size limits.");
  }
  
  const leftOverLength = length / 2
  const set = new Set(T)
  const setSize = set.size

  return setSize < leftOverLength ? setSize : leftOverLength
}

module.exports = {
  solution
};
