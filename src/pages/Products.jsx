import React, { useEffect, useState } from "react";
import axios from "axios";
function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8001/product");
        setProducts(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="flex flex-col ">
        <h1 className="text-slate-500">Products</h1>
        <div className="products">
          {products.map((product) => (
          /*  <div className="flex flex-col my-2">
              <h2>{product.name}</h2>
              <h2>{product.price}</h2>
              <h2>{product.description}</h2>
              <img src={product.image} alt="" />
            </div>
            */
           <div className="">
            
<div class="my-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="p-8 rounded-t-lg max-w-sm" src={product.image} alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.description}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
           
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>

           </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
