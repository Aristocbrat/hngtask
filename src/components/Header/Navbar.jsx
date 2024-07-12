import React from 'react';

const Navbar = () => {
  return (
    <>
<div className="f bg-[#CA2F69] py-4">
  <p className='text-white flex justify-center sm:justify-start sm:ml-[10%] md:ml-[25%] lg:ml-[35%] xl:ml-[40%] px-4 sm:px-6 md:px-8'>
    Nationwide delivery
    <img src='/images/Vector.png' className='ml-2 xl:w-[20px]' />
  </p>
</div>

    <div className='flex items-center justify-between w-full py-1 px-4 md:px-[6%]'>
      
      <a href="/"><img src="/images/logo.png" alt="logo"  className="md:w-[180px] xl:w-[100px]" /></a>
      <div className='bg-slate-100 flex items-center py-1 px-2 rounded-[20px]'>
        <input type="text" placeholder="Search" className="placeholder:text-sm w-[200px] md:min-w-[400px] text-zinc-700 font-bold bg-transparent outline-none border-none" />
        <a href=""><i className="ri-search-line text-[#EAA29480]"></i></a>
      </div>
      <div className='flex items-center gap-4'>
        <a href="/cart"><i className="ri-shopping-cart-line text-white text-xl md:text-3xl"></i></a>
        <a href=""><i className="ri-user-3-line text-white text-xl md:text-3xl"></i></a>
      </div>
    </div>
    </>
  );
}

export default Navbar;


