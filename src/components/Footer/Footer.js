"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-black text-[#9b9b9b] py-8">
      <div className="max-w-screen-xl px-6 mx-auto">
        <div className="grid grid-cols-2 md:gap-4 gap-y-[30px] lg:grid-cols-5">
          <div className="lg:row-span-2 hidden lg:inline">
            <Link href="/">
              <span className="inline-flex text-[22px]">EROSADS</span>
            </Link>
          </div>

          <Link
            href="/contact"
            className="text-xs lg:text-sm hover:text-gray-300 transition-colors"
          >
            Contact & Support
          </Link>

          <Link
            href="/terms"
            className="text-xs lg:text-sm hover:text-gray-300 transition-colors"
          >
            Terms & Conditions
          </Link>

          <Link
            href="/faq"
            className="text-xs lg:text-sm hover:text-gray-300 transition-colors"
          >
            FAQ
          </Link>

          <Link
            href="/dmca"
            className="lg:row-span-2 text-xs lg:text-sm hover:text-gray-300 transition-colors"
          >
            DMCA Complaints
          </Link>

          <Link
            href="/privacy"
            className="text-xs lg:text-sm hover:text-gray-300 transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/advertiser"
            className="text-xs lg:text-sm hover:text-gray-300 transition-colors"
          >
            Advertiser Agreement
          </Link>
          <Link
            href="/about"
            className="text-xs lg:text-sm hover:text-gray-300 transition-colors"
          >
            About ErosAds
          </Link>
        </div>
        <div className="text-[13px]  space-y-2 mt-10">
          <p className="mb-2.5 text-[#4b4b4b]">
            Customization Services brought to you by Eros-guide.com™ All Things
            Erotic™. © 1997-2024 Daslur Services AG Abendweg 18, 6006 Luzern,
            Switzerland -- company number CH-100.3.808.194-8
          </p>
          <p>
            Read about{" "}
            <Link href="/trademarks" className=" underline">
              Trademarks/IP
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
