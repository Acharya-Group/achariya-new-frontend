import { FaRegFilePdf } from "react-icons/fa";

export default function EMitraDownloads() {
  const downloads = [
    {
      name: "Application Form For New E-Mitra KIOSK",
      link: "/pdf/Application Form For New e-Mitra Kiosk.pdf",
      highlight: true,
    },
    {
      name: "e-Mitra Services / Rate List",
      link: "/pdf/Ratelist New.pdf",
    },
    {
      name: "For - Lost Articles Report",
      link: "/pdfs/lost-articles-report.pdf",
    },
  ];

  return (
    <div className="mt-12 bg-white p-6 rounded-2xl shadow-md border">
      <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
        Download Application Form For e-Mitra KIOSK
      </h2>
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-3">
        To open new e-Mitra Kiosk in Rajasthan please download this new eMitra
        Application Form and send to{" "}
        <a
          href="mailto:info@Achariyagroup.com"
          className="text-primary font-medium"
        >
          info@Achariyagroup.com
        </a>{" "}
        with these documents.
      </p>
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-5">
        राजस्थान में ई-मित्र कीओस्क खोलने के लिए यहाँ दिए गए फॉर्म को डाउनलोड कर के
        और नीचे दिए गए डॉक्यूमेंट्स के साथ ईमेल करें :{" "}
        <a
          href="mailto:info@Achariyagroup.com"
          className="text-primary font-medium"
        >
          info@Achariyagroup.com
        </a>
      </p>

      <ul className="space-y-3">
        {downloads.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              download
              className={`flex items-center gap-2 text-sm md:text-base hover:underline ${
                item.highlight ? "text-primary font-semibold" : "text-gray-800"
              }`}
            >
              <FaRegFilePdf className="w-4 h-4 text-primary" />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
