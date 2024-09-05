import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css'


function Header() {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar/>

        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'> Temukan Buku Pilihanmu!!!!</h2>

          <p className='header-text fs-18 fw-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla officia iure. Sed porro in dolore assumenda pariatur, officiis nostrum?</p>
          <SearchForm/>
        </div>
      </header>
    </div>
  )
}

export default Header