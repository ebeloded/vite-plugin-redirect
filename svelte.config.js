import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

export const base = '/admin';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		paths: {
			base
		},
		adapter: adapter()
	}
};

export default config;
