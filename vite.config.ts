import { sveltekit } from '@sveltejs/kit/vite';
import inlangPlugin from '@inlang/sdk-js/adapter-sveltekit'
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [inlangPlugin(),sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
