import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Products() {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        const fetchProducts = async()=>{
            try {
                const res = await axios.get("http://localhost:8001/user")
                setProducts(res.data)
                console.log(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchProducts()
    },[])
  return (
    <div>
        <h1>Products</h1>
        <div className='products'>
            {products.map((product)=>(
                <div className="product">
                    <h2>{product.username}</h2>
                    <h2>{product.email}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Products