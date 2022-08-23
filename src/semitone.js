class JamBuddy {
  constructor() {
    this.notes = [
      "A",
      ["A#", "Bb"],
      "B",
      "C",
      ["C#", "Db"],
      "D",
      ["D#", "Eb"],
      "E",
      "F",
      ["F#", "Gb"],
      "G",
      ["G#", "Ab"],
    ];
    this.currentSelectedNotes = [];
    this.streak = 0;
  }

  selectNotes() {
    for (let i = 0; i < 2; i++) {
      this.currentSelectedNotes[i] =
        this.notes[Math.floor(Math.random() * this.notes.length)];

      const currentSelectedNotesCopy = this.currentSelectedNotes[i];
      if (Array.isArray(this.currentSelectedNotes[i])) {
        this.currentSelectedNotes[i] =
          currentSelectedNotesCopy[Math.floor(Math.random() * 2)];
      }
    }
    return this.currentSelectedNotes;
  }

  checkAnswer(answer) {
    let positionOfSecondNote =
      findPosition(this.notes, this.currentSelectedNotes[0]) + answer;

    if (positionOfSecondNote >= this.notes.length) {
      positionOfSecondNote =
        answer -
        (this.notes.length -
          findPosition(this.notes, this.currentSelectedNotes[0]));
    }

    let found = false;

    if (Array.isArray(this.notes[positionOfSecondNote])) {
      if (
        this.notes[positionOfSecondNote][0] === this.currentSelectedNotes[1] ||
        this.notes[positionOfSecondNote][1] === this.currentSelectedNotes[1]
      ) {
        found = true;
      }
    } else if (
      typeof this.notes[positionOfSecondNote] === "string" &&
      this.notes[positionOfSecondNote] === this.currentSelectedNotes[1]
    ) {
      found = true;
    }

    if (found) this.streak++;
    else this.streak = 0;

    return found;
  }

  getNumberOfSemitones() {
    const posOfFirstNote = findPosition(
      this.notes,
      this.currentSelectedNotes[0]
    );
    const posOfSecondNote = findPosition(
      this.notes,
      this.currentSelectedNotes[1]
    );

    if (posOfSecondNote - posOfFirstNote >= 0) {
      if (posOfSecondNote - posOfFirstNote === 0) {
        return [0, 12];
      }
      return posOfSecondNote - posOfFirstNote;
    }
    return 12 + (posOfSecondNote - posOfFirstNote);
  }
}

function findPosition(arr, el) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let f = 0; f < arr[i].length; f++) {
        if (arr[i][f] === el) return i;
      }
    } else if (arr[i] === el) return i;
  }
  return -1;
}

module.exports = { JamBuddy };
