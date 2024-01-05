import React from "react";
import Link from "next/link";
import Image from "next/image";
import hacker from "./hacker.gif";
import Shopping_Cart from "./icons8-shopping-cart.gif";
import './navbar.css';

const Navbar = () => {
  return (
    <nav class="container flex justify-around">
      <div class="header3 w-[100%] h-[60px] mb-[40px] text-white">
        <ul class="menu3 h-[100%] w-[100%] flex items-center">
          <li>
            <section className="siteLogo my-4 mr-10 text-4xl font-Norican">
            EnlightenAi
            </section>
          </li>
          <section className="flex items-center">
            <li>
              <Link href="/About">About</Link>
            </li>
          </section>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
