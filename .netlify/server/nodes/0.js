

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BQD75mGX.js","_app/immutable/chunks/JDDgHB18.js","_app/immutable/chunks/xihTtKlq.js","_app/immutable/chunks/D1b6Vnxc.js"];
export const stylesheets = ["_app/immutable/assets/0.d6vqg0jc.css"];
export const fonts = [];
