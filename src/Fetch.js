const ENDPOINT_URL = "https://model-gnu-40.hasura.app/v1/graphql";
const PARTNER_QUERY = `
    query {
      Partner_Details {
        id
        partner_rep_name
        partner_companyName
        partner_email
        partner_business_area
        partner_tell_us
        partner_companylogo
        partner_ph_num
        partner_confirmation
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
