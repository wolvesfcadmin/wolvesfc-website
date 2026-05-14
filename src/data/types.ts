/** Shared shapes for static data today; mirror in Sanity schemas later. */

export type NewsItem = {
	id: string;
	date: string;
	title: string;
	excerpt: string;
	/** Image URL path under public/, or "emoji" for decorative placeholder */
	imageSrc?: string;
	imageAlt?: string;
	emoji?: string;
};

export type SponsorItem = {
	id: string;
	href: string;
	logoSrc: string;
	logoAlt: string;
	category: string;
};

export type TeamCard = {
	name: string;
	tagline: string;
	/** Optional secondary highlight lines (e.g. multiple trustees). */
	extraTaglines?: string[];
	detailHtml: string;
};

export type TeamGroup = {
	id: string;
	heading: string;
	teams: TeamCard[];
};
