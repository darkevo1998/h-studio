'use client';

import React, { useState } from 'react';
import logo from '../../public/logo.png';
import Image from 'next/image';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <nav className='bg-gray-100 w-full px-4 py-3'>
        {/* Navbar Content */}
        <div className='flex items-center justify-between'>
          {/* Left Spacer for Layout */}
          <div className='hidden sm:flex space-x-4'>
            <div className='flex space-x-2 bg-white rounded-full z-50'>
              <div className='bg-black text-white rounded-full w-24 px-4 py-2 text-center'>
                clients
              </div>
              <div className='rounded-full bg-white w-24 px-4 py-2 text-center'>
                about us
              </div>
              <div className='rounded-full bg-white w-24 px-4 py-2 text-center'>
                contacts
              </div>
            </div>
          </div>

          {/* Logo */}
          <div
            className='flex justify-center cursor-pointer w-full sm:w-auto'
            onClick={toggleDropdown}
          >
            <Image
              src={logo}
              alt='Company Logo'
              width={120}
              height={60}
              className='mx-auto z-50'
            />
          </div>

          {/* Right Spacer for Language Options */}
          <div className='hidden sm:flex bg-white flex space-x-2 rounded-full'>
            <div className='bg-gray-200 rounded-full px-4 py-2 flex justify-center items-center'>
              eng
            </div>
            <div className='rounded-full px-4 py-2 flex justify-center items-center'>
              deu
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className='absolute top-16 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg flex flex-col items-center sm:hidden z-50 p-4'>
            <button className='w-full px-4 py-2 text-gray-700 hover:bg-gray-100'>
              Clients
            </button>
            <button className='w-full px-4 py-2 text-gray-700 hover:bg-gray-100'>
              About Us
            </button>
            <button className='w-full px-4 py-2 text-gray-700 hover:bg-gray-100'>
              Contacts
            </button>
            <div className='w-full flex space-x-2 justify-center mt-2'>
              <div className='bg-gray-200 rounded-full px-4 py-2 flex justify-center items-center'>
                eng
              </div>
              <div className='rounded-full px-4 py-2 flex justify-center items-center'>
                deu
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
