import React from 'react'
import '../App.css'; 

export const Bgchanger = () => {
  return (
    <div className="whole_page">
    <div className="card  gap-28">
        <button className=' btn bg-red-600'>Red</button>
        <button className=' btn bg-yellow-600'>Yellow</button>
        <button className= ' btn bg-neutral-950  text-white'>Black</button>
        <button className=' btn bg-violet-600' >Purple</button>
        <button className='btn bg-green-600'>Green</button>
        <button className='btn bg-blue-600' >Blue</button>
        <button className='btn bg-pink-600'>Default</button>

    </div>
    </div>
  )
}
