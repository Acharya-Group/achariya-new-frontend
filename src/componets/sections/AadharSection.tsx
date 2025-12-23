import React from "react";
import SubHeading from "../ui/SubHeading";
import Link from "next/link";
import Image from "next/image";

const AadharSection = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-10">
          <div className="border-b pb-6">
            <Image
            height={350}  width={992}
              src="/images/aadhaarCenter.jpg"
              alt="Aadhaar card"
              className="rounded-lg mb-4 w-full object-cover"
            />
            <SubHeading className="text-start" content="Our Company" />
            <p className="text-gray-700 leading-relaxed">
              Achariya Technologies Pvt. Ltd. is a leading organization working
              in the field of e-Governance, Financial Inclusion, Information and
              Communication Technology, Manpower, Outsourcing, Skilling and
              Servicing of Aadhaar which is authorized by Enrollment Agency Raj
              Com Pvt Ltd. Under Department of information technology. Under
              which the service of Aadhaar center is provided at private and
              government place.
            </p>
          </div>

          <div className="border-b pb-6">
            <SubHeading className="text-start" content="About Aadhaar" />
            <p className="text-gray-700 leading-relaxed">
              Aadhaar number is a 12-digit random number issued by the UIDAI
              (“Authority”) to the residents of India after satisfying the
              verification process laid down by the Authority. Any individual,
              irrespective of age and gender, who is a resident of India, may
              voluntarily enroll to obtain Aadhaar number. Person willing to
              enroll has to provide minimal demographic and biometric
              information during the enrolment process which is totally free of
              cost. An individual needs to enroll for Aadhaar only once and
              after de-duplication only one Aadhaar shall be generated, as the
              uniqueness is achieved through the process of demographic and
              biometric de-duplication.
            </p>
          </div>

          <div className="border-b pb-6">
              <SubHeading
                className="text-start"
                content="Claim Format for Operator/Supervisor (Activation Process for Aadhaar Operator ID)"
              />
            <Image height={350}  width={992}

             src="/images/document-aadhar.jpg"
              alt="Aadhaar card"
              className="rounded-lg mb-4 w-full object-cover"
            />
            <p className="text-gray-700 leading-relaxed">
              According to the order of the Government of Rajasthan, to become
              an Aadhaar operator, now Aadhaar will be e-Mitra in the government
              premises, only then the Aadhaar center will be available and it is
              necessary to have Rajnet in the premises.
            </p>
            <Link
              target="_blank"
              href="https://myaadhaar.uidai.gov.in/reprint"
              className="text-primary font-semibold hover:underline"
            >
              Aadhaar Reprint → https://myaadhaar.uidai.gov.in/reprint
            </Link>
          </div>
        </div>

        {/* Sidebar */}
     <aside className="space-y-6 self-start sticky top-20">
  {/* Categories Section */}
  <div className="p-5 border rounded-xl bg-gray-50 shadow-sm">
    <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
    <ul className="space-y-2 text-sm text-primary">
      <li>
        <a href="/e-mitra" className="hover:underline">e-Mitra</a>
      </li>
      <li>
        <a href="/kiosk-banking" className="hover:underline">Kiosk Banking</a>
      </li>
      <li>
        <a href="/aadhar" className="hover:underline">Aadhaar</a>
      </li>
      <li>
        <a href="/fastag" className="hover:underline">Fastag</a>
      </li>
      <li>
        <a href="/school-easy" className="hover:underline">School Easy</a>
      </li>
      <li>
        <a href="/rkcl" className="hover:underline">RKCL</a>
      </li>
    </ul>
  </div>
</aside>

      </div>
    </div>
  );
};

export default AadharSection;
