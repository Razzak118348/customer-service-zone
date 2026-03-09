import React from 'react';

const Navbar = () => {
    return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
      <li>
<a href="">FAQ</a>
      </li>
      <li><a>Changelog</a></li>
      <li><a href="">Blog</a></li>
      <li><a href="">Dawonload</a></li>
      <li><a href="">Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">CS-Ticket System</a>
  </div>

  <div className="navbar-end">
    <div className=" hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
<a href="">FAQ</a>
      </li>
      <li><a>Changelog</a></li>
      <li><a href="">Blog</a></li>
      <li><a href="">Dawonload</a></li>
      <li className='mr-4'><a href="">Contact</a></li>
    </ul>
  </div>
  <a className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-5 py-2 rounded-lg font-medium shadow-md hover:opacity-90 transition">
  + New Ticket
</a>
  </div>
</div>
    );
};

export default Navbar;