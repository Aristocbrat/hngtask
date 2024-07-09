import React from 'react'

const Checkout = () => {
  return (
    <div className='bg-black xl:w-full sm:w-full xl:h-full sm:h-full'> 
    <div className="cart3 bg-white border-[#e72b70] xl:w-[50%] xl:ml-[8%] xl:py-4 sm:w-[85%]  sm:mt-4 sm:py-3rounded-[15px]">
        <p className='text-[#CA2F69] text-2xl ml-[6%]'>Cart(3)</p>   
    </div>
    <div className="shooping bg-white border-[#CA2F69] border-x-[#CA2F69] xl:w-[50%] xl:ml-[8%] xl:mt-1 xl:py-6 xl:px-5 rounded-[9px] flex">
    <i className="ri-shopping-cart-line absolute xl:ml-[47%] sm:ml-[90%] text-[#CA2F69]"></i>
         <img src="/images/lo.png" alt=""/>
         <div className="prices flex justify-between w-full xl:mt-5 sm:mt-[4%] xl:text-2xl xl:px-2">
           <p className='text-[#CA2F69] font-bold'>Black loafers - Black<br/>
           <span className='font-thin'>Size: EU 42</span></p>
           <p className='text-[#CA2F69]'>₦ 25,000.00 <br/>
           <span className='flex justify-between py-3'><img src="/images/minus.png" alt="" />
           <img src="/images/plus.png" alt="" /></span></p>
           
         </div>
        </div>
        <div className="shooping bg-white border-[#CA2F69] ] xl:w-[50%] xl:ml-[8%] xl:mt-[2%] xl:py-6 xl:px-5 rounded-[9px] flex">
        <i className="ri-shopping-cart-line absolute xl:ml-[47%] sm:ml-[90%] text-[#CA2F69]"></i>
         <img src="/images/flat.png" alt=""/>
         
         <div className="prices flex justify-between w-full xl:mt-5 xl:text-2xl xl:px-2 ">
            
         <p className='text-[#CA2F69] font-bold'>Italy Bag - Brown<br/>
           <span className='font-thin'>Size: EU 42</span></p>
           <p className='text-[#CA2F69]'>₦ 30,000.00<br/>
           <span className='flex justify-between py-3'><img src="/images/minus.png" alt="" />
           <img src="/images/plus.png" alt="" /></span>
           </p>
          
         </div>
        </div>
        <div className="shooping bg-white border-[#CA2F69] border-x-[#CA2F69] xl:w-[50%] xl:ml-[8%] xl:mt-[2%] xl:py-6  xl:px-5 rounded-[9px] flex ">
        <i className="ri-shopping-cart-line absolute xl:ml-[47%] sm:ml-[90%] text-[#CA2F69]"></i>
         <img src="/images/bgt.png" alt=""/>
         <div className="prices flex justify-between xl:w-full xl:mt-5 xl:text-2xl xl:px-2">
           <p className='text-[#CA2F69] font-bold'>Italy Bag - Brown<br/>
           <span className='font-thin'>Size: EU 42</span></p>
           <p className='text-[#CA2F69]'>₦ 30,000.00<br/>
            <span className='flex justify-between py-3'><img src="/images/minus.png" alt="" />
            <img src="/images/plus.png" alt="" /></span>
           </p>
           
         </div>
         
        </div>
        <div className="summary bg-white rounded-[20px] xl:w-[590px] xl:ml-[50%] xl:mt-8 sm:w-[90%] ">
           <p className='text-[#CA2F69] font-semibold text-2xl p-4'>CART SUMMARY</p>
           <div className="subtotal flex justify-between px-7 text-2xl text-[#CA2F69] font-semibold py-5">
            <p>Sub Total</p>
            <p>₦70,000</p>
           </div>
           <button className='bg-[#c44775] text-white xl:w-[250px] sm:w-[100px] px-3 xl:mt-[-3%] xl:text-2xl xl:mb-3 xl:py-3 rounded ml-[32%]'>₦70,000</button>
         </div>
    </div>
  )
}

export default Checkout
