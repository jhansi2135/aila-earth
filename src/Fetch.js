const ENDPOINT_URL = "https://model-gnu-40.hasura.app/v1/graphql";
const PARTNER_QUERY = `
    query {
        Partner_Details {
           id
           partner_name
           partner_companyName
           partner_email 
        }
    }
`;
export const fetchPartners = async () => {
  const response = await fetch(ENDPOINT_URL, {
    method: "POST",
    body: JSON.stringify({
      query: PARTNER_QUERY,
    }),
  });
  return await response.json();
};
