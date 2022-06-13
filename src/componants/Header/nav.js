import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
export default function Nav() {
  //const router = useRouter;

  const [Menu, ShowMenu] = useState(false);
  console.log(Menu);
  return (
    <nav className="bg-[#1F2937] w-full select-none py-4">
      <div className="flex justify-center">
        <Link href="https://www.mycontentpal.com">
          <Image src={"/logo1.svg"} height={150} width={200} />
        </Link>
      </div>
    </nav>
  );
}
