const { JamBuddy } = require("./semitone");
const { helperVariable } = require("./helper_variables");

const jamBuddySession = new JamBuddy();
helperVariable.notes.innerText = jamBuddySession.selectNotes().toString();

function getSelectedNotes() {
  helperVariable.highlightedNotes.innerHTML = "";
  helperVariable.revealedAnswer.innerHTML = "";
  helperVariable.notes.innerText = jamBuddySession.selectNotes().toString();
  helperVariable.getAnswerButton.disabled = false;
  helperVariable.message.innerText = "";
  helperVariable.answer.value = "";
}

function getResult() {
  if (helperVariable.answer.value !== "") {
    const result = jamBuddySession.checkAnswer(
      parseInt(helperVariable.answer.value)
    );
    if (result) {
      helperVariable.message.innerText = "You got it right. Well Done";
      helperVariable.message.className = "correctAnswerText";
      helperVariable.revealAnswerButton.click();
      helperVariable.streak.innerText = `Current Streak ${jamBuddySession.streak}`;
    } else {
      helperVariable.message.innerText = "Wrong answer! Try again";
      helperVariable.message.className = "incorrectAnswerText";
      helperVariable.answer.value = "";
      helperVariable.streak.innerText = `Current Streak ${jamBuddySession.streak}`;
    }
  } else {
    helperVariable.message.innerText = "Please enter a number!";
    helperVariable.message.className = "noAnswerText";
    helperVariable.streak.innerText = `Current Streak ${jamBuddySession.streak}`;
  }
}

function createNote(nameOfNote, notess) {
  const noteEl = document.createElement("strong");
  noteEl.innerText = nameOfNote;
  noteEl.style.color = "aliceblue";
  noteEl.style.padding = "2px";
  noteEl.style.marginLeft = "2px";
  noteEl.className = "allNotes";
  if (jamBuddySession.currentSelectedNotes.includes(nameOfNote)) {
    noteEl.style.backgroundColor = "green";
  }
  notess.appendChild(noteEl);
}

function revealAnswer() {
  helperVariable.getAnswerButton.disabled = "true";
  helperVariable.highlightedNotes.innerHTML = "";
  helperVariable.revealedAnswer.style.color = "aliceblue";
  helperVariable.revealedAnswer.style.fontWeight = "bold";
  helperVariable.revealedAnswer.style.fontSize = "20px";
  helperVariable.revealedAnswer.innerText = `The correct answer is ${jamBuddySession.getNumberOfSemitones()}`;

  for (const note of jamBuddySession.notes) {
    if (Array.isArray(note)) {
      for (const innerNote of note) {
        createNote(innerNote, helperVariable.highlightedNotes);
      }
    } else createNote(note, helperVariable.highlightedNotes);
  }
}

helperVariable.revealAnswerButton.addEventListener("click", revealAnswer);
helperVariable.getNotesButton.addEventListener("click", getSelectedNotes);
helperVariable.getAnswerButton.addEventListener("click", getResult);

module.exports = { jamBuddySession };
