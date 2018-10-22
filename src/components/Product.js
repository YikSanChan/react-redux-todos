import React from "react";
import { Highlight } from "react-instantsearch-dom";

const Product = ({ hit }) => {
    console.log("hit:", hit)
  return (
    <div>
      <span className="hit-text">
        <Highlight attribute="text" hit={hit} />
      </span>
    </div>
  );
};

export default Product;
