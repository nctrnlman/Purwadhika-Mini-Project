import React, { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [results, setResults] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);
  const [sort,setSort] = useState("nameZtoA")
  const [filter,setFilter]=useState()
  const [open, setOpen] = React.useState(false);
  const categories = results.categories
  const handleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `http://localhost:8001/product?page=${page}&limit=${limit}&sort=${sort}`;
      if (filter) {
        url += `&filter=${filter}`;
      }
      const res = await axios.get(url);
      setResults(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
  }, [page, limit,sort,filter]);

  const handlePrevClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };
  const nameAsc = () => {
    setSort("nameAtoZ");
  };
  const nameDesc = () => {
    setSort("nameZtoA");
  };
  const priceHigh = () => {
    setSort("priceHighLow");
  };
  const priceLow = () => {
    setSort("priceLowHigh");
  };

  const filterProduct = (categoryId) => {
    setFilter(categoryId);
    console.log(categoryId)
    setPage(1);
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col ">
        <h1 className="text-slate-500">Products</h1>
        <div>
      <button onClick={handleOpen}>Sort by</button>
      {open ? 
      <div className="flex flex-row justify-evenly">
      <div className="flex flex-col">
        <button onClick={nameAsc}>Name ASC</button>
        <button onClick={nameDesc}>Name desc</button>
        <button onClick={priceHigh}>Price High</button>
        <button onClick={priceLow}>Price Low</button>
      </div> 
      <div className="flex flex-col">
  {categories.map((category) => (
    <button key={category} onClick={() =>
      
       filterProduct(category.id)}>{category}</button>
  ))}
</div>

      </div>
      
      :
       <div></div>}
    </div>
        <div className="products">
          {results.results &&
            results.results.map((product) => (
              <div
                key={product.id}
                className="my-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <img
                    className="p-8 rounded-t-lg max-w-sm"
                    src=""
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.name}
                    </h5>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {product.description}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      {product.price}
                    </span>
                    <a
                      href="#"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          {(!results.results || results.results.length === 0) && (
            <div>No products found.</div>
          )}
          {results.previous && (
            <button onClick={handlePrevClick}>Previous</button>
          )}
          {results.next && <button onClick={handleNextClick}>Next</button>}
        </div>
      </div>
    </div>
  );
}

export default Products;
