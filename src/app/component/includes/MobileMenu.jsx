'use client';
import React, { useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
const MobileMenu = props => {
  const [name, setName] = useState('');
  return (
    <div className="md:hiddden relative mt-4">
      <nav className="menu w-full">
        <LiaTimesSolid
          className="w-6 h-6 absolute right-4"
          onClick={() => {
            props.setMenu(!props.menu);
          }}
        />
        <div>
          <ul className="text-gray-600 font-medium items-center">
            <li
              onClick={e => {
                name !== e.target.innerText
                  ? setName(e.target.innerText)
                  : setName('');
              }}
              className="header_menu_title hover:text-blac border-b-4 border-transparent hover:border-primary duration-300 hover:border-b-4 py-2 px-6"
            >
              <a href="#">Tours</a>

              {/* <!-- -----------------eyeglass option box---------------------- --> */}

              {name == 'Tours' && (
                <div
                  className={`w-full menue_list bg-white shadow-lg px-10 py-6 top-0 left-0 border-t-[2px]`}
                >
                  <div className="item bg-white">
                    <ul className="space-y-2">
                      <li className="text-gray-500 font-medium">Shop</li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">Eyeglasses</a>
                      </li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">Women’s Eyeglasses</a>
                      </li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">Men’s Eyeglasses</a>
                      </li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">Kids’ Eyeglasses</a>
                      </li>
                      <li className="text-rose-500 hover:text-primary hover:underline">
                        <a href="#">On Sale</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul className="space-y-2">
                      <li className="text-gray-500 font-medium">Featured</li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">New Arrivals</a>
                      </li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">Ray-Ban Glasses</a>
                      </li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">2-Day Delivery</a>
                      </li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">Eyeglass Frames</a>
                      </li>
                      <li className="text-rose-500 hover:text-primary hover:underline">
                        <a href="#">Eyeglass Frames</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li
              onClick={e => {
                name !== e.target.innerText
                  ? setName(e.target.innerText)
                  : setName('');
              }}
              className="header_menu_title hover:text-black border-b-4 border-transparent hover:border-primary duration-300 hover:border-b-4 py-2 px-6"
            >
              <a href="#">Cruise</a>

              {name == 'Cruise' && (
                <div
                  data-list="sunglass"
                  className="w-full menue_list bg-white shadow-lg px-10 py-6 top-0 left-0 border-t-[2px]"
                >
                  <div className="item bg-white">
                    <ul className="space-y-2">
                      <li className="text-gray-500 font-medium">Shop</li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">Eyeglas</a>
                      </li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">Women’s Eyeglyogiyasses</a>
                      </li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">Men’sgsgz Eyeglasses</a>
                      </li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">Kids’ Eyeglasdgdsgses</a>
                      </li>
                      <li className="text-rose-500 hover:text-primary hover:underline">
                        <a href="#">On Sadfgdfle</a>
                      </li>
                    </ul>
                  </div>
                  <div className="item">
                    <ul className="space-y-2">
                      <li className="text-gray-500 font-medium">Featured</li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">New Arhsetawrivals</a>
                      </li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">Ray-Ban Gaewfwlasses</a>
                      </li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">2-Day Delgegzwaivery</a>
                      </li>
                      <li className="hover:text-primary hover:underline">
                        <a href="#">EyeglafwefGEss Frames</a>
                      </li>
                      <li className="text-rose-500 hover:text-primary hover:underline">
                        <a href="#">EyeggWEHAlass Frames</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li
              onClick={e => {
                name !== e.target.innerText
                  ? setName(e.target.innerText)
                  : setName('');
              }}
              className="header_menu_title hover:text-black border-b-4 border-transparent hover:border-primary duration-300 hover:border-b-4 py-2 px-6"
            >
              <a href="#">Bikes</a>
              {name == 'Bikes' && (
                <div className="w-full menue_list bg-white shadow-lg px-10 py-6 top-0 left-0 border-t-[2px]">
                  <div className="container md:flex gap-4">
                    {/* <!-- -------------single brand box-------------------------- --> */}
                    <div className="item group overflow-hidden">
                      <img
                        className="rounded-md scale-100 hover:scale-105 duration-500"
                        src="images/eyeglassbrand/Screenshot_5.png"
                        alt=""
                      />
                      <p className="text-center group-hover:text-primary text-[18px] group-hover:underline mt-2">
                        <a href="#"> Ray-Ban</a>
                      </p>
                    </div>
                    {/* 
                <!-- -------------single brand box-------------------------- --> */}
                    <div className="item group overflow-hidden">
                      <img
                        className="rounded-md scale-100 hover:scale-105 duration-500"
                        src="images/eyeglassbrand/Screenshot_1.png"
                        alt=""
                      />
                      <p className="text-center group-hover:text-primary text-[18px] group-hover:underline mt-2">
                        <a href="#"> Oakley</a>
                      </p>
                    </div>

                    {/* <!-- -------------single brand box-------------------------- --> */}
                    <div className="item group overflow-hidden">
                      <img
                        className="rounded-md scale-100 hover:scale-105 duration-500"
                        src="./images/eyeglassbrand/Screenshot_2.png"
                        alt=""
                      />
                      <p className="text-center group-hover:text-primary text-[18px] group-hover:underline mt-2">
                        <a href="#"> ARNETTE</a>
                      </p>
                    </div>

                    {/* <!-- -------------single brand box-------------------------- --> */}
                    <div className="item group overflow-hidden">
                      <img
                        className="rounded-md scale-100 hover:scale-105 duration-500"
                        src="images/eyeglassbrand/Screenshot_3.png"
                        alt=""
                      />
                      <p className="text-center group-hover:text-primary text-[18px] group-hover:underline mt-2">
                        <a href="#"> Vogue Eyewear</a>
                      </p>
                    </div>

                    {/* <!-- -------------single brand box-------------------------- --> */}
                    <div className="item group overflow-hidden">
                      <img
                        className="rounded-md scale-100 hover:scale-105 duration-500"
                        src="images/eyeglassbrand/Screenshot_4.png"
                        alt=""
                      />
                      <p className="text-center group-hover:text-primary text-[18px] group-hover:underline mt-2">
                        <a href="#">RFLKT</a>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li
              onClick={e => {
                name !== e.target.innerText
                  ? setName(e.target.innerText)
                  : setName('');
              }}
              className="header_menu_title hover:text-black border-b-4 border-transparent hover:border-primary duration-300 hover:border-b-4 py-2 px-6"
            >
              <a href="#">Others</a>
              {name == 'Others' && (
                <div className="w-full menue_list bg-white shadow-lg px-10 py-6 border-t-[2px]">
                  <div className="item">
                    <h2 className="text-gray-500 mb-2 font-medium">
                      Most Popular
                    </h2>
                    <div>
                      <ul className="space-y-2">
                        <li className="group hover:text-primary hover:underline">
                          <a href="#">
                            Polarized Sunglasses
                            <span className="text-[10px] text-white bg-primary group-hover:no-underline px-2 py-[2px]">
                              POPULAR
                            </span>
                          </a>
                        </li>
                        <li className="hover:text-primary hover:underline">
                          <a href="#">Blue Light Glasses</a>
                        </li>
                        <li className="hover:text-primary hover:underline">
                          <a href="#">Reading Glasses</a>
                        </li>
                        <li className="hover:text-primary hover:underline">
                          <a href="#">Transitions®</a>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="hover:text-primary hover:underline">
                          <a href="#">Bifocal Lenses</a>
                        </li>
                        <li className="hover:text-primary hover:underline">
                          <a href="#">Progressive Lenses</a>
                        </li>
                        <li className="hover:text-primary hover:underline">
                          <a href="#">Prism Lenses</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="">
                    <h2 className="text-gray-500 mb-2 font-medium">Coatings</h2>
                    <div className="">
                      <ul className="space-y-2">
                        <li className="hover:text-primary hover:underline">
                          <a href="#">Anti-Reflective Coating</a>
                        </li>
                        <li className="hover:text-primary hover:underline">
                          <a href="#">Mirrored Sunglasses</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="overflow-hidden relative">
                    <img
                      className="rounded-md w-60 z-50 scale-100 duration-300 hover:scale-105"
                      src="images/Screenshot_6.png"
                      alt=""
                    />
                    <p className="absolute bottom-[10%] w-full text-center text-white hover:underline">
                      <a href="#">EBD Clear Premium</a>
                    </p>
                  </div>
                </div>
              )}
            </li>
            <li
              data-name="search"
              className="header_menu_title hover:text-black border-b-4 border-transparent duration-300 py-2 px-6"
            >
              {/* <div className="hidden md:block">
                <Search />
              </div> */}
            </li>
          </ul>
        </div>

        <div className="menu-item relative mx-20 w-full ml-0">
          {/* <!-- -----------------lenses option box---------------------- --> */}
        </div>

        <div
          id="searchBox"
          className="searchBox z-50 hidden absolute z-50 left-0 mx-20 shadow-md bg-white px-6 border-t-2"
        >
          <div className="top-bar">
            <ul className="flex gap-5 py-4">
              <li className="text-gray-500">Sugested Queries</li>
              <li className="bg-gray-200 py-[2px] rounded-full px-4  hover:text-primary">
                <a href="#" className=" hover:border-b-2 hover:border-primary">
                  clear
                </a>
              </li>
              <li className="bg-gray-200 py-[2px] rounded-full px-4  hover:text-primary">
                <a href="#" className=" hover:border-b-2 hover:border-primary">
                  cat eyeglass
                </a>
              </li>
              <li className="bg-gray-200 py-[2px] rounded-full px-4  hover:text-primary">
                <a href="#" className=" hover:border-b-2 hover:border-primary">
                  daydream
                </a>
              </li>
              <li className="bg-gray-200 py-[2px] rounded-full px-4  hover:text-primary">
                <a href="#" className=" hover:border-b-2 hover:border-primary">
                  aviator
                </a>
              </li>
              <li className="bg-gray-200 py-[2px] rounded-full px-4  hover:text-primary">
                <a href="#" className=" hover:border-b-2 hover:border-primary">
                  sunglasses
                </a>
              </li>
              <li className="bg-gray-200 py-[2px] rounded-full px-4  hover:text-primary">
                <a href="#" className=" hover:border-b-2 hover:border-primary">
                  heart
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom flex justify-between gap-20 py-6 border-t-[1px]">
            <div className="left w-2/3">
              <h2>Suggested for you</h2>
              <div className="img_box grid grid-cols-3 gap-4">
                <div className="item">
                  <img src="./images/eyeglass/Screenshot_1.png" alt="" />
                  <div className="flex justify-between px-4">
                    <p>
                      <a
                        className=" hover:border-b-2 hover:border-primary"
                        href="#"
                      >
                        Saint Lau
                      </a>
                    </p>
                    <p>6$</p>
                  </div>
                </div>

                <div className="item">
                  <img src="./images/eyeglass/Screenshot_2.png" alt="" />
                  <div className="flex justify-between px-4">
                    <p>
                      <a
                        className=" hover:border-b-2 hover:border-primary"
                        href="#"
                      >
                        Drums
                      </a>
                    </p>
                    <p>6$</p>
                  </div>
                </div>

                <div className="item">
                  <img src="./images/eyeglass/Screenshot_3.png" alt="" />
                  <div className="flex justify-between px-4">
                    <p>
                      <a
                        className=" hover:border-b-2 hover:border-primary"
                        href="#"
                      >
                        Saint Lau
                      </a>
                    </p>
                    <p>6$</p>
                  </div>
                </div>

                <div className="item">
                  <img src="./images/eyeglass/Screenshot_4.png" alt="" />
                  <div className="flex justify-between px-4">
                    <p>
                      <a
                        className=" hover:border-b-2 hover:border-primary"
                        href="#"
                      >
                        Saint Lau
                      </a>
                    </p>
                    <p>6$</p>
                  </div>
                </div>

                <div className="item">
                  <img src="./images/eyeglass/Screenshot_5.png" alt="" />
                  <div className="flex justify-between px-4">
                    <p>
                      <a
                        className=" hover:border-b-2 hover:border-primary"
                        href="#"
                      >
                        Saint Lau
                      </a>
                    </p>
                    <p>6$</p>
                  </div>
                </div>

                <div className="item">
                  <img src="./images/eyeglass/Screenshot_6.png" alt="" />
                  <div className="flex justify-between px-4">
                    <p>
                      <a
                        className=" hover:border-b-2 hover:border-primary"
                        href="#"
                      >
                        Saint Lau
                      </a>
                    </p>
                    <p>6$</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="left w-1/3">
              <h2 className="mb-4">Recommended</h2>
              <img src="./images/eyeglass/Screenshot_7.png" alt="" />
              <p className="hover:text-primary hover:underline mt-4 inline-block">
                <a href="">blue light filtering glasses </a>
              </p>
              <div className="mt-4">
                <h2 className="text-primary underline my-2 inline-block">
                  <a href="#">FAQ</a>
                </h2>
                <div className="">
                  <p className="hover:text-primary hover:underline inline-block">
                    <a href="#">Where can I get my prescription?</a>
                  </p>
                  <p className="hover:text-primary hover:underline inline-block">
                    <a href="#">Is there a way to try out your frams a ....</a>
                  </p>
                  <p className="hover:text-primary hover:underline inline-block">
                    <a href="#">When will I receive my order?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- -------------------- input option box -------------------- --> */}

      <div
        data-list="input"
        className="menue_list bg-white border-t-2 mt-8 inputBox hidden absolute z-50 shadow-md px-10 top-20 p-6 w-4/12 right-2"
      >
        <h2 className="text-center text-2xl text-gray-700 font-bold">
          Sign in
        </h2>
        <form className="py-4">
          <div className="mb-6">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:border-none block w-full p-2.5"
              placeholder="john.doe@company.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-primary text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-primary block w-full p-2.5 "
              placeholder="•••••••••"
              required
            />
          </div>
          <div className="flex gap-2 mb-2">
            <input
              className="bg-primary rounded-full focus:bg-rose-500"
              type="checkbox"
            />
            <p>Keep me signed in</p>
          </div>
          <button
            type="submit"
            className="text-white rounded-md py-2 w-full duration-500 hover:bg-primary bg-secondary"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="hover:text-primary text-gray-500 underline my-2 inline-block">
            <a href="#">Forget your password?</a>
          </p>
          <p className="text-lg font-medium">Or sign in with</p>
        </div>
        <div className="flex justify-center border-[1px] py-2 rounded-md mt-6 items-center">
          <div className="flex items-center">
            <img className="w-8" src="./images/google.png" alt="" />
            <p>Google</p>
          </div>
        </div>
        <div className="flex justify-center mt-4 gap-8 items-center">
          <img className="w-full" src="./images/Screenshot_2.png" alt="" />
          <img className="w-full" src="./images/Screenshot_3.png" alt="" />
        </div>
        <div className="flex items-center mt-2 gap-2">
          <p>Do not have a account?</p>
          <a
            className="hover:text-primary text-gray-500 underline my-2 "
            href="#"
          >
            sign up now
          </a>
        </div>
      </div>
      {/* <!-- ------------------help option box ----------------------- --> */}
      <div
        data-list="help"
        className="menue_list bg-white border-t-2 hidden help-center mt-8 absolute z-50 shadow-md top-20 pt-6 w-3/12 right-2"
      >
        <div className=" px-6">
          <h2 className="text-center text-2xl text-gray-700 font-bold">
            Sign in
          </h2>
          <ul className="space-y-2 mt-4">
            <li className="py-[2px] px-4 text-[16px] text-gray-700 hover:underline hover:text-primary">
              <a href="#">How to Measure Frame Size</a>
            </li>
            <li className="py-[2px] px-4 text-[16px] text-gray-700 hover:underline hover:text-primary">
              <a href="#">How to Read Your Prescription</a>
            </li>
            <li className="py-[2px] px-4 text-[16px] text-gray-700 hover:underline hover:text-primary">
              <a href="#">Match Frames & Face Shape</a>
            </li>
            <li className="py-[2px] px-4 text-[16px] text-gray-700 hover:underline hover:text-primary">
              <a href="#">Shipping & Returns</a>
            </li>
            <li className="py-[2px] px-4 text-[16px] text-gray-700 hover:underline hover:text-primary">
              <a href="#">Track Your Order</a>
            </li>
            <li className="py-[2px] px-4 text-[16px] text-gray-700 hover:underline hover:text-primary">
              <a href="#">Tips & Guides</a>
            </li>
          </ul>

          <button
            type="submit"
            className="text-white rounded-md py-2 mt-6 w-full duration-500 hover:bg-primary bg-secondary"
          >
            Help and FAQ
          </button>
        </div>

        <div className="mt-6 space-y-2 px-6 bg-gray-200">
          <h2 className="text-center text-lg py-4 text-gray-700 font-bold">
            Get In Touch
          </h2>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <span className="text-[16px] text-gray-500 hover:underline hover:text-primary">
              Start a live chat
            </span>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <span className="text-[16px] text-gray-500 hover:underline hover:text-primary">
              support@eyebuydirect.com
            </span>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <span className="text-[16px] text-gray-500 hover:underline hover:text-primary">
              Available 24/7
            </span>
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <span className="text-[16px] text-gray-500 hover:underline hover:text-primary">
              1-855-393-2891 (Available 24/7)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
