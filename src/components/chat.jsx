import React from 'react';

const Hero = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row w-full h-full items-center justify-center pt-10 px-4 md:px-8'>
        <div className='w-full md:w-1/2 flex flex-col h-auto md:h-[56vh] gap-9'>
          <h1 className='text-white text-3xl md:text-[90px] pt-2 mt-[-6%]'>Nigerian’s NO. 1 <br /> Fashion Plug</h1>
          <div className='text-lg md:text-3xl flex flex-col py-4'>
            <p className='text-white py-4 tracking-wide'>Our goal is to make our customers look great in every outfit that they choose to wear.<br />
              <p className='py-4'>We provide the best quality affordable wears.</p>
              <p className='py-4'>We also dress you for every occasion.</p>
            </p>
          </div>
        </div>
        <div className='w-full md:w-1/2 relative'>
          <img src="/images/Dance.png" alt="people dancing" className='w-full h-auto md:h-[75vh] pt-5 z-20' />
          <img src="/images/eve1.png" alt="eve" className='absolute top-0 left-0 mt-[-13%] ml-[6%] z-10' />
          <div className='flex justify-center md:justify-start'>
            <button className='bg-white rounded-[25px] px-8 py-3 md:px-[80px] md:py-5 text-xl md:text-2xl text-[#CE877C]'>SHOP NOW</button>
          </div>
        </div>
      </div>

      {/* Bestsellers Section */}
      <section className='text-white w-full h-full px-4 md:px-8 py-8'>
        <h1 className='text-4xl md:text-6xl mb-8 text-center md:text-left'>BestSellers</h1>
        <div className='flex flex-wrap justify-center md:justify-start gap-8'>
          <div className="frame1 py-10 w-full md:w-[30%]">
            <img src="/images/browns.png" alt="" />
            <div className="price flex justify-between w-full">
              <p className='text-lg'>Brown School Shoe</p>
              <p>
                <i className="ri-star-fill text-yellow-400"></i>
                <i className="ri-star-fill text-yellow-400"></i>
                <i className="ri-star-fill text-yellow-400"></i>
                <i className="ri-star-fill text-yellow-400"></i>
                <i className="ri-star-fill"></i>
              </p>
            </div>
            <p>₦10,000.00</p>
          </div>
          {/* Add other product items here */}
        </div>
      </section>

      {/* Delivery Section */}
      <section className='text-white w-full h-full px-4 md:px-10 py-8'>
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="deliveryt md:w-1/2">
            <p className='text-4xl md:text-8xl tracking-wider leading-normal'>We<br /> DELIVER</p>
            <p className='text-lg md:text-3xl leading-relaxed tracking-wider'>We deliver Nationwide.<br />
              Our delivery takes at least 2-3 working days.<br />
              We are always available to serve our customers better.
            </p>
          </div>
          <div className='h-80 md:h-[90%] md:w-1/2 py-7 relative'>
            <img src="/images/totbag.png" alt="" className='w-full h-full object-cover z-20' />
            <img src="/images/eve2.png" alt="" className='absolute top-0 left-0 mt-[-26%] ml-[5%] z-10' />
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className='text-white w-full h-full px-4 md:px-8 py-8'>
        <h1 className='text-4xl md:text-6xl mb-8 text-center md:text-left'>New Arrivals</h1>
        <div className='flex flex-wrap justify-center md:justify-start gap-8'>
          <div className="frame1 py-10 w-full md:w-[30%]">
            <img src="/images/na1.png" alt="" />
            <div className="price flex justify-between w-full">
              <p className='text-lg'>Valentino Bags</p>
              <p>
                <i className="ri-star-fill text-yellow-400"></i>
                <i className="ri-star-fill text-yellow-400"></i>
                <i className="ri-star-fill text-yellow-400"></i>
                <i className="ri-star-fill text-yellow-400"></i>
                <i className="ri-star-fill"></i>
              </p>
            </div>
            <p>₦10,000.00</p>
          </div>
          {/* Add other product items here */}
          <button className='w-full md:w-[96%] text-[#CE877C] font-bold text-xl md:text-2xl tracking-wide py-5 bg-white'>See more</button>
        </div>
      </section>

      {/* Purple Section */}
      <div className="purple bg-[#dd1f65ad] px-4 md:px-9 py-12 mt-8 w-full md:w-[80%] mx-auto">
        <div className="rectt flex flex-col md:flex-row justify-between gap-4">
          <div className="rec1 bg-[#D9D9D9] rounded-[20px] w-full md:w-[20%] h-full py-7 flex items-center gap-4">
            <img src="/images/rec1.png" alt="" className='w-1/4' />
            <p>Free Delivery from ₦10,000</p>
          </div>
          <div className="rec1 bg-[#D9D9D9] rounded-[20px] w-full md:w-[20%] h-full py-7 flex items-center gap-4">
            <img src="/images/rec2.png" alt="" className='w-1/4' />
            <p>Pay Install mental for a product</p>
          </div>
          <div className="rec1 bg-[#D9D9D9] rounded-[20px] w-full md:w-[20%] h-full py-7 flex items-center gap-4">
            <img src="/images/rec3.png" alt="" className='w-1/4' />
            <p>Return within one week</p>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <section>
        <div className="relative w-full md:w-[90%] h-[20%] mt-8 mx-auto">
          <img src="/images/pup.png" alt="" className='w-full h-auto object-cover relative z-20' />
          <img src="/images/band2.png" alt="" className='absolute top-0 left-0 w-[15%] h-auto z-10' />
          <img src="/images/band.png" alt="" className='absolute top-0 right-0 w-[15%] h-auto z-10' />
          <div className='flex justify-center md:justify-between items-center gap-4 mt-[-7%] relative z-30'>
            <img src="/images/nike.png" alt="" />
            <img src="/images/hermes.png" alt="" />
            <img src="/images/gucci.png" alt="" />
            <img src="images/chanel.png" alt="" />
            <img src="images/adidas.png" alt="" />
            <img src="/images/vogue.png" alt="" />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section>
        <div className="reviews text-white mt-8 h-auto">
          <h1 className='text-4xl md:text-7xl text-center md:text-left'>Reviews</h1>
          <div className="flex flex-wrap justify-center md:justify-between gap-8 mt-8">
            <div className="comment1 bg-white text-black w-full md:w-[30%] h-auto rounded-[20px] p-4">
              <img src="/images/c1.png" alt="" className='w-full' />
              <p className='mt-4'>“I Love your customer service so much. They were very helpful.”</p>
              <p className='mt-4'>KELECHI</p>
            </div>
            <div className="comment1 bg-white text-black w-full md:w-[30%] h-auto rounded-[20px] p-4">
              <img src="/images/c2.png" alt="" className='w-full' />
              <p className='mt-4'>“I bought some bags and they were very durable.”</p>
              <p className='mt-4'>FAVOUR</p>
            </div>
            <div className="comment1 bg-white text-black w-full md:w-[30%] h-auto rounded-[20px] p-4">
              <img src="/images/c3.png" alt="" className='w-full' />
              <p className='mt-4'>“Your prices are affordable, I got the quality for my money.”</p>
              <p className='mt-4'>MARY</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
