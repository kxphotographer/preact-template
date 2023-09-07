import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import viteTSConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact(),
		viteTSConfigPaths(),
	],
});
