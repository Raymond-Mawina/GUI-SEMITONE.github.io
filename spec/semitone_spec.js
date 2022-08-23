const { JamBuddy } = require("../src/semitone.js");

const jamSession = new JamBuddy();
describe("selectNotes", function () {
  it("should return an array when called", function () {
    expect(Array.isArray(jamSession.selectNotes())).toEqual(true);
  });

  it("should return an array that has two elements when called", function () {
    expect(jamSession.selectNotes().length).toEqual(2);
  });
});

describe("checkAnswer", function () {
  it("should return a boolean false, when called with number parameter '5' and currentSelectedNotes is set to ['A', 'G']", function () {
    jamSession.currentSelectedNotes = ["A", "G"];
    expect(jamSession.checkAnswer(5)).toBe(false);
    expect(jamSession.streak).toEqual(0);
  });

  it("should return a boolean true, when called with number parameter '4' and currentSelectedNotes is set to ['G', 'B']", function () {
    jamSession.currentSelectedNotes = ["G", "B"];
    expect(jamSession.checkAnswer(4)).toBe(true);
    expect(jamSession.streak).toEqual(1);
  });

  it("should return a boolean true, when called with number parameter '0' and currentSelectedNotes is set to ['G', 'G']", function () {
    jamSession.currentSelectedNotes = ["G", "G"];
    expect(jamSession.checkAnswer(0)).toBe(true);
    expect(jamSession.streak).toEqual(2);
  });

  it("should return a boolean true, when called with number parameter '' and currentSelectedNotes is set to  ['A#/Bb', 'C#/Db']", function () {
    jamSession.currentSelectedNotes = ["A#", "Db"];
    expect(jamSession.checkAnswer(3)).toBe(true);
    expect(jamSession.streak).toEqual(3);
  });
});

describe("getNumberOfSemitones", function () {
  it("should return an array of length 2, [0,12]", function () {
    jamSession.currentSelectedNotes = ["G", "G"];
    expect(Array.isArray(jamSession.getNumberOfSemitones())).toBe(true);
    expect(jamSession.getNumberOfSemitones().length).toBe(2);
    expect(jamSession.getNumberOfSemitones()).toEqual([0, 12]);
  });
  it("should return an integer 3", function () {
    jamSession.currentSelectedNotes = ["A#", "Db"];
    expect(jamSession.getNumberOfSemitones()).toEqual(3);
  });
});
