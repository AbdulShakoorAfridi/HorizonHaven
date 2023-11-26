import React from 'react'
import SliderTop from '../../components/SliderTop'
import mainBg from '../../assets/mainbg.png'
const Home = () => {
  return (
    <div style={{backgroundImage:`url(${mainBg})`}} className='sx:p-2 w-screen max-h-2/3 bg-cover bg-center md:px-16 bg-no-repeat py-24 md:py-24'>
    <section className='flex items-center justify-between flex-col md:flex-row space-x-4 lg:px-24 mt-8'>
      <div className="text_content w-2/3 text-center md:text-left">
          <h1 className='sm:text-2xl text-xl lg:text-6xl font-semibold text-white'>
          Welcome to HorizonHaven - Your Gateway to Dream Homes.
          </h1>
          <p className='text-white sm:text-sm md:text-xl py-4 lg:py-8'>Find The Perfect Place to Live With your Family</p>
          <button>Explore More </button>
      </div>
      <div className="hidden  md:-mb-96 md:flex item-center justify-center md:items-end md:justify-end w-full">
        <SliderTop />
      </div>
    </section>
    </div>
  )
}

export default Home
