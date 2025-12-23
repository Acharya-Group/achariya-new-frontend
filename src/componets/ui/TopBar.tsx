import { socialLinks } from "@/lib/utils";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-[#7a0706] to-[#261b7d]">
      <div className="container mx-auto  text-white font-normal py-2 px-4 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
        {/* Left: Info text */}
         <p className="text-sm md:text-base text-center md:text-start">
        {"Note : Achariya Tech. doesn't accept any cash payments."}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-6">
      
        <div className="flex items-center flex-wrap justify-center">
        {/* Ping Circle */}
        <div className="relative flex">
          <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
        </div>
        {/* The link */}
        <Link
          href="/order-e-mittra-stationery"
          className="ms-2 hover:underline text-white font-normal"
        >
          Order e-mitra Stationery
        </Link>
        <Link
          href="/complaint-feedback"
          className="sm:ms-6 ms-3 hover:underline  text-white font-normal"
        >
          Complaint & Feedback
        </Link>
      </div>
         <div className="flex items-center gap-3">
        <span>Follow us:</span>
        {socialLinks.map((item, i) => {
      const Icon = item.icon;
      return (
        <Link
        aria-label="Follow us on social media"
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="h-8 w-8 rounded-full group bg-white text-[#261b7d] flex items-center justify-center bg-gradient-to-r border border-transparent hover:border-white hover:from-[#261b7d] hover:to-[#7a0706] transition-all duration-300"
        >
          <Icon className="group-hover:text-white transition-all duration-300" />
        </Link>
      );
        })}
      </div>
        </div>
      </div>
    </div>
  );
}
