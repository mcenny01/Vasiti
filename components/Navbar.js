import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="shadow-gray-300 shadow text-xs font-light px-2 py-4">
      <div className="flex gap-10 items-center max-w-5xl mx-auto pb-4">
        <Image src="/images/Vasiti-Logo.svg" alt="Vasiti Logo" width='150px' height='35px'/>
        <ul className="flex gap-10 ml-auto">
          <li>ABOUT US</li>
          <li>STORIES</li>
          <li>CONTACT</li>
          <li>LOGIN</li>
        </ul>
        <button
          type="button"
          className="border bg-orange-600 px-5 py-2 rounded text-white"
        >
          SIGN UP
        </button>
      </div>
      <hr />
      <div className="max-w-5xl mx-auto pt-4">
        <ul className="flex justify-evenly">
          <li>MARKETPLACE</li>
          <li>WHOLESALE CENTER</li>
          <li>SELLER CENTER</li>
          <li>SERVICES</li>
          <li>INTERNSHIPS</li>
          <li>EVENTS</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
