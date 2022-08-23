const helperVariable = {
  message: global.document.getElementById("message"),
  answer: global.document.getElementById("answer"),
  explanation: global.document.getElementById("explanation"),
  getAnswerButton: global.document.getElementById("getAnswer"),
  getNotesButton: global.document.getElementById("getNotesButton"),
  revealAnswerButton: global.document.getElementById("revealAnswerButton"),
  notes: global.document.getElementById("notes"),
  streak: global.document.getElementById("streak"),
  highlightedNotes: global.document.getElementById("highlightedNotes"),
  allNotes: global.document.getElementsByClassName("allNotes"),
};

module.exports = { helperVariable };
