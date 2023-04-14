import React from "react";
import { Tooltip } from "antd";
import Info from "./Info/Info"

const Product = () => {
  const [product, setProduct] = React.useState([]);
  const [id, setId] = React.useState()
  const [show, setShow] = React.useState(false)

  const loadProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    console.log(res);
    if (res.ok && res.status === 200) {
      const data = await res.json();
      setProduct(data);
    } else {
      alert("asas");
    }
  };

  React.useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div>
      <Info show={show} id={id} setShow={setShow}/>
      <div class="row m-2 ">
        {product.map((item, index) => (
          <div class="col-4">
            <div class="card p-2">
              <div className="d-flex justify-content-center ">
                <img
                  src={item.image}
                  style={{ width: "10rem", height: "10rem" }}
                  class="card-img-top"
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Product</h5>
                <p class="card-text">
                  {item.title.length > 10 ? (
                    <Tooltip placement="top" title={item.title}>
                      {item.title.slice(0, 10)}...
                    </Tooltip>
                  ) : (
                    item.title
                  )}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setId(item.id)
                    setShow(true)
                  }}
                >
                  Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
