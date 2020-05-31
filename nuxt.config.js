import { head, hooks, moduleConfig } from './config';

export default {
	mode: 'universal',
	loading: { color: '#fff' },
	css: [
		'@/assets/css/index.css'
	],
	plugins: [
		{ src: '@/plugins/disqus', mode: 'client' }
	],
	build: {
		extend (config, ctx) {}
	},
	generate: {
		async routes() {
			const { $content } = require('@nuxt/content');
			const articles = await $content('blog').only(['slug']).fetch();
			return articles.map((article) => `/blog/${article.slug}`);
		}
	},
	head,
	hooks,
	...moduleConfig
}
