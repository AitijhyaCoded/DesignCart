import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
const navigate = useNavigate();
  return (
    <div className=" bg-gradient-to-b from-sky-300 via-blue-500 to-blue-900 text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
        <span 
              onClick={() => navigate('/')}
              className="text-2xl font-bold cursor-pointer logo text-white"
            >
              <span className='text-blue-900'>Design</span>Cart
            </span>
          <p className="font-medium text-sm">
          Where Creativity Finds Its Tools!
          </p>
        </div>

        <div>
          <h1 className="text-blue-900 font-medium text-xl pb-4 pt-5 md:pt-0">Categories</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Electronics
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Supplies
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
               Merchandise
            </a>

          </nav>
        </div>

        <div>
          <h1 className="text-blue-900 font-medium text-xl pb-4 pt-5 md:pt-0">Help</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Payments
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Shipping
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
               Cancellations & Returns
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
               FAQ
            </a>
          </nav>
        </div>

        
        <div>
          <h1 className="text-blue-900 font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              designcart@gmail.com
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              +91 877 627 0357
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              @design_cart_shop
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              12 FC Road,<br/>Bangalore - 560102
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className="font-serif"> Aitijhya Roy</span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  )
}

export default Footer
