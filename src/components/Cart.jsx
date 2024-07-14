import React from 'react';

const Cart = () => {
  return (
    <div className="bg-black h-full w-full overflow-hidden">
      <section>
        <div className="choose xl:px-12 flex xl:gap-9 sm:gap-3 text-white">
          <img
            src="/images/loafers.png"
            alt=""
            className="xl:w-[705px] ml-[5%] xl:h-[505px] sm:w-[250px] sm:h-[220px]"
          />
          <div className="flex flex-col xl:mt-[5%]">
            <p className="xl:text-2xl xl:py-3 xl:w-[300px] sm:text-[10px] sm:w-[90px] sm:py-5 sm:ml-4">
              Black loafers
            </p>
            <p className="xl:text-2xl xl:py-3 xl:w-[300px] sm:text-[10px] sm:w-[90px] sm:py-5 sm:ml-4">
              Brand: ZARA
            </p>
            <div className="stars flex xl:text-3xl sm:text-[9px] xl:py-5 sm:ml-4">
              <i className="ri-star-fill text-yellow-400"></i>
              <i className="ri-star-fill text-yellow-400"></i>
              <i className="ri-star-fill text-yellow-400"></i>
              <i className="ri-star-fill text-yellow-400"></i>
              <i className="ri-star-fill"></i>
            </div>
            <button className="bg-white text-[#e09889dc] xl:py-4 xl:px-8 sm:py-[3px] sm:px-[40px] sm:mt-[99%] sm:ml-[-65%] xl:ml-[-1%] xl:mt-[23%] sm:absolute rounded-[10px] xl:text-3xl">
              Add to cart
            </button>
          </div>
        </div>
      </section>
      {/* -------------------------------------------------------------------- */}
      <section>
        <div className="chooseimg flex xl:gap-5 xl:ml-[8%] sm:gap-4 sm:ml-5 sm:mt-5">
          <img
            src="/images/loafers.png"
            alt=""
            className="sm:w-[100px] sm:h-[40%] xl:w-[222px] xl:h-[200px]"
          />
          <img
            src="/images/loafers.png"
            alt=""
            className="sm:w-[100px] sm:h-[40%] xl:w-[222px] xl:h-[200px]"
          />
          <img
            src="/images/loafers.png"
            alt=""
            className="sm:w-[100px] sm:h-[40%] xl:w-[222px] xl:h-[200px]"
          />
          <div className="colorpallet flex flex-col xl:gap-11 sm:gap-5 sm:mt-[33%] sm:ml-[-47%] xl:mt-[1%] xl:ml-[-1%]">
            <div className="colour bg-white rounded-[15px] flex justify-between xl:h-[70px] xl:w-[400px] sm:w-[150px]">
              <p className="text-[#e09889dc] xl:text-2xl sm:text-[17px] pt-4 ps-3 font-bold">
                COLOUR
              </p>
              <div className="images flex xl:gap-3 xl:py-2 xl:pe-4 sm:gap-3 sm:pe-3 sm:py-5 xl:mt-[-3%]">
                <img
                  src="/images/red.png"
                  alt=""
                  className="xl:py-3 xl:w-[75%] xl:h-[70px] object-fill sm:w-[20%] sm:h-[35%]"
                />
                <img
                  src="/images/black.png"
                  alt=""
                  className="xl:py-3 xl:w-[75%] xl:h-[70px] object-fill sm:w-[20%] sm:h-[35%]"
                />
                <img
                  src="/images/gray.png"
                  alt=""
                  className="xl:py-3 xl:w-[75%] xl:h-[70px] object-fill sm:w-[20%] sm:h-[35%]"
                />
                <img
                  src="/images/blue.png"
                  alt=""
                  className="xl:py-3 xl:w-[75%] xl:h-[70px] object-fill sm:w-[20%] sm:h-[35%]"
                />
              </div>
            </div>
            <div className="colour bg-white rounded-[15px] flex justify-between xl:h-[70px] xl:w-[400px] sm:w-[150px]">
              <p className="text-[#e09889dc] xl:text-2xl sm:text-[17px] pt-4 ps-3 font-bold">
                Qty
              </p>
              <div className="images flex gap-3 xl:py-2 pe-4 sm:py-4">
                <img
                  src="/images/carousel.png"
                  alt=""
                  className="xl:pt-3 cursor-pointer sm:w-[160px] sm:h-[70%] xl:w-[150px] xl:h-[70px] sm:py-2 sm:px-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------------------------------------------------------------------------------------- */}
      <section>
        <div className="description text-white mt-[3%] ml-[7%] sm:flex sm:flex-col">
          <h2 className="xl:text-4xl sm:text-lg py-5">Description</h2>
          <p className="xl:w-[45%] xl:text-lg sm:text-[12px] sm:w-[90%]">
            This shoe has a very quality sole it can last longer than you
            expect it to it is also water resistant. Clean and store in a cool
            and dry place to avoid damage. This can last a minimum of 10 years.
            It is one of the best sellers of Zara. <br /> It comes in different
            colours as well. The sole is made of pure rubber.
          </p>
        </div>
        <div className="services text-white w-full px-8 py-5 md:w-[700px] md:ml-[50%] md:mt-[-5%] md:pl-[10%] sm:ml-[1%]">
          <div className="pickup flex flex-col items-center gap-6 md:gap-4">
            <div className="service-item flex items-center gap-4 w-full">
              <img
                src="/images/hand.png"
                alt="Pickup Service"
                className="w-[50px] h-[50px] md:w-[90px] md:h-[80px] mt-4"
              />
              <div className="textes">
                <h2 className="text-lg md:text-4xl py-3">Pickup Service</h2>
                <p className="text-[12px] md:text-lg sm:ml-[-5%]">
                  We deliver within 3-5 working days. Be assured that your item
                  is safe with the delivering company.
                </p>
              </div>
            </div>
            <div className="service-item flex items-center gap-4 w-full">
              <img
                src="/images/fastdel.png"
                alt="Doorstep Delivery"
                className="w-[50px] h-[50px] md:w-[90px] md:h-[80px] mt-4"
              />
              <div className="textes">
                <h2 className="text-lg md:text-4xl py-3">Doorstep Delivery</h2>
                <p className="text-[12px] md:text-lg">
                  We can deliver to your doorstep at any time you want it.
                </p>
              </div>
            </div>
            <div className="service-item flex items-center gap-4 w-full">
              <img
                src="/images/return.png"
                alt="Return Policy"
                className="w-[50px] h-[50px] md:w-[90px] md:h-[80px] mt-4"
              />
              <div className="textes">
                <h2 className="text-lg md:text-4xl py-3">Return Policy</h2>
                <p className="text-[12px] md:text-lg">
                  If the item is damaged, you can return it within one month
                  after receiving your item.
                </p>
              </div>
            </div>
            <div className="service-item flex items-center gap-4 w-full">
              <img
                src="/images/security.png"
                alt="Warranty"
                className="w-[50px] h-[30px] md:w-[90px] md:h-[80px] mt-4"
              />
              <div className="textes">
                <h2 className="text-lg md:text-4xl py-3">Warranty</h2>
                <p className="text-[12px] md:text-lg">
                  All branded items have a warranty. If items get spoiled, they
                  can be returned to the company for a check-up.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="des2 mt-[-40%] ml-[7%]">
          <a
            href="/checkout"
            className="text-white bg-gray-700 py-2 px-4 md:py-4 md:px-7 xl:ml-[12%] xl:top-[43px] sm:top-[-568px]  relative max-w-44  text-center hover:bg-green-600 rounded-[10px]"
          >
            Checkout
          </a>
          <img
            src="/images/loafers.png"
            alt=""
            className="xl:w-[605px] xl:h-[505px] sm:w-[320px] sm:h-[250px] xl:mt-[10%] sm:mt-[40%]"
          />
        </div>
      </section>
    </div>
  );
};

export default Cart;

