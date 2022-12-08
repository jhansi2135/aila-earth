import { render, screen } from "@testing-library/react";
import { LogIn } from "./LogIn";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

test("renders learn react link", () => {
  render(
    <GoogleOAuthProvider>
      <LogIn />
    </GoogleOAuthProvider>,
    { wrapper: BrowserRouter }
  );
  const linkElement = screen.getByText(/Forgot your password/i);
  expect(linkElement).toBeInTheDocument();
});
