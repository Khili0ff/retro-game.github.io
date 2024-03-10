/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://retro-game/./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n\n// Точка входа webpack\n// Не пишите код в данном файле\n\n\n//# sourceURL=webpack://retro-game/./src/index.js?");

/***/ }),

/***/ "./src/js/Character.js":
/*!*****************************!*\
  !*** ./src/js/Character.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Character)\n/* harmony export */ });\n/**\n * Базовый класс, от которого наследуются классы персонажей\n * @property level - уровень персонажа, от 1 до 4\n * @property attack - показатель атаки\n * @property defence - показатель защиты\n * @property health - здоровье персонажа\n * @property type - строка с одним из допустимых значений:\n * swordsman\n * bowman\n * magician\n * daemon\n * undead\n * vampire\n */\nclass Character {\n  constructor(level, type = 'generic') {\n    this.level = level;\n    this.attack = 0;\n    this.defence = 0;\n    this.health = 50;\n    this.type = type;\n    if (new.target === Character) {\n      throw new Error('it is impossible to create a character in this way');\n    }\n  }\n\n  rangeAction() {\n    switch (this.type) {\n      case 'swordsman':\n      case 'undead':\n        this.moveRadius = 4;\n        this.attackRadius = 1;\n        break;\n      case 'bowman':\n      case 'vampire':\n        this.moveRadius = 2;\n        this.attackRadius = 2;\n        break;\n      case 'magician':\n      case 'daemon':\n        this.moveRadius = 1;\n        this.attackRadius = 4;\n        break;\n      default: throw new Error('character type undefined');\n    }\n  }\n}\n\n\n//# sourceURL=webpack://retro-game/./src/js/Character.js?");

/***/ }),

/***/ "./src/js/GameController.js":
/*!**********************************!*\
  !*** ./src/js/GameController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameController)\n/* harmony export */ });\n/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes */ \"./src/js/themes.js\");\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generators */ \"./src/js/generators.js\");\n/* harmony import */ var _PositionedCharacter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PositionedCharacter */ \"./src/js/PositionedCharacter.js\");\n/* harmony import */ var _GameState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameState */ \"./src/js/GameState.js\");\n/* harmony import */ var _GameStateService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GameStateService */ \"./src/js/GameStateService.js\");\n/* harmony import */ var _cursors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cursors */ \"./src/js/cursors.js\");\n/* harmony import */ var _characters_bowman__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/bowman */ \"./src/js/characters/bowman.js\");\n/* harmony import */ var _characters_swordsman__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters/swordsman */ \"./src/js/characters/swordsman.js\");\n/* harmony import */ var _characters_magician__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./characters/magician */ \"./src/js/characters/magician.js\");\n/* harmony import */ var _characters_vampire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./characters/vampire */ \"./src/js/characters/vampire.js\");\n/* harmony import */ var _characters_daemon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./characters/daemon */ \"./src/js/characters/daemon.js\");\n/* harmony import */ var _characters_undead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./characters/undead */ \"./src/js/characters/undead.js\");\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n\n\n\n\n\n\n\n// player characters\n\n\n\n\n// opponent characters\n\n\n\n\n\nclass GameController {\n  constructor(gamePlay, stateService) {\n    this.gamePlay = gamePlay;\n    this.stateService = stateService;\n  }\n\n  init() {\n    this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"][`Level ${this.gamePlay.level}`]);\n    this.gamePlay.redrawPositions(this.redraw());\n    this.gamePlay.addCellEnterListener(index => this.onCellEnter.call(this, index));\n    this.gamePlay.addCellLeaveListener(index => this.onCellLeave.call(this, index));\n    this.gamePlay.addCellClickListener(index => this.onCellClick.call(this, index));\n    this.gamePlay.addNewGameListener(() => this.onNewGameClick.call(this));\n    this.gamePlay.addSaveGameListener(() => this.onSaveGameClick.call(this));\n    this.gamePlay.addLoadGameListener(() => this.onLoadGameClick.call(this));\n  }\n\n  redraw() {\n    const playerTypes = [_characters_bowman__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _characters_swordsman__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _characters_magician__WEBPACK_IMPORTED_MODULE_8__[\"default\"]];\n    const teamPlayer = (0,_generators__WEBPACK_IMPORTED_MODULE_1__.generateTeam)(playerTypes, 2, 4);\n    const { boardSize, positionedList } = this.gamePlay;\n    const validNumsPlayer = (0,_generators__WEBPACK_IMPORTED_MODULE_1__.generateValidNumbers)(0, boardSize, positionedList);\n    teamPlayer.characters.forEach(ch => {\n      const validIndex = (0,_generators__WEBPACK_IMPORTED_MODULE_1__.generateIndex)(0, boardSize, validNumsPlayer);\n      this.gamePlay.positionedList.push(new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ch, validIndex));\n      validNumsPlayer.splice(validNumsPlayer.indexOf(validIndex), 1);\n    });\n    const opponentTypes = [_characters_vampire__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _characters_daemon__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _characters_undead__WEBPACK_IMPORTED_MODULE_11__[\"default\"]];\n    const teamOpponent = (0,_generators__WEBPACK_IMPORTED_MODULE_1__.generateTeam)(opponentTypes, 4, 1);\n    const validNumsOpponent = (0,_generators__WEBPACK_IMPORTED_MODULE_1__.generateValidNumbers)(6, boardSize);\n    teamOpponent.characters.forEach(ch => {\n      const validIndex = (0,_generators__WEBPACK_IMPORTED_MODULE_1__.generateIndex)(0, boardSize, validNumsOpponent);\n      this.gamePlay.positionedList.push(new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_2__[\"default\"](ch, validIndex));\n      validNumsOpponent.splice(validNumsOpponent.indexOf(validIndex), 1);\n    });\n\n    return this.gamePlay.positionedList;\n  }\n\n  onNewGameClick() {\n    _GameState__WEBPACK_IMPORTED_MODULE_3__[\"default\"].score({ level: this.gamePlay.level });\n    localStorage.clear();\n    const stateService = new _GameStateService__WEBPACK_IMPORTED_MODULE_4__[\"default\"](localStorage);\n    const gamePlay = new _GamePlay__WEBPACK_IMPORTED_MODULE_12__[\"default\"]();\n    gamePlay.bindToDOM(document.querySelector('#game-container'));\n    const gameCtrl = new GameController(gamePlay, stateService);\n    gameCtrl.init();\n  }\n\n  onSaveGameClick() {\n    _GameState__WEBPACK_IMPORTED_MODULE_3__[\"default\"].score({ level: this.gamePlay.level });\n    this.stateService.save(this.gamePlay);\n  }\n\n  onLoadGameClick() {\n    const loadGamePlay = this.stateService.load();\n    if (loadGamePlay !== null) {\n      this.gamePlay.positionedList = loadGamePlay.positionedList;\n      this.gamePlay.level = loadGamePlay.level;\n      this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"][`Level ${this.gamePlay.level}`]);\n      this.gamePlay.redrawPositions(this.gamePlay.positionedList);\n    } else {\n      this.gamePlay.showMessage('there are no saves');\n    }\n  }\n\n  onCellClick(cellPosition) {\n    const character = this.gamePlay.getCharacterFromList(cellPosition);\n    if (character !== null) {\n      const whoseCharacter = this.gamePlay.whoseCharecter(character.type);\n      if (whoseCharacter === 'player') {\n        const whoWalked = _GameState__WEBPACK_IMPORTED_MODULE_3__[\"default\"].from({ character, position: cellPosition });\n        if (whoWalked !== null) {\n          this.gamePlay.deselectCell(whoWalked.position);\n          this.gamePlay.cellEnterListeners.length = 0;\n        }\n        this.gamePlay.selectCell(cellPosition);\n        this.gamePlay.acceptableMove = this.calcRadius(character.moveRadius, cellPosition);\n        this.gamePlay.acceptableAttack = this.calcRadius(character.attackRadius, cellPosition);\n        this.acceptableActions(this.gamePlay.acceptableMove, this.gamePlay.acceptableAttack);\n      }\n      // attack player\n      if (whoseCharacter === 'opponent' && this.gamePlay.acceptableAttack === null) {\n        this.gamePlay.showMessage('you cannot select an opponent character');\n      } else if (this.gamePlay.acceptableAttack.includes(cellPosition)) {\n        const nowWalking = JSON.parse(localStorage.walked);\n        const { attack } = nowWalking.character;\n        const damage = Math.max(attack - character.defence, attack * 0.1);\n        this.gamePlay.positionedList = this.gamePlay.positionedList.filter(element => {\n          const char = element;\n          if (char.position === cellPosition) {\n            char.character.health -= damage;\n            this.gamePlay.redrawPositions(this.gamePlay.positionedList);\n            if (!char.character.health <= 0) {\n              this.computerRunning();\n            } else {\n              return false;\n            }\n          }\n          return char;\n        });\n        this.gamePlay.showDamage(cellPosition, damage)\n          .then(() => {\n            this.gamePlay.deselectCell(cellPosition);\n            this.gamePlay.redrawPositions(this.gamePlay.positionedList);\n            const charactersAlive = this.gamePlay.checkCharactersAlive();\n            if (charactersAlive.opponent === 0) {\n              this.nextLevel();\n              this.basicSettings(JSON.parse(localStorage.walked).position);\n            }\n          });\n      }\n    }\n    // walk player\n    const { acceptableMove } = this.gamePlay;\n    if (character === null && acceptableMove !== null && acceptableMove.includes(cellPosition)) {\n      const nowWalking = JSON.parse(localStorage.walked);\n      const { character: selectedChar } = nowWalking;\n      this.gamePlay.positionedList = this.gamePlay.positionedList.filter(element => {\n        const char = element;\n        if (char.position === Number(nowWalking.position)) {\n          _GameState__WEBPACK_IMPORTED_MODULE_3__[\"default\"].from({ character: selectedChar, position: cellPosition });\n          char.position = cellPosition;\n        }\n        return char;\n      });\n      this.gamePlay.deselectCell(nowWalking.position);\n      this.gamePlay.selectCell(cellPosition);\n      this.gamePlay.cellEnterListeners.length = 0;\n      this.gamePlay.acceptableMove = this.calcRadius(selectedChar.moveRadius, cellPosition);\n      this.gamePlay.acceptableAttack = this.calcRadius(selectedChar.attackRadius, cellPosition);\n      this.acceptableActions(this.gamePlay.acceptableMove, this.gamePlay.acceptableAttack);\n      this.gamePlay.redrawPositions(this.gamePlay.positionedList);\n      this.computerRunning();\n    }\n    this.gamePlay.addCellEnterListener(index => this.onCellEnter.call(this, index));\n  }\n\n  computerRunning() {\n    const charactersComputer = this.gamePlay.positionedList.filter(object => this.gamePlay.whoseCharecter(object.character.type) === 'opponent');\n    const charactersPlayer = this.gamePlay.positionedList.filter(object => this.gamePlay.whoseCharecter(object.character.type) === 'player');\n    // attack computer\n    let wasAttacked = false;\n    charactersComputer.forEach(computer => {\n      if (!wasAttacked) {\n        const { character, character: { attack } } = computer;\n        const attackCells = this.calcRadius(character.attackRadius, computer.position);\n        for (let i = 0; i < charactersPlayer.length; i += 1) {\n          if (attackCells.includes(charactersPlayer[i].position)) {\n            const damage = Math.max(attack - charactersPlayer[i].character.defence, attack * 0.1);\n            const newPositionsList = this.gamePlay.positionedList.filter(element => {\n              const char = element;\n              if (char.position === charactersPlayer[i].position) char.character.health -= damage;\n              if (char.character.health <= 0) {\n                if (JSON.parse(localStorage.walked).position === char.position) {\n                  this.basicSettings(char.position);\n                }\n                return false;\n              }\n              return char;\n            });\n            this.gamePlay.showDamage(charactersPlayer[i].position, damage)\n              .then(() => {\n                this.gamePlay.positionedList = newPositionsList;\n                this.gamePlay.redrawPositions(this.gamePlay.positionedList);\n                const charactersAlive = this.gamePlay.checkCharactersAlive();\n                if (charactersAlive.player === 0) {\n                  this.gamePlay.showMessage('Game Over!');\n                  this.gamePlay.cellClickListeners = [];\n                  this.gamePlay.cellEnterListeners = [];\n                  this.gamePlay.addCellLeaveListener = [];\n                }\n              });\n            wasAttacked = true;\n            break;\n          }\n        }\n      }\n    });\n    // walk computer\n    if (!wasAttacked) {\n      const index = Math.floor(Math.random() * charactersComputer.length);\n      const computer = charactersComputer[index];\n      const acceptableMove = this.calcRadius(computer.character.moveRadius, computer.position)\n        .filter(el => {\n          if (this.gamePlay.getCharacterFromList(el) !== null) return false;\n          return el;\n        });\n      const randomCell = Math.floor(Math.random() * acceptableMove.length);\n      this.gamePlay.positionedList = this.gamePlay.positionedList.filter(element => {\n        // eslint-disable-next-line no-param-reassign\n        if (element.position === computer.position) element.position = acceptableMove[randomCell];\n        return element;\n      });\n      this.gamePlay.redrawPositions(this.gamePlay.positionedList);\n    }\n  }\n\n  onCellEnter(index) {\n    const message = this.gamePlay.createMessageCharacter(index);\n    if (message !== null) this.gamePlay.showCellTooltip(message, index);\n  }\n\n  onCellLeave(index) {\n    this.gamePlay.hideCellTooltip(index);\n  }\n\n  acceptableActions(moveRadius, attackRadius) {\n    this.gamePlay.addCellEnterListener(index => {\n      const character = this.gamePlay.getCharacterFromList(index);\n      if (character === null && moveRadius.includes(index)) {\n        this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_5__[\"default\"].pointer);\n        this.gamePlay.selectCell(index, 'green');\n      }\n      if (character === null && !moveRadius.includes(index)) {\n        this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_5__[\"default\"].notallowed);\n      }\n      if (character !== null) {\n        const whoseCharecter = this.gamePlay.whoseCharecter(character.type);\n        if (whoseCharecter === 'opponent') {\n          if (attackRadius.includes(index)) {\n            this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_5__[\"default\"].crosshair);\n            this.gamePlay.selectCell(index, 'red');\n          } else {\n            this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_5__[\"default\"].notallowed);\n          }\n        }\n        if (whoseCharecter === 'player') {\n          this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_5__[\"default\"].pointer);\n        }\n      }\n    });\n    this.gamePlay.addCellLeaveListener(index => {\n      const character = this.gamePlay.getCharacterFromList(index);\n      if (character === null) this.gamePlay.deselectCell(index);\n      if (character !== null) {\n        const whoseCharecter = this.gamePlay.whoseCharecter(character.type);\n        if (whoseCharecter === 'opponent') this.gamePlay.deselectCell(index);\n      }\n    });\n  }\n\n  calcRadius(radius, position) {\n    const allowedPositionsMove = [];\n    let value = this.gamePlay.boardSize;\n    let cell = this.gamePlay.cells[position];\n    // top\n    for (let i = 1; i <= radius; i += 1) {\n      if (position >= value) {\n        allowedPositionsMove.push(position - value);\n        value += this.gamePlay.boardSize;\n      }\n    }\n    value = this.gamePlay.boardSize;\n    // bottom\n    for (let i = 1; i <= radius; i += 1) {\n      if (position + value < this.gamePlay.boardSize ** 2) {\n        allowedPositionsMove.push(position + value);\n        value += this.gamePlay.boardSize;\n      }\n    }\n    value = this.gamePlay.boardSize;\n    // right\n    for (let i = 1; i <= radius; i += 1) {\n      const cellClasses = Array.from(cell.classList);\n      if (cellClasses.filter(el => el.split('-').includes('right')).length === 0) {\n        allowedPositionsMove.push(position + i);\n        cell = this.gamePlay.cells[position + i];\n      }\n    }\n    cell = this.gamePlay.cells[position];\n    // left\n    for (let i = 1; i <= radius; i += 1) {\n      const cellClasses = Array.from(cell.classList);\n      if (cellClasses.filter(el => el.split('-').includes('left')).length === 0) {\n        allowedPositionsMove.push(position - i);\n        cell = this.gamePlay.cells[position - i];\n      }\n    }\n    cell = this.gamePlay.cells[position];\n    // top-right\n    for (let i = 1; i <= radius; i += 1) {\n      const cellClasses = Array.from(cell.classList);\n      if (position >= value && cellClasses.filter(el => el.split('-').includes('right')).length === 0) {\n        allowedPositionsMove.push(position - (value - i));\n        cell = this.gamePlay.cells[position - (value - i)];\n        value += this.gamePlay.boardSize;\n      }\n    }\n    cell = this.gamePlay.cells[position];\n    value = this.gamePlay.boardSize;\n    // top-left\n    for (let i = 1; i <= radius; i += 1) {\n      const cellClasses = Array.from(cell.classList);\n      if (position >= value && cellClasses.filter(el => el.split('-').includes('left')).length === 0) {\n        allowedPositionsMove.push(position - (value + i));\n        cell = this.gamePlay.cells[position - (value + i)];\n        value += this.gamePlay.boardSize;\n      }\n    }\n    cell = this.gamePlay.cells[position];\n    value = this.gamePlay.boardSize;\n    // bottom-right\n    for (let i = 1; i <= radius; i += 1) {\n      const cellClasses = Array.from(cell.classList);\n      if (position + value < this.gamePlay.boardSize ** 2 && cellClasses.filter(el => el.split('-').includes('right')).length === 0) {\n        allowedPositionsMove.push(position + (value + i));\n        cell = this.gamePlay.cells[position + (value + i)];\n        value += this.gamePlay.boardSize;\n      }\n    }\n    cell = this.gamePlay.cells[position];\n    value = this.gamePlay.boardSize;\n    // bottom-left\n    for (let i = 1; i <= radius; i += 1) {\n      const cellClasses = Array.from(cell.classList);\n      if (position + value < this.gamePlay.boardSize ** 2 && cellClasses.filter(el => el.split('-').includes('left')).length === 0) {\n        allowedPositionsMove.push(position + (value - i));\n        cell = this.gamePlay.cells[position + (value - i)];\n        value += this.gamePlay.boardSize;\n      }\n    }\n    cell = this.gamePlay.cells[position];\n    value = this.gamePlay.boardSize;\n\n    return allowedPositionsMove;\n  }\n\n  basicSettings(cell) {\n    this.gamePlay.acceptableMove = null;\n    this.gamePlay.acceptableAttack = null;\n    this.gamePlay.cellEnterListeners.length = 0;\n    this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_5__[\"default\"].pointer);\n    this.gamePlay.deselectCell(cell);\n  }\n\n  nextLevel() {\n    if (this.gamePlay.level === 4) {\n      this.gamePlay.cellClickListeners = [];\n      this.gamePlay.cellEnterListeners = [];\n      this.gamePlay.addCellLeaveListener = [];\n      return this.gamePlay.showMessage('Game Win!');\n    }\n    this.gamePlay.level += 1;\n    this.gamePlay.positionedList = this.gamePlay.positionedList.filter(char => {\n      const validNumbers = (0,_generators__WEBPACK_IMPORTED_MODULE_1__.generateValidNumbers)(0, 8, this.gamePlay.positionedList);\n      // eslint-disable-next-line no-param-reassign\n      char.position = (0,_generators__WEBPACK_IMPORTED_MODULE_1__.generateIndex)(0, 8, validNumbers);\n      this.parametersUp(char);\n      return char;\n    });\n    this.init();\n    return null;\n  }\n\n  parametersUp(char) {\n    const {\n      level,\n      health,\n      attack,\n      defence,\n    } = char.character;\n    // eslint-disable-next-line no-param-reassign\n    char.character.level = level + 1;\n    if (health + 80 >= 100) {\n      // eslint-disable-next-line no-param-reassign\n      char.character.health = 100;\n    } else {\n      // eslint-disable-next-line no-param-reassign\n      char.character.health = health + 80;\n    }\n    // eslint-disable-next-line no-param-reassign\n    char.character.attack = Math.max(attack, (attack * (80 + health)) / 100);\n    // eslint-disable-next-line no-param-reassign\n    char.character.defence = Math.max(defence, (defence * (80 + health)) / 100);\n  }\n}\n\n\n//# sourceURL=webpack://retro-game/./src/js/GameController.js?");

/***/ }),

/***/ "./src/js/GamePlay.js":
/*!****************************!*\
  !*** ./src/js/GamePlay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GamePlay)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\nclass GamePlay {\n  constructor() {\n    this.boardSize = 8;\n    this.container = null;\n    this.boardEl = null;\n    this.positionedList = [];\n    this.cells = [];\n    this.cellClickListeners = [];\n    this.cellEnterListeners = [];\n    this.cellLeaveListeners = [];\n    this.newGameListeners = [];\n    this.saveGameListeners = [];\n    this.loadGameListeners = [];\n    this.acceptableMove = null;\n    this.acceptableAttack = null;\n    this.level = 1;\n  }\n\n  bindToDOM(container) {\n    if (!(container instanceof HTMLElement)) {\n      throw new Error('container is not HTMLElement');\n    }\n    this.container = container;\n  }\n\n  /**\n   * Draws boardEl with specific theme\n   *\n   * @param theme\n   */\n  drawUi(theme) {\n    this.checkBinding();\n\n    this.container.innerHTML = `\n      <div class=\"controls\">\n        <button data-id=\"action-restart\" class=\"btn\">New Game</button>\n        <button data-id=\"action-save\" class=\"btn\">Save Game</button>\n        <button data-id=\"action-load\" class=\"btn\">Load Game</button>\n      </div>\n      <div class=\"board-container\">\n        <div data-id=\"board\" class=\"board\"></div>\n      </div>\n    `;\n\n    this.newGameEl = this.container.querySelector('[data-id=action-restart]');\n    this.saveGameEl = this.container.querySelector('[data-id=action-save]');\n    this.loadGameEl = this.container.querySelector('[data-id=action-load]');\n\n    this.newGameEl.addEventListener('click', event => this.onNewGameClick(event));\n    this.saveGameEl.addEventListener('click', event => this.onSaveGameClick(event));\n    this.loadGameEl.addEventListener('click', event => this.onLoadGameClick(event));\n\n    this.boardEl = this.container.querySelector('[data-id=board]');\n\n    this.boardEl.classList.add(theme);\n    for (let i = 0; i < this.boardSize ** 2; i += 1) {\n      const cellEl = document.createElement('div');\n      cellEl.classList.add('cell', 'map-tile', `map-tile-${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcTileType)(i, this.boardSize)}`);\n      cellEl.addEventListener('mouseenter', event => this.onCellEnter(event));\n      cellEl.addEventListener('mouseleave', event => this.onCellLeave(event));\n      cellEl.addEventListener('click', event => this.onCellClick(event));\n      this.boardEl.appendChild(cellEl);\n    }\n\n    this.cells = Array.from(this.boardEl.children);\n  }\n\n  /**\n   * Draws positions (with chars) on boardEl\n   *\n   * @param positions array of PositionedCharacter objects\n   */\n  redrawPositions(positions) {\n    for (const cell of this.cells) {\n      cell.innerHTML = '';\n    }\n\n    for (const position of positions) {\n      const cellEl = this.boardEl.children[position.position];\n      const charEl = document.createElement('div');\n      charEl.classList.add('character', position.character.type);\n\n      const healthEl = document.createElement('div');\n      healthEl.classList.add('health-level');\n\n      const healthIndicatorEl = document.createElement('div');\n      healthIndicatorEl.classList.add('health-level-indicator', `health-level-indicator-${(0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcHealthLevel)(position.character.health)}`);\n      healthIndicatorEl.style.width = `${position.character.health}%`;\n      healthEl.appendChild(healthIndicatorEl);\n\n      charEl.appendChild(healthEl);\n      cellEl.appendChild(charEl);\n    }\n  }\n\n  /**\n   * Add listener to mouse enter for cell\n   *\n   * @param callback\n   */\n  addCellEnterListener(callback) {\n    this.cellEnterListeners.push(callback);\n  }\n\n  /**\n   * Add listener to mouse leave for cell\n   *\n   * @param callback\n   */\n  addCellLeaveListener(callback) {\n    this.cellLeaveListeners.push(callback);\n  }\n\n  /**\n   * Add listener to mouse click for cell\n   *\n   * @param callback\n   */\n  addCellClickListener(callback) {\n    this.cellClickListeners.push(callback);\n  }\n\n  /**\n   * Add listener to \"New Game\" button click\n   *\n   * @param callback\n   */\n  addNewGameListener(callback) {\n    this.newGameListeners.push(callback);\n  }\n\n  /**\n   * Add listener to \"Save Game\" button click\n   *\n   * @param callback\n   */\n  addSaveGameListener(callback) {\n    this.saveGameListeners.push(callback);\n  }\n\n  /**\n   * Add listener to \"Load Game\" button click\n   *\n   * @param callback\n   */\n  addLoadGameListener(callback) {\n    this.loadGameListeners.push(callback);\n  }\n\n  onCellEnter(event) {\n    event.preventDefault();\n    const index = this.cells.indexOf(event.currentTarget);\n    this.cellEnterListeners.forEach(o => o.call(null, index));\n  }\n\n  onCellLeave(event) {\n    event.preventDefault();\n    const index = this.cells.indexOf(event.currentTarget);\n    this.cellLeaveListeners.forEach(o => o.call(null, index));\n  }\n\n  onCellClick(event) {\n    const index = this.cells.indexOf(event.currentTarget);\n    this.cellClickListeners.forEach(o => o.call(null, index));\n  }\n\n  onNewGameClick(event) {\n    event.preventDefault();\n    this.newGameListeners.forEach(o => o.call(null));\n  }\n\n  onSaveGameClick(event) {\n    event.preventDefault();\n    this.saveGameListeners.forEach(o => o.call(null));\n  }\n\n  onLoadGameClick(event) {\n    event.preventDefault();\n    this.loadGameListeners.forEach(o => o.call(null));\n  }\n\n  showError(message) {\n    alert(message);\n  }\n\n  showMessage(message) {\n    alert(message);\n  }\n\n  selectCell(index, color = 'yellow') {\n    this.deselectCell(index);\n    this.cells[index].classList.add('selected', `selected-${color}`);\n  }\n\n  deselectCell(index) {\n    const cell = this.cells[index];\n    cell.classList.remove(...Array.from(cell.classList)\n      .filter(o => o.startsWith('selected')));\n  }\n\n  showCellTooltip(message, index) {\n    this.cells[index].title = message;\n  }\n\n  hideCellTooltip(index) {\n    this.cells[index].title = '';\n  }\n\n  showDamage(index, damage) {\n    return new Promise(resolve => {\n      const cell = this.cells[index];\n      const damageEl = document.createElement('span');\n      damageEl.textContent = damage;\n      damageEl.classList.add('damage');\n      cell.appendChild(damageEl);\n      damageEl.addEventListener('animationend', () => {\n        resolve();\n      });\n    });\n  }\n\n  setCursor(cursor) {\n    this.boardEl.style.cursor = cursor;\n  }\n\n  checkBinding() {\n    if (this.container === null) {\n      throw new Error('GamePlay not bind to DOM');\n    }\n  }\n\n  createMessageCharacter(index) {\n    let message = null;\n    this.positionedList.forEach(el => {\n      if (el.position === index) message = `\\u{1F396}${el.character.level} \\u{2694}${el.character.attack} \\u{1F6E1}${el.character.defence} \\u{2764}${el.character.health}`;\n    });\n    return message;\n  }\n\n  getCharacterFromList(index) {\n    let character = null;\n    this.positionedList.forEach(el => { if (el.position === index) character = el.character; });\n    return character;\n  }\n\n  whoseCharecter(type) {\n    let isWhose = null;\n    switch (type) {\n      case 'vampire':\n      case 'undead':\n      case 'daemon':\n        isWhose = 'opponent';\n        break;\n      case 'bowman':\n      case 'swordsman':\n      case 'magician':\n        isWhose = 'player';\n        break;\n      default: throw new Error('undefined type');\n    }\n    return isWhose;\n  }\n\n  checkCharactersAlive() {\n    let aliveCharactersPlayer = 0;\n    let aliveCharactersComputer = 0;\n    this.positionedList.forEach(el => {\n      const whoseCharacter = this.whoseCharecter(el.character.type);\n      if (whoseCharacter === 'player') aliveCharactersPlayer += 1;\n      if (whoseCharacter === 'opponent') aliveCharactersComputer += 1;\n    });\n    return { player: aliveCharactersPlayer, opponent: aliveCharactersComputer };\n  }\n}\n\n\n//# sourceURL=webpack://retro-game/./src/js/GamePlay.js?");

/***/ }),

/***/ "./src/js/GameState.js":
/*!*****************************!*\
  !*** ./src/js/GameState.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameState)\n/* harmony export */ });\n/* harmony import */ var _GameStateService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameStateService */ \"./src/js/GameStateService.js\");\n\n\nclass GameState {\n  static from(object) {\n    const { walked } = localStorage;\n    if (walked !== undefined) {\n      const character = JSON.parse(walked);\n      if (character.position !== object.position) {\n        localStorage.walked = JSON.stringify(object);\n        return character;\n      }\n      if (character.position === object.position) {\n        character.position = object.position;\n        return character;\n      }\n    }\n    localStorage.walked = JSON.stringify(object);\n    return null;\n  }\n\n  static score(object) {\n    const state = object;\n    const currentDate = new Date();\n    const formattedDate = currentDate.toLocaleString();\n    state.date = formattedDate;\n    localStorage.score = JSON.stringify(state);\n    return null;\n  }\n}\n\n\n//# sourceURL=webpack://retro-game/./src/js/GameState.js?");

/***/ }),

/***/ "./src/js/GameStateService.js":
/*!************************************!*\
  !*** ./src/js/GameStateService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameStateService)\n/* harmony export */ });\nclass GameStateService {\n  constructor(storage) {\n    this.storage = storage;\n  }\n\n  save(state) {\n    this.storage.setItem('state', JSON.stringify(state));\n  }\n\n  load() {\n    try {\n      return JSON.parse(this.storage.getItem('state'));\n    } catch (e) {\n      throw new Error('Invalid state');\n    }\n  }\n}\n\n\n//# sourceURL=webpack://retro-game/./src/js/GameStateService.js?");

/***/ }),

/***/ "./src/js/PositionedCharacter.js":
/*!***************************************!*\
  !*** ./src/js/PositionedCharacter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PositionedCharacter)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/Character.js\");\n\n\nclass PositionedCharacter {\n  constructor(character, position) {\n    if (!(character instanceof _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\n      throw new Error('character must be instance of Character or its children');\n    }\n\n    if (typeof position !== 'number') {\n      throw new Error('position must be a number');\n    }\n\n    this.character = character;\n    this.position = position;\n  }\n}\n\n\n//# sourceURL=webpack://retro-game/./src/js/PositionedCharacter.js?");

/***/ }),

/***/ "./src/js/Team.js":
/*!************************!*\
  !*** ./src/js/Team.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Team)\n/* harmony export */ });\n/**\n * Класс, представляющий персонажей команды\n *\n * @todo Самостоятельно продумайте хранение персонажей в классе\n * Например\n * @example\n * ```js\n * const characters = [new Swordsman(2), new Bowman(1)]\n * const team = new Team(characters);\n *\n * team.characters // [swordsman, bowman]\n * ```\n * */\n\nclass Team {\n  constructor(characters) {\n    this.characters = characters.sort((a, b) => b.level - a.level);\n  }\n}\n\n\n//# sourceURL=webpack://retro-game/./src/js/Team.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameController */ \"./src/js/GameController.js\");\n/* harmony import */ var _GameStateService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameStateService */ \"./src/js/GameStateService.js\");\n/**\n * Entry point of app: don't change this\n */\n\n\n\n\nconst gamePlay = new _GamePlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngamePlay.bindToDOM(document.querySelector('#game-container'));\n\nconst stateService = new _GameStateService__WEBPACK_IMPORTED_MODULE_2__[\"default\"](localStorage);\n\nconst gameCtrl = new _GameController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](gamePlay, stateService);\ngameCtrl.init();\n\n// don't write your code here\n\n\n//# sourceURL=webpack://retro-game/./src/js/app.js?");

/***/ }),

/***/ "./src/js/characters/bowman.js":
/*!*************************************!*\
  !*** ./src/js/characters/bowman.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bowman)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\r\n\r\nclass Bowman extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(level) {\r\n    super(level, 'bowman');\r\n    super.rangeAction();\r\n    this.attack += 25;\r\n    this.defence += 25;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/characters/bowman.js?");

/***/ }),

/***/ "./src/js/characters/daemon.js":
/*!*************************************!*\
  !*** ./src/js/characters/daemon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Daemon)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\r\n\r\nclass Daemon extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(level) {\r\n    super(level, 'daemon');\r\n    super.rangeAction();\r\n    this.attack += 10;\r\n    this.defence += 10;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/characters/daemon.js?");

/***/ }),

/***/ "./src/js/characters/magician.js":
/*!***************************************!*\
  !*** ./src/js/characters/magician.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Magician)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\r\n\r\nclass Magician extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(level) {\r\n    super(level, 'magician');\r\n    super.rangeAction();\r\n    this.attack += 10;\r\n    this.defence += 40;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/characters/magician.js?");

/***/ }),

/***/ "./src/js/characters/swordsman.js":
/*!****************************************!*\
  !*** ./src/js/characters/swordsman.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Swordsman)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\r\n\r\nclass Swordsman extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(level) {\r\n    super(level, 'swordsman');\r\n    super.rangeAction();\r\n    this.attack += 40;\r\n    this.defence += 10;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/characters/swordsman.js?");

/***/ }),

/***/ "./src/js/characters/undead.js":
/*!*************************************!*\
  !*** ./src/js/characters/undead.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Undead)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\r\n\r\nclass Undead extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(level) {\r\n    super(level, 'undead');\r\n    super.rangeAction();\r\n    this.attack += 40;\r\n    this.defence += 10;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/characters/undead.js?");

/***/ }),

/***/ "./src/js/characters/vampire.js":
/*!**************************************!*\
  !*** ./src/js/characters/vampire.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Vampire)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Character */ \"./src/js/Character.js\");\n\r\n\r\nclass Vampire extends _Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n  constructor(level) {\r\n    super(level, 'vampire');\r\n    super.rangeAction();\r\n    this.attack += 25;\r\n    this.defence += 25;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://retro-game/./src/js/characters/vampire.js?");

/***/ }),

/***/ "./src/js/cursors.js":
/*!***************************!*\
  !*** ./src/js/cursors.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cursors = {\n  auto: 'auto',\n  pointer: 'pointer',\n  crosshair: 'crosshair',\n  notallowed: 'not-allowed',\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cursors);\n\n\n//# sourceURL=webpack://retro-game/./src/js/cursors.js?");

/***/ }),

/***/ "./src/js/generators.js":
/*!******************************!*\
  !*** ./src/js/generators.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   characterGenerator: () => (/* binding */ characterGenerator),\n/* harmony export */   generateIndex: () => (/* binding */ generateIndex),\n/* harmony export */   generateTeam: () => (/* binding */ generateTeam),\n/* harmony export */   generateValidNumbers: () => (/* binding */ generateValidNumbers)\n/* harmony export */ });\n/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Team */ \"./src/js/Team.js\");\n\n/**\n * Формирует экземпляр персонажа из массива allowedTypes со\n * случайным уровнем от 1 до maxLevel\n *\n * @param allowedTypes массив классов\n * @param maxLevel максимальный возможный уровень персонажа\n * @returns генератор, который при каждом вызове\n * возвращает новый экземпляр класса персонажа\n *\n */\nfunction* characterGenerator(allowedTypes, maxLevel) {\n  while (true) {\n    const randomLevel = Math.floor(Math.random() * maxLevel + 1);\n    const randomIndex = Math.floor(Math.random() * allowedTypes.length);\n    const RandomCharacter = allowedTypes[randomIndex];\n    yield new RandomCharacter(randomLevel);\n  }\n}\n\n/**\n * Формирует массив персонажей на основе characterGenerator\n * @param allowedTypes массив классов\n * @param maxLevel максимальный возможный уровень персонажа\n * @param characterCount количество персонажей, которое нужно сформировать\n * @returns экземпляр Team, хранящий экземпляры персонажей\n * */\nfunction generateTeam(allowedTypes, maxLevel, characterCount) {\n  const playerGenerator = characterGenerator(allowedTypes, maxLevel);\n  const characters = [];\n  for (let i = 0; i < characterCount; i += 1) {\n    characters.push(playerGenerator.next().value);\n  }\n  return new _Team__WEBPACK_IMPORTED_MODULE_0__[\"default\"](characters);\n}\n\n/**\n * @param index индекс поля, с которого начнется вычисление\n * @param boardSize размер квадратного поля (в длину или ширину)\n * @returns массив с валидными индексами под размещение\n * */\n\nfunction generateValidNumbers(index, boardSize, oldBoard = []) {\n  const validNumbers = [];\n  for (let i = index; i < boardSize ** 2; i += boardSize - 1) {\n    validNumbers.push(i);\n    validNumbers.push(i += 1);\n  }\n  if (oldBoard.length !== 0) {\n    oldBoard.forEach(char => {\n      const numberRepeat = validNumbers.findIndex(el => char.position === el);\n      if (numberRepeat !== -1) validNumbers.splice(numberRepeat, 1);\n    });\n  }\n  return validNumbers;\n}\n\n/**\n * Формирует случайную позицию на доске для двух столбцов\n * @param index индекс поля, с которого начнется вычисление\n * @param boardSize размер квадратного поля (в длину или ширину)\n * @param validNumbers массив с разрешенными полями (индексами) для размещения\n * @returns случайное число, представляющее позицию на доске\n * */\n\nfunction generateIndex(index, boardSize, validNumbers) {\n  let random;\n  while (!random) {\n    const x = Math.floor(Math.random() * boardSize ** 2 + index);\n    if (validNumbers.includes(x)) {\n      random = x;\n    }\n  }\n  return random;\n}\n\n\n//# sourceURL=webpack://retro-game/./src/js/generators.js?");

/***/ }),

/***/ "./src/js/themes.js":
/*!**************************!*\
  !*** ./src/js/themes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst themes = {\n  'Level 1': 'prairie',\n  'Level 2': 'desert',\n  'Level 3': 'arctic',\n  'Level 4': 'mountain',\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themes);\n\n\n//# sourceURL=webpack://retro-game/./src/js/themes.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcHealthLevel: () => (/* binding */ calcHealthLevel),\n/* harmony export */   calcTileType: () => (/* binding */ calcTileType)\n/* harmony export */ });\n/**\n * @todo\n * @param index - индекс поля\n * @param boardSize - размер квадратного поля (в длину или ширину)\n * @returns строка - тип ячейки на поле:\n *\n * top-left\n * top-right\n * top\n * bottom-left\n * bottom-right\n * bottom\n * right\n * left\n * center\n *\n * @example\n * ```js\n * calcTileType(0, 8); // 'top-left'\n * calcTileType(1, 8); // 'top'\n * calcTileType(63, 8); // 'bottom-right'\n * calcTileType(7, 7); // 'left'\n * ```\n * */\nfunction calcTileType(index, boardSize) {\n  if (index > 0 && index < boardSize - 1) return 'top';\n  if (index === 0) return 'top-left';\n  if (index === boardSize - 1) return 'top-right';\n  if (index % boardSize === 0 && index !== boardSize ** 2 - boardSize && index !== 0) return 'left';\n  if (index % boardSize === boardSize - 1 && index !== boardSize ** 2 - 1 && index !== boardSize - 1) return 'right';\n  if (index > boardSize ** 2 - boardSize && index < boardSize ** 2 - 1) return 'bottom';\n  if (index === boardSize ** 2 - boardSize) return 'bottom-left';\n  if (index === boardSize ** 2 - 1) return 'bottom-right';\n  return 'center';\n}\n\nfunction calcHealthLevel(health) {\n  if (health < 15) {\n    return 'critical';\n  }\n\n  if (health < 50) {\n    return 'normal';\n  }\n\n  return 'high';\n}\n\n\n//# sourceURL=webpack://retro-game/./src/js/utils.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;