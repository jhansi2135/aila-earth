import "./Google.css";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

export function Google({ setUserInfo }) {
  return (
    <div className="Google">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          var decoded = jwt_decode(credentialResponse.credential);
          setUserInfo(decoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        shape="pill"
      />
    </div>
  );
}
