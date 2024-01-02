import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],

	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@app': fileURLToPath(new URL('./src/app', import.meta.url)),
			'@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
			'@widgets': fileURLToPath(new URL('./src/widgets', import.meta.url)),
			'@features': fileURLToPath(new URL('./src/features', import.meta.url)),
			'@entities': fileURLToPath(new URL('./src/entities', import.meta.url)),
			'@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
			'@router': fileURLToPath(new URL('./src/shared/router', import.meta.url)),
			'@store': fileURLToPath(new URL('./src/shared/store', import.meta.url)),
			'@ui': fileURLToPath(new URL('./src/shared/ui', import.meta.url)),
			'@utils': fileURLToPath(new URL('./src/shared/utils', import.meta.url)),
			'@svg': fileURLToPath(new URL('./public/svg', import.meta.url)),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@shared/_variables.scss" as *;`,
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
