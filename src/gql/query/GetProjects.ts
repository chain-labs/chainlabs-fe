import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
	query GetProjects {
		projectsCollection(order: sys_firstPublishedAt_ASC) {
			items {
				banner {
					url
				}
				ctaUrl
				description
				title
				twitterUrl
				type
			}
		}
	}
`;

export default GET_PROJECTS;

export interface IProject {
	banner: {
		url: string;
	};
	ctaUrl: string;
	description: string[];
	title: string;
	twitterUrl: string;
	type: string;
}
