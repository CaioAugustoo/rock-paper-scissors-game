export class RulesModal {
    constructor(wrapper, closeButton, openButton) {
        this._wrapper = document.querySelector(wrapper);
        this._closeButton = document.querySelector(closeButton);
        this._openButton = document.querySelector(openButton);
        this.bindEvents();
        this.events();
    }
    open() {
        this._wrapper.classList.toggle("active");
    }
    close() {
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
