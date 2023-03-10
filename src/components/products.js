import "./products.css";

let productCount = 0;
let freshMilkImage = require("../images/freshMilk.png");
let isAvailable = "Available";

let badgeClass = "bage-margin-left-240 badge";
badgeClass += isAvailable === "Available" ? " bg-success " : " bg-danger ";

function displayFormattedProductCount() {
  return productCount > 0 ? productCount : "Zero";
}

function Products() {
  return (
    <ul className="list-group shadow">
      <li className="list-group-item">
        <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex">
          <div className="media-body order-2 order-lg-1">
            <h5 className="mt-0 font-weight-bold mb-2">Fresh Milk</h5>
            <p className="font-italic text-muted mb-0 small">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Suscripit fuga autem maiores
            </p>
            <div className="d-flex align-items-center justify-content-start mt-1">
              <h6
                className="font-weight-bold my-2"
                style={{ marginRight: "30px" }}
              >
                $120.00
              </h6>
              <button className="btn btn-primary">-</button>
              <span style={{ padding: "0 20px", fontSize: 13 }}>
                {displayFormattedProductCount()}
              </span>
              <button className="btn btn-primary">+</button>

              <span className={badgeClass}>{isAvailable}</span>
            </div>
          </div>
          <img
            src={freshMilkImage}
            className="ml-lg-5 order-1 order-lg-2"
            alt=""
          />
        </div>
      </li>
    </ul>
  );
}

export default Products;
