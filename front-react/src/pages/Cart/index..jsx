import React from 'react';
import product from '../../assets/images/product1.avif';
import PageHeader from '../../components/PageHeader';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, selectCartItems } from '../../redux/services/cartSlice'; // Adjust the import path

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  console.log(cartItems)
  return (
    <>
      <PageHeader title={"Cart"} />
      <div className='flex gap-3 py-8 md:py-10 w-[95%] mx-auto'>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full border border-[#636363] rounded-lg">
            <thead>
              <tr className="bg-[#636363] text-white">
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Quantity</th>
                <th className="px-4 py-3">Total</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center px-4 py-3">
                    No items in the cart
                  </td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <tr key={item.id} className="border-b border-[#636363]">
                    <td className="px-4 py-3 flex justify-center items-center">
                      <img src={item.imageUrl || item.mainImageUrl} className="w-16 h-16 object-cover" alt={item.name} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex flex-col">
                        <span className="font-bold text-white capitalize">{item.title}</span>
                        <span className="text-sm text-gray-400">${item.salePrice || item.price}</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1 justify-center">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
                            }
                          }}
                          className="w-7 h-7 flex justify-center items-center text-white bg-gray-600 rounded hover:bg-gray-500"
                        >
                          -
                        </button>
                        <input
                          type="text"
                          readOnly
                          value={item.quantity}
                          className="w-12 text-center bg-gray-800 border border-gray-700 rounded text-white"
                        />
                        <button
                          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                          className="w-7 h-7 flex justify-center items-center text-white bg-gray-600 rounded hover:bg-gray-500"
                        >
                          +
                        </button>
                        <button
                          onClick={() => dispatch(removeItem(item.id))}
                          className="ml-1 text-red-500 hover:text-red-600"
                        >
                          <FaTrashAlt size={16} />
                        </button>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-white text-center">${item.price * item.quantity}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {/* Apply Box */}
        <div className="w-full xl:w-[30%] flex flex-col items-end">
          <div className="text-white bg-transparent border border-[#636363]  p-4 w-full">
            <div className="flex justify-between mb-4">
              <span className="text-gray-400">Subtotal:</span>
              <span className="text-white">${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-400">Shipping:</span>
              <span className="text-white">$15</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0) + 15}</span>
            </div>
            <button className="mt-4 w-full py-2 bg-[#2996d8] text-white">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
