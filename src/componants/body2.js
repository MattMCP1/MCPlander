import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Video from "./video";
import Purchase from "./purchase";
import CTA from "./CTA";

export default function Body2() {
  return (
    <>
      <div className="bg-[#1f2937]">
        <Container>
          <div className="flex bg-[#1f2937] text-center py-8 lg:text-6xl">
            <h1 className="text-white text-4xl  font-bold lg:text-5xl">
              Want To Know All The Information Without Doing Any Of The Work?
              <br />
              <br />
              <strong className="text-orange-400 text-4xl font-bold">
                Get 1000+
              </strong>{" "}
              <strong className="text-4xl font-bold">
                keywords from one report.
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
          <section className="">
            <div className="text-white text-center text-xl p-8">
              <br />
              <br />
              <p>
                Having the right keywords in place can generate you{" "}
                <strong className="text-orange-300">THOUSANDS!</strong>
                <br />
                <br />
                But not everyone knows the right keywords to use…and there’s
                usually a lot of trial and error before they get there. <br />
                <br /> Unless…
                <br />
                <br />{" "}
                <strong className="text-orange-300 italic">WARNING: </strong>IF
                YOU HAVE ALREADY CREATED A KEYWORD REPORT FOR THIS YEAR, STOP
                READING. THIS WILL BREAK YOUR HEART.
                <br />
                <br />
                Unless you stop trying to figure it out and take advantage of
                the offer right in front of you.
                <br />
                <br />
                <strong className="text-orange-300">
                  Want to rank higher faster?
                </strong>
                <br />
                <br />
                <span className="italic">
                  <span className="text-4xl text-orange-400 italic"></span> My
                  Keyword Pal can give you the{" "}
                  <strong className="text-orange-300">ULTIMATE </strong>keyword
                  list without spending hours, days, and weeks of effort!
                </span>
                <br />
                <br />
                Before My Keyword Pal, SEOs spent more time on spreadsheets than
                they did in their own bedsheets… After My Keyword Pal, they can
                analyse the data…with a beer in hand.
                <br />
                <br />
                If you’re unhappy with your keyword performance, let us take a
                peek.
                <br />
                <br />
                Better yet?
                <br />
                <br />
                If you’re not happy with your results, we will offer you a{" "}
                <strong className="text-orange-300">
                  100% money-back guarantee
                </strong>{" "}
                if you purchase a subscription with MCP…
                <br />
                <br />
                <strong className="bold">It’s a no-brainer!</strong>
              </p>
              <br />
              <br />
              Quality content on top of accurate, relevant keywords is a recipe
              for success.
              <br />
              <br />
              Gone are the days of square eyes from excel sheets.
              <br />
              <br />
              <span className="italic">
                <span className=" text-orange-300 font-bold italic">
                  We offer all of the answers you need to dominate the SERPs.
                </span>
              </span>
              <br />
              <br />
              All of the Pro SEOs are doing this…they’re WAY ahead, and you need
              to catch up.
              <br />
              <br />
              You know your potential… you know the powerhouse you are…so why
              not let us help you get the recognition you deserve.
              <br />
              <br />
              It will save you time <strong>AND </strong>money!
              <br />
              <br />
              We know keyword research is a time-consuming task…so take it off
              your to-do list because you can pay for it now! All you have to do
              is say yes.
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
