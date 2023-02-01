export const SITE = {
	name: 'Green Sanctuaries',

	origin: 'https://green-sanctuaries.org',
	basePathname: '/',
	trailingSlash: false,

	title: 'Green Sanctuaries — Protecting forests to save the world',
	description: 'Green Sanctuaries protège les forêts les plus riches en biodiversité du globe en agissant directement sur le terrain pour les générations futures. Rejoignez le mouvement !',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: true,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
