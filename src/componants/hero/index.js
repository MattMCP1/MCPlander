import Image from "next/image";
import React from "react";
import Container from "../container";
import { RoughNotation } from "react-rough-notation";
function Index() {
  return (
    <section>
      <div className="lg:flex justify-center lg:mt-0 mt-8">
        <div className="text-center lg:w-1/4 text-white ">
          <div className="h-full grid grid-cols-1 gap-4 content-between ">
            <div>
              <h2 className="font-bold text-3xl">
                {" "}
                <RoughNotation type="underline" show={true} color="#FB923C">
                  How to rank high with little investment
                </RoughNotation>
              </h2>
              <p className="py-4">
                {" "}
                Effective strategies with a minimum budget to give your seo a
                solid foundation
              </p>
            </div>
            <div>
              <h2 className="font-bold text-3xl">
                {" "}
                <RoughNotation
                  type="underline"
                  show={true}
                  color="#FB923C"
                  order="1"
                >
                  How to engage readers…and keep them there
                </RoughNotation>
              </h2>
              <p className="py-4">
                {" "}
                The importance of effective copy in reducing website bounce rate
              </p>
            </div>
            <div>
              <h2 className="font-bold text-3xl">
                {" "}
                <RoughNotation
                  type="underline"
                  show={true}
                  color="#FB923C"
                  order="2"
                  animationDelay={350}
                >
                  The secret ingredient all SEOs can never rank without
                </RoughNotation>
              </h2>
              <p className="py-4">
                {" "}
                The Power of link juice and an effective backlink strategy
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 ">
          <div className="flex justify-center">
            <div className="bg-black/40 rounded-xl px-4 mb-4 py-2  text-m  text-white font-bold">
              Limited Time offer - The KWR Plan now $149.99
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src={"/book render.png"}
              width={600}
              height={550}
              alt="The Link Blueprint"
            />
          </div>
        </div>
        <div className="lg:w-1/4 text-center text-white ">
          {" "}
          <div className="h-full grid grid-cols-1 gap-4 content-between ">
            <div>
              <RoughNotation
                type="underline"
                show={true}
                color="#FB923C"
                order="3"
                animationDelay={600}
              >
                <h2 className="font-bold text-3xl">
                  How to catch up to position #1 on Google
                </h2>
              </RoughNotation>
              <p className="py-4">
                {" "}
                Understand what your competitors are doing to grab the top
                google spots
              </p>
            </div>

            <div>
              <RoughNotation
                type="underline"
                show={true}
                color="#FB923C"
                order="4"
                animationDelay={1200}
              >
                <h2 className="font-bold text-3xl">
                  {" "}
                  The most obvious mistakes that writers make and how to fix
                  them
                </h2>
              </RoughNotation>
              <p className="py-4">
                {" "}
                Common pitfalls in your website copy that is costing you money
              </p>
            </div>
            <div>
              <RoughNotation
                type="underline"
                show={true}
                color="#FB923C"
                order="5"
                animationDelay={1500}
              >
                <h2 className="font-bold text-3xl"> Avoid the SEO money pit</h2>
              </RoughNotation>
              <p className="py-4">
                {" "}
                The reason why most SEOs are stuck on the treadmill of blown
                budgets and disappointing results
              </p>
            </div>
          </div>
        </div>
      </div>

      <section />
    </section>
  );
}

export default Index;
