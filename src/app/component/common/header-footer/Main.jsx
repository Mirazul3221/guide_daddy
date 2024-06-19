import React from 'react';
import Image from 'next/image';
const Main = () => {
  return (
    <div class="max-w-[1440px] mx-auto">
      <div class="hidden md:block main bg-[url('/images/home/head-banner.webp')] bg-center bg-cover py-10 md:pb-40">
        <div class="w-fit mb-14 m-auto">
          <h2 class="text-center mt-6 text-white text-3xl">
            Your Trip Starts Here
          </h2>
          <div class="flex gap-10 mt-12 text-white">
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <h3 class="border-b-[1px] border-dotted">Secure Payment</h3>
            </div>
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <h3 class="border-b-[1px] border-dotted">
                Support in Approx. 30s
              </h3>
            </div>
          </div>
        </div>

        {/* <!-- ----------------search bar--------------- --> */}

        <div class="search_box relative mt-6 mx-20 m-auto rounded-lg p-6 bg-white">
          <div class="tab_bar absolute text-white -top-6 w-9/12 px-4 py-2 left-[50%] flex justify-between items-center translate-x-[-50%] rounded-full bg-gray-900">
            <div class="item px-4 text-black py-2 rounded-full bg-white active flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                />
              </svg>
              <h2>Hotel</h2>
            </div>
            <div class="item flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
              <h2>Flights</h2>
            </div>
            <div class="item flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                />
              </svg>

              <h2>Trains</h2>
            </div>
            <div class="item flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
              <h2>Cars</h2>
            </div>
            <div class="item flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                />
              </svg>
              <h2>Attractions & Tours</h2>
            </div>
            <div class="item flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
              <h2>Bundle & Save</h2>
            </div>
          </div>
          <div class="card_body mt-6 flex">
            <div class="item border-[1px] px-4 py-2 w-full">
              <p class="text-gray-400 text-[12px]">Destination</p>
              <input
                class="outline-none pl-2"
                placeholder="City ,airpot, region, landmark, or property name"
                type="text"
              />
            </div>

            <div class="item w-full flex items-center justify-between border-[1px] px-4 py-2">
              <div class="">
                <p class="text-[12px]">Check-in</p>
                <h2 class="font-bold">Thu, Nov 23</h2>
              </div>
              <p class="">1-night</p>
              <div class="">
                <p class="text-[12px]">Check-out</p>
                <h2 class="font-bold">Thu, Nov 23</h2>
              </div>
            </div>

            <div class="item w-full border-[1px] px-4 py-2">
              <p class="text-gray-400 text-[12px]">Rooms and gests</p>
              <p class="outline-none pl-2">1 Rooms, 4 adults, 0 childern</p>
            </div>

            <div class="button ml-2 cursor-pointer flex justify-center items-center px-6 py-2 text-white bg-sky-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              Search
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ------------------body--------------- --> */}
      <div class="body_box md:p-10 bg-white md:rounded-[35px] -mt-10 md:-mt-20">
        <div class="image_gallery md:flex gap-4 px-4 mt-10 md:mt-0 md:space-y-0 space-y-2">
          <div class="img">
            <Image
              class="rounded-lg"
              src="/images/home/slider_image_01.webp"
              alt=""
            />
          </div>
          <div class="img">
            <Image src="./images/home/slider_image_02.webp" alt="" />
          </div>
          <div class="img">
            <Image src="/images/home/slider_image_01.webp" alt="" />
          </div>
        </div>
        <div class="content_box bg-rose-50 mt-10 p-10">
          <h2 class="text-4xl text-gray-700">Featured Properties</h2>
          <div class="md:flex gap-10 mt-4 text-gray-700">
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <h3 class="border-b-[1px] border-dotted">Secure Payment</h3>
            </div>
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <h3 class="border-b-[1px] border-dotted">
                Support in Approx. 30s
              </h3>
            </div>
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <h3 class="border-b-[1px] border-dotted">
                Support in Approx. 30s
              </h3>
            </div>
          </div>

          <div class="tag">
            <ul class="flex flex-wrap gap-4 mt-4">
              <li class="py-2 px-4 rounded-md bg-slate-900 text-white">
                Atlanta
              </li>
              <li class="py-2 px-4 rounded-md bg-white">Orlando</li>
              <li class="py-2 px-4 rounded-md bg-white">Miami</li>
              <li class="py-2 px-4 rounded-md bg-white">BeachNew</li>
              <li class="py-2 px-4 rounded-md bg-white">YorkLas</li>
              <li class="py-2 px-4 rounded-md bg-white">VegasLos</li>
              <li class="py-2 px-4 rounded-md bg-white">Angeles</li>
              <li class="py-2 px-4 rounded-md bg-white">Houston</li>
              <li class="py-2 px-4 rounded-md bg-white">Cancun</li>
            </ul>
          </div>

          <div class="card mt-10 md:flex justify-between space-y-4 md:space-y-0 gap-4">
            <div class="item bg-white pb-4 md:w-3/12">
              <div class="img">
                <Image
                  class="rounded-tl-lg h-60 rounded-tr-lg"
                  src="/images/home/property_image_01.webp"
                  alt=""
                />
              </div>
              <div class="flex gap-2 mt-2">
                <p>Hilton Atlanta</p>
                <Image src="./images/five_star.png" alt="" />
              </div>
              <div class="flex gap-2">
                <p class="rounded-l-full rounded-br-full bg-blue-700 p-[4px] w-fit text-white">
                  4.4/<span class="text-[12px]">5</span>
                </p>
                <p>115 reviews</p>
              </div>
              <div class="mt-10 flex justify-end mr-2">
                from <span class="font-bold">97$</span>
              </div>
            </div>
            <div class="item bg-white pb-4 md:w-3/12">
              <div class="img">
                <Image
                  class="rounded-tl-lg rounded-tr-lg h-60 w-full"
                  src="./images/home/property_image_02.webp"
                  alt=""
                />
              </div>
              <div class="flex gap-2 mt-2">
                <p>Hilton Atlanta</p>
                <Image src="./images/five_star.png" alt="" />
              </div>
              <div class=" flex gap-2">
                <p class="rounded-l-full rounded-br-full bg-blue-700 p-[4px] w-fit text-white">
                  4.4/<span class="text-[12px]">5</span>
                </p>
                <p>115 reviews</p>
              </div>
              <div class="mt-10 flex justify-end mr-2">
                from <span class="font-bold">97$</span>
              </div>
            </div>
            <div class="item bg-white pb-4 md:w-3/12">
              <div class="img">
                <Image
                  class="rounded-tl-lg h-60 w-full rounded-tr-lg"
                  src="./images/home/property_image_04..webp"
                  alt=""
                />
              </div>
              <div class="flex gap-2 mt-2">
                <p>Hilton Atlanta</p>
                <Image src="./images/five_star.png" alt="" />
              </div>
              <div class=" flex gap-2">
                <p class="rounded-l-full rounded-br-full bg-blue-700 p-[4px] w-fit text-white">
                  4.4/<span class="text-[12px]">5</span>
                </p>
                <p>115 reviews</p>
              </div>
              <div class="mt-10 flex justify-end mr-2">
                from <span class="font-bold">97$</span>
              </div>
            </div>
            <div class="item bg-white md:w-3/12 relative overflow-hidden">
              <Image
                class="md:h-full rounded-md"
                src="/images/home/property_image_03.png"
                alt=""
              />
              <div class="absolute w-full h-32 bg-sky-500 bottom-0 blur-3xl"></div>
              <div class="absolute bottom-0 w-full flex justify-center items-center">
                <div class="py-10 px-4">
                  <h2 class="text-white text-lg">
                    Discover great deals on hotels around the world
                  </h2>
                  <div>
                    <a href="#">
                      <p class="button py-2 text-center rounded-md mt-2 bg-blue-500">
                        Go Now
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content_box bg-rose-50 mt-10 p-10">
          <h2 class="text-4xl text-gray-700">Popular Attractions</h2>
          <div class="tag">
            <ul class="flex flex-wrap gap-4 mt-4">
              <li class="py-2 px-4 rounded-md bg-slate-900 text-white">
                Bangkok
              </li>
              <li class="py-2 px-4 rounded-md bg-white">Manila</li>
              <li class="py-2 px-4 rounded-md bg-white">Tokyo</li>
              <li class="py-2 px-4 rounded-md bg-white">Hong Kong</li>
              <li class="py-2 px-4 rounded-md bg-white">Taipei</li>
              <li class="py-2 px-4 rounded-md bg-white">Seoul</li>
            </ul>
          </div>

          <div class="card mt-10 md:flex justify-between space-y-4 md:space-y-0 gap-4">
            <div class="item bg-white pb-4">
              <div class="img">
                <Image
                  class="rounded-tl-lg rounded-tr-lg"
                  src="./images/home/beauty_of_place01.webp"
                  alt=""
                />
              </div>
              <div class="p-4">
                <div class="flex gap-2 mt-2">
                  <p>Hilton Atlanta</p>
                  <Image src="./images/five_star.png" alt="" />
                </div>
                <div class=" flex gap-2 mt-4">
                  <p class="rounded-l-full rounded-br-full bg-blue-700 p-[4px] w-fit text-white">
                    4.4/<span class="text-[12px]">5</span>
                  </p>
                  <p>115 reviews</p>
                </div>
              </div>
            </div>
            <div class="item bg-white pb-4">
              <div class="img">
                <Image
                  class="rounded-tl-lg rounded-tr-lg"
                  src="./images/home/beauty_of_place02.webp"
                  alt=""
                />
              </div>
              <div class="p-4">
                <div class="flex gap-2 mt-2">
                  <p>Hilton Atlanta</p>
                  <Image src="./images/five_star.png" alt="" />
                </div>
                <div class=" flex gap-2 mt-4">
                  <p class="rounded-l-full rounded-br-full bg-blue-700 p-[4px] w-fit text-white">
                    4.4/<span class="text-[12px]">5</span>
                  </p>
                  <p>115 reviews</p>
                </div>
              </div>
            </div>
            <div class="item bg-white pb-4">
              <div class="img">
                <Image
                  class="rounded-tl-lg rounded-tr-lg"
                  src="/images/home/beauty_of_place03.webp"
                  alt=""
                />
              </div>
              <div class="p-4">
                <div class="flex gap-2 mt-2">
                  <p>Hilton Atlanta</p>
                  <Image src="./images/five_star.png" alt="" />
                </div>
                <div class=" flex gap-2 mt-4">
                  <p class="rounded-l-full rounded-br-full bg-blue-700 p-[4px] w-fit text-white">
                    4.4/<span class="text-[12px]">5</span>
                  </p>
                  <p>115 reviews</p>
                </div>
              </div>
            </div>

            <div class="item bg-white relative overflow-hidden bg-blue-500">
              <Image
                class="md:h-full rounded-md"
                src="/images/home/women_bath.png"
                alt=""
              />
              <div class="absolute w-full h-32 bg-sky-500 bottom-0 blur-3xl"></div>
              <div class="absolute bottom-0 w-full flex justify-center items-center">
                <div class="py-10 px-4">
                  <h2 class="text-white text-lg">
                    Discover great deals on hotels around the world
                  </h2>
                  <div>
                    <a href="#">
                      <p class="button py-2 text-center rounded-md mt-2 bg-blue-500">
                        Go Now
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="content_box bg-rose-50 mt-10 p-10">
          <h2 class="text-4xl text-gray-700">Recommended Car Rentals</h2>
          <div class="md:flex gap-10 mt-4 text-gray-700">
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              <h3 class="border-b-[1px] border-dotted">Secure Payment</h3>
            </div>
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <h3 class="border-b-[1px] border-dotted">
                Support in Approx. 30s
              </h3>
            </div>
            <div class="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <h3 class="border-b-[1px] border-dotted">
                Support in Approx. 30s
              </h3>
            </div>
          </div>

          <div class="tag">
            <ul class="flex flex-wrap gap-4 mt-4">
              <li class="py-2 px-4 rounded-md bg-slate-900 text-white">
                Orlando
              </li>
              <li class="py-2 px-4 rounded-md bg-white">Los Angeles</li>
              <li class="py-2 px-4 rounded-md bg-white">Bangkok</li>
              <li class="py-2 px-4 rounded-md bg-white">London</li>
              <li class="py-2 px-4 rounded-md bg-white">San Francisco</li>
              <li class="py-2 px-4 rounded-md bg-white">Auckland</li>
            </ul>
          </div>

          <div class="card mt-10 md:flex justify-between space-y-4 md:space-y-0 gap-4">
            <div class="item md:w-3/12 bg-white pb-4">
              <div class="img">
                <Image
                  class="rounded-tl-lg rounded-tr-lg"
                  src="/images/home/car01.png"
                  alt=""
                />
              </div>
              <div class="flex gap-2 mt-2">
                <p>Hilton Atlanta</p>
                <Image src="./images/five_star.png" alt="" />
              </div>
              <div class=" flex gap-2">
                <p class="rounded-l-full rounded-br-full bg-blue-700 p-[4px] w-fit text-white">
                  4.4/<span class="text-[12px]">5</span>
                </p>
                <p>115 reviews</p>
              </div>
              <div class="mt-10 flex justify-end mr-2">
                from <span class="font-bold">97$</span>
              </div>
            </div>
            <div class="item bg-white md:w-3/12 pb-4">
              <div class="img">
                <Image
                  class="rounded-tl-lg rounded-tr-lg"
                  src="/images/home/car02.png"
                  alt=""
                />
              </div>
              <div class="flex gap-2 mt-2">
                <p>Hilton Atlanta</p>
                <Image src="./images/five_star.png" alt="" />
              </div>
              <div class=" flex gap-2">
                <p class="rounded-l-full rounded-br-full bg-blue-700 p-[4px] w-fit text-white">
                  4.4/<span class="text-[12px]">5</span>
                </p>
                <p>115 reviews</p>
              </div>
              <div class="mt-10 flex justify-end mr-2">
                from <span class="font-bold">97$</span>
              </div>
            </div>
            <div class="item bg-white md:w-3/12 pb-4">
              <div class="img">
                <Image
                  class="rounded-tl-lg rounded-tr-lg"
                  src="/images/home/car01.png"
                  alt=""
                />
              </div>
              <div class="flex gap-2 mt-2">
                <p>Hilton Atlanta</p>
                <Image src="./images/five_star.png" alt="" />
              </div>
              <div class=" flex gap-2">
                <p class="rounded-l-full rounded-br-full bg-blue-700 p-[4px] w-fit text-white">
                  4.4/<span class="text-[12px]">5</span>
                </p>
                <p>115 reviews</p>
              </div>
              <div class="mt-10 flex justify-end mr-2">
                from <span class="font-bold">97$</span>
              </div>
            </div>
            <div class="item md:w-3/12 bg-white relative overflow-hidden">
              <Image
                class="md:h-full rounded-md"
                src="/images/home/car03.png"
                alt=""
              />
              <div class="absolute w-full h-32 bg-sky-500 bottom-0 blur-3xl"></div>
              <div class="absolute bottom-0 w-full flex justify-center items-center">
                <div class="py-10 px-4">
                  <h2 class="text-white text-lg">
                    Discover great deals on hotels around the world
                  </h2>
                  <div>
                    <a href="#">
                      <p class="button py-2 text-center rounded-md mt-2 bg-blue-500">
                        Go Now
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom hidden md:block overflow-hidden h-[80vh] bg-[url('/images/home/bg_2.webp')] bg-center bg-no-repeat pt-20">
          <div class="container px-20 flex gap-10">
            <div class="item">
              <Image
                class="w-96 rounded-t-[40px] border-[12px]"
                src="/images/home/en-us-phone.jpg"
                alt=""
              />
            </div>
            <div class="item mt-2">
              <h2 class="text-white text-4xl">Get the Trip.com App</h2>
              <p class="text-white mt-4">
                Our award-winning app gives you 30% extra Trip Coins.
              </p>

              <div class="flex items-center">
                <div class="left">
                  <div class="mt-4 w-11/12">
                    <div class="flex gap-2 items-center my-4">
                      <div class="btn text-white py-2 px-4 rounded-lg border-2">
                        SMS
                      </div>
                      <div class="btn text-white py-2 px-4">email</div>
                    </div>
                    <p class="text-sm mb-4 text-white">
                      Enter your phone number to receive a text with a link to
                      download the app.
                    </p>
                    <input
                      class="px-2 w-full py-2 text-white"
                      placeholder="Mobile number"
                      type="text"
                    />
                    <div>
                      <a href="#">
                        <p class="button py-2 text-center rounded-md mt-2 bg-blue-500">
                          Go Now
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="midle flex flex-col items-center">
                  <div class="w-[1px] h-20 bg-white"></div>
                  <p class="text-white">or</p>
                  <div class="w-[1px] h-20 bg-white"></div>
                </div>
                <div class="right items-center flex gap-4 w-1/3 ml-10">
                  <div class="left">
                    <Image
                      class="mb-4"
                      src="/images/home/android-en-us.png"
                      alt=""
                    />
                    <Image src="/images/home/ios-en-us.png" alt="" />
                  </div>
                  <div class="right">
                    <Image
                      class="rounded-lg w-32 border-2"
                      src="/images/home/download.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
