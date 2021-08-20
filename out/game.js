import { createdSelectedView } from "./createdSelectedView.js";
import { generateRandom } from "./generateRandom.js";
export class Game {
    constructor(controls, result, score) {
        this._selected = "";
        this._score = 0;
        this._controlsSelector = document.querySelector(controls);
        this._resultSelector = document.querySelector(result);
        this._scoreSelector = document.querySelector(score);
        this.bindEvents();
        this.events();
    }
    select(event) {
        if (!!this._selected)
            return;
        const target = event === null || event === void 0 ? void 0 : event.currentTarget;
        const selected = target.dataset.control;
        this._selected = selected;
        console.log(`You picked ${this._selected}`);
        this.result();
    }
    autoSelect() {
        const machineOptions = ["rock", "paper", "scissors"];
        const randomSelect = generateRandom(machineOptions);
        const whatMachinePicked = machineOptions[randomSelect];
        createdSelectedView(whatMachinePicked, "machine");
        console.log(`Machine picked ${whatMachinePicked}`);
        return whatMachinePicked;
    }
    showResult(winner) {
        const whatYouPicked = this._resultSelector.querySelector(".restart h1");
        createdSelectedView(this._selected, "you");
        this._resultSelector.style.display = "block";
        this._controlsSelector.style.display = "none";
        if (winner === "No One")
            whatYouPicked.innerText = `Draw`;
        else
            whatYouPicked.innerText = `${winner} won`;
    }
    updateScore() {
        this._score += 1;
        this._scoreSelector.innerText = String(this._score);
    }
    result() {
        const whatMachinePicked = this.autoSelect();
        const winner = this.whoWon(whatMachinePicked);
        if (winner === "You")
            this.updateScore();
        this.showResult(String(winner));
        console.log("Result:", winner);
    }
    whoWon(machineChoose) {
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
        if (machineChoose === "rock" && this._selected === "scissors") {
            return "Machine";
        }
        if (machineChoose === "paper" && this._selected === "rock") {
            return "Machine";
        }
        if (machineChoose === this._selected) {
            return "No One";
        }
    }
    restart() {
        this._selected = "";
        console.clear();
        this._resultSelector.style.display = "none";
        this._controlsSelector.style.display = "flex";
    }
    bindEvents() {
        this.select = this.select.bind(this);
        this.restart = this.restart.bind(this);
    }
    events() {
        const restartButton = this._resultSelector.querySelector(".restart button");
        const controls = this._controlsSelector.querySelectorAll("div");
        controls.forEach(control => control.addEventListener("click", event => this.select(event)));
        restartButton === null || restartButton === void 0 ? void 0 : restartButton.addEventListener("click", this.restart);
    }
}
