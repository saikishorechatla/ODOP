import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Slider Section */}
      <section className='relative bg-gray-800 text-white py-12'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex flex-wrap justify-between items-center'>
            <div className='w-full sm:w-2/3 md:w-1/2 text-4xl font-bold'>
              <p>Fresh from Farm to Your Doorstep!</p>
              <p className='mt-4 text-xl'>
                Buy Quality Fruits, Vegetables, and Poultry
              </p>
            </div>
            <div className='w-full sm:w-2/3 md:w-1/2 flex space-x-4 mt-6 sm:mt-0'>
              <img
                className='w-1/3 rounded-lg shadow-lg'
                src='fruit-banner.jpg'
                alt='Fruits'
              />
              <img
                className='w-1/3 rounded-lg shadow-lg'
                src='veggie-banner.jpg'
                alt='Vegetables'
              />
              <img
                className='w-1/3 rounded-lg shadow-lg'
                src='poultry-banner.jpg'
                alt='Poultry'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Browse Categories
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='text-center bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300'>
              <img
                className='mx-auto mb-4 w-24 h-24 object-cover'
                src='fruits.jpg'
                alt='Fruits'
              />
              <Link
                to='/category/fruits'
                className='text-xl font-semibold text-blue-600 hover:text-blue-800'>
                Fruits
              </Link>
            </div>
            <div className='text-center bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300'>
              <img
                className='mx-auto mb-4 w-24 h-24 object-cover'
                src='vegetables.jpg'
                alt='Vegetables'
              />
              <Link
                to='/category/vegetables'
                className='text-xl font-semibold text-blue-600 hover:text-blue-800'>
                Vegetables
              </Link>
            </div>
            <div className='text-center bg-white shadow-lg rounded-lg p-6 hover:bg-gray-100 transition duration-300'>
              <img
                className='mx-auto mb-4 w-24 h-24 object-cover'
                src='poultry.jpg'
                alt='Poultry'
              />
              <Link
                to='/category/poultry'
                className='text-xl font-semibold text-blue-600 hover:text-blue-800'>
                Poultry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <h2 className='text-3xl font-bold text-center mb-8'>
            Featured Products
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Featured Product Example */}
            <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
              <img
                className='mx-auto mb-4 w-full h-48 object-cover'
                src='featured-product1.jpg'
                alt='Product'
              />
              <p className='font-semibold text-lg'>Organic Apples</p>
              <p className='text-xl font-bold text-blue-600'>₹200/kg</p>
              <button className='mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
                Shop Now
              </button>
            </div>
            {/* Repeat for more featured products */}
            <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
              <img
                className='mx-auto mb-4 w-full h-48 object-cover'
                src='featured-product2.jpg'
                alt='Product'
              />
              <p className='font-semibold text-lg'>Fresh Carrots</p>
              <p className='text-xl font-bold text-blue-600'>₹150/kg</p>
              <button className='mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
                Shop Now
              </button>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-6 text-center'>
              <img
                className='mx-auto mb-4 w-full h-48 object-cover'
                src='featured-product3.jpg'
                alt='Product'
              />
              <p className='font-semibold text-lg'>Free-Range Eggs</p>
              <p className='text-xl font-bold text-blue-600'>₹120/dozen</p>
              <button className='mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className='bg-blue-600 text-white py-6'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='flex justify-between items-center'>
            <div className='text-xl font-bold'>AgriLink</div>
            <div className='flex space-x-6'>
              <a href='#' className='text-white hover:text-gray-300'>
                About Us
              </a>
              <a href='#' className='text-white hover:text-gray-300'>
                Contact
              </a>
              <a href='#' className='text-white hover:text-gray-300'>
                Privacy Policy
              </a>
            </div>
          </div>
          <p className='text-center mt-4'>
            &copy; 2025 AgriLink. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
