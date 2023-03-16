import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Drawer from "react-modern-drawer";
import SingleCard from "./CardItem";
import { useState } from "react";
import "react-modern-drawer/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity, removeItem, selectItems, selectTotalItem, selectTotalPrice } from "../../Redux/Slices/BasketSlice";


const CardDrawer = () => {
const [drawer, setDrawer] = useState(false);
const cartItem = useSelector(selectItems)
const totalPrice = useSelector(selectTotalPrice)
const totalItem = useSelector(selectTotalItem)
const dispatch =  useDispatch()

const increaseQuantity = (id) => {
    dispatch(increaseItemQuantity(id))
}

const decreaseQuantity = (id) => {
    dispatch(decreaseItemQuantity(id))
}


  return (
    <div>
      <button
        onClick={() => setDrawer(true)}
        className="fixed rounded bottom-10 right-4 bg-[#DFC4AF] p-5 text-2xl z-50"
      >
        <span>
          <span className="flex items-center justify-center absolute text-xs top-0 right-0 p-1 bg-white font-bold w-6 h-6 rounded-full">
            {totalItem}
          </span>
        </span>
        <span>
          {" "}
          <AiOutlineShoppingCart />{" "}
        </span>
      </button>
      <Drawer
        open={drawer}
        onClose={() => setDrawer(false)}
        direction="right"
        size={314}
      >
        <div className="px-3 flex flex-col h-full">
          <h2 className="text-lg text-center mt-4 mb-3">Cart Items: {totalItem}</h2>
          <div className="flex-grow overflow-auto">
         {totalItem === 0 && (
            <p className="text-center mt-10 text-2xl">No items in Cart</p>
         )}
        {cartItem.map(item => (
           <SingleCard
           key={item.id}
            {...item}
            onRemove={() => dispatch(removeItem(item.id))}
            onIncrease={() => increaseQuantity(item.id)}
            onDecrease={() => decreaseQuantity(item.id)}
            /> 
        ))}
            
          </div>
          <div className="border-t mb-3">
            <h2 className="text-lg mt-3 mb-3">Total Price:{totalPrice}</h2>
            <button className="bg-black text-white py-3  w-full block">
              Checkout
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default CardDrawer;

// ===========================
// card drawer design
// import React from 'react'
// import { AiOutlineShoppingCart } from 'react-icons/ai'
// import Drawer from 'react-modern-drawer'
// import SingleCard from './CardItem'
// import { useState  } from 'react'
// import 'react-modern-drawer/dist/index.css'
// const CardDrawer = () => {
//     const [drawer, setDrawer] =useState(false)

//   return (
//     <div>
//             <button onClick={() => setDrawer(true)} className="fixed rounded bottom-10 right-4 bg-[#DFC4AF] p-5 text-2xl z-50" >
//                 <span>
//                     <span className="flex items-center justify-center absolute text-xs top-0 right-0 p-1 bg-white font-bold w-6 h-6 rounded-full">
//                        20
//                     </span>
//                 </span>
//                 <span> <AiOutlineShoppingCart/> </span>
//             </button>
//             <Drawer
//                 open={drawer}
//                 onClose={() => setDrawer(false)}
//                 direction='right'
//                 size={314}
//             >
//                 <div className="px-3 flex flex-col h-full">
//                     <h2 className='text-lg text-center mt-4 mb-3'>Cart Items </h2>
//                     <div className="flex-grow overflow-auto">

//                             <SingleCard
//                              image='https://images2.imgbox.com/45/1a/IhY9dl95_o.jpeg'
//                               price={100}
//                               cart={1}
//                             />

//                     </div>
//                     <div className="border-t mb-3">
//                         <h2 className='text-lg mt-3 mb-3'>Total Price: </h2>
//                         <button className='bg-black text-white py-3  w-full block'>Checkout</button>
//                     </div>
//                 </div>
//             </Drawer>
//         </div>
//   )
// }

// export default CardDrawer
