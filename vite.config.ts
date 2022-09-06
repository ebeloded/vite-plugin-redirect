import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { base } from './svelte.config';
import redirect from './package/index.js';

console.log({ base });

const config: UserConfig = {
	plugins: [redirect({ '/': base }), sveltekit()]
};

export default config;
