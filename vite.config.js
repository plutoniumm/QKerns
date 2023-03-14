import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import plainText from 'vite-plugin-plain-text';

export default defineConfig( {
	plugins: [
		sveltekit(),
		plainText( [ /\.mmd$/, /\.md$/ ] ),
	],
	server: {
		port: 3000,
	}
} );
