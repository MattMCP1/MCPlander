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
import CTAsub from "./SubCTA";
import Cards from "./cards";

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

export default function Body4() {
  return (
    <>
      <div className="bg-[#1f2937]">
        <Container>
          <div className="flex bg-[#1f2937] text-center py-8 lg:text-6xl">
            <h1 className="text-white text-4xl  font-bold lg:text-5xl">
              Scale Your Business With A{" "}
              <strong className="text-orange-400">Subscription</strong> That’s
              Never Looked So Scrumptious.
              <br />
              <br />
              <strong className="text-orange-400 text-3xl font-bold">
                Without
              </strong>{" "}
              <strong className="text-3xl font-bold">
                Divorcing Content Agencies Like King Henry VIII? <br />
                <br />
              </strong>
            </h1>
          </div>
        </Container>
      </div>

      <section className="bg-[#1F2937]">
        <Container>
          <div className="text-white text-center text-2xl ">
            <br />
            <br />
            <div className="text-black">
              <Cards />
            </div>
            <br />
            <br />
            <strong>
              Our{" "}
              <strong className="text-orange-400 text-3xl font-bold">
                Limited Time
              </strong>{" "}
              Subscription Service Offers You The Royal Treatment And Priceless
              Perks You Won’t Find Anywhere Else!
            </strong>
            <br />
            <br />
            If you say “I do” to us, we say “I do” to you, your clients AND your
            customers. This is a union of two businesses working together till
            subscription-do-us-part. Our job is to settle your problems with
            solutions and make you feel like the powerful business you are.{" "}
            <br />
            <br />
            <strong>We’re prepared for the commitment.</strong> <br />
            <br />
            And with 10 slots up for grabs, our family is about to get a whole
            lot bigger. <br />
            <br />
            Hey Pals, Have you ever wondered how to get the best value for your
            money in content creation? If you’ve tried in-house content writers
            or freelancers, you’ve probably noticed they can’t merge quality
            writing with search engine optimization. Maybe you’re struggling to
            find quality writers within your budget, or the turn-around time is
            poor. <br />
            <br />
            <strong>You’re not alone</strong> . <br />
            <br /> We have tons of people come to us with these concerns. They
            tell us that they’ve been burned before and are unsure if they can
            trust again.
            <br /> And we understand that.
            <br /> That’s why we put our graft on and made an offer you
            LITERALLY cannot refuse. Telling you that we’re good enough isn’t
            going to cut it.
            <br /> <br />{" "}
            <strong>
              So as the famous saying goes: actions speak louder than words. And
              the words we create for you will put your customers into action.{" "}
            </strong>
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
            <br /> Right now, tons of businesses are saying no to content
            agencies out of fear of past trauma. <br />
            <br />
            Instead, you hire a freelancer to write your content, which seems
            less intimidating, or you ask your neighbour's son, who got an A in
            English Language, or Sally from HR who said she likes to read
            Stephen King.
            <br />
            <br />
            <br /> And while all of these “writers” create your content, those
            who aren’t afraid of investing and reinvesting, until they find
            their perfect agency, are launching to the top of Google, getting
            comfortable and marking their territory. <br />
            <br /> They impress their clients, who then tell their CEO friends
            about their agency's outstanding work, and suddenly, they’re the
            ones people want…not you. <br /> Before you know it, your
            freelancer/neighbour's son/Sally from HR has come back with your
            content, and it’s so late that you send it off without as much as a
            second read to be uploaded.
            <br />
            <br /> And although your writers have proofed their work, they’ve
            missed important details, minimised relevant keywords, written in
            the incorrect country format, and had a ton of spelling and grammar
            mistakes. <br />
            <br />
            <br /> This will resonate as lousy and unprofessional. <br /> <br />
            And all because you wanted to save money, you’ve now lost your
            clients, customers, and your INCOME.
            <br />
            <br />
            The situation is that this happens all of the time. The saying that
            if you pay cheap, you pay twice is a reality. The time wasted trying
            to cheat the system with cheap content and high rewards will double
            in price and time when you start having to build yourself from the
            ground up again. <br /> <br />
            <strong className="text-orange-400">But it’s not all bad.</strong>
            <br />
            <br />
            <Faq data={data} styles={styles} config={config} />
            <br />
            <br />
            Right now, we’re offering ten slots for businesses like you that
            need high-quality content. We have a large team of talented writers
            who are vibrant dreamers and travellers, resilient and passionate
            about their work. <br />
            <br />
            We’re a large family that doesn’t stop with our employees but
            branches out to our clients and their customers and clients. With
            our subscription package, you will be our number one priority.{" "}
            <br /> <br /> The turn-around time will be faster, meaning your
            clients and customers will be happy with the conveyor belt of
            content that just keeps coming. There’s no niche that we can’t
            handle. <br /> <br /> Our writers are fun, witty and creative people
            who can make a blog on windmills your next page-turner. <br />{" "}
            <br /> We use Surfer for our writing, which automatically generates
            the best keywords to use against your competition and with the
            subscription package, you get a FREE keyword research service,
            usually priced at XXX, which gives you a sound strategy for your
            niche to gather the BEST search engine friendly keywords that money
            can buy.
            <br />
            <br /> This is all you need to get Google to love you. Our team has
            tripled in size; even our marketers and client communications staff
            can write if need be. We have a huge, dedicated team of staff at MCP
            who digest content like they’re inhaling Kinder Buenos.
            <br /> <br />{" "}
            <strong className="text-orange-400">
              Better yet, they're efficent.
            </strong>
            <br />
            <br />
            <br /> We’re human, which means we’re going to make mistakes. That’s
            why our writer's briefs don’t end there. It goes through to the next
            stage, our proofing team, which then grooms the content with a
            fine-tooth comb.
            <br />
            <br />
            <br /> Nothing gets past our proofing team. <br /> They are the
            Scooby Gang of My Content Pal. <br /> <br />
            <br />
            Why should you believe us?
            <br />
            Look at what some of our clients have said about our work quality.
            <br />
            <br />
            <Linkprocess2 /> <br />
            <br /> With our quality of writing, you’re guaranteed to improve the
            traffic flowing into your website.
            <br />
            <br /> And with the{" "}
            <strong className="text-orange-400">subscription package</strong>,
            you’ll be treated like{" "}
            <strong className="text-orange-400">ROYALTY</strong> with the utmost
            priority and care alongside incomparable perks that’ll turn your
            cupcake into a three-tiered wedding cake.
            <br />
            <br />
            <br /> Look, I was at breaking point once. <br />
            I’d split up with my long-term girlfriend, lost my business and was
            denied government benefits. <br />
            <br />
            <br /> I had to write content for someone for months on my own, and,
            honestly, I wouldn't say I liked it. All I wanted was an agency that
            could do this for me, so I could keep my client happy and produce
            high-quality content. <br />
            <br />
            <br />
            That’s when My Content Pal was born.
            <br /> By 23, I was running three businesses, travelling the world,
            and enjoying my dreams awake instead of asleep.
            <br /> I thrive off helping people that are in my old position.{" "}
            <br />
            <br />
            To help businesses stuck in the rut of maximum effort and minimum
            reward. <br />
            <br /> So now that I’ve built great relationships with my clients,
            it’s time to extend the dynasty. It’s time to offer something so
            exclusive, high-class, and superior that you’ll be treated like
            family and rewarded like kings. <br />
            <br />
            So, besides top-notch quality, efficient communication, authentic
            accountability and burning passion,{" "}
            <strong>
              what do you get in this subscription we’re offering?
            </strong>
            <br />
            <br />{" "}
            <span className="text-orange-300 font-bold">The Features</span>{" "}
            <br />
            <br />
            <li>A Free Upload Service</li>
            <li>My Keyword Pal, our all-encompassing</li>
            <li> keyword research service, FREE of charge</li>
            <li>Priority TAT </li>
            <li>
              A Part Of Our Variable Reward System (50-200k words free
              throughout the year!)
            </li>
            <li> A FREE Grade 3 link as a gift</li>
            <li>A Monthly Strategy Call With Me</li>
            <br />
            <br />
            <strong className="text-orange-300 font-bold">The Benefits </strong>
            <br />
            <br />
            <li>You get to enjoy life again </li>
            <li> You can catch up to your competitors</li>
            <li> Make it home for dinner on time to see your family</li>
            <li>
              {" "}
              Break away from the shackles of fear, failure and the unknown
            </li>
            <li> The approval of your clients, customers and Google</li>
            <li> You can be a winner</li>
            <br />
            <br />
            We want to grow our family, which means we want to reward your
            loyalty with the BEST OF THE BEST.
            <br />
            We have NEVER done this before. <br />
            <br />
            <strong>
              And we may NEVER offer something this grand again.
            </strong>{" "}
            <br /> <br />
            So you now have two choices. <br /> <br />
            <ol>
              {" "}
              <li> Stay where you are and get the same results.</li>
              <li>
                Stay where you are and get the same results. Join our
                subscription to boost your rankings and get the recognition you
                deserve.
              </li>
            </ol>
            <br />
            <br /> If you’re interested in becoming an elite member of our
            family, sign up now before our ten positions are taken. That’s
            right, ten!! That’s not a lot. And the countdown’s already begun.
          </div>
          <CTAsub />
        </Container>
      </section>

      <div />
    </>
  );
}
