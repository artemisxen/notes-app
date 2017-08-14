(function(exports) {

  var describe = function(description, testBlock) {
    console.log(description);
    testBlock();
    return description;
  };

  var it = function(description, test) {
    console.log("  " + description);
    test();
    return description;
  };

  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
      else {
        var text = "      The test has passed!"
        console.log(text);
        return text;
      }
    }
  };

  var MockObject = function(name) {
    arguments[1].forEach(function(func) {
      console.log(func);
      MockObject.prototype.func = function() {};
    });
  };

  exports.assert = assert;
  exports.it = it;
  exports.describe = describe;
  exports.MockObject = MockObject;

})(this);
