"use client";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import EMitraForms from "./EMitraForms";
import EMitraDownloads from "./EMitraDownloads";
import Link from "next/link";

export default function EMitra() {
const documents = [
  { name: "Aadhaar Card", highlight: true },
  { name: "PAN Card" },
  { name: "10th Marksheet" },
  { name: "Bank Passbook" },
  { name: "Police Verification" },
  { name: "Passport Size Photo" },
  { name: "Jan Aadhaar Card" },
  { name: "Mobile Number" },
  { name: "Email ID" },
  { name: "Electricity bill" },
  { name: "Address of e-Mitra Kiosk (where you want to register)" },
  { name: "Affidavit (₹50 Stamp Paper)" },
  { name: "ANNEXURE 15" },
];


  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* English Content */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            About e-Mitra
          </h2>
          <p className="text-gray-700 leading-relaxed">
            E-Mitra is an ambitious E-governance initiative of Government of
            Rajasthan (GoR) which is being implemented in all 41 Districts of
            the state using Public-Private Partnership (PPP) model for
            convenience and transparency to citizens in availing various
            services of the Government and Private Sectors under a single roof
            at their door steps using an e-platform.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            The services are delivered via counters known as{" "}
            <strong> e-Mitra Kiosks</strong> in rural
            and urban areas. Committed to quick and convenient delivery of
            citizen services, Government of Rajasthan set up the e-Mitra
            platform of e-Governance way back in the year 2004.
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            Currently, <strong>over 600+ G2C and B2C services</strong> are being
            provided through this platform across all rural & urban areas in 41
            districts of the State. These services include{" "}
            <em>
              utility bill payment, application & digitally signed certificate
              services, banking, tele-medicine, e-commerce services
            </em>
            , etc. and many facilities to meet citizen requirements are being
            added regularly by the government.
          </p>
        </div>

        {/* Hindi Content */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ई-मित्र (राजस्थान)
          </h2>
          <p className="text-gray-700 leading-relaxed">
            आमजन के हित एवं सुविधा हेतु राज्य सरकार द्वारा राजस्थान के प्रत्येक
            जिले में क्षेत्रीय स्तर पर ई-मित्र केन्द्रों की सुगम व्यवस्था की गई है
            जिसके माध्यम से नागरिक अनेक सरकारी एवं गैर सरकारी सुविधाएं जैसे ई
            मित्र केंद्र पर बिजली, पानी, मोबाइल के बिल जमा करवाने से लेकर जन्म और
            मृत्यु प्रमाण पत्र, मूल निवास प्रमाण पत्र, परीक्षाओं की फीस, विवाह
            प्रमाण पत्र, रेवेन्यू कोर्ट मैनेजमेन्ट, परीक्षा फीस जमा कराने, रोजगार
            के आवेदन जैसी सेवाओं का लाभ उठा सकते है।
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            इन सभी सुविधा का लाभ राज्य के लोग{" "}
            <strong>ऑनलाइन पोर्टल या अपने नज़दीकी ई मित्र केंद्र</strong> से प्राप्त
            कर सकते है। इसके लिए प्रदेश भर में{" "}
            <strong>19,000 से अधिक ई-मित्र केंद्र</strong> खोले गए हैं।
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            ई-मित्र पर दी जाने वाली सभी सर्विसेज के लिए सरकार ने एक शुल्क
            निर्धारित किया है और उसी शुल्क के अनुसार ई-मित्र संचालक द्वारा आम
            लोगो से लिया जाता है। अत: ई-मित्र जिन लोगो के शिक्षित होने के बाद भी
            रोजगार नही है वह अपना खुद का ई-मित्र केंद्र खोल सकते है और उपरोक्त
            सेवाएँ प्रदान करके एक अच्छी आमदनी अर्जित कर सकते है।
          </p>
        </div>

        {/* Key Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ई-मित्र राजस्थान उद्देश्य / विशेषताएं
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              राजस्थान के सभी सरकारी एवं गैर सरकारी विभागों से जुड़ी सेवाएं व
              योजनाओं को किसी एक कियोस्क के जरिए आम जनता को उपलब्ध करवाना।
            </li>
            <li>
              नागरिकों को एक छत के नीचे कुशल, पारदर्शी और सुविधाजनक तरीके से सेवाएं
              देना।
            </li>
            <li>
              पहले जहां अलग-अलग दफ्तरों में जाने की आवश्यकता थी, अब गांव-गांव तक
              सेवाएं उपलब्ध।
            </li>
            <li>
              <strong>EMitra Portal</strong> साल के 365 दिन सेवाएं प्रदान करता है।
            </li>
            <li>
              ई-मित्र सेवा केंद्र के लिए एक फिक्स स्थान (छोटा दुकान या कार्यालय)।
            </li>
            <li>
              यह सेवा केवल राजस्थान के 41 जिलों के लिए उपलब्ध है और केवल राजस्थान
              के स्थायी निवासी ही उपयोग कर सकते हैं।
            </li>
          </ul>
        </div>

        {/* Documents Section */}
       <div className="mt-12">
  <h2 className="text-2xl font-bold text-gray-800 mb-4">
    ई-मित्र खोलने के लिए आवश्यक दस्तावेज़
  </h2>
  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
    {documents.map((doc, index) => (
      <li
        key={index}
        className="flex items-center gap-2 text-base md:text-lg"
      >
        <FaRegCheckCircle className="text-primary w-4 h-4" />
        <span
          className={doc.highlight ? "text-primary font-semibold" : ""}
        >
          {doc.name}
        </span>
      </li>
    ))}
  </ul>
</div>
<div className="mt-3">
  <b>Note:</b> After uploading the document <b>ANNEXURE 4</b>
  
  <div className="mt-3">
    <p>You can download ANNEXURE 4 and ANNEXURE 15 by clicking the buttons below:</p>

    <div className="mt-3 flex gap-4">
      <Link target="blank" className="bg-primary px-3 py-1 text-white rounded-3xl" href="/pdf/annexure4.pdf">ANNEXURE 4</Link>
      <Link target="blank" className="bg-primary px-3 py-1 text-white rounded-3xl" href="/pdf/annexure15.pdf">ANNEXURE 15</Link>
    </div>
  </div>
</div>



        {/* download section */}
        <EMitraDownloads/>

        {/* Two Sub Images */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/b2b.jpg"
              alt="E-Mitra Services"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/e-metra-project.jpg"
              alt="E-Mitra Rajasthan Center"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <EMitraForms />

        {/* Hashtags */}
        <div className="mt-10 text-center text-gray-600 font-medium">
          #AchariyaTechnologies #eMitra #eGovernance #ConnectivityTillLastMile
          #HighestTransactiveKiosksLSP
        </div>
      </div>
    </section>
  );
}
