/* Import of all components needed to render the page. The actual render takes place in index.js */
import HeaderComponent from './Components/HeaderComponents';
import LandingPageComponent from './Components/LandingPageComponent';
import ProductComponent from './Components/ProductComponent';
import SectionDivider from './Components/SectionDivider';

/* The App component which is the which is the component that will be rendered in the root element in index.js */
function App() {

  /* An array of product objects which is the ProductComponent props that are passed on to the ProductComponent function in ProductComponent.js. These are hardcoded but could also be generated dynamically with a database later on. */
  const products = [
    {
      product: 'Lucy Trousers',
      description: 'Ultra chick and functional everyday pants',
      price: 360.69,
      image: './images/pants.webp',
    },
    {
      product: 'Dennis Pants',
      description: 'The evening ware solution to the white color shirt',
      price: 259.79,
      image: './images/dennis-top.jpg',
    },
    {
      product: 'James Coat',
      description: 'An indispensible but ultimately stylish necessity in winter.',
      price: 799.65,
      image: './images/james-coat.jpg',
    },
  ];

  /* User array with one hardcoded object representing a admin user. The boolean value of the loggedIn property is hardcoded for the purposes of demonstration in this program, but would be dynamic in a real world application */
  const user = [
    {
      userName: 'admin',
      password: 'admin',
      loggedIn: true
    }
  ]

  const sectionNameCatalogue = "Catalogue";
  const sectionSeparatorHeader = "";
  const sectionSeparatorEnd = "";
  
  /* The return of all the components that needs to be rendered in index.js with their props all defined where applicable. */
  return (
    /*Each component can only return one parent element, so this grouping of components are wrapped in a <div></div> container which serves as that parent. */
    <div className="App">
      {/*The custom components are then listed as needed in the webpage. */}
      <HeaderComponent loggedIn={user[0].loggedIn}/>
      <SectionDivider sectionName={sectionSeparatorHeader} />
      <LandingPageComponent />
      <SectionDivider sectionName={sectionNameCatalogue} />
      <div class="product-wrapper">
        <ProductComponent
          product={products[0].product}
          description={products[0].description}
          price={products[0].price}
          image={products[0].image}
        /><ProductComponent
          product={products[1].product}
          description={products[1].description}
          price={products[1].price}
          image={products[1].image}
        /><ProductComponent
          product={products[2].product}
          description={products[2].description}
          price={products[2].price}
          image={products[2].image}
        />
      </div>
      <SectionDivider sectionName={sectionSeparatorEnd} />
    </div>
  );
}

/* Exporting the function so that it can be imported into index.js for rendering. */
export default App;
