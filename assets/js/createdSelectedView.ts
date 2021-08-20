export function createdSelectedView(whatPicked: string, user: string) {
  const wrapper = document.querySelector(".result");
  const option = wrapper?.querySelector(`.${user} div`);
  const img = option?.querySelector("img");

  img?.setAttribute("src", `assets/svg/${whatPicked}.svg`);
  img?.setAttribute("alt", whatPicked);
}
