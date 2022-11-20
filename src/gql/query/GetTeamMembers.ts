import { gql } from '@apollo/client';

const GET_TEAM_MEMBERS = gql`
	query GetTeamMembers {
		teamMembersCollection {
			items {
				name
				title
				pfp {
					url
				}
				twitterHandle
				linkedinHandle
				portfolioUrl
			}
		}
	}
`;

export default GET_TEAM_MEMBERS;
