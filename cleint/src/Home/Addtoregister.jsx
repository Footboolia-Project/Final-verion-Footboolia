import React from 'react'
import { Link } from 'react-router-dom'

function Addtoregister() {
  return (
    <div>
      <div
  className="bg-cover bg-center  h-auto text-white py-24 px-10 object-fill mt-7"
  style={{
    backgroundImage:
      "url(https://png.pngtree.com/background/20230525/original/pngtree-soccer-stadium-in-the-dark-lit-picture-image_2729359.jpg)"
  }}
>
  <div className="md:w-1/2">
    <p className="font-bold text-sm uppercase">Add playgrounds</p>
    <p className="text-3xl font-bold">There are so many! Your stadium is just a few quick clicks away...</p>
    <p className="text-2xl mb-10 leading-none">
      Register Now !
    </p>
    <Link
      to="/addformplay"
      className="bg-emerald-500 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800"
    >
      Register Now !
    </Link>
  </div>
</div>
    </div>
  )
}

export default Addtoregister
