"use client";
import React from "react";
import "aos/dist/aos.css";
import SubHeading from "../ui/SubHeading";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Link from "next/link";
const Rajpay = () => {

  return (
    <div className="container mx-auto px-4 lg:py-12 py-10 text-gray-800 space-y-16">
      {/* About Section */}
      <div data-aos="fade-up" className="space-y-4">
          <SubHeading className="text-start" content=" About RajPay Services" />
        <p className="text-base sm:text-lg leading-relaxed">
          <strong>RajPay Services</strong> is a leading digital payment and
          financial service provider committed to simplifying the way India
          transacts. We bring together a wide range of financial and digital
          services including <strong>AEPS, DMT, mobile recharges, bill
          payments, PAN card, insurance, and more</strong> — all under one
          secure, easy-to-use platform. Our mission is to empower
          retailers, agents, and customers with convenient and transparent
          financial tools that reach every corner of India.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          With RajPay, users can enjoy <strong>instant, secure, and
          paperless transactions</strong>. Our digital ecosystem helps
          small entrepreneurs grow, makes financial inclusion a reality, and
          builds trust through technology-driven services that are accessible
          and reliable.
        </p>
      </div>

      {/* Mission Section */}
      <div
        data-aos="fade-right"
        className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-blue-950"
      >
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Our Mission
        </h2>
        <p className="text-base leading-relaxed opacity-90">
          Our mission is to deliver <strong>safe, fast, and user-friendly</strong> financial solutions that make digital
          payments accessible to everyone — from metropolitan cities to rural
          towns. We aim to eliminate financial barriers, promote economic
          equality, and empower individuals and merchants with innovative digital tools.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-base opacity-90">
          <li>Connecting urban and rural India through digital finance.</li>
          <li>Providing affordable, secure, and transparent services.</li>
          <li>Empowering small businesses to earn and grow with RajPay.</li>
          <li>Encouraging a habit of digital literacy and cashless transactions.</li>
        </ul>
      </div>

      {/* Vision Section */}
      <div
        data-aos="fade-left"
        className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-blue-950"
      >
        <h2 className="text-2xl font-semibold text-primary mb-3">
          Our Vision
        </h2>
        <p className="text-base leading-relaxed opacity-90">
          At RajPay Services, we envision a financially empowered India where
          every individual — regardless of location, background, or income —
          has access to secure and convenient digital financial services. We
          strive to build an ecosystem that combines <strong>trust, reliability, and innovation</strong> to simplify lives and drive India toward a cashless economy.
        </p>
        <ul className="list-disc list-inside mt-3 space-y-1 text-base opacity-90">
          <li>Becoming India’s most trusted digital service brand.</li>
          <li>Bridging the gap between technology and financial inclusion.</li>
          <li>Supporting local agents, entrepreneurs, and communities.</li>
          <li>Contributing to a digitally connected and transparent economy.</li>
        </ul>
      </div>

      {/* Benefits Section */}
      <div data-aos="fade-up" className="space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
          Benefits of Choosing RajPay
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          RajPay is designed to help individuals and businesses handle their
          financial transactions with ease. Our platform ensures speed,
          reliability, and convenience — giving users more control over their
          finances. Here’s how you benefit from being part of the RajPay
          network:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {[
            {
              title: "Easy Integration",
              desc: "Simple and fast onboarding for retailers and agents. Get started in minutes and start earning immediately.",
            },
            {
              title: "Secure Transactions",
              desc: "End-to-end encryption ensures all your transactions are safe and protected.",
            },
            {
              title: "24x7 Support",
              desc: "Our dedicated support team assists you anytime to resolve queries and issues quickly.",
            },
            {
              title: "Multiple Services",
              desc: "Access AEPS, money transfers, recharges, and bill payments — all in one dashboard.",
            },
            {
              title: "High Earning Potential",
              desc: "Earn attractive commissions and bonuses for every successful transaction made via RajPay.",
            },
            {
              title: "Nationwide Reach",
              desc: "Expand your services to customers across India and help bring financial services closer to rural communities.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={`${300 + index * 100}`}
              className="bg-white rounded-2xl p-6 shadow-md border hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-90">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div data-aos="fade-up" data-aos-delay="300">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
          Our Core Values
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Trust & Transparency",
              desc: "We believe in building long-term relationships through honesty, clarity, and accountability.",
            },
            {
              title: "Innovation",
              desc: "We adopt the latest digital tools and technologies to improve financial services for everyone.",
            },
            {
              title: "Customer Satisfaction",
              desc: "We prioritize user experience, ensuring convenience and reliability in every service.",
            },
            {
              title: "Accessibility",
              desc: "We aim to make digital finance available and affordable for every Indian citizen and business.",
            },
          ].map((value, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={`${400 + index * 100}`}
              className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-blue-950 hover:shadow-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-90">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Closing Section */}
      <div data-aos="fade-up" className="space-y-3">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
          Building a Digital India
        </h2>
        <p className="text-base sm:text-lg leading-relaxed">
          RajPay Services is more than a financial platform — it’s a movement
          toward a financially empowered and digitally connected India. Through
          continuous innovation and commitment, we strive to make every
          transaction faster, smarter, and more meaningful for people across
          the nation.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          <strong>RajPay</strong> stands for reliability, security, and growth.
          Together, let’s transform financial access and contribute to a
          stronger, smarter India — one transaction at a time.
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold mt-2">For More Information</h2>
          <Link href="https://rajpay.com" className="flex items-center gap-2 hover:text-blue-700 transition-all duration-300 font-medium">
            <Globe className="w-5 h-5" /> www.rajpay.com
          </Link>
          <Link href="mailto:tech.rajpay@gmail.com" className="flex items-center gap-2 hover:text-blue-700 transition-all duration-300 font-medium">
            <Mail className="w-5 h-5" /> tech.rajpay@gmail.com
          </Link>
          <Link href="tel:+91 9587667777" className="flex items-center gap-2 hover:text-blue-700 transition-all duration-300 font-medium">
            <Phone className="w-5 h-5" /> +91 958-766-7777
          </Link>
          <p className="flex items-start gap-2">
            <MapPin className="w-5 h-5 mt-1" /> Rajpay #107, Shiv Vihar AB,
            Near Maharani Bagh Palace, Lalarpura, Gandhi Path (West), Vaishali
            Nagar, Jaipur, Rajasthan 302021
          </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
  <Link
    href="/pdf/rajpay-zero-balance.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between w-full sm:w-auto gap-3 bg-primary hover:bg-secondary text-white font-medium px-5 py-3 rounded-lg transition-all"
  >
    <span>Open Zero Balance Saving Bank Account</span>
    <span className="underline text-sm">Download PDF</span>
  </Link>

  <Link
    href="/pdf/rajpay-pan-card.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between w-full sm:w-auto gap-3 bg-primary hover:bg-secondary text-white font-medium px-5 py-3 rounded-lg transition-all"
  >
    <span>RajPay e-PAN Card Application</span>
    <span className="underline text-sm">Download PDF</span>
  </Link>
</div>
      </div>
      </div>

    </div>
  );
};

export default Rajpay;
