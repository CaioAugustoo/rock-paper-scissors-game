import { Game } from "./game.js";
import { RulesModal } from "./rules.js";

new Game(".controls-wrapper", ".result", ".score h1");
new RulesModal(".modal-rules", ".modal-title button", ".open-modal");
