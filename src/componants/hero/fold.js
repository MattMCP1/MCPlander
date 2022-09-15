import Image from "next/image";
import Link from "next/link";
// import { YoutubeVideoPlayer } from "../../src/componants/Podcast/youtubePlayer";
import CountdownTimer from "../countdown/CountdownTimer";
import { motion } from "framer-motion";
import { RoughNotation } from "react-rough-notation";
import { Review } from "./review";
function Fold() {
  // declare today

  const today = new Date().getDate();
  const deadline = today + 3;
  console.log(deadline);
  // handle countdown

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  // // handle month format

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthint = new Date().getMonth();
  const month = monthNames[monthint];

  // handles suffix to date

  const nth = function (deadline) {
    if (deadline > 3 && deadline < 21) return "th";
    switch (deadline % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  console.log(nth(deadline));

  // final output
  const Deadlineformat = month + " " + deadline + nth(deadline);

  return (
    <>
      <div className="w-full   bg-body-dark">
        <section className="py-12 sm:pb-16 lg:pb-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative  overflow-hidden bg-[#1f2937] rounded-xl py-4 ">
              <div className="absolute inset-0"></div>

              <div className="relative  lg:px-8">
                <div className="relative">
                  <div className="absolute"></div>

                  <div className="  relative grid grid-cols-1 lg:grid-cols-5 gap-y-12 gap-x-16 xl:gap-x-20">
                    <motion.div
                      className=" flex flex-col justify-between lg:col-span-3"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.35 },
                      }}
                      viewport={{ once: true }}
                    >
                      <div className=" ">
                        {" "}
                        <img
                          src="/Bookmockbg.png"
                          class=" object-cover w-full rounded   max-w-none lg:absolute lg:max-w-md xl:max-w-lg "
                          alt="Keyword Map cover"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      className="lg:col-span-2 bg-gray-50/10  rounded-xl p-6 -mt-20 lg:-mt-0 "
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.55 },
                      }}
                      viewport={{ once: true }}
                    >
                      <h3 className="font-bold text-orange-400 text-4xl text-center mb-4">
                        The Keyword Research
                        <span className="text-orange-100">.</span>
                      </h3>
                      <div className="flex justify-center">
                        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                      </div>
                      <div className="mt-6 text-base font-normal leading-7 text-white text-opacity-80 ">
                        <div className="  justify-center lg:flex md:flex flex ">
                          <RoughNotation
                            type="strike-through"
                            show={true}
                            color="#fff"
                            order="1"
                          >
                            <h3 className="font-bold text-5xl text-red-400">
                              $249
                            </h3>
                          </RoughNotation>
                        </div>
                        <h3 className="font-bold text-center text-7xl text-white">
                          $199
                        </h3>
                        {/* <p className="lg:hidden block text-white">
                            This is a breif description of the job being
                            advertised users can apply for the job hear
                          </p> */}
                      </div>

                      <p className="text-white text-xl py-4 font-bold text-center ">
                        Limited time sale ends
                        <span className="text-red-400"> {Deadlineformat}</span>
                      </p>
                      {/* <form action="" method="POST" className="mt-4 space-y-4"> */}
                      <div className="mt-4 space-y-4">
                        <div className="relative group">
                          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-orange-400 via-orange-600 to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                          <Link
                            href={"https://mycontentpal.spp.io/order/XZ5678"}
                          >
                            <button className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base sm:py-3.5 font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-transparent">
                              Purchase Now
                            </button>
                          </Link>
                        </div>
                      </div>
                      {/* <p className="text-lg font-bold text-white py-4">
                        Application deadline
                      </p> */}
                      {/* </form> */}
                      <div className="mt-8 sm:mt-12">
                        <p className="text-xs font-bold tracking-widest text-white uppercase text-opacity-70">
                          Trusted by
                        </p>
                        <div className="inline-grid grid-cols-2 gap-8 mt-8 lg:gap-x-12">
                          <img
                            className="object-contain w-auto h-6"
                            src="/APV.png"
                            alt=""
                          />

                          <img
                            className="object-contain w-auto h-6"
                            src="/SEOpartners.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Fold;
