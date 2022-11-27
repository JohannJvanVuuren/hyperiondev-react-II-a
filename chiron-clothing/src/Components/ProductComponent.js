/* Import of the main style sheet. */
import '../css/main.min.css';

/* This is the product component that is used three times for the display of three products. The properties is passed in here from an array in App.js which is fed as properties to the components defined in the App.js component. */
function ProductComponent (props) {
  return (
    <div className="products">
      <h1>Product: <span>{props.product}</span></h1>
      <h2>Description: <span>{props.description}</span></h2>
      <img src={props.image} alt="" height="100" />
      <p>Price: R{props.price}</p>
    </div>
  )
}

/* Export of the component for import into App.js */
export default ProductComponent;