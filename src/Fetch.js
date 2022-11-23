const ENDPOINT_URL = "https://major-jennet-22.hasura.app/v1/graphql";
const COMMENTS_QUERY = `
    query {
        comment {
            title
            content
        }
    }
`;
export const fetchComments = async () => {
  const response = await fetch(ENDPOINT_URL, {
    method: "POST",
    body: JSON.stringify({
      query: COMMENTS_QUERY,
    }),
  });
  return await response.json();
};
