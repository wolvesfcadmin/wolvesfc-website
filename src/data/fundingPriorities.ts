/** Priority funding lines from sponsorship deck — swap for CMS-managed blocks later. */
export type FundingPriority = {
	id: string;
	title: string;
	amountZar: string;
	amountApproxGbp?: string;
	note?: string;
};

export const fundingPriorities: FundingPriority[] = [
	{
		id: 'transport-monthly',
		title: 'Junior transport subsidy',
		amountZar: '≈ ZAR 100,000',
		amountApproxGbp: '≈ £4,547',
		note: 'Annual transport support for junior members (alternative to vehicle purchase).',
	},
	{
		id: 'hiace',
		title: '16-seater Toyota Hiace (team vehicle)',
		amountZar: 'ZAR 720,000',
		amountApproxGbp: '≈ £32,732',
		note: 'Reliable transport for training, fixtures, and safe access to opportunity.',
	},
	{
		id: 'kits-equipment',
		title: 'Kits, equipment & playing gear',
		amountZar: 'ZAR 120,000',
		amountApproxGbp: '≈ £5,455',
	},
	{
		id: 'apparel',
		title: 'Boots, training tops, caps, warm-up kit & tracksuits',
		amountZar: 'ZAR 180,000',
		amountApproxGbp: '≈ £8,183',
		note: 'Junior and senior members — dignity and readiness on and off the pitch.',
	},
	{
		id: 'running-costs',
		title: 'Registrations, affiliations, first aid, referees & operations',
		amountZar: '≈ ZAR 85,000 / year',
		amountApproxGbp: '≈ £3,900 / year',
	},
	{
		id: 'clubhouse',
		title: 'Clubhouse & home facility build',
		amountZar: 'ZAR 1,500,000',
		amountApproxGbp: '≈ £69,000',
		note: 'A permanent base for programmes, tutoring, and community gatherings.',
	},
];

export const trustRegistration = {
	npo: '139-715',
	pbo: '930074041',
	npc: '9170028261',
} as const;
