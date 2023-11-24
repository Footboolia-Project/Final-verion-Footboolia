/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Replace with the appropriate library

const Header = ({ cartCount, heartCount }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mt-24'>
      <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
                Footboolai <span className='text-green-600'>Shop</span>
              </Link>

              <div className="mx-10 hidden md:block">
                <input
                  type="text"
                  className="w-32 lg:w-64 px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 border border-transparent focus:outline-none focus:bg-white focus:shadow-outline focus:border-blue-400"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </div>

            <div className="flex md:hidden">
              <button
                onClick={handleToggle}
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
              <Link to="/" className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0">Home</Link>
              <Link to="/blog" className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0">Catagory</Link>
              <Link to="/components" className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0">About us</Link>
              <Link to="/courses" className="my-1 text-sm text-gray-700 leading-5 hover:text-blue-600 hover:underline md:mx-4 md:my-0">Contact us</Link>
            </div>

            <div className="flex items-center py-4 -mx-1 md:mx-0">
              <Link to="/shoppingcart">
                <FontAwesomeIcon icon={faShoppingCart} style={{ color: "#248f79", cursor: "pointer" }} />
                <span className="ml-1 text-sm font-semibold">{cartCount}</span>
              </Link>

              <Link to="/your-wishlist-link" className="ml-4">
                <FontAwesomeIcon icon={faHeart} style={{ color: "#ce4027", cursor: "pointer" }} />
                <span className="ml-1 text-sm font-semibold">{heartCount}</span>
              </Link>
            </div>

            <div className="mt-3 md:hidden">
              <input
                type="text"
                className="w-full px-4 py-3 leading-tight text-sm text-gray-700 bg-gray-100 rounded-md placeholder-gray-500 focus:outline-none focus:bg-white focus:shadow-outline"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
