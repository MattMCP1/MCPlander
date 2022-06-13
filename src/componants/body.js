import Image from "next/image";
import Container from "./container";
// import Link from "next/link";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Video from "./video";
import Purchase from "./purchase";
import Porcess from "./slider/process";
import CTA from "./CTA";
import Linkprocess2 from "./slider/linkprocess2";
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

export default function Body() {
  return (
    <>
      <div className="bg-[#1f2937]">
        <Container>
          <div className="flex bg-[#1f2937] text-center py-8 lg:text-6xl">
            <h1 className="text-white text-4xl  font-bold lg:text-5xl">
              How My <strong className="text-orange-400 ">Keyword Pal</strong>{" "}
              Will Show You The Exact Roadmap To Position 1 Rankings! <br />
              <br />
              <strong className="text-orange-400 text-4xl font-bold">
                Without
              </strong>{" "}
              <strong className="text-4xl font-bold">
                investing thousands on Backlinks.
              </strong>
            </h1>
          </div>
        </Container>
      </div>
      <div className="flex justify-center bg-[#1F2937]">
        <Image
          src={"/book render.png"}
          width={600}
          height={550}
          alt="The Link Blueprint"
        />
      </div>
      <div class="flex flex-wrap overflow-hidden bg-[#1F2937] py-8 ">
        <div class="w-1/6 overflow-hidden xl:w-1/6"></div>
        <div class="w-4/6 overflow-hidden xl:w-4/6">
          <section className="">
            <div className="text-white text-center text-xl flex justify-center">
              <br />
              <br />
              <p>
                Keyword research is a time-consuming task, especially for those
                without the tools…and the skill; <br />
                <br />
                maybe you’ve left it until Friday afternoon, as four minds try
                to piece together the data over tons of platforms. <br />
                <br /> All you want to do is finish up, go for a drink, and
                forget you ever started this laborious duty.
                <br />
                <br /> But what if it didn’t have to be a task? <br />
                <br />
                Instead, what if keyword research was a service? <br />
                <br />
                Picture this: <br />
                <br />
                <span className="italic">
                  <span className="text-4xl text-orange-400 italic">"</span> As
                  the other SEO warriors drown in a keyword tidal wave, you sail
                  idly by, potentially with a beer in hand, as we do all the
                  work for you.
                </span>
                <br />
                <br />
                Sound good?
                <br />
                <br />
                DayDream over. <br />
                <br />
                This is the real world. <br />
                <br />
                And in the real world, there is such a thing as a keyword
                research service.
                <br />
                <br />
                Its us.
              </p>
              <br />
              <br />
            </div>
          </section>
        </div>
      </div>
      <div class="flex flex-wrap overflow-hidden bg-[#1F2937] py-16 ">
        <section className="bg-[url('/pattern.svg')] bg-opacity-30 w-full  ">
          <div class=" opacity-100  ">
            <div className="container  mx-auto px-5">
              <div
                id="responsiveVideoWrapper"
                className="relative h-0 pb-fluid-video   "
              >
                <iframe
                  className="absolute  -mt-16 left-0  w-full h-full rounded-xl bg-red-400"
                  src="https://www.youtube.com/watch?v=9lzrYsIyUPE&t=1121s"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <section>
            <div className="text-center p-5">
              <p className="text-5xl text-white  font-bold ">
                My Keyword Pal{" "}
                <strong className="text-5xl font-bold text-orange-400">
                  offers you?
                </strong>
              </p>
            </div>
            <div className="">
              <div className="">
                <div class="flex flex-wrap p-4 overflow-hidden">
                  <div class="w-full overflow-hidden text-center text-2xl">
                    <li className="text-white">
                      <span className="text-white font-xl">
                        How to rank high with little investment
                      </span>
                      <br />
                      <br />
                      <span className="text-white font-xl"></span>
                    </li>
                    <li className="text-white">
                      <span className="text-white font-xl">
                        How to hoover your readers into your engaging
                        content…and keep them there
                      </span>
                      <br />
                      <br />
                      <span className="text-white font-xl"></span>
                    </li>
                    <li className="text-white">
                      <span className="text-white font-xl">
                        The secret ingredient all SEOs can never rank without
                      </span>
                      <br />
                      <br />
                      <span className="text-white font-xl"></span>
                    </li>
                    <li className="text-white">
                      <span className="text-white font-xl">
                        How to catch up to the top of Google like the SEO
                        conglomerates you look up to
                      </span>
                      <br />
                      <br />
                      <span className="text-white font-xl"></span>
                    </li>
                    <li className="text-white">
                      <span className="text-white font-xl">
                        The most obvious mistakes that writers make and how to
                        fix them
                      </span>
                      <br />
                      <br />
                      <span className="text-white font-xl"></span>
                    </li>
                    <li className="text-white">
                      <span className="text-white font-xl">
                        The reason why most SEOs are stuck on the treadmill of
                        blown budgets and disappointing results
                      </span>
                    </li>
                  </div>

                  <div class="w-1/2 overflow-hidden"></div>
                </div>
              </div>
            </div>
          </section>
          <div className="text-white text-xl"></div>
          <div className="container mx-auto px-5 py-8 -mb-16">
            <Faq data={data} styles={styles} config={config} />
          </div>
        </section>
        <div className="container text-center text-white text-xl px-4 py-16">
          <br />
          <p>
            <strong className="font-2xl">We </strong>can provide you with every
            keyword variation and intent to produce a{" "}
            <strong className="text-orange-300">SOLID STRATEGY</strong> that
            will streamline your content creation with the LEAST amount of
            investment possible.
            <br />
            <br />
            <br /> This is the{" "}
            <strong className="text-orange-300">FASTEST</strong> way possible to
            improve your rankings and overtake your competitors!
            <br />
            <br />
            <div className="">
              You can see your competitors ahead of you, and you want to catch
              up…{" "}
            </div>
            <br />
            <br />
            We can give you a boost that doesn’t hurt your budget.
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
              <div className="py-4">
                <Purchase />
              </div>
            </Container>
            <br />
            <br />
            <div className="font-bold text-2xl">
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
            You’re stuck in the same position, jogging, running, sprinting, only
            to get worn out and fatigued on the treadmill of organic death…{" "}
            <br />
            <br />
            Forget about you losing money and ranking low…what about the
            reaction of your stakeholders or clients? Can you really cope with
            all of that guilt? <br />
            <br />
            You don’t want to be recognised as the disappointing agency… <br />{" "}
            <br />
            You’ll lay awake at night running through the questions being asked
            of you, over and over again: “why haven’t I seen any increase?”,
            “why is the content not up to our standards?”, “why have I invested
            thousands in SEO?” <br />
            <br />
            <strong className="text-orange-300">
              {" "}
              Without a sound strategy,{" "}
            </strong>
            you will have the spotlight on you in the WRONG way… <br />
            <br />
            SEOs understand it takes a long time to see results…non SEOs don’t.{" "}
            <br /> <br />
          </p>
          <div className="bg-[url('/icon.svg')] w-full">
            <div className=" ">
              <Linkprocess2 />
            </div>
          </div>
          <div className="text-orange-300 text-3xl font-bold">
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
          And we know how to hit the target with a <strong>bullseye.</strong>{" "}
          <br /> <br /> No one wants to wait years only to get to position 4… We
          have higher standards than that. <br /> <br />
          You want traffic, and you want it now, <strong>
            right?
          </strong> <br /> <br />
          <strong className="text-orange-300">
            How does this benefit you?
          </strong>
          <br /> <br />
          <div className="text-white text-xl text-center">
            The exemplary system, the <strong>BEST</strong> keywords, and the{" "}
            <strong>CORRECT</strong> strategy will rank you faster and higher.{" "}
            <br /> <br /> A well laid out strategy gives you the fastest roadmap
            to success. But it also helps you manage your workload so you can
            use <strong className="text-orange-300">YOUR</strong> strengths
            elsewhere to get you to the position you desire. <br /> <br />
          </div>
          <div className="text-orange-300 font-bold  text-3xl ">
            <p className="justify-center">
              {" "}
              It’s time to rank higher and faster.
            </p>
          </div>
          <CTA />
        </div>
      </div>
    </>
  );
}
