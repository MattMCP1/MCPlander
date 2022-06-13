import Link from "next/link";
export default function Purchase() {
  return (
    <>
      <section class="w-full pt-12 mt-4 ">
        <div className="">
          <div class="relative   grid items-center mx-auto max-w-7xl ">
            <div class="  relative grid items-center  grid-cols-1 px-12 py-4  shadow-2xl  bg-gradient-to-r from-orange-500 to-orange-300 rounded-2xl md:grid-cols-5 lg:gap-0">
              <div class="absolute top-0 right-0 hidden ">
                <svg
                  viewBox="0 0 487 487"
                  class="object-cover w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                    fill="#FFF"
                    fill-rule="nonzero"
                    fill-opacity=".1"
                  ></path>
                </svg>
              </div>
              <div class="absolute bottom-0 left-0 h-full hidden  ">
                <svg
                  viewBox="0 0 487 487"
                  class="w-auto h-full opacity-75 object-stretch"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                    fill="#FFF"
                    fill-rule="nonzero"
                    fill-opacity=".1"
                  ></path>
                </svg>
              </div>
              <div class="  col-span-1 md:col-span-3 h-full grid content-end py-16 p-4 lg:mb-24 overflow-hidden">
                <h2 class="mb-1 text-3xl font-bold leading-tight text-white md:mb-3 md:text-3xl lg:text-4xl xl:text-5xl">
                  The Keyword Research Tool{" "}
                </h2>
                <span class="block lg:mt-3 mb-4 ">
                  Kickstart you content strategy
                </span>

                <button className="flex items-center justify-center   py-2 text-base font-medium leading-6 text-black whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm md:w-auto md:inline-flex hover:bg-transparent hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600">
                  <Link
                    href="https://mycontentpal.spp.io/order/XZ5678"
                    className=""
                  >
                    <span className="text-xl font-bold">Now Only $199</span>
                  </Link>
                </button>
              </div>
              <div
                class="flex items-center h-full col-span-1 sm:flex 
              "
              >
                <img
                  src="/Bookmockbg.png"
                  class=" object-cover w-full rounded   max-w-none lg:absolute lg:max-w-md xl:max-w-lg sm:block hidden"
                  alt="Dashboard"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// <div className="absolute -mt-48 Z-999">
//   <img
//     src="/Bookmockbg.png"
//     class=" object-cover  w-full rounded sm:hidden block  max-w-none lg:absolute lg:max-w-md xl:max-w-lg "
//     alt="Dashboard"
//   />
// </div>;
