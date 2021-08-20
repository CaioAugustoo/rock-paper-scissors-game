export function createSelectedView({ selected, whoPicked }) {
    return `
    <div class="picked">
      <p>${whoPicked.toUpperCase()} PICKED</p>

      <div class="${selected}" data-control="${selected}" title="${selected}">
        <img src="assets/svg/${selected}.svg" data-control="${selected}" width="250" alt="${selected}" />
      </div>
    </div>
  `;
}
