(function(exports) {
  function NoteList(noteConstructor = Note) {
    this.notes = [];
    this.constructor = noteConstructor;
  };

  NoteList.prototype.addNote = function(contents) {
    var note = this.constructor;
    this.notes.push(new note(contents));
  }

  NoteList.prototype.returnNotes = function() {
    return this.notes;
  };
  exports.NoteList = NoteList;
})(this);
