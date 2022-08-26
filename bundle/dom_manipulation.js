/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom_manipulation.js":
/*!*********************************!*\
  !*** ./src/dom_manipulation.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { JamBuddy } = __webpack_require__(/*! ./semitone */ \"./src/semitone.js\");\r\nconst { helperVariable } = __webpack_require__(/*! ./helper_variables */ \"./src/helper_variables.js\");\r\n\r\nconst jamBuddySession = new JamBuddy();\r\nhelperVariable.notes.innerText = jamBuddySession.selectNotes().toString();\r\n\r\nfunction getSelectedNotes() {\r\n  helperVariable.highlightedNotes.innerHTML = \"\";\r\n  helperVariable.revealedAnswer.innerHTML = \"\";\r\n  helperVariable.notes.innerText = jamBuddySession.selectNotes().toString();\r\n  helperVariable.getAnswerButton.disabled = false;\r\n  helperVariable.message.innerText = \"\";\r\n  helperVariable.answer.value = \"\";\r\n}\r\n\r\nfunction getResult() {\r\n  if (helperVariable.answer.value !== \"\") {\r\n    const result = jamBuddySession.checkAnswer(\r\n      parseInt(helperVariable.answer.value)\r\n    );\r\n    if (result) {\r\n      helperVariable.message.innerText = \"You got it right. Well Done\";\r\n      helperVariable.message.className = \"correctAnswerText\";\r\n      helperVariable.revealAnswerButton.click();\r\n      helperVariable.streak.innerText = `Current Streak ${jamBuddySession.streak}`;\r\n    } else {\r\n      helperVariable.message.innerText = \"Wrong answer! Try again\";\r\n      helperVariable.message.className = \"incorrectAnswerText\";\r\n      helperVariable.answer.value = \"\";\r\n      helperVariable.streak.innerText = `Current Streak ${jamBuddySession.streak}`;\r\n    }\r\n  } else {\r\n    helperVariable.message.innerText = \"Please enter a number!\";\r\n    helperVariable.message.className = \"noAnswerText\";\r\n    helperVariable.streak.innerText = `Current Streak ${jamBuddySession.streak}`;\r\n  }\r\n}\r\n\r\nfunction createNote(nameOfNote, notess) {\r\n  const noteEl = document.createElement(\"strong\");\r\n  noteEl.innerText = nameOfNote;\r\n  noteEl.style.color = \"aliceblue\";\r\n  noteEl.style.padding = \"2px\";\r\n  noteEl.style.marginLeft = \"2px\";\r\n  noteEl.className = \"allNotes\";\r\n  if (jamBuddySession.currentSelectedNotes.includes(nameOfNote)) {\r\n    noteEl.style.backgroundColor = \"green\";\r\n  }\r\n  notess.appendChild(noteEl);\r\n}\r\n\r\nfunction revealAnswer() {\r\n  helperVariable.getAnswerButton.disabled = \"true\";\r\n  helperVariable.highlightedNotes.innerHTML = \"\";\r\n  helperVariable.revealedAnswer.style.color = \"aliceblue\";\r\n  helperVariable.revealedAnswer.style.fontWeight = \"bold\";\r\n  helperVariable.revealedAnswer.style.fontSize = \"20px\";\r\n  helperVariable.revealedAnswer.innerText = `The correct answer is ${jamBuddySession.getNumberOfSemitones()}`;\r\n\r\n  for (const note of jamBuddySession.notes) {\r\n    if (Array.isArray(note)) {\r\n      for (const innerNote of note) {\r\n        createNote(innerNote, helperVariable.highlightedNotes);\r\n      }\r\n    } else createNote(note, helperVariable.highlightedNotes);\r\n  }\r\n}\r\n\r\nhelperVariable.revealAnswerButton.addEventListener(\"click\", revealAnswer);\r\nhelperVariable.getNotesButton.addEventListener(\"click\", getSelectedNotes);\r\nhelperVariable.getAnswerButton.addEventListener(\"click\", getResult);\r\n\r\nmodule.exports = { jamBuddySession };\r\n\n\n//# sourceURL=webpack://raymond-mawina-199-semitone-difference-basic-algorithm-javascript/./src/dom_manipulation.js?");

/***/ }),

/***/ "./src/helper_variables.js":
/*!*********************************!*\
  !*** ./src/helper_variables.js ***!
  \*********************************/
/***/ ((module) => {

eval("const helperVariable = {\r\n  message: document.getElementById(\"message\"),\r\n  answer: document.getElementById(\"answer\"),\r\n  explanation: document.getElementById(\"explanation\"),\r\n  getAnswerButton: document.getElementById(\"getAnswer\"),\r\n  getNotesButton: document.getElementById(\"getNotesButton\"),\r\n  revealAnswerButton: document.getElementById(\"revealAnswerButton\"),\r\n  notes: document.getElementById(\"notes\"),\r\n  streak: document.getElementById(\"streak\"),\r\n  highlightedNotes: document.getElementById(\"highlightedNotes\"),\r\n  revealedAnswer: document.getElementById(\"revealedAnswer\"),\r\n};\r\n\r\nmodule.exports = { helperVariable };\r\n\n\n//# sourceURL=webpack://raymond-mawina-199-semitone-difference-basic-algorithm-javascript/./src/helper_variables.js?");

/***/ }),

/***/ "./src/semitone.js":
/*!*************************!*\
  !*** ./src/semitone.js ***!
  \*************************/
/***/ ((module) => {

eval("class JamBuddy {\r\n  constructor() {\r\n    this.notes = [\r\n      \"A\",\r\n      [\"A#\", \"Bb\"],\r\n      \"B\",\r\n      \"C\",\r\n      [\"C#\", \"Db\"],\r\n      \"D\",\r\n      [\"D#\", \"Eb\"],\r\n      \"E\",\r\n      \"F\",\r\n      [\"F#\", \"Gb\"],\r\n      \"G\",\r\n      [\"G#\", \"Ab\"],\r\n    ];\r\n    this.currentSelectedNotes = [];\r\n    this.streak = 0;\r\n  }\r\n\r\n  selectNotes() {\r\n    for (let i = 0; i < 2; i++) {\r\n      this.currentSelectedNotes[i] =\r\n        this.notes[Math.floor(Math.random() * this.notes.length)];\r\n\r\n      const currentSelectedNotesCopy = this.currentSelectedNotes[i];\r\n      if (Array.isArray(this.currentSelectedNotes[i])) {\r\n        this.currentSelectedNotes[i] =\r\n          currentSelectedNotesCopy[Math.floor(Math.random() * 2)];\r\n      }\r\n    }\r\n    return this.currentSelectedNotes;\r\n  }\r\n\r\n  checkAnswer(answer) {\r\n    let positionOfSecondNote =\r\n      findPosition(this.notes, this.currentSelectedNotes[0]) + answer;\r\n\r\n    if (positionOfSecondNote >= this.notes.length) {\r\n      positionOfSecondNote =\r\n        answer -\r\n        (this.notes.length -\r\n          findPosition(this.notes, this.currentSelectedNotes[0]));\r\n    }\r\n\r\n    let found = false;\r\n\r\n    if (Array.isArray(this.notes[positionOfSecondNote])) {\r\n      if (\r\n        this.notes[positionOfSecondNote][0] === this.currentSelectedNotes[1] ||\r\n        this.notes[positionOfSecondNote][1] === this.currentSelectedNotes[1]\r\n      ) {\r\n        found = true;\r\n      }\r\n    } else if (\r\n      typeof this.notes[positionOfSecondNote] === \"string\" &&\r\n      this.notes[positionOfSecondNote] === this.currentSelectedNotes[1]\r\n    ) {\r\n      found = true;\r\n    }\r\n\r\n    if (found) this.streak++;\r\n    else this.streak = 0;\r\n\r\n    return found;\r\n  }\r\n\r\n  getNumberOfSemitones() {\r\n    const posOfFirstNote = findPosition(\r\n      this.notes,\r\n      this.currentSelectedNotes[0]\r\n    );\r\n    const posOfSecondNote = findPosition(\r\n      this.notes,\r\n      this.currentSelectedNotes[1]\r\n    );\r\n\r\n    if (posOfSecondNote - posOfFirstNote >= 0) {\r\n      if (posOfSecondNote - posOfFirstNote === 0) {\r\n        return [0, 12];\r\n      }\r\n      return posOfSecondNote - posOfFirstNote;\r\n    }\r\n    return 12 + (posOfSecondNote - posOfFirstNote);\r\n  }\r\n}\r\n\r\nfunction findPosition(arr, el) {\r\n  for (let i = 0; i < arr.length; i++) {\r\n    if (Array.isArray(arr[i])) {\r\n      for (let f = 0; f < arr[i].length; f++) {\r\n        if (arr[i][f] === el) return i;\r\n      }\r\n    } else if (arr[i] === el) return i;\r\n  }\r\n  return -1;\r\n}\r\n\r\nmodule.exports = { JamBuddy };\r\n\n\n//# sourceURL=webpack://raymond-mawina-199-semitone-difference-basic-algorithm-javascript/./src/semitone.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dom_manipulation.js");
/******/ 	
/******/ })()
;