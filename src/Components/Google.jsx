import "./Google.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { googleLogout } from "@react-oauth/google";

export function Google() {
  return (
    <div className="Google">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse.credential);
          var decoded = jwt_decode(credentialResponse.credential);
          console.log(decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        shape="pill"
      />
      {googleLogout()}
    </div>
  );
}
