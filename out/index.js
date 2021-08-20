import { generateRandom } from "./generateRandom.js";
class Game {
    constructor(controls) {
        this._selected = "";
        this._score = 0;
        this._controls = document.querySelectorAll(controls);
        this.bindEvents();
        this.events();
    }
    select(event) {
        if (!!this._selected)
            return;
        const target = event === null || event === void 0 ? void 0 : event.currentTarget;
        const selected = target.dataset.control;
        this._selected = `${selected}`;
        console.log(`You picked ${this._selected}`);
        this.result();
    }
    autoSelect() {
        const machineOptions = ["rock", "paper", "scissors"];
        const randomSelect = generateRandom(machineOptions);
        const whatMachinePicked = machineOptions[randomSelect];
        console.log(`Machine picked ${whatMachinePicked}`);
        return whatMachinePicked;
    }
    result() {
        const whatMachinePicked = this.autoSelect();
        const winner = this.whoWon(whatMachinePicked);
        console.log("Result:", winner);
    }
    whoWon(machineChoose) {
        // Todo: validation other options
        if (machineChoose === "rock" && this._selected === "paper") {
            return "You";
        }
        if (machineChoose === "paper" && this._selected === "scissors") {
            return "You";
        }
        if (machineChoose === "scissors" && this._selected === "rock") {
            return "You";
        }
        if (machineChoose === "scissors" && this._selected === "paper") {
            return "Machine";
        }
        if (machineChoose === "paper" && this._selected === "rock") {
            return "Machine";
        }
        if (machineChoose === this._selected) {
            return "Draw";
        }
    }
    restart() {
        this._score = 0;
        this._selected = "";
        console.clear();
    }
    bindEvents() {
        this.select = this.select.bind(this);
        this.restart = this.restart.bind(this);
    }
    events() {
        this._controls.forEach(control => control.addEventListener("click", event => this.select(event)));
    }
}
new Game(".controls-wrapper div");
