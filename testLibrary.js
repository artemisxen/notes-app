(function(exports) {
  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
      else console.log("         The test has passed!");
    }
  };

  var it = function(description, test) {
    console.log("  " + description);
    test();
  };

  var describe = function(description, testBlock) {
    console.log(description);
    testBlock();
  };

  exports.assert = assert;
  exports.it = it;
  exports.describe = describe;

})(this);
