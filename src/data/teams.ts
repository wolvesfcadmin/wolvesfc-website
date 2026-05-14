import type { TeamGroup } from './types';

/** Replace with Sanity documents or structured team lists. */
export const teamGroups: TeamGroup[] = [
	{
		id: 'executive',
		heading: 'Executive Members',
		teams: [
			{ name: 'President', tagline: 'R. Smithdorf (Snr)', detailHtml: 'Leadership &amp; Vision' },
			{ name: 'Vice President', tagline: 'G. Samson', detailHtml: 'Executive Support' },
			{ name: 'Chairman', tagline: 'G. Peters', detailHtml: 'Club Management' },
			{ name: 'Vice Chairman', tagline: 'W. Wallace (RIP)', detailHtml: 'Operational Oversight' },
			{ name: 'Secretary', tagline: 'S. Constable', detailHtml: 'Administration' },
			{ name: 'Assistant Secretary', tagline: 'A. Mesane', detailHtml: 'Administrative Support' },
			{ name: 'Treasurer', tagline: 'M. Dart', detailHtml: 'Financial Management' },
			{ name: 'Assistant Treasurer', tagline: 'W. Overmeyer', detailHtml: 'Financial Support' },
			{
				name: 'Trustees',
				tagline: 'D. Crouch',
				extraTaglines: ['B. Henderson'],
				detailHtml: 'Caretaker of All Things',
			},
			{ name: 'Life Member', tagline: 'L. Muller', detailHtml: 'Honorary Recognition' },
		],
	},
	{
		id: 'senior',
		heading: 'Senior Teams',
		teams: [
			{
				name: 'Super League',
				tagline: 'Elites. Train to Win',
				detailHtml: '<strong>Coaches:</strong> D.Allies A.Goodman R.Isaacs',
			},
			{
				name: 'First Division',
				tagline: 'Competitive Excellence',
				detailHtml: '<strong>Coaches:</strong> TBC',
			},
			{
				name: 'Under 18',
				tagline: 'Youth Development',
				detailHtml:
					'<strong>Coaches:</strong> J.Gysman<br><strong>Training:</strong><br>Mondays &amp; Wednesdays<br>17:00 - 18:30<br>Chukker Road Sports Complex',
			},
			{
				name: 'Over 35',
				tagline: 'Masters Division',
				detailHtml: '<strong>Manager:</strong> M.Lamohr',
			},
			{
				name: 'Over 40',
				tagline: 'Veterans Division',
				detailHtml: '<strong>Manager:</strong> Vacant',
			},
		],
	},
	{
		id: 'junior',
		heading: 'Junior Teams',
		teams: [
			{
				name: 'Under 8',
				tagline: 'Foundation Skills',
				detailHtml:
					'<strong>Coaches:</strong> B.Henderson A.Gedult<br><strong>Training:</strong><br>Mondays &amp; Wednesdays<br>17:00 - 18:30<br>Chukker Road Sports Complex',
			},
			{
				name: 'Under 10',
				tagline: 'Skill Development',
				detailHtml:
					'<strong>Coaches:</strong> K.Sheldon L.Davids<br><strong>Training:</strong><br>Mondays &amp; Wednesdays<br>17:00 - 18:30<br>Chukker Road Sports Complex',
			},
			{
				name: 'Under 12',
				tagline: 'Growing Talent',
				detailHtml:
					'<strong>Coaches:</strong> T.Koopman B.Oaker<br><strong>Training:</strong><br>Mondays &amp; Wednesdays<br>17:00 - 18:30<br>Chukker Road Sports Complex',
			},
			{
				name: 'Under 14',
				tagline: 'Talent Development',
				detailHtml:
					'<strong>Coaches:</strong> A.Allies A.Mesane<br><strong>Training:</strong><br>Mondays &amp; Wednesdays<br>17:00 - 18:30<br>Chukker Road Sports Complex',
			},
			{
				name: 'Under 16',
				tagline: 'Pre-Senior Development',
				detailHtml:
					'<strong>Coaches:</strong> D.Crouch R.Kruger B.Pitcher<br><strong>Training:</strong><br>Mondays &amp; Wednesdays<br>17:00 - 18:30<br>Chukker Road Sports Complex',
			},
			{
				name: 'Girls Division',
				tagline: 'Empowering Female Football',
				detailHtml:
					'<strong>Coaches:</strong> A.LaVita M.Fowler Y.Salie<br><strong>Training:</strong><br>Mondays &amp; Wednesdays<br>17:00 - 18:30<br>Chukker Road Sports Complex',
			},
		],
	},
];
