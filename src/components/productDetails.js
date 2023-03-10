import React from "react"; // manditory in older React Apps only. Good practice to include anyway
import Button from "./Button";

let productCount = 0;

function displayFormattedProductCount() {
  return productCount > 0 ? productCount : "Zero";
}

function ProductDetails(props) {
  let badgeClass = "bage-margin-left-240 badge";
  badgeClass += props.isAvailable ? " bg-success" : " bg-danger ";

  return (
    <div className="d-flex align-items-center justify-content-start mt-1">
      <h6 className="font-weight-bold my-2" style={{ marginRight: "30px" }}>
        {props.price}
      </h6>
      <Button>-</Button>
      <span style={{ padding: "0 20px", fontSize: 13 }}>
        {displayFormattedProductCount()}
      </span>
      <Button>+</Button>

      <span className={badgeClass}>
        {props.isAvailable ? "Available" : "Unavailable"}
      </span>
    </div>
  );

  //   return (
  //     React.createElement("div", {
  //       className: "d-flex align-items-center justify-content-start mt-1",
  //     }),
  //     React.createElement(
  //       "h6",
  //       { className: "font-weight-bold my-2", style: { marginRight: "30px" } },
  //       "$" + props.price
  //     ),
  //     React.createElement(Button, {}, "-"),
  //     React.createElement("span", { style: { padding: "0 20px", fontSize: 13 } }),
  //     React.createElement(Button, {}, "+"),
  //     React.createElement(
  //       "span",
  //       { className: badgeClass },
  //       props.isAvailable ? "Available" : "Unavailable"
  //     )
  //   );
}

export default ProductDetails;
