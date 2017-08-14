describe("Notes", function() {
  it("Stores text in a note", function() {
    var note = new Note("example text");
    assert.isTrue(note.getText() === "example text");
  });
});
