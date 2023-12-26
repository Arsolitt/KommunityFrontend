import { fileURLToPath, URL } from 'node:url';
import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],

	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/assets/scss/variables.scss";`,
			},
		},
	},
	server: {
		port: 3333,
		host: true,
		strictPort: true,
		hmr: {
			port: 3333,
		},
		watch: {
			usePolling: true,
		},
	},
});
