import React from 'react'
import HeaderTop from '../../includes/HeaderTop'
import Logo from '../../includes/Logo'
import Menu from '../../includes/Menu'
import MyAccount from '../../includes/MyAccount'
import Link from '../../includes/Link'
import MyList from '../../includes/MyList'
import Cart from '../../includes/Cart'

const Header = () => {
  return (
    <div className='bg-white'>
    <div class="header-top bg-primary">
        <div class="max-w-[1440px] m-auto">
            <HeaderTop />
        </div>
    </div>
    <div class="header-bottom">
        <div class="flex items-center justify-between m-auto max-w-[1440px]">
            <div class="w-3/4 flex items-center justify-between space-x-5">
               <Logo />
               <Menu />
            </div>
            <div class="w-1/4 relative">
                <div class="flex items-center justify-between mb-2">
                    <MyAccount />
                     <Link />
                    <MyList />
                    <Cart />
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Header
