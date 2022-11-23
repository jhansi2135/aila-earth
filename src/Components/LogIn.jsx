import "./LogIn.css";

export function LogIn() {
  return (
    <div className="LogIn">
      <h1>LogIn</h1>
      <input type="text" name="email" placeholder="Enter your Email" />
      <br />
      <input type="text" name="password" placeholder="Enter your Password" />
      <br />
      <input type="button" value="LogIn" />
    </div>
  );
}
