import '../css/main.min.css';
import icon from '../css/images/compare-fibre-9HGPvHThNME-unsplash-infinity.jpg';

function LandingPageComponent() {
  return (
    /* The vertical layout and spacing of the landing page component is controlled via Flexbox on this <div></div> */
    <div class="flex-wrapper">
      <div class="landing-page-wrapper">
        <div className="landing-page">
          <img src={icon} alt="Fashion Icon" height="100" />
          <h1>Exclusive Fashion Wear</h1>
          <h2>for the modest budget</h2>
          <p>
            Chiron is an exclusive brand of fashion wear for the fashion aware
            client on a modest budget.
          </p>
          <br />
          <br />
          <p>
            The company was founded in 2015 identifying a need for high fashion at
            a price affordable to the average person. The founders are Brad Smith
            and Ronald Worth and started the company while still studying fashion
            design at the Cape Peninsula Technicon in South Africa.
          </p>
          <br />
          <br />
          <p>
            It is the company's vision to give anyone access to high fashion
            regardless of their background without compromising on quality. As
            such all materials are sourced from quality markets and fashion pieces
            are design and produced by hand in house.
          </p>
          <br />
          <br />
          <p>The founders and staff of Chiron are passionate and very proud to work towards this mission and this website opens the platform to anyone anywhere in the world.</p>
        </div>
      </div>
    </div>
  );
}

/* Export of component for import into App.js */
export default LandingPageComponent;
