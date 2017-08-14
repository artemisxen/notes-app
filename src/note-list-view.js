(function(exports) {
  function NoteListView(noteList){
    this.list = noteList;
  }

  NoteListView.prototype.parseNotes = function () {
    var string = "<ul>";
    this.list.returnNotes().forEach(function(note) {
      string += "<li><div>" + note.getText() + "</div></li>";
    });
    string += "</ul>";
    return string;
  };


exports.NoteListView = NoteListView;
})(this);
