import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-black'>
  <div className=" mx-auto bg-black-900">
    <footer className="p-4  bg-gray-900 rounded-lg shadow md:px-6 md:py-8 ">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a href="#" target="_blank" className="flex items-center mb-4 sm:mb-0">
          <img src="https://o.remove.bg/downloads/3000dea6-ac97-4a5f-9c0d-4401f3629d87/mau-logo-tra-sua-dep-va-de-thuong9-removebg-preview.png" className="mr-4 h-8" alt="Flowbite Logo" width={70} height={150}/>
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Nước giải khát</span>
        </a>
        <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
          <li>
            <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
          </li>
          <li>
            <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy
              Policy</a>
          </li>
          <li>
            <a href="#" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
          </li>
          <li>
            <a href="#" className="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href=" bg-gray-900" target="_blank" className="hover:underline">CHAN MILK TEA™</a>. All Rights Reserved.
      </span>
    </footer>
  </div> 
</div>

  )
}

export default Footer