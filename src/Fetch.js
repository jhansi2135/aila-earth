const ENDPOINT_URL = "https://aware-walleye-73.hasura.app/v1/graphql";
const LOGIN_QUERY = `
query{
    Login_page{
        email_address
        password
    }
}
`;
export const fetchLogin = async () => {
  const response = await fetch(ENDPOINT_URL, {
    method: "POST",
    body: JSON.stringify({
      query: LOGIN_QUERY,
    }),
  });
  return await response.json();
};
