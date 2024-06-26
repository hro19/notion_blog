import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const globalMenus = [
    { label: 'Home', targetBlank: false, link: '/' },
    {
      label: 'GSAPラボ',
      targetBlank: true,
      link: 'https://gsap-practice-bice.vercel.app/',
    },
    { label: 'Tailwindラボ', targetBlank: false, link: '/about' },
    { label: 'Framer motionラボ', targetBlank: false, link: '/framer' },
    { label: 'GraphQLブログ', targetBlank: false, link: '/graph' },
  ];

  return (
    <>
      <header>
        <nav className='bg-gray-200 border-gray-200'>
          <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link href='/' className='flex items-center'>
              <span className='self-center text-2xl whitespace-nowrap text-amber-600 md:text-emerald-600 text-center'>
                技術記事🐰
              </span>
            </Link>
            <button
              onClick={toggleMenu}
              type='button'
              className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-default'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </button>
            <div
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } w-full md:block md:w-auto`}
              id='navbar-default'
            >
              <ul
                className='flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-2xl bg-gray-50 
                              md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 
                            md:dark:bg-gray-900 dark:border-gray-700 md:py-1 md:px-6'
              >
                {globalMenus.map((menu) => (
                  <li key={menu.label}>
                    <Link
                      href={menu.link}
                      target={menu.targetBlank ? '_blank' : '_self'}
                      className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500'
                    >
                      {menu.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
