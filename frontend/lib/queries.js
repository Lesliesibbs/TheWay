import { gql } from "@apollo/client";

// const GET_BLOGS = gql`
// 	query GetBlogs {
// 		categories {
// 			id
// 			Name
// 		}
// 	}
// `;

const GET_CATEGORIES = gql`
	query GetCategories {
		categories {
			id
			Name
		}
	}
`;

const GET_TAGS = gql`
	query GetTags {
		tags {
			id
			Name
		}
	}
`;

export { GET_CATEGORIES, GET_TAGS };