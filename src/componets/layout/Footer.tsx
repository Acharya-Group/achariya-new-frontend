"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import {
  pages,
  support,
  socialLinks,
  projectsLink,
  navdropdowns,
} from "../../lib/utils";

import Cookie from "../sections/Cookie";

const downloadsSection = navdropdowns.find(
  (item) => item.title === "Downloads"
);

export default function Footer() {
  const [showCookie, setShowCookie] = useState(false);

  return (
    <footer className="bg-gradient-to-r from-[#261b7d] to-[#7a0706] text-white overflow-hidden">
      <div className="container mx-auto px-4 pt-10 pb-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-2 lg:gap-6">
          {/* About Shopneo */}
          <div className="md:col-span-4">
           <div className="bg-white inline-block px-2 mb-3 rounded">
  <Image
    src="/images/logo.png"
    alt="AAchariya Group Logo"
    width={150}       
    height={50}       
    style={{ height: "auto" }} 
    className="mb-4"
  />
</div>

            <p className="text-sm opacity-75 mb-3">
              "Achariya Group is dedicated to delivering innovative solutions
              and exceptional services. Committed to excellence, we build
              lasting value for our clients and communities."
            </p>

            {/* Social Media */}
            <p className="font-semibold mb-0">Social Links</p>
            <ul className="flex gap-4 mt-4">
              {socialLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i}>
                    <Link
                      aria-label="Follow us on social media"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full group bg-white text-[#261b7d] transition-all duration-300 flex bg-gradient-to-r border border-transparent hover:border-white hover:from-[#261b7d] hover:to-[#7a0706] items-center justify-center"
                    >
                      <Icon className="cursor-pointer group-hover:text-white transition-all duration-300" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Pages */}
          <div className="md:col-span-2">
            <p className="text-lg font-semibold mb-3">Pages</p>
            <ul className="space-y-2 text-sm">
           {pages.map((item) => (
  <li key={item.url}>
    <Link
      href={item.url}
      className="transition-all hover:underline duration-300 opacity-75 hover:text-white hover:opacity-100"
    >
      {item.title}
    </Link>
  </li>
))}

            </ul>
          </div>

          {/* Projects */}
          <div className="md:col-span-2">
            <p className="text-lg font-semibold mb-3">Projects</p>
            <ul className="space-y-2 text-sm">
              {projectsLink.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.url}
                    className="transition-all duration-300 opacity-75 hover:underline hover:text-white hover:opacity-100"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads */}
          <div className="md:col-span-2">
            <p className="text-lg font-semibold mb-3">Downloads</p>
            <ul className="space-y-2 text-sm">
              {downloadsSection?.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="transition-all duration-300 opacity-75 hover:underline hover:text-white hover:opacity-100"
                    target={link.type === "download" ? "_blank" : "_self"}
                    download={link.type === "download"}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="md:col-span-2">
            <p className="text-lg font-semibold mb-3">Support</p>
            <ul className="space-y-2 text-sm">
              {support.map((item, i) => (
                <li key={i}>
                  {item.type === "heading" ? (
                    <span className="font-semibold">{item.title}</span>
                  ) : (
                    <a
                      href={item.url}
                      className="transition-all duration-300 opacity-75 hover:text-white hover:underline hover:opacity-100"
                      target={item.type !== "internal" ? "_blank" : "_self"}
                      rel={
                        item.type !== "internal"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-3 pb-10 border-t border-white mt-8 justify-center flex sm:justify-between flex-wrap items-center">
          <p className="text-sm opacity-75 text-center">
            © {new Date().getFullYear()} AchariyaGroup All Rights Reserved.
          </p>
          <div className="flex gap-3">
            <Link
              className="text-sm opacity-75 text-center hover:opacity-100 transition-all duration-300 hover:underline"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm opacity-75 text-center hover:opacity-100 transition-all duration-300 hover:underline"
              href="/terms-conditions"
            >
              Terms & Conditions
            </Link>
            <button
              onClick={() => setShowCookie(true)}
              className="text-sm opacity-75 text-center hover:opacity-100 transition-all duration-300 hover:underline"
            >
              Cookie Notice
            </button>
          </div>
        </div>
      </div>

      {/* Cookie Component */}
      <Cookie visible={showCookie} onClose={() => setShowCookie(false)} />
    </footer>
  );
}
