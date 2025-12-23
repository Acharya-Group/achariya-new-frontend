"use client";

import React from "react";
import SubHeading from "../ui/SubHeading";
import Image from "next/image";
import Link from "next/link";

const YogaCertificate = () => {
  const pdfLinks = {
    guidance: "/mspl/MSPL Exam Guideline.pdf",
    registration: "/mspl/YOGA- MODISH SERVICE PRIVATE LIMITED.pptx",
    indianCandidate: "/mspl/Indian Candidate 2.pdf",
    formCandidate: "/mspl/ForeignCandidate.pdf",
  };

  // Function to download PDF
  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = url.split("/").pop() || "download.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-6 font-sans text-gray-800 leading-relaxed">
      <SubHeading className="!text-start" content="About MSPL-PERSONNEL CERTIFICATION BODY"  />
      <div className="flex flex-wrap flex-col-reverse lg:flex-row">
        <div className="lg:w-8/12">
          <p>
            (MSPL- Personnel Certification Body) was established to act as a Centre
            of Excellence in the field of Yoga. As the demand for the system of Yoga
            is increasing rapidly at the global level, the Institute is striving
            hard to fulfill the current need and demand. MSPL is backed by devoted,
            highly qualified and experienced Assessment personnel and offering
            customer oriented certification in an efficient and cost effective
            manner. The word Yoga is derived from Sanskrit Yuj – which means to
            unite or integrate. The Hon’ble Prime Minister has desired to spread
            India’s traditional knowledge worldwide with credible systems which
            shall provide India the leadership in assuring quality of Yoga practices
            across the world. The Ministry of AYUSH in pursuance of the above and in
            the wake of declaration of International Day of Yoga recognizes there is
            a huge demand for Yoga experts at national and international level. The
            Ministry of AYUSH identified QCI to develop a Voluntary Scheme for
            Evaluation and Certification of Yoga Professionals.
          </p>
        </div>
        <div className="lg:w-4/12 ps-4">
          <Link href="https://msplyoga.com/" target="blank">
            <Image height={300} width={300} src="/images/mainLogo.png" alt="mspl logo"/>
          </Link>
        </div>
      </div>
      <SubHeading className="!text-start" content="ABOUT YOGA"  />
      <p>
        “Yoga is a light, which once lit, will never dim. The better your
        practice, the brighter the flame.” The term "Yoga" in the Western world
        often denotes a modern form of hatha yoga and yoga as exercise,
        consisting largely of the postures called asanas. Yoga, the mental,
        physical and spiritual practice to positively transform one’s body and
        mind, which originated in India about 5000 years ago has received its
        deserved accreditation by the United Nations by way of International
        Yoga Day to be celebrated worldwide every year on June 21. Hon’ble Prime
        Minister of India Shri.Narendra Modi has taken a leadership to spread
        this India’s cultural and spiritual heritage worldwide with credible
        system which shall provide India leadership to ensure the quality in
        teaching and training in Yoga.
      </p>

       <SubHeading className="!text-start" content="Objectives of MSPL"  />
      <p>
        Maintaining and promoting the different Indian Yoga Traditions.
        Certification of Yoga Professionals. To provide extensive research
        facilities for carrying out fundamental and clinical research in the
        discipline of Yoga and its applications keeping in view the
        socio-economic needs of all sections of the society. To conduct
        workshops, seminars around India. To conduct experiments and research on
        emerging trends in Yoga. To develop techniques and approaches based on
        the Ancient Yoga Texts and Granthas of Yoga to meet the challenges of
        the modern era. To prescribe different CERTIFICATION in YOGA for
        imparting Yoga education, training, therapy and research. Impartial &
        independent in judgment. To Maintain Quality and Standards of Yoga.
      </p>
       <SubHeading className="!text-start" content="Our Mission And Vision"  />
         <div className="mt-4 grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white shadow-md rounded-2xl p-8 border-l-4 border-primary relative overflow-hidden">
 <div className="bg-secondary h-[100px] w-[100px] absolute  opacity-10 top-[-40px] left-[-40px] rounded-full"></div>
 <div className="bg-secondary h-[100px] w-[100px] absolute  opacity-10 bottom-[-40px] right-[-40px] rounded-full"></div>
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
            We believe that peace within each person is the key to peace in families, communities, and the world. Our mission is to offer a trusted and thorough certification process for yoga professionals, students, and practitioners. Following the Professional Regulation Commission’s Yoga Certification Board (YCB) standards, we make sure certified yoga professionals meet high quality and ethical requirements. This helps develop skilled and responsible yoga practitioners who make a positive difference in society.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white shadow-md rounded-2xl p-8 border-l-4 border-secondary overflow-hidden relative">
             <div className="bg-secondary h-[100px] w-[100px] absolute  opacity-10 top-[-40px] left-[-40px] rounded-full"></div>
 <div className="bg-secondary h-[100px] w-[100px] absolute  opacity-10 bottom-[-40px] right-[-40px] rounded-full"></div>
            <h3 className="text-2xl font-semibold text-secondary mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
         Our mission is to become one of the best certification bodies for yoga professionals by maintaining high quality standards. We are committed to providing clear and fair certification that helps yoga practitioners show their skills and professionalism.
            </p>
          </div>
        </div>

  <div className="flex flex-wrap flex-col-reverse md:flex-row">
<div className="md:w-7/12">
   <SubHeading className="!text-start" content="CEO Message"  />
      <p>
        Yoga is essentially spiritual. It dignifies the essential unity that is
        the basis of life. It embraces the full spectrum of reality, from the
        most spiritual to the most material. The Philosophy of Yoga is practical
        and applicable in our day-to-day living. The practice of Yoga is a
        process of self-discovery. It is an awakening of long deep rooted
        memories of whom and what we really are! Yoga, as union, implies perfect
        harmony of body and mind. It implies the harmonious integration of
        personality. The most common benefit of Yoga practice is the sense of
        well-being at all levels of our existence. Yoga has now got worldwide
        acceptance. On 11th December 2014, the 193 member UNGA approved India’s
        proposal by consensus with a record 177 co-sponsoring countries, a
        resolution to establish 21st June as “International Day of Yoga”. In its
        resolution, the UNGA recognized that Yoga provides a holistic approach
        to health and well-being and wider dissemination of information about
        the benefits of practicing Yoga for the health of the world population.
        Yoga also brings harmony in all walks of life and thus, is known for
        disease prevention, health promotion and management of many
        lifestyle-related disorders. Accordingly the first International Day of
        Yoga (IDY) was celebrated worldwide on 21st June 2015, subsequently in
        2016 and 2017 with full enthusiasm. Millions of people participated in
        commemorating IDY throughout the world. This shows the importance and
        growing demand for Yoga. The Certification in YOGA holders are getting
        ample job opportunities both in public and private sectors. Apart from
        the said course Institute has started Yoga educational, therapy and
        training programs. It is also conducting many activities for promotion,
        propagation and research of Yoga.
      </p>
</div>
<div className="md:w-5/12 ps-3">
    <div className="relative w-full flex justify-center md:items-end h-[400px] md:h-[470px]  rounded-xl overflow-hidden shadow-lg">
              <Image
              className="h-[400px] md:h-[450px]"
              height={400}
              width={400}
                src="/images/directorImg.png"
                alt="Managing Director - Yespal Singh"
              />
              
            </div>
               <div className="mt-8">
            <p className="font-semibold text-lg text-gray-900">Yespal Singh</p>
            <p className="text-gray-500 italic mb-1">Managing Director</p>
            <p className="text-gray-500">director@Achariyagroup.com</p>
            <p className="text-gray-500">Achariya Technologies Private Limited</p>
          </div>
</div>
  </div>
      

      {/* PDF Download Buttons */}
      <div className="flex flex-wrap gap-4 justify-start mt-10">
        <button
          onClick={() => handleDownload(pdfLinks.guidance)}
          className="bg-primary text-white font-semibold cursor-pointer px-6 py-3 rounded-lg shadow-lg hover:bg-secondary transition flex items-center gap-2"
        >
          📄 MSPL Exam Guidance
        </button>
        <button
          onClick={() => handleDownload(pdfLinks.registration)}
          className="bg-primary text-white font-semibold cursor-pointer px-6 py-3 rounded-lg shadow-lg hover:bg-secondary transition flex items-center gap-2"
        >
          📄 Registration Process
        </button>
        <button
          onClick={() => handleDownload(pdfLinks.indianCandidate)}
          className="bg-primary text-white font-semibold cursor-pointer px-6 py-3 rounded-lg shadow-lg hover:bg-secondary transition flex items-center gap-2"
        >
          📄 Indian Candidate Info
        </button>
        <button
          onClick={() => handleDownload(pdfLinks.formCandidate)}
          className="bg-primary text-white font-semibold cursor-pointer px-6 py-3 rounded-lg shadow-lg hover:bg-secondary transition flex items-center gap-2"
        >
          📄 Foregin Candidate Info
        </button>
      </div>
       <SubHeading className="!text-start" content="More Information"  />

        <div className="flex flex-wrap justify-between items-center">
      
      <p>
        <strong>Website: </strong>
        <Link
          href="https://yogaexam.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          https://yogaexam.com
        </Link>
      </p>

      <p>
        <strong>Contact: </strong>
        <Link href="tel: +918930300615" className="text-blue-600 font-semibold hover:underline">
           +91 8930300615 , +91 9991777717
        </Link>
      </p>

      <p>
        <strong>Email: </strong>
        <Link
          href="mailto:yogacertificationbody@gmail.com"
          className="text-blue-600 hover:underline font-semibold"
        >
          yogacertificationbody@gmail.com
        </Link>
      </p>
    </div>
    </div>
  );
};

export default YogaCertificate;
