import React, { useEffect } from "react";
import ShopItem from "./ShopItem";
import {useState} from 'react'
import { Bars } from 'react-loader-spinner'
import {  addItem ,selectItems} from '../../Redux/Slices/BasketSlice'
import { useDispatch, useSelector } from "react-redux";


const Shop = () => {

const [products, setProducts ] = useState([])
const [loading, setLoading] = useState(false)
const [loadedProducts, setLoadedProducts] = useState([])
// add product
const dispatch =  useDispatch()
const cartItem = useSelector(selectItems)



  const getProducts = async () => {
    setLoading(true)
    const response = await fetch('https://course-api.com/react-store-products').then(res => res.json());
    setProducts(response)
    setLoadedProducts(createPagination(response))
    setLoading(false)
   
  }

  //call getProducts function in useEffect
  useEffect(() => {
   getProducts()
  },[])
   
const createPagination = (items, limit =8, offset=0) => {
  let arr = []
  items.forEach((item, index) => {
    if(index >= offset && index < limit + offset)
    arr.push(item)
  })
  return arr
}

const loadMore = () => {
  if(loadedProducts.length == products.length) return 
  const newProducts = createPagination(products, 8 , loadedProducts.length)
  setLoadedProducts([...loadedProducts, ...newProducts])
}

// add product---------------
const addToBasket = (product) => {
  dispatch(addItem(
    {
      ...product,
      quantity:1
    }
  ))
}
const checkItemsExists=(id) => {
   const find = cartItem.filter(item => item.id === id)
   
   return !!find.length

  }


  return (
    <section className="block h-auto mb-[100px]">
       <div className="container md:w-5/6 mx-auto px-2 md:px-0">
         <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-9 my-12">
           <h2 className="text-5xl font-bold">Shop by Product</h2>
           
         </div>
         <div className="">
          <div className="flex flex-wrap ">
             {/* loader  react symple spinner*/} 
             {loading && (
              <div className="my-10 flex justify-center w-full">
               <Bars
               color="#E1C884"
               ariaLabel="loading"
              />
             </div>
             )}  
              
              
             {!!loadedProducts.length && loadedProducts.map(product => (
               <ShopItem
                key={product.id}
                {...product}
                // add to cart
                onClick={() => addToBasket(product)}
                exists= {checkItemsExists}
               
               />
             )) }
          </div>
          {loadedProducts.length != products.length && (
          <button onClick={loadMore} className="bg-black mx-auto text-white px-11 py-3 block">Load More</button>
          )}
         </div>
       </div>
    </section>
  );
};

export default Shop;
