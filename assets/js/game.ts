import { createdSelectedView } from "./createdSelectedView.js";
import { generateRandom } from "./generateRandom.js";

export class Game {
  private readonly _controlsSelector: HTMLDivElement;
  private readonly _resultSelector: HTMLDivElement;
  private readonly _scoreSelector: HTMLHeadingElement;

  private _selected: string = "";
  private _score: number = 0;

  constructor(controls: string, result: string, score: string) {
    this._controlsSelector = document.querySelector(controls) as HTMLDivElement;
    this._resultSelector = document.querySelector(result) as HTMLDivElement;
    this._scoreSelector = document.querySelector(score) as HTMLHeadingElement;

    this.bindEvents();
    this.events();
  }

  private select(event: Event | MouseEvent): void {
    if (!!this._selected) return;

    const target = event?.currentTarget as HTMLElement;
    const selected = target.dataset.control;
    this._selected = selected!;

    console.log(`You picked ${this._selected}`);

    this.result();
  }

  private autoSelect(): string {
    const machineOptions = ["rock", "paper", "scissors"];

    const randomSelect = generateRandom(machineOptions);
    const whatMachinePicked = machineOptions[randomSelect];

    createdSelectedView(whatMachinePicked, "machine");

    console.log(`Machine picked ${whatMachinePicked}`);

    return whatMachinePicked;
  }

  showResult(winner: string): void {
    const whatYouPicked = this._resultSelector.querySelector(
      ".restart h1"
    ) as HTMLHeadingElement;

    createdSelectedView(this._selected, "you");

    this._resultSelector.style.display = "block";
    this._controlsSelector.style.display = "none";

    if (winner === "No One") whatYouPicked.innerText = `Draw`;
    else whatYouPicked.innerText = `${winner} won`;
  }

  updateScore() {
    this._score += 1;
    this._scoreSelector.innerText = String(this._score);
  }

  private result(): void {
    const whatMachinePicked = this.autoSelect();
    const winner = this.whoWon(whatMachinePicked);

    if (winner === "You") this.updateScore();
    this.showResult(String(winner));

    console.log("Result:", winner);
  }

  private whoWon(machineChoose: string) {
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

  restart(): void {
    this._selected = "";
    console.clear();

    this._resultSelector.style.display = "none";
    this._controlsSelector.style.display = "flex";
  }

  bindEvents(): void {
    this.select = this.select.bind(this);
    this.restart = this.restart.bind(this);
  }

  events(): void {
    const restartButton = this._resultSelector.querySelector(".restart button");
    const controls = this._controlsSelector.querySelectorAll("div");

    controls.forEach(control =>
      control.addEventListener("click", event => this.select(event))
    );

    restartButton?.addEventListener("click", this.restart);
  }
}
