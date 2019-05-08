
//Test Case
function testCase(listOfTestCases) {
  for (testInputs of listOfTestCases) {
      const answer = testInputs[0]
      const expected = testInputs[1]
    console.log("Asserting ");
    if (answer == expected) {
      console.log("===SUCESS!===");
    } else {
      console.log(
        `Expect ${answer} to equal ${expected}`
      );
      console.error(
        `ERR!!!expected \n==\n ${
          testInputs[1]
        } \n== \n but instead got \n==\n ${answer}\n==\n`
      );
    }
  }
}

module.exports = {
    testCase
}