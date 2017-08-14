describe("Note list", function() {
  var noteList = new NoteList();

  it("starts with an empty array", function() {
    assert.isTrue(noteList.notes.length === 0);
  });
  it("can add a new note model to its array", function() {
    noteList.addNote("test");
    assert.isTrue(noteList.notes.length === 1);
  });
});
