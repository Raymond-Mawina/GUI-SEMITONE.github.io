const jsdom = require("jsdom");
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf8");
const { JSDOM } = jsdom;
const { document } = new JSDOM(index).window;
global.document = document;

const { helperVariable } = require("./spec_helper_variables");
const { jamBuddySession } = require("../src/dom_manipulation");

describe("getSelectedNotes", function () {
  it("should display selected notes when 'Get Random notes' button is clicked", function () {
    expect(global.document.getElementById("notes").innerHTML).toBe("");
    helperVariable.getNotesButton.click();
    expect(
      /(\w|\w(#|b))(\,)(\w|\w(#|b))/g.test(helperVariable.notes.innerText)
    ).toBe(true);
  });
});

describe("getAnswer", function () {
  it("should display message 'You got it right. Well Done', when the 'Get answer' button is clicked and the answer provided is correct", function () {
    jamBuddySession.currentSelectedNotes = "G,G".split(",");
    helperVariable.answer.value = "0";
    helperVariable.getAnswerButton.click();
    expect(helperVariable.message.innerText).toBe(
      "You got it right. Well Done"
    );
  });

  it("should display message 'Wrong answer! Try again', when the 'Get answer' button os clicked and the answer provided is incorrect", function () {
    helperVariable.getNotesButton.click();
    jamBuddySession.currentSelectedNotes = "G,G".split(",");
    helperVariable.answer.value = "1";
    helperVariable.getAnswerButton.click();
    expect(helperVariable.message.innerText).toBe("Wrong answer! Try again");
  });

  it("should display message 'Please enter a number!', when the 'Get answer' button is clicked and no answer is provided", function () {
    helperVariable.getNotesButton.click();
    jamBuddySession.currentSelectedNotes = "G,G".split(",");
    helperVariable.answer.value = "";
    helperVariable.getAnswerButton.click();
    expect(helperVariable.message.innerText).toBe("Please enter a number!");
  });
});

describe("revealAnswer", function () {
  it("should reveal the all notes with currentlySelected notes highlighted", function () {
    jamBuddySession.currentSelectedNotes = "G,C".split(",");
    helperVariable.revealAnswerButton.click();

    expect(helperVariable.allNotes.length).toEqual(17);

    for (note of helperVariable.allNotes) {
      if (note.innerText === "G" || note.innerText === "C")
        expect(note.style.backgroundColor).toEqual("green");
    }
  });

  it("should reveal the semitone difference between the two currentlySelected notes", function () {
    jamBuddySession.currentSelectedNotes = "G,C".split(",");
    helperVariable.revealAnswerButton.click();

    helperVariable.revealAnswerButton.click();
    expect(global.document.getElementById("revealedAnswer").innerText).toBe(
      "The correct answer is 5"
    );
  });
});
