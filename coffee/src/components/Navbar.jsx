import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      
        <header>
            <div className='header'>
                <div className='subHeader'>
                    <div className='logo'>
                        <h2>COFFEE</h2>
                        <p>BLEND</p>
                    </div>
                    <div className='navbar'>
                        <a href="#" id='home'>HOME</a>
                        <a href="#">MENU</a>
                        <a href="#">SERVICES</a>
                        <a href="#">BLOG</a>
                        <a href="#">ABOUT</a>
                        <a href="#">SHOP</a>
                        <a href="#">CONTACT</a>
                        <i class="ri-shopping-cart-2-fill cartIcon"></i>
                    </div>
                </div>
                <div className='heroCont'>
                    <p id='title' className='welcomeTtl'>Welcome</p>
                    <p className='heroContTtl'>the best coffee testing <br /> experience</p>
                    <p className='heroContent'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div className='btnGroups'>
                        <button className='orderBtn'>Order Now</button>
                        <button className='menuBtn'>View Menu</button>
                    </div>
                </div>
            </div>
        </header>

    </>
  )
}

export default Navbar