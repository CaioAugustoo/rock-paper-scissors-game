export class RulesModal {
  private readonly _wrapper: HTMLDivElement;
  private readonly _openButton: HTMLButtonElement;
  private readonly _closeButton: HTMLButtonElement;

  constructor(wrapper: string, closeButton: string, openButton: string) {
    this._wrapper = document.querySelector(wrapper) as HTMLDivElement;
    this._closeButton = document.querySelector(
      closeButton
    ) as HTMLButtonElement;
    this._openButton = document.querySelector(openButton) as HTMLButtonElement;

    this.bindEvents();
    this.events();
  }

  private open() {
    this._wrapper.classList.toggle("active");
  }

  private close() {
    this._wrapper.classList.remove("active");
  }

  bindEvents() {
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  events() {
    this._openButton.addEventListener("click", this.open);
    this._closeButton.addEventListener("click", this.close);
  }
}
