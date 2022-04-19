import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="pl-12 md:pl-0 md:shadow-gray-300 md:shadow text-xs font-light px-2 py-4 ">
      <div className="flex gap-10 items-center max-w-5xl mx-auto pb-4">
        <Image
          src="https://drive.google.com/uc?export=view&id=1JuOUUYYUmexWJlTX27mc8y8IV7osCxws"
          alt="Vasiti Logo"
          width="150px"
          height="35px"
        />
        <div className="hidden md:flex items-center gap-5 ml-auto">
          <ul className="md:flex gap-10">
            <li>ABOUT US</li>
            <li>STORIES</li>
            <li>CONTACT</li>
            <li>LOGIN</li>
          </ul>
          <button
            type="button"
            className=" border bg-orange-600 px-5 py-2 rounded text-white self-end"
          >
            SIGN UP
          </button>
        </div>
      </div>
      <hr className="hidden md:block" />
      <div className="hidden md:block md:max-w-5xl mx-auto pt-4">
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
