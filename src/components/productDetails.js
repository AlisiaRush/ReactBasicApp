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
      <button className="btn btn-primary">-</button>
      <span style={{ padding: "0 20px", fontSize: 13 }}>
        {displayFormattedProductCount()}
      </span>
      <button className="btn btn-primary">+</button>

      <span className={badgeClass}>
        {props.isAvailable ? "Available" : "Unavailable"}
      </span>
    </div>
  );
}

export default ProductDetails;
