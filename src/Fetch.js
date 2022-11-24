const ENDPOINT_URL = "https://model-gnu-40.hasura.app/v1/graphql";
const PARTNER_QUERY = `
    query {
      Partner_Details {
        id
        partner_companylogo
        partner_companyName
        company_product
        product_shortinfo
      }
    }
`;
export const fetchPartners = async () => {
  console.log("fetchPartners");
  const response = await fetch(ENDPOINT_URL, {
    method: "POST",
    body: JSON.stringify({
      query: PARTNER_QUERY,
    }),
  });
  return await response.json();
};
