import React from 'react'

const MyAccount = () => {
  return (
<div data-name="input" class="header_menu_title Right text-black flex gap-4 justify-center items-center">
    <a class="flex gap-2 items-center hover:text-black border-b-4 border-transparent hover:border-primary duration-300 hover:border-b-4 py-2 px-6"
        href="#">
        sign In
        <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>

        </span>
    </a>
</div>
  )
}

export default MyAccount
