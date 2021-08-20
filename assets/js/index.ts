import { generateRandom } from "./generateRandom.js";

class Game {
  private readonly _controls: NodeListOf<Element>;

  private _selected: string = "";
  private _score: number = 0;

  constructor(controls: string) {
    this._controls = document.querySelectorAll(controls) as NodeListOf<Element>;

    this.bindEvents();
    this.events();
  }

  private select(event: Event | MouseEvent): void {
    if (!!this._selected) return;

    const target = event?.currentTarget as HTMLElement;
    const selected = target.dataset.control;
    this._selected = `${selected}`;

    console.log(`You picked ${this._selected}`);

    this.start();
  }

  private autoSelect() {
    const machineOptions = ["rock", "paper", "scissors"];

    const randomSelect = generateRandom(machineOptions);
    const whatMachinePicked = machineOptions[randomSelect];

    console.log(`Machine picked ${whatMachinePicked}`);

    return whatMachinePicked;
  }

  private start(): void {
    const whatMachinePicked = this.autoSelect();
    const winner = this.whoWon(whatMachinePicked);

    console.log(winner);
  }

  private whoWon(machineChoose: string) {
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

  bindEvents(): void {
    this.select = this.select.bind(this);
    this.restart = this.restart.bind(this);
  }

  events(): void {
    this._controls.forEach(control =>
      control.addEventListener("click", event => this.select(event))
    );
  }
}

new Game(".controls-wrapper div");
