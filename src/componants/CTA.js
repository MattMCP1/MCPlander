import Link from "next/link";
export default function CTA() {
  return (
    <>
      <section class="w-full pt-6 pb-24 ">
        <div className="">
          <div class="relative  mx-auto max-w-7xl">
            <div class="  relative flex justify-center gap-10 p-12 overflow-hidden shadow-2xl md:p-16 lg:p-20 xl:p-24 bg-gradient-to-r from-orange-500 to-orange-300 rounded-2xl md:grid-cols-5 lg:gap-0">
              <div class="absolute top-0 right-0">
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
              <div class="absolute bottom-0 left-0 h-full hidden">
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
              <div class="relative  col-span-1 md:col-span-3">
                <h2 class="mb-1 text-3xl font-bold leading-tight text-white md:mb-3 md:text-3xl lg:text-4xl xl:text-5xl">
                  The Keyword research Tool{" "}
                  <span class="block lg:mt-3 py-4">Boost your rankings</span>
                </h2>
                <p class="max-w-sm  text-base font-normal text-gray-100 xl:max-w-lg lg:pr-0 pr-7 lg:text-xl">
                  <br />
                  <br />
                </p>
                <div className="flex justify-center">
                  <button className="flex items-center justify-center  px-4  py-2 text-base font-medium leading-6 text-black whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm md:w-auto md:inline-flex hover:bg-transparent hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600">
                    <Link
                      href="https://mycontentpal.spp.io/order/XZ5678"
                      className=""
                    >
                      <span className="text-xl font-bold">
                        Purchase For Only $199
                      </span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
