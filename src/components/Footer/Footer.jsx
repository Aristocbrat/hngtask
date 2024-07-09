import React from 'react';

const Footer = () => {
  return (
    <div className='w-full bg-[#CA2F69] text-white mt-[5%] rounded-e-[30px] rounded-s-[30px] p-4'>
      <div className="footext flex flex-wrap justify-evenly items-center gap-4">
        <div className="contactus flex flex-col items-center">
          <p className='text-base md:text-xl py-2'>CONTACT US:</p>
          <div className="socials flex gap-3">
            <div className='relative'>
              <img src="/images/bgsos.png" alt="" />
              <img src="/images/insta.png" alt="" className='absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className='relative'>
              <img src="/images/bgsos.png" alt="" />
              <img src="/images/facebook.png" alt="" className='absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </div>
            <div className='relative'>
              <img src="/images/bgsos.png" alt="" />
              <img src="/images/whatsapp.png" alt="" className='absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            </div>
          </div>
        </div>
        <div className="explore text-center">
          <p className='text-base md:text-xl py-2'>EXPLORE ALL</p>
          <p className='text-sm md:text-base'>Privacy Policy<br />
             Term and Condition<br />
             Return and Refunds
          </p>
        </div>
        <div className="payments text-center">
          <p className='text-base md:text-xl py-2'>PAYMENTS</p>
          <div className="payme flex gap-3">
            <img src="/images/visa.png" alt="" />
            <img src="/images/mc.png" alt="" />
            <img src="/images/card.png" alt="" />
          </div>
        </div>
        <div className="subscribe text-center">
          <p className='text-base md:text-xl py-2'>Subscribe to our Newsletter</p>
          <button className='bg-white text-[#EAA29480] px-4 py-1 text-sm md:text-lg rounded-full'>Email</button>
        </div>
      </div>
      <div className="copyright bg-[#651734] w-full mt-3">
        <p className='text-center py-2 text-sm md:text-base'>Copyright 2024 Eby Treasures. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;




