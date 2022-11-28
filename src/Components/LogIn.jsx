import "./LogIn.css";

export function LogIn() {
  return (
    <div className="LogIn">
      <h1>Log in</h1>
      <p>
        Already a user? Log in to complete transactions and start making an
        impact.
      </p>

      <div id="one">
        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="password"
          placeholder="Enter your Password"
          required
        />
        <br />
        <br />
        <Link to="">
          <input type="button" value="LogIn" />
        </Link>
        <br />
        <a href="#">Forgot your password?</a>
      </div>
      <div id="two">
        <Google />
      </div>
      <div id="three">
        <p>
          By logging in you agree to our<a href="#">Terms of Use</a> and
          acknowledge our<a href="#"> Privacy Policy</a>. You also acknowledge
          that Aila uses cookies to give the best user experience.
        </p>

        <p>
          This site is protected by reCAPTCHA Enterprise and Google
          <a href="#"> Privacy Policy</a> and <a href="#">Terms of Use </a>
          apply.
        </p>
        <p>
          <b>
            New to our platform? You can register in few easy steps and after
            completing any transactions also utilise our reporting and
            communication tools.
          </b>
        </p>
        <Link to="/Register_Partner">
          <input type="button" value="REGISTER" />
        </Link>
      </div>
    </div>
  );
}
