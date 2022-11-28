import { gql } from '@apollo/client';

const GET_TEAM_MEMBERS = gql`
	query GetTeamMembers {
		teamMembersCollection(order: name_ASC) {
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
