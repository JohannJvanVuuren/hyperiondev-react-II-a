/* Import of main style sheet. */
import '../css/main.min.css';
/* Import of the website logo image. */
import logo from '../css/images/compare-fibre-9HGPvHThNME-unsplash-infinity.png';

/* The HeaderComponents that contains the JSX for the header of the web page. */
function HeaderComponent(props) {
  return (
    <header class="vertical-flex">
      <div className="header-container">
        {/* Logo of web page. */}
        <img className="header-image" src={logo} alt="Infinity Symbol" />
        {/* Company name. */}
        <h1 className="header-title">Chiron</h1>
        {/* Header login/register button section/container. */}
        <div className="header-login">
          <button className="btn btn-login" type="button">
            Log In
          </button>
          <button className="btn btn-register" type="button">
            Register
          </button>
        </div>
      </div>
      {/* Message that is rendered based on boolean input on whether the user is logged in or not. In this page this boolean value is hardcoded. */}
      <div className="header-message">
        {/* Ternary operator to deal with the two alternatives of the boolean operator. If it is true, then the user is logged in, else the user is logged out. */}
        {props.loggedIn ? (
          <h2>Welcome back. Please continue shopping</h2>
        ) : (
          <h2>Welcome back. Please proceed to login.</h2>
        )}
      </div>
    </header>
  );
}

/* Export of the component so that it can be imported into the App.js file. */
export default HeaderComponent;
