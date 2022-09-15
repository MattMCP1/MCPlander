import Container from "./container";
import Link from "next/link";
import { motion } from "framer-motion";
import Faq from "react-faq-component";
import CountdownTimer from "./countdown/CountdownTimer";
import Purchase from "./purchase";
import Linkprocess2 from "./slider/linkprocess2";
import Index from "./hero";
import { RoughNotation } from "react-rough-notation";
import Fold from "./hero/fold";
const data = {
  title: "",
  rows: [
    {
      title: "Who is the KWR for?",
      content: `Anyone who doesn't want to spend the time sifting through tons of data will benefit from this report,
       whether you're an agency that doesn't want to disappoint their client or a small business owner who wants to speed up their rank-high-fast process.`,
    },
    {
      title: "Why is a keyword research plan essential? ",
      content: `If you want to spend the least and rank the quickest, you need a game plan. KWR forms the foundation of that plan, and attracting the right customers is vital to business success. 
Additionally, matching search intent is imperative to bringing relevant traffic to your website.`,
    },
    {
      title: "How can i benefit from the KWR report",
      content: `You can save yourself a lot of agony, stress, time, and money, and you can sleep at night without fear of letting down your clients or your business. 
The time you'll save from having a report means you can use it to tend to other areas of your business that need your attention. `,
    },
    {
      title: "What do you get in My Keyword Pal?  ",
      content: (
        <p>
          In this report, you'll get actionable information derived from
          metrics. We take a snapshot of the competitive environment around a
          keyword and provide you with the best solution to competing and
          ranking number one on Google.`
        </p>
      ),
    },
    {
      title: "What information do you need to give to us?",
      content: `We need your niche, company name, website and any specific keywords you might want to target.`,
    },
    {
      title: "How do you use My Keyword Pal?",
      content: `You can use it as a go-to guide for your content strategy. No more guesswork on what to write next. It's all laid out for you.`,
    },
    {
      title: "Do we report on local keywords?",
      content: `Yes, the more niche the keyword, the easier it will be to rank.`,
    },
    {
      title: "Why are you missing specific keywords?",
      content: `We choose keywords based on metrics. If you don't see a couple there, it's more than likely that they are not as valuable as you might think or too competitive and should be focused on later when your site is strong enough to compete.`,
    },
  ],
};

const styles = {
  borderradius: "1rem",
  titleTextSize: "3rem",
  bgColor: "#fb9644",
  titleTextColor: "white",
  rowTitleColor: "white",
  rowContentColor: "white",
  arrowColor: "white",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

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
export default function Body() {
  return (
    <>
      <div className="bg-[#1f2937]">
        <h1 className="text-white text-4xl lg:px-48 text-center font-bold lg:text-5xl">
          How My <strong className="text-orange-400 ">Keyword Pal</strong> Will
          Show You The Exact Roadmap To Position 1 Rankings! <br />
        </h1>

        <Fold />
        <Container>
          <div className="text-center text-2xl text-white py-8">
            {" "}
            {/* <p>
              Keyword research is a time-consuming task, especially for those
              without the tools…and the skill; maybe you’ve left it until Friday
              afternoon, as four minds try to piece together the data over tons
              of platforms. <br />
              All you want to do is finish up, go for a drink, and forget you
              ever started this laborious duty.
              <br />
              But what if it didn’t have to be a task? <br />
              Instead, what if keyword research was a service? <br />
              Picture this:
              <br />
              <span className="italic">
                <span className="text-4xl text-orange-400 italic">"</span> As
                the other SEO warriors drown in a keyword tidal wave, you sail
                idly by, potentially with a beer in hand, as we do all the work
                for you.
              </span>
              <br />
              Sound good?
              <br />
              DayDream over. <br />
              This is the real world. <br />
              And in the real world, there is such a thing as a keyword research
              service.
              <br />
              Its us.
            </p> */}
          </div>

          <div className="flex bg-[#1f2937] text-center flex justify-center lg:py-8 lg:text-6xl -mt-4">
            <h1 className="text-white text-4xl  font-bold lg:text-5xl">
              The benefits of using
              <strong className="text-orange-400 ">
                {" "}
                MycontentPal's{" "}
              </strong>{" "}
              Keyword Research Tool!
            </h1>
          </div>
        </Container>

        <div className="container flex justify-center py-8 bg-[#1F2937]">
          <Index />{" "}
        </div>
      </div>
      <div className="lg:flex w-full">
        <div className=" bg-[#1f2937] w-full">
          {" "}
          <Container>
            <div
              id="bgimg"
              class="flex bg-[url('/pattern.svg')] items-center Z-9 h-full col-span-1 sm:flex  sm:hidden  w-full"
            >
              <img
                src="/Bookmockbg.png"
                class=" object-cover w-full rounded -mb-32   max-w-none lg:absolute lg:max-w-md xl:max-w-lg "
                alt="Dashboard"
              />
            </div>
          </Container>
          <div className="bg-[#1f2937]">
            <Purchase />
          </div>
        </div>
      </div>

      <section className=" w-full bg-[#1f2937] lg:flex">
        <div className="lg:w-3/4">
          <div class="overflow-hidden bg-[#1F2937] py-8 ">
            <section className="">
              <div className="text-white  text-xl py-4  justify-center">
                <br />
                <br />
                <div className="flex bg-[#1f2937] text-center flex justify-center py-8 lg:text-6xl -mt-4">
                  <h1 className="text-white text-4xl  font-bold lg:text-5xl">
                    What can My{" "}
                    <strong className="text-orange-400 ">Keyword Pal</strong>{" "}
                    can offer you <br />
                  </h1>
                </div>

                <br />
              </div>
            </section>
            <div className="container text-center text-white text-xl px-4">
              <br />
              <p>
                <strong className="font-2xl">We </strong>can provide you with
                every keyword variation and intent to produce a{" "}
                <strong className="text-orange-300">SOLID STRATEGY</strong> that
                will streamline your content creation with the LEAST amount of
                investment possible.
                <br />
                <br />
                <br /> This is the{" "}
                <strong className="text-orange-300">FASTEST</strong> way
                possible to improve your rankings and overtake your competitors!
                <br />
                <br />
                <div className="">
                  You can see your competitors ahead of you, and you want to
                  catch up…{" "}
                </div>
                We can give you a boost that doesn’t hurt your budget.
                <br />
                <br />
                <br />
                <br />
                <Container>
                  <div
                    id="bgimg"
                    class="flex bg-[url('/pattern.svg')] items-center Z-9 h-full col-span-1 sm:flex  sm:hidden  w-full"
                  >
                    <img
                      src="/Bookmockbg.png"
                      class=" object-cover w-full rounded -mb-32   max-w-none lg:absolute lg:max-w-md xl:max-w-lg "
                      alt="Dashboard"
                    />
                  </div>
                </Container>
                <div class="flex flex-wrap overflow-hidden bg-[#1F2937] py-16 ">
                  <div className="text-white text-xl"></div>
                  <div className="container mx-auto px-5 py-8 -mb-16">
                    <Faq data={data} styles={styles} config={config} />
                  </div>
                </div>
                <div className="font-bold text-2xl py-8">
                  Why should you outsource your keyword research? <br />
                  <br />
                </div>
                Because you’re not sprinting to success…you’re walking on a
                treadmill. And the sad thing is,{" "}
                <strong className="text-orange-300">
                  most struggling SEO’s think they’re being productive…{" "}
                </strong>
                <br />
                <br />
                You’re stuck in the same position, jogging, running, sprinting,
                only to get worn out and fatigued on the treadmill of organic
                death… <br />
                <br />
                Forget about you losing money and ranking low…what about the
                reaction of your stakeholders or clients? Can you really cope
                with all of that guilt? <br />
                <br />
                You don’t want to be recognised as the disappointing agency…{" "}
                <br /> <br />
                You’ll lay awake at night running through the questions being
                asked of you, over and over again: “why haven’t I seen any
                increase?”, “why is the content not up to our standards?”, “why
                have I invested thousands in SEO?” <br />
                <br />
                <strong className="text-orange-300">
                  {" "}
                  Without a sound strategy,{" "}
                </strong>
                you will have the spotlight on you in the WRONG way… <br />
                <br />
                SEOs understand it takes a long time to see results…non SEOs
                don’t. <br /> <br />
              </p>
              <Linkprocess2 />
              <div className="text-orange-300 text-3xl py-8 font-bold">
                If nobody is searching for what you’re selling,{" "}
                <strong className="text-white font-bold text-3xl">
                  how can you expect anyone to buy it?
                </strong>
              </div>{" "}
              <br /> <br />
              Being the ghost of Google will get you nowhere. You won’t rank
              anywhere, let alone highly. <br /> <br />{" "}
              <strong className="text-orange-300">
                To launch a successful SEO campaign,
              </strong>{" "}
              you have to get the <strong>basics.</strong>{" "}
              <strong className="text-orange-300">
                Target keywords are the key to your ranking success.{" "}
              </strong>
              And we know how to hit the target with a{" "}
              <strong>bullseye.</strong> <br /> <br /> No one wants to wait
              years only to get to position 4… We have higher standards than
              that. <br /> <br />
              You want traffic, and you want it now, <strong>
                right?
              </strong>{" "}
              <br /> <br />
              <strong className="text-orange-300">
                How does this benefit you?
              </strong>
              <br /> <br />
              <div className="text-white text-xl text-center">
                The exemplary system, the <strong>BEST</strong> keywords, and
                the <strong>CORRECT</strong> strategy will rank you faster and
                higher. <br /> <br /> A well laid out strategy gives you the
                fastest roadmap to success. But it also helps you manage your
                workload so you can use{" "}
                <strong className="text-orange-300">YOUR</strong> strengths
                elsewhere to get you to the position you desire. <br /> <br />
              </div>
              <div className="text-orange-300 font-bold  text-3xl ">
                <p className="justify-center">
                  {" "}
                  It’s time to rank higher and faster.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4">
          <div className="sticky top-0 py-16 px-4">
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
                    <h3 className="font-bold text-5xl text-red-400">$199</h3>
                  </RoughNotation>
                </div>
                <h3 className="font-bold text-center text-7xl text-white">
                  $249
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

                  <Link href={"https://mycontentpal.spp.io/order/XZ5678"}>
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
      </section>
    </>
  );
}
