import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			includeAssets: ['pwa-1024x1024.png', 'favicon.svg'],
			manifest: {
				name: 'Drunkies',
				short_name: 'drunkies',
				description: 'Webapp for alcohol consumption tracking',
				theme_color: '#fff',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'pwa-256x256.png',
						sizes: '256x256',
						type: 'image/png'
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					},
					{
						src: 'pwa-1024x1024.png',
						sizes: '1024x1024',
						type: 'image/png'
					}
				]
			}
		})
	]
});
