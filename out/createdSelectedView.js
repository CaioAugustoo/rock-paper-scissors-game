export function createdSelectedView(whatPicked, user) {
    const wrapper = document.querySelector(".result");
    const option = wrapper === null || wrapper === void 0 ? void 0 : wrapper.querySelector(`.${user} div`);
    const img = option === null || option === void 0 ? void 0 : option.querySelector("img");
    img === null || img === void 0 ? void 0 : img.setAttribute("src", `assets/svg/${whatPicked}.svg`);
    img === null || img === void 0 ? void 0 : img.setAttribute("alt", whatPicked);
}
