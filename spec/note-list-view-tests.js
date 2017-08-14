describe("Note list view", function() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  var HTMLstring = "<ul><li><div>test</div></li><li><div>test 2</div></li></ul>";
  var HTMLstringEmpty = "<ul></ul>";


  it("takes a note list model upon instation", function() {
    assert.isTrue(noteListView.list === noteList);
  });

  describe("empty NoteList", function() {
    it("returns an empty unordered list", function() {
      assert.isTrue(noteListView.parseNotes() === HTMLstringEmpty);
    });
  });

  describe("List with several notes", function() {
    it("returns an HTML string", function() {
      noteList.addNote("test");
      noteList.addNote("test 2");
      assert.isTrue(noteListView.parseNotes() === HTMLstring);
    });
  });
});
