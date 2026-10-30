import "../../chunks/index-server.js";
import "../../chunks/server.js";
import "@luncheon/simplify-svg-path";
import "tweakpane";
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		Math.PI / 2;
		$$renderer.push(`<div class="content svelte-1uha8ag"><h1 class="visually-hidden svelte-1uha8ag">Lissajous Curve Generator</h1> <svg class="canvas svelte-1uha8ag" viewBox="0 0 200 200"></svg> <div id="controls" class="svelte-1uha8ag"></div></div>`);
	});
}
//#endregion
export { _page as default };
