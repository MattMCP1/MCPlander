import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Video from "./video";
import Purchase from "./purchase";
import CTA from "./CTA";
import Linkprocess2 from "./slider/linkprocess2";
export default function Body3() {
  return (
    <>
      <div className="bg-[#1f2937]">
        <Container>
          <div className=" bg-[#1f2937] text-center py-8 lg:text-6xl">
            <h1 className="text-white text-4xl  font-bold lg:text-5xl">
              To The <span className="text-orange-300">SEOs Of The Night</span>
              <br />
              <strong className="text-3xl font-bold">
                It’s time to start living your dreams when you’re awake
                <span className="text-orange-300">...</span>
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
      <div class=" bg-[#1F2937]  ">
        <div class="">
          <section className="container lg:px-12 ">
            <div className="text-white text-center text-xl p-8">
              <p className="lg:text-2xl">
                Not all SEOs are 24/7{" "}
                <strong className="text-orange-300">powerhouses…</strong> Some
                have other jobs, maybe working a 9-5 in an office somewhere, and
                it’s not until they get home in the evening and on the weekends
                do they let their inner SEO come out.
                <br />
                <br />
                You have the toughest job of all, juggling two different
                lifestyles whilst also having to find time for your family,
                friends and interests.
                <br />
                <br />
                <div className="bg-[url('/icon.svg')] w-full">
                  <div className=" ">
                    <Linkprocess2 />
                  </div>
                </div>
                You know affiliate marketing is the way forward…you can see your
                future there…but you don’t know how to get to it yet.
                <br />
                <br />
                It’s a risk because you don’t have much of a budget to play
                with…and you can’t leave your day job until you’re absolutely
                <strong> CERTAIN </strong> you’re going to succeed.
                <br />
                <br />
                <strong className="text-orange-300">
                  To the SEOs of the night who spend their sleep time drowning
                  through keyword lists from Ahrefs, seeking the best writers
                  your money can buy…{" "}
                  <span className="text-white italic">
                    why not accept a little help?
                  </span>
                </strong>
                <br />
                <br />
                <span className="italic">
                  You have to invest in SEO, to invest in yourself - if you
                  really crave the affiliate marketing lifestyle.
                </span>
                <br />
                <br />
                If you’re working somewhere else in the day, then you should
                hire people to do your SEO work for you so by the time you get
                home, you can swiftly analyse your data over dinner and make it
                to bed on time.
                <br />
                <br />
                <strong>THIS</strong> is the push you need to quit your job and
                join the SEO tribe.
                <br />
                <br />
                <strong>Better yet?</strong>
                <br />
                <br />
                Content writers at your beck and call to produce top quality
                content that your site needs to be recognised by Google.
                <br />
                <br />A keyword service that can be presented to you on a plate,
                all you have to do is eat it up.
              </p>
              <br />
              <br />
              Forget about the sleepless nights. All of the work you’d spend
              your sleep time completing can be done for you by the time your
              dinner’s on the table.
              <br />
              <br />
              <strong className="italic">Finally,</strong> you can have a normal
              night's sleep.{" "}
              <strong className="text-orange-300 font-bold">FINALLY,</strong>{" "}
              you can leave your job and join us.
              <br />
              <br />
            </div>
          </section>
        </div>
      </div>

      <div class="flex flex-wrap overflow-hidden bg-[#1F2937]  ">
        <div className="container text-center text-white text-xl px-4 mb-8 ">
          <br />

          <Container>
            <div
              class="flex items-center Z-9 h-full col-span-1 sm:flex  sm:hidden bg-[url('/icon.svg')] w-full
              "
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
        </div>
      </div>
    </>
  );
}
