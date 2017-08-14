describe("Notes", function() {
  var note = new Note("example text");
  it("Stores text in a note", function() {
    assert.isTrue(note.getText() === "example text");
  });
});
