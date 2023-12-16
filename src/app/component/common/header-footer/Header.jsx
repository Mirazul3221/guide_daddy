'use client';
import React, { useState } from 'react';
import HeaderTop from '../../includes/HeaderTop';
import Logo from '../../includes/Logo';
import Menu from '../../includes/Menu';
import MyAccount from '../../includes/MyAccount';
import Link from '../../includes/Link';
import MyList from '../../includes/MyList';
import Cart from '../../includes/Cart';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosSearch } from 'react-icons/io';
import MobileMenu from '../../includes/MobileMenu';

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="">
      <div className="bg-white px-6">
        <div class="header-top bg-primary">
          <div class="max-w-[1440px] m-auto">
            <div className="hidden md:block">
              <HeaderTop />
            </div>
          </div>
        </div>
        <div class="header-bottom">
          <div class="md:flex items-center justify-between m-auto max-w-[1440px]">
            <div class="md:w-3/4 md:flex items-center justify-between space-x-5">
              <div className="hidden md:block">
                <Logo />
              </div>
              <div className="hidden md:block">
                <Menu />
              </div>
            </div>
            <div class="md:w-1/4">
              <div class="md:flex items-center justify-between mb-2">
                <div className="hidden md:block">
                  <MyAccount />
                </div>
                <div className="hidden md:block">
                  <Link />
                </div>
                <div className="hidden md:block">
                  <MyList />
                </div>
                <div className="hidden md:block">
                  <Cart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================mobile responsive menue================= */}
      <div className="bg-white md:hidden">
        <div class="header-top bg-primary">
          <div class="m-auto text-[12px] bg-amber-100">
            <HeaderTop />
          </div>
        </div>
        <div class="header-bottom">
          <div class=" m-auto flex items-center justify-between mx-4">
            <div className="flex items-center gap-2">
              <GiHamburgerMenu
                onClick={() => setMenu(!menu)}
                className="w-6 h-6"
              />
              <IoIosSearch className="w-6 h-6" />
            </div>
            <Logo />
            <div className="flex items-center gap-2">
              <MyList />
              <Cart />
            </div>
          </div>
        </div>
        <div
          className={`fixed top-0 duration-500 ${
            menu ? 'left-0' : 'left-[100%]'
          } w-screen h-screen bg-white overflow-y-scroll`}
        >
          <MobileMenu menu={menu} setMenu={setMenu} />
        </div>
      </div>
    </div>
  );
};

export default Header;
