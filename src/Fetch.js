const ENDPOINT_URL = "https://model-gnu-40.hasura.app/v1/graphql";
const PARTNER_QUERY = `
    query {
      Partner_Details {
        id
        partner_rep_name
        partner_rep_title
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
  const response = await fetch(ENDPOINT_URL, {
    method: "POST",
    body: JSON.stringify({
      query: PARTNER_QUERY,
    }),
  });
  return await response.json();
};

const INSERT_PARTNER_QUERY = `mutation InsertPartnerDetails($partner_rep_name: String, $partner_companyName: String, $partner_email: String, $partner_business_area: String, $partner_tell_us: String, $partner_companylogo: String, $partner_ph_num: String, $partner_rep_title: String) {
  insert_Partner_Details(objects: {partner_rep_name: $partner_rep_name, partner_companyName: $partner_companyName, partner_email: $partner_email, partner_business_area: $partner_business_area, partner_tell_us: $partner_tell_us, partner_companylogo: $partner_companylogo, partner_ph_num: $partner_ph_num, partner_rep_title: $partner_rep_title}) {
    affected_rows
    returning {
      id
			partner_rep_name
			partner_companyName
			partner_email
			partner_business_area
			partner_tell_us
			partner_companylogo
			partner_ph_num
			partner_confirmation
			partner_rep_title
    }
  }
}`;
export const InsertPartners = async (data) => {
  const response = await fetch(ENDPOINT_URL, {
    method: "POST",
    body: JSON.stringify({
      query: INSERT_PARTNER_QUERY,
      variables: data,
    }),
  });
  return await response.json();
};

const USER_QUERY = `
query {
  user_detail {
    user_agree
    id
    user_company_add
    user_company_name
    user_company_reg_name
    user_email
    user_industry
    user_ph_num
    user_rep_name
    user_rep_title
}
}`;

export const fetchUsers = async () => {
  const response = await fetch(ENDPOINT_URL, {
    method: "POST",
    body: JSON.stringify({
      query: USER_QUERY,
    }),
  });
  return await response.json();
};

const INSERT_USER_QUERY = `mutation InsertUserDetail($user_agree: Boolean, $user_company_add: String, $user_company_name: String, $user_company_reg_name: String, $user_email: String, $user_industry: String, $user_ph_num: String, $user_rep_name: String, $user_rep_title: String) {
  insert_user_detail(objects: {user_agree: $user_agree, user_company_add: $user_company_add, user_company_name: $user_company_name, user_company_reg_name: $user_company_reg_name, user_email: $user_email, user_industry: $user_industry, user_ph_num: $user_ph_num, user_rep_name: $user_rep_name, user_rep_title: $user_rep_title}) {
    affected_rows
    returning {
      user_agree
			id
			user_company_add
			user_company_name
			user_company_reg_name
			user_email
			user_industry
			user_ph_num
			user_rep_name
			user_rep_title
    }
  }
}`;

export const InsertUsers = async (data) => {
  const response = await fetch(ENDPOINT_URL, {
    method: "POST",
    body: JSON.stringify({
      query: INSERT_USER_QUERY,
      variables: data,
    }),
  });
  return await response.json();
};
