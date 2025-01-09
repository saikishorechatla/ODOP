import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className='bg-blue-600 text-white shadow-md'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              onClick={toggleMobileMenu}>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>

          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <Link to='/' className='text-white font-bold text-xl'>
              AgriLink
            </Link>
          </div>

          {/* Links for larger screens */}
          <div className='hidden sm:block sm:ml-6'>
            <div className='flex space-x-4'>
              <Link
                to='/'
                className='text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700'>
                Home
              </Link>
              <Link
                to='/login'
                className='text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700'>
                Login
              </Link>
              <Link
                to='/register'
                className='text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700'>
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}
        id='mobile-menu'>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          <Link
            to='/'
            className='text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700'>
            Home
          </Link>
          <Link
            to='/login'
            className='text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700'>
            Login
          </Link>
          <Link
            to='/register'
            className='text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700'>
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
