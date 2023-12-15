import Script from 'next/script';
import React from 'react';
const Footer = () => {
  return (
    <div>
      <footer class="secondary-footer bg-[#050821] md:px-20 px-4 py-16">
        <div class="top md:flex space-y-2 md:space-y-0 gap-6 justify-between">
          <div class="md:w-3/12 item flex gap-3 border-[1px] border-gray-800 hover:bg-gray-900/30 cursor-pointer rounded-md py-6 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
              />
            </svg>
            <div class="title">
              <h2 class="text-white font-semibold">Help Center</h2>
              <h6 class="text-gray-500">Find annswer to all your question</h6>
            </div>
          </div>
          <div class="md:w-3/12 item flex gap-3 border-[1px] border-gray-800 hover:bg-gray-900/30 cursor-pointer rounded-md py-6 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>

            <div class="title">
              <h2 class="text-white font-semibold">Live Chat</h2>
              <h6 class="text-gray-500">Our agens are available 24-7</h6>
            </div>
          </div>
          <div class="md:w-3/12 item flex gap-3 border-[1px] border-gray-800 hover:bg-gray-900/30 cursor-pointer rounded-md py-6 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              />
            </svg>

            <div class="title">
              <h2 class="text-white font-semibold">Call Us</h2>
              <h6 class="text-gray-500">Every day 7am - midnight ET</h6>
            </div>
          </div>

          <div class="md:w-3/12 item flex gap-3 border-[1px] border-gray-800 hover:bg-gray-900/30 cursor-pointer rounded-md py-6 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
              />
            </svg>

            <div class="title">
              <h2 class="text-white font-semibold">Email Us</h2>
              <h6 class="text-gray-500">bangloss@gmail.com</h6>
            </div>
          </div>
        </div>

        {/* <!-- -----------------------middle----------------------- --> */}
        <div class="middle-section my-12 pt-16 border-y-[1px] border-gray-800">
          <div class="top md:flex">
            <div class="top-left md:w-2/3 grid md:grid-cols-5 grid-cols-2 px-4">
              <ul class="text-gray-500 font-medium space-y-4">
                <li class="text-white font-bold">Shop</li>
                <li class="hover:text-white">
                  <a href="#">Men &apos s Eyeglasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Women &apos s Eyeglasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Kids &apos Glasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Transitions Lenses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Progressive Lenses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Prescription Sunglasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Blue Light Glasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Sports Glasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Coupons and Sales</a>
                </li>
                {/* <!-- <li class="hover:text-white"><a href="#"></a></li> --> */}
              </ul>

              <ul class="text-gray-500 font-medium space-y-4">
                <li class="text-white font-bold">Shop Brands</li>
                <li class="hover:text-white">
                  <a href="#">Ray-Ban Glasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Oakley Glasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Gucci Glasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Tom Ford Glasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Versace Glasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Prada Glasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Costa Sunglasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Persol Glasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Designer Glasses</a>
                </li>
                {/* <!-- <li class="hover:text-white"><a href="#"></a></li> --> */}
              </ul>

              <ul class="text-gray-500 font-medium space-y-4">
                <li class="text-white font-bold">Explore</li>
                <li class="hover:text-white">
                  <a href="#">FSA/HSA Glasses</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Prescription Scanner</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Try On Glasses Online</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Glasses Student Discount</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Heroes Get Rewarded</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">GlassesUSA.com Referral</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Fashion Trends</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Gift Cards</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Freebies</a>
                </li>
                {/* <!-- <li class="hover:text-white"><a href="#"></a></li> --> */}
              </ul>

              <ul class="text-gray-500 font-medium space-y-4">
                <li class="text-white font-bold">
                  <a href="#">Customer Service</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">My Account</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Track Your Order</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Returns</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Help Center</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Upload Prescription</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Contact Us</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Accessibility</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">UnitedHealthCare Vision</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Vision Insurance</a>
                </li>
              </ul>

              <ul class="text-gray-500 font-medium space-y-4">
                <li class="text-white font-bold">
                  <a href="#">About</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">About Us</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Our impact</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Through the lense</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Pressroom</a>
                </li>
                <li class="hover:text-white">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div class="top-right md:w-1/3 border-l-[1px] border-gray-800 px-4">
              <h2 class="text-white font-bold text-[16px] leading-relaxed">
                Join our newsletter to enjoy more exclusive offers and the
                latest updates.
              </h2>

              <div class="input-area">
                <label
                  for="email-address-icon"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Email
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-[5px] flex items-center pl-3.5 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <div class="flex">
                    <input
                      type="text"
                      id="email-address-icon"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 outline-0 rounded-l-lg "
                      placeholder="name@flowbite.com"
                    />
                    <h2 class="text-white font-bold text-lg w-48 py-[10px] text-center rounded-r-lg bg-sky-500">
                      Sign Up
                    </h2>
                  </div>
                </div>
              </div>
              <p class="text-[11px] text-white mt-4">
                By clicking `Sign Up` you agree to the Terms of Use & Privacy
                Policy. Registration from age 17 only. Premium and sales items
                excluded.
              </p>
              <div class="mt-10 flex text-gray-500 justify-between items-center">
                {/* <!-- Behance --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                </svg>

                {/* <!-- Discord --> */}
                <svg
                  class="h-5 w-5"
                  fill="currentColor"
                  viewbox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                </svg>

                {/* <!-- Facebook --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>

                {/* <!-- Messenger --> */}
                <svg
                  class="h-5 w-5"
                  fill="currentColor"
                  viewbox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
                </svg>

                {/* <!-- Twitter --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                {/* <!-- Google --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>

                {/* <!-- Instagram --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>

                {/* <!-- Linkedin --> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </div>
            </div>
          </div>

          <div class="bottom md:flex justify-between my-4">
            <div class="left flex gap-8">
              {/* <img class="mt-4 w-16" src="./assets/images/colllection11/icon-8.png" alt="">
                                <img class="mt-4 w-16" src="./assets/images/colllection11/icon-9.png" alt=""> */}
            </div>
            <div class="middle ">
              <div class="flex gap-8 items-center">
                {/* <img class="mt-4 w-20 " src="./assets/images/colllection11/icon-10.png"
                                                alt="">
                                        <img class="mt-4 w-20" src="./assets/images/colllection11/icon-11.png" alt="">
                                        <img class="mt-4 w-20" src="./assets/images/colllection11/icon-12.png" alt="">
                                        */}
              </div>
            </div>
            <div class="right flex gap-2">
              {/* <div class="img ">
                                        <img class="mt-4 w-12 cursor-pointer"
                                                src="./assets/images/colllection11/icon-13.png" alt=""> */}
            </div>
            <div class="img ">
              {/* <img class="mt-4 w-12 cursor-pointer"
                                                src="./assets/images/colllection11/icon-14.png" alt=""> */}
            </div>
            <div class="img ">
              {/* <img class="mt-4 w-12 cursor-pointer"
                                                src="./assets/images/colllection11/icon-15.png" alt=""> */}
            </div>
            <div class="img ">
              {/* <img class="mt-4 w-12 cursor-pointer"
                                                src="./assets/images/colllection11/icon-16.png" alt=""> */}
            </div>
            <div class="img ">
              {/* <img class="mt-4 w-12 cursor-pointer"
                                                src="./assets/images/colllection11/icon-17.png" alt=""> */}
            </div>
            <div class="img ">
              {/* <img class="mt-4 w-12 cursor-pointer"
                                                src="./assets/images/colllection11/icon-18.png" alt=""> */}
            </div>
            <div class="img ">
              {/* <img class="mt-4 w-12 cursor-pointer"
                                                src="./assets/images/colllection11/icon-19.png" alt=""> */}
            </div>
            <div class="img ">
              {/* <img class="mt-4 w-12 cursor-pointer"
                                                src="./assets/images/colllection11/icon-20.png" alt=""> */}
            </div>
          </div>
        </div>

        <div class="bottom">
          <div class="footer flex justify-between text-gray-500">
            <ul class="text-[11px] flex">
              <li class="hover:underline px-2">
                <a href="#">Privacy Policy</a>
              </li>
              <li class="hover:underline">
                <a class="border-x-[1px] px-2" href="#">
                  Terms and Conditions of Use
                </a>
              </li>
              <li class="hover:underline">
                <a class="border-x-[1px] px-2" href="#">
                  Do Not Sell or Share
                </a>
              </li>
              <li class="hover:underline">
                <a class="border-x-[1px] px-2" href="#">
                  My Personal Information
                </a>
              </li>
              <li class="hover:underline">
                <a class="border-x-[1px] px-2" href="#">
                  Cookie
                </a>
              </li>
              <li class="hover:underline">
                <a class="border-x-[1px] px-2" href="#">
                  Notice
                </a>
              </li>
              <li class="hover:underline">
                <a class="border-x-[1px] px-2" href="#">
                  AdChoices
                </a>
              </li>
              <li class="hover:underline">
                <a class="border-l-[1px] px-2" href="#">
                  California Collection Notice
                </a>
              </li>
            </ul>
            <p>© 2006-2023 eyebuydirect.com</p>
          </div>
        </div>
      </footer>

      <Script src="./globals.js"></Script>
    </div>
  );
};

export default Footer;
