import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='flex  w-full h-full items-center justify-center  xl:pt-[4%] xl:px-8 md:flex-row md:px-8 sm:px-2 '>
     
      <div className='xl:w-[50%] sm:w-[50%] flex flex-col xl:h-[56vh] sm:h-[16%]  xl:gap-9 lg:gap-7 sm:gap-1    '>
        <h1 className='text-white w-[100%] lg:text-3xl xl:text-6xl xl:w-[70%] xl:pt-2 xl:mt-[-6%]  sm:w-[80%] sm:text-[17px]'>Nigerian’s  NO. 1 <br/>
        Fashion Plug</h1>
        <div className=' flex flex-col xl:py-4 lg:py-3 sm:py-2   '>
        <p className='text-white xl:py-4 lg:py-4 sm:py-[2px]  sm:text-[9px] xl:text-2xl lg:text-2xl'>Our goal is to make our customers look great in every outfit that<br/> the choose to wear.<br/>
         <p className=' xl:py-4 lg:py-4 sm:py-[2px] sm:text-[9px] xl:text-2xl lg:text-2xl'> We are provide the best quality affordable wears.</p>
         <p className=' xl:py-4 lg:py-4 sm:py-[2px] xl:text-2xl lg:text-2xl'> We also dress you for every occasion.</p> 
       </p>
       </div>
        </div>
        <div className='w-[40%] xl:w-[40%] lg:w-[40%] sm:w-[60%]  '>
        <img src="/images/Dance.png" alt="people dancing" className= 'size-[150%] pt-5 xl:h-[75vh] lg:h-[75vh] md:h-[60%] sm:h-[60%] relative z-20' />
        <img src="/images/eve1.png" alt="eve" className='absolute xl:mt-[-18%] xl:ml-[3%] z-10 sm:w-12 sm:mt-[-24%] xl:w-[120px]  sm:ml-5 ' />
        <div className='flex w-[full] justify-start xl:ms-[-10%] '>
        <button className='bg-white rounded-[25px] xl:px-[80px] xl:py-5 xl:ms-[-25%] xl:text-2xl text-[#CE877C] sm:ml-[-10%] sm:py-1 sm:px-7 sm:text-[8px]'>SHOP NOW</button>
        </div> 
        </div>
    </div>

    {/* ------------------------------------------------------------------------------------------------------------------- */}
     <section className='Beatsellers text-white  w-full h-full xl:px-8 xl:py-[1%] sm:py-5 sm:px-2 '>
       <h1 className='xl:text-6xl xl:ms-[5%] sm:text-[15px] sm:font-bold'>BestSellers</h1>
       <div className='flex w-[90%] flex-wrap  xl:ml-[5%] xl:px-2 xl:gap-[12%] sm:gap-3.5 sm:justify-between sm:px-1'>
          <div className="frame1 xl:py-10 sm:py-5 "> 
            <img src="/images/browns.png" alt=""  className='sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]'/>
            <div className="price flex justify-between w-[100%]">
            <p className='xl:text-lg sm:text-[9px]'>Brown School Shoe</p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill"></i>
            </p>
            </div>
            <p className='sm:text-[9px] xl:text-lg ' > ₦10,000.00</p>
          </div>
          <div className="frame1 xl:py-10 sm:py-5 ">
            <img src="/images/greens.png" alt="" className='sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]' />
            <div className="price flex justify-between w-[100%]">
            <p className='xl:text-lg sm:text-[9px] '>Fashion & Bags</p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill"></i>
            </p>
            </div>
            <p className='sm:text-[9px] xl:text-lg'> ₦10,000.00</p>
          </div>
          <div className="frame1 xl:py-10 sm:py-5 ">
            <img src="/images/blacky.png" alt="" className='sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]'  />
            <div className="price flex justify-between w-[100%]">
            <p className='xl:text-lg sm:text-[9px]'>Leather  Bags</p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill"></i>
            </p>
            </div>
            <p className='sm:text-[9px] xl:text-lg'> ₦20,500.00</p>
          </div>
          <div className="frame1 xl:py-10 sm:py-5 ">
            <img src="/images/bagss.png" alt="" className='sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]'  />
            <div className="price flex justify-between w-[100%]">
            <p className='xl:text-lg sm:text-[9px]'>Small purse</p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill"></i>
            </p>
            </div>
            <p className='sm:text-[9px] xl:text-lg'> ₦9,000.00</p>
          </div>
          <div className="frame1 xl:py-10 sm:py-5 ">
            <img src="/images/loafers.png" alt="" className='sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]'  />
            <div className="price flex justify-between w-[100%]">
            <p className='xl:text-lg sm:text-[9px]'>Loafers Shoe</p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill"></i>
            </p>
            </div>
            <p className='sm:text-[9px] xl:text-lg'> ₦25,000.00</p>
          </div>
          <div className="frame1 xl:py-10 sm:py-5 ">
            <img src="/images/hshow.png" alt="" className='sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]'  />
            <div className="price flex justify-between w-[100%]">
            <p className='xl:text-lg sm:text-[9px]'>Rene Caovilla Shoes</p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill"></i>
            </p>
            </div>
            <p className='sm:text-[9px] xl:text-lg'> ₦18,000.00</p>
          </div>
       </div>
     </section>
     <section>
      <div className="delivery text-white w-[100%] h-full xl:px-10 top-[-5%] flex gap-20 justify-between   ">
        <div className="deliveryt xl:ml-[5%] mt-[5%] sm:ml-2">
        <p className='xl:text-8xl sm:text-2xl tracking-wider  '>We<br/> DELIVER
        </p>
        <p className='xl:text-2xl sm:text-[9px] xl:w-[400px] xl:leading-relaxed sm:w-[160px] '>We deliver Nationwide.,<br />
         Our delivery takes at least 2-3 working days.
        We are always available to serve our customers better</p>
        </div>
        <div className=' h-[90%] w-[50%] py-7 '>
        <img src="/images/totbag.png" alt="" className='xl:mt-[-7%] xl:w-[80%] h-full relative sm:w-[180%]' />
        <img src="/images/eve2.png" alt="" className='absolute xl:w-[20%] xl:h-[20%] xl:mt-[-21%] xl:ml-[4%] sm:w-[9%] sm:h-[11%] sm:mt-[-28%] sm:ml-10 sm:object-cover'/>
        </div>
      </div>
     </section>

{/* ---------------------------------------------------------------------------------------------------------------- */}
      <section className='New Arrivals text-white  w-full h-full xl:px-8 xl:py-[1%] sm:py-5 sm:px-2'>
       <h1 className='xl:text-6xl sm:text-lg xl:ms-[5%] sm:font-bold'>New Arrivals</h1>
       <div className='flex w-[full] flex-wrap  ml-[5%] xl:px-2 xl:gap-[15%] sm:gap-[9%] sm:justify-between '>
          <div className="frame1 py-10  ">
            <img src="/images/na1.png" alt="" className='size-[200] sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]' />
            <div className="price flex justify-between w-[90%]">
            <p className='xl:text-lg sm:text-[9px]'>Valentino Bags</p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill"></i>
            </p>
            </div>
            <p className='sm:text-[9px] xl:text-lg'> ₦10,000.00</p>
          </div>
          <div className="frame1 py-10  ">
            <img src="/images/na2.png" alt="" className='sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]'/>
            <div className="price flex justify-between w-[100%]">
            <p className='xl:text-lg sm:text-[9px]'>Shoes</p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill"></i>
            </p>
            </div>
            <p className='sm:text-[9px] xl:text-lg'> ₦20,000.00</p>
          </div>
          <div className="frame1 py-10 ">
            <img src="/images/na3.png" alt="" className='sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]' />
            <div className="price flex justify-between w-[100%]">
            <p className='xl:text-lg sm:text-[9px]'>Nike shoes </p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill"></i>
            </p>
            </div>
            <p className='sm:text-[9px] xl:text-lg'> ₦80,000.00</p>
          </div>
          <div className="frame1 py-10 ">
            <img src="/images/na4.png" alt="" className='sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]'/>
            <div className="price flex justify-between w-[100%]">
            <p className='xl:text-lg sm:text-[9px]'>White Heels</p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill"></i>
            </p>
            </div>
            <p> ₦19,500.00</p>
          </div>
          <div className="frame1 py-10 ">
            <img src="/images/na5.png" alt="" className='sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]'/>
            <div className="price flex justify-between w-[100%]">
            <p className='xl:text-lg sm:text-[9px]'>School shoes</p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            </p>
            </div>
            <p className='sm:text-[9px] xl:text-lg'> ₦15,000.00</p>
          </div>
          <div className="frame1 py-10 ">
            <img src="/images/na6.png" alt="" className='sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]' />
            <div className="price flex justify-between w-[100%]">
            <p className='xl:text-lg sm:text-[9px]'>Multi purpose bag</p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            </p>
            </div>
            <p className='sm:text-[9px] xl:text-lg'> ₦45,000.00</p>
          </div>
          <div className="frame1 py-10 ">
            <img src="/images/na7.png" alt="" className='sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]' />
            <div className="price flex justify-between w-[100%]">
            <p className='xl:text-lg sm:text-[9px]'>Bag </p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            </p>
            </div>
            <p className='sm:text-[9px] xl:text-lg'> ₦18,000.00</p>
          </div>
          <div className="frame1 py-10 ">
            <img src="/images/na8.png" alt="" className='sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]' />
            <div className="price flex justify-between w-[100%]">
            <p className='xl:text-lg sm:text-[9px]'> Small bag</p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            </p>
            </div>
            <p className='sm:text-[9px] xl:text-lg'> ₦5,000.00</p>
          </div>
          <div className="frame1 xl:py-10 ">
            <img src="/images/na9.png" alt="" className='sm:w-[150px] sm:h-[120px] xl:w-[300px] xl:h-[300px]' />
            <div className="price flex justify-between w-[100%]">
            <p className='xl:text-lg sm:text-[9px]'>Occasion heels </p>
            <p className='sm:text-[5px] xl:text-lg'>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            <i className="ri-star-fill text-yellow-400"></i>
            </p>
            </div>
            <p className='sm:text-[9px] xl:text-lg'> ₦35,000.00</p>
          </div>
          <button className='w-[96%] text-[#CE877C] font-bold text-2xl tracking-wide xl:py-5 sm:mt-4 bg-white'>See more</button>
       </div>
     </section> 
     {/* ------------------------------------------------------------------------------------------------------------------------- */}
     <div className="purple bg-[#dd1f65ad] xl:px-9 xl:py-12 xl:mt-[8%] xl:w-[80%] xl:mx-auto">
      <div className="rectt flex xl:justify-between sm:justify-evenly">
      <div className="rec1 bg-[#D9D9D9] rounded-[20px] xl:w-[30%] xl:h-[80%] xl:py-7 sm:w-[32%] sm:h-[25%] sm:py-5 sm:mt-2 sm:mb-2 flex flex-row">
          <img src="/images/rec1.png" alt="" className='xl:px-7  xl:size-4/12 sm:w-[30%] sm:object-cover ' />
          <p className='xl:px-2 xl:text-lg sm:text-[7px]'>Free Delivery from<br/> ₦10,000 </p>
      </div>
      <div className="rec1 bg-[#D9D9D9] rounded-[20px] xl:w-[30%] xl:h-[80%] xl:py-7 sm:w-[32%] sm:h-[25%] sm:py-5 sm:mt-2 sm:mb-2 flex flex-row">
          <img src="/images/rec2.png" alt="" className='xl:px-7 xl:size-4/12 sm:w-[30%] sm:object-cover' />
          <p className='xl:px-2 sm:text-[7px] xl:text-lg'>Pay Install mental for a<br />product</p>
      </div>
      <div className="rec1 bg-[#D9D9D9] rounded-[20px] xl:w-[30%] xl:h-[80%] xl:py-7 sm:w-[32%] sm:h-[20%] sm:py-5 sm:mt-2  sm:mb-2 flex flex-row">
          <img src="/images/rec3.png" alt="" className='xl:px-7 xl:size-4/12 sm:w-[30%] sm:object-cover' />
          <p className='xl:px-5 sm:text-[7px] xl:text-lg'>Return within one week. </p>
      </div>
      </div>
     </div>
     {/* ------------------------------------------------------------------------------------------------------------ */}
     <section>
      <div className="recr w-[90%] h-[20%] mt-[6%]">
        <img src="/images/pup.png" alt="" className='w-[80%]  object-cover h-[6%] mx-auto ps-[7%] relative z-20' />
        <img src="/images/band2.png" alt="" className='absolute z-10 xl:w-[15%] xl:h-[20%] xl:mt-[-13%] xl:ml-[18%] sm:h-[50px] sm:w-[100px] sm:mt-[-14%] ml-[19%]' />
        <img src="/images/band.png" alt=""  className='absolute z-10 xl:w-[15%] xl:h-[20%] xl:mt-[-13%]  xl:ml-[62%] sm:h-[50px] sm:w-[100px]  sm:mt-[-14%] sm:ml-[50%] ' />
        <div className='designers flex w-[58%] absolute mt-[-7%] ml-[20%] z-30 justify-between'>
        <img src="/images/nike.png" alt="" />
        <img src="/images/hermes.png" alt="" />
        <img src="/images/gucci.png" alt="" />
        <img src="images/chanel.png" alt="" />
        <img src="images/adidas.png" alt="" />
        <img src="/images/vogue.png" alt="" />
        </div> 
      </div>
     </section>
     {/* ----------------------------------------------------------------------------------------------------------------- */}
     <section>
      <div className="reviews text-white mt-[4%] h-[40vh]">
        <h1 className='xl:text-7xl sm:text-lg  ml-[7%]'>Reviews</h1>
        <div className="comments flex xl:w-[95%] sm:w-[100%] xl:mt-[3%] xl:h-[80%] xl:flex-row sm:flex-col sm:h-[100%]  sm:gap-3">
           <div className="comment1 bg-white text-black xl:mt-[2%] xl:w-[25%] xl:ml-[8%] xl:h-[78%] rounded-[20px] sm:w-[45%] sm:h-[40%] sm:mt-[5%]">
             <img src="/images/c1.png" alt="" className='xl:py-5 xl:px-3 sm:py-3 sm:object-cover ' />
             <p className='xl:ps-4 xl:ml-[5%] xl:text-[15px] sm:text-[8px] sm:ml-[20%] sm:mt-[-4%]'>“I Love your customer service so much.<br/>
                   They were very helpful.”</p>
             <p className='xl:ps-4 xl:pt-3 xl:mt-2 sm:text-[8px] sm:px-3'>KELECHI</p>
           </div>
           <div className="comment1 bg-white text-black xl:mt-[2%] xl:w-[25%] xl:ml-[8%] xl:h-[78%] rounded-[20px] sm:w-[43%] sm:h-[40%] sm:mt-[-5%] sm:ml-[55%]">
             <img src="/images/c2.png" alt="" className='xl:py-5 xl:px-3 sm:py-3 sm:object-cover' />
             <p className='xl:ps-4 xl:ml-[5%] xl:mt-[-4%] sm:text-[8px] sm:ml-[20%] sm:mt-[-4%] xl:text-[15px]'>“I got what i ordered.<br/> 
             It made me look so amazing at<br/> the last event i attended”. </p>
             <p className='xl:ps-4 xl:py-3 sm:text-[8px] sm:px-3'>ZARAH</p>
           </div>
           <div className="comment1 bg-white text-black xl:mt-[2%] xl:w-[22%] xl:ml-[8%] xl:h-[78%] rounded-[20px] sm:w-[45%] sm:h-[40%] sm:mt-[-3%] sm:ml-[2%] ">
             <img src="/images/c3.png" alt="" className='xl:py-5 xl:px-3 sm:py-3 godtime sm:object-cover' />
             <p className='xl:ps-4 xl:mt-[-3%]xl:ml-[6%] sm:text-[8px] sm:ml-[20%] sm:mt-[-4%] xl:text-[15px]'>“The delivery service is also very<br/> fast. I was able to get what i <br/>ordered at the appropriate time.”
             </p>
             <p className='xl:ps-4 xl:py-4 xl:mt-[-3.5%] sm:text-[8px] sm:px-3'>GOD’STIME</p>
           </div>
        </div>
      </div>
     </section>
     {/* -------------------------------------------------------------------------------- */}
     <section>
      <div className='about text-white xl:w-[70%] sm:w-[90%] mx-auto flex flex-col justify-center mt-[5%]'>
        <h1 className='mx-auto xl:text-6xl sm:text-2xl py-4'>ABOUT</h1>
        <p className='xl:py-4 ml-[3%] xl:text-2xl sm:text-[12px]'>Eby Treasures is a fashion brand that sells a wide range of clothing and accessories for men, women, and<br/>
         children. We are committed to providing our customers with high-quality, stylish, and affordable Wears that<br/> they can feel confident in.</p> 
        <p className='py-4 ml-[3%] xl:text-2xl sm:text-[12px]'>Our team of designers is constantly working to create new and innovative styles that are both on-trend and wearable. <br/>
        We use only the highest quality materials and construction methods to ensure that our clothing is durable and long-lasting.</p>
       <p className='py-4 ml-[3%] xl:text-2xl sm:text-[12px]'>We are a community of people who are passionate about fashion and style. <br/>
        and we are here to help them do just that.</p>

      </div>
     </section>
    </>
  )
}

export default Hero
