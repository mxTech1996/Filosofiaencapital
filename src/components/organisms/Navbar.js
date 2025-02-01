"use client";

import { navData, dataSite } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full border-b">
      <div className="bg-black text-white text-center py-2">
        Enjoy the best courses with experienced professional teachers.
      </div>
      <div className="flex justify-between items-center py-2 px-8 bg-white">
        <Link className="font-bold text-lg" href="/">
          {dataSite.iconImage && (
            <Image
              src={dataSite.iconImage}
              alt={dataSite.name}
              width={100}
              height={50}
            />
          )}
        </Link>

        <nav className="flex space-x-8">
          {navData.map((item, index) => (
            <Link key={index} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex space-x-3">
          <Link
            href="/contact-us"
            className="flex items-center gap-2 bg-black text-white rounded-full px-4 py-2"
          >
            Contact Us
          </Link>

          <Link
            href="/my-cart"
            className="flex items-center gap-2 bg-black text-white rounded-full px-4 py-2"
          >
            My Cart <span>🛒</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
