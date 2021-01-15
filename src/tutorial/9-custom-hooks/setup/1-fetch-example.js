import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, data } = useFetch(url);

  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
      <h3>
        {data.map((product) => (
          <li key={product.id}>data</li>
        ))}
      </h3>
    </div>
  );
};

export default Example;
