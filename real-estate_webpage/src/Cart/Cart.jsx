import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'
// Import all property images
import proImg1 from '../assets/properties-thumb-1.jpg'
import proImg2 from '../assets/properties-thumb-2.jpg'
import proImg3 from '../assets/properties-thumb-3.jpg'
import proImg4 from '../assets/properties-thumb-4.jpg'
import proImg5 from '../assets/properties-thumb-5.jpg'
import proImg6 from '../assets/properties-thumb-6.jpg'
import proImg7 from '../assets/properties-thumb-7.jpg'
import proImg8 from '../assets/properties-thumb-8.jpg'
import proImg9 from '../assets/properties-thumb-9.jpg'
import proImg10 from '../assets/properties-thumb-10.jpg'
import proImg11 from '../assets/properties-thumb-11.jpg'
import proImg12 from '../assets/properties-thumb-12.jpg'

// Function to get image by ID
const getImageById = (id) => {
  switch(id) {
    case 1: return proImg1;
    case 2: return proImg2;
    case 3: return proImg3;
    case 4: return proImg4;
    case 5: return proImg5;
    case 6: return proImg6;
    case 7: return proImg7;
    case 8: return proImg8;
    case 9: return proImg9;
    case 10: return proImg10;
    case 11: return proImg11;
    case 12: return proImg12;
    default: return proImg1;
  }
}

const Cart = () => {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  
  // Initialize cart from localStorage
  const [cartItems, setCartItems] = useState([]);
  
  // Load cart from localStorage on component mount
  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);
  
  // Load cart from localStorage
  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error parsing cart data:", error);
        setCartItems([]);
      }
    }
  };
  
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  // Listen for storage changes to update cart in real-time
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'cart') {
        loadCartFromLocalStorage();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);
  
  const closeBtn = () => {
    setShow(false);
  };

  const handleShopNow = () => {
    navigate('/exploreall');
  };

  const incrementQuantity = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrementQuantity = (id) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.quantity - 1;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar />
      {show && (
        <div className='cart w-full min-h-[500px] flex items-center justify-center bg-white px-4 py-8'>
          <div className='subCart w-full max-w-[700px] h-auto border border-black p-4 sm:p-6 relative'>
            <button
              className='absolute top-4 right-4 text-[20px] font-bold text-[#333]'
              onClick={closeBtn}
            >
              <i className="ri-close-line"></i>
            </button>
            <h2 className='text-[24px] sm:text-[32px] font-semibold text-[#111] mb-4 text-center sm:text-left'>
              Your Cart
            </h2>
            
            {cartItems.length === 0 ? (
              <>
                <div className='bg-[#f8f8f8] text-center py-8 sm:py-[35px] mb-6 rounded-md'>
                  <p className='text-[#333] text-[15px] sm:text-[16px]'>No items found.</p>
                </div>
                <button 
                  className='w-full bg-black text-white py-2 text-[14px] font-semibold rounded-sm hover:bg-black/80 transition-all duration-200'
                  onClick={handleShopNow}
                >
                  Shop Now
                </button>
              </>
            ) : (
              <>
                <div className='space-y-4 mb-6'>
                  {cartItems.map(item => (
                    <div key={item.id} className='flex flex-col sm:flex-row items-center border-b pb-4'>
                      <div className='w-full sm:w-1/4 mb-4 sm:mb-0'>
                        <img src={getImageById(item.id)} alt={item.name} className='w-full h-32 object-cover rounded' />
                      </div>
                      <div className='w-full sm:w-2/4 px-4'>
                        <h3 className='text-lg font-semibold'>{item.name}</h3>
                        <p className='text-gray-600'>{item.location}</p>
                        <p className='text-lg font-bold mt-1'>{item.price}</p>
                      </div>
                      <div className='w-full sm:w-1/4 flex flex-col sm:flex-row items-center justify-between mt-4 sm:mt-0'>
                        <div className='flex items-center border rounded'>
                          <button 
                            className='px-3 py-1 text-lg'
                            onClick={() => decrementQuantity(item.id)}
                          >
                            -
                          </button>
                          <span className='px-3 py-1'>{item.quantity}</span>
                          <button 
                            className='px-3 py-1 text-lg'
                            onClick={() => incrementQuantity(item.id)}
                          >
                            +
                          </button>
                        </div>
                        <button 
                          className='text-red-500 mt-2 sm:mt-0 sm:ml-2'
                          onClick={() => removeItem(item.id)}
                        >
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex justify-between items-center mt-6'>
                  <button 
                    className='w-full sm:w-auto bg-black text-white py-2 px-6 text-[14px] font-semibold rounded-sm hover:bg-black/80 transition-all duration-200'
                    onClick={handleShopNow}
                  >
                    Continue Shopping
                  </button>
                  <div className='text-lg font-bold mt-4 sm:mt-0'>
                    Total: ${cartItems.reduce((total, item) => {
                      // Extract numeric value from price string
                      const priceValue = parseFloat(item.price.replace(/[^0-9.]/g, ''));
                      return total + (priceValue * item.quantity);
                    }, 0).toFixed(2)}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Cart