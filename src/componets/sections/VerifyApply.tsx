import React from 'react';
import SubHeading from '../ui/SubHeading';

const VerifyApply = () => {
  // Data array for cards
  const cardsData = [
    {
      id: 1,
      title: "Verify e-Mitra",
      link: "/verify-emitra",
      icon: "✅"
    },
    {
      id: 2,
      title: "Apply For New e-Mitra",
      link: "/contact",
      icon: "📝"
    },
    {
      id: 3,
      title: "Join Telegram Channel",
      link: "https://t.me/myAchariya",
      icon: "📢",
      external: true
    },
    {
      id: 4,
      title: "SSO Sign In",
      link: "/sso-signin",
      icon: "🔐" 
    }
  ];

  return (
    <div className='container mx-auto px-4 py-12'>
      <SubHeading content='Verify & Apply'/>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        {cardsData.map((card) => (
          <a  data-aos="flip-right" data-aos-duration="1500"
            key={card.id}
            href={card.link}
            target={card.external ? "_blank" : "_self"}
            rel={card.external ? "noopener noreferrer" : ""}
            className='group block bg-[url(/gif/verify.gif)] bg-no-repeat bg-cover p-4 border rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:bg-[#261b7d]' // Using direct color code
          >
            <div className="text-3xl group-hover:scale-125 group-hover:text-white mb-2 flex justify-center transition-transform duration-300">
              {card.icon}
            </div>
            <h3 className='text-xl font-semibold text-center text-white transition-colors duration-300'>
              {card.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}

export default VerifyApply;