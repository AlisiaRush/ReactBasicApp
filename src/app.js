// create using javaScript function
import "./app.css";
import Products from "./components/Products";

const products = [
  {
    pID: 1,
    pName: "Frisberry Bath Bombs (3)",
    pDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    isAvailable: true,
    image:
      "https://cdn.shopify.com/s/files/1/1908/6411/products/frisberry_6c6fc83f-979c-4009-bfa3-b5a55c63d299_3000x.jpg?v=1652357424",
    price: "$12.00",
  },

  {
    pID: 2,
    pName: "Calendula & Chamomile Salve",
    pDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    isAvailable: true,
    image:
      "https://cdn.shopify.com/s/files/1/1908/6411/products/lavender_teaTree_3000x.jpg?v=1649973239",
    price: "$8.00",
  },

  {
    pID: 3,
    pName: "Cucumber Melon Moisturizing Body Wash",
    pDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    isAvailable: false,
    image:
      "https://cdn.shopify.com/s/files/1/1908/6411/products/cucumberMelon_3000x.jpg?v=1670541835",
    price: "$15.00",
  },

  {
    pID: 4,
    pName: "Frisberry Whipped Sugar Scrub",
    pDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    isAvailable: true,
    image:
      "https://cdn.shopify.com/s/files/1/1908/6411/products/frisBerryFront_3000x.jpg?v=1667932321",
    price: "$10.00",
  },
  {
    pID: 5,
    pName: "Island Blue Handcrafted Soap",
    pDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    isAvailable: false,
    image:
      "https://cdn.shopify.com/s/files/1/1908/6411/products/islandBlue_3000x.jpg?v=1651114420",
    price: "$10.00",
  },
];

function App() {
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <ul className="list-group shadow">
          <Products
            id={products[0].pID}
            name={products[0].pName}
            description={products[0].pDesc}
            isAvailable={products[0].isAvailable}
            imageUrl={products[0].image}
            price={products[0].price}
          ></Products>

          <Products
            id={products[1].pID}
            name={products[1].pName}
            description={products[1].pDesc}
            isAvailable={products[1].isAvailable}
            imageUrl={products[1].image}
            price={products[1].price}
          ></Products>

          <Products
            id={products[2].pID}
            name={products[2].pName}
            description={products[2].pDesc}
            isAvailable={products[2].isAvailable}
            imageUrl={products[2].image}
            price={products[2].price}
          ></Products>

          <Products
            id={products[3].pID}
            name={products[3].pName}
            description={products[3].pDesc}
            isAvailable={products[3].isAvailable}
            imageUrl={products[3].image}
            price={products[3].price}
          ></Products>

          <Products
            id={products[4].pID}
            name={products[4].pName}
            description={products[4].pDesc}
            isAvailable={products[4].isAvailable}
            imageUrl={products[4].image}
            price={products[4].price}
          ></Products>
        </ul>
      </div>
    </div>
  );
}

export default App;
