import { useRouteError, Link } from "react-router-dom";
import image from './error-img.jpg';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1> <br />
      <p>Sorry, an unexpected error has occurred.</p> <br />
      <p>
        <i>404!! Page {error.statusText || error.message}</i>
      </p> 
      <img src={image} alt="img" id="er-img" />
      <br />

      <Link to="/login" className="footer-link" id="er-link">Back to Login Page</Link>

    </div>
  );
}