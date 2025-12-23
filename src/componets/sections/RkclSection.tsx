"use client"
import Image from 'next/image';
import { useState } from 'react';

const RkclSection = () => {
      const [activeTab, setActiveTab] = useState('eligibility');
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* RKCL Introduction */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="mb-6">
          <Image
            src="/images/7000+ It Gyan Kendra.png"
            alt="Bank BC"
            width={1200}
            height={304}
            
            className="w-[1200] h-[304] rounded-lg"
          />
        </div>
        
        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
          <i className="fa fa-angle-double-right mr-2"></i>
          About RKCL (Rajasthan Knowledge Corporation Ltd.)
        </h2>
        
        <p className="text-justify mb-4">
          RKCL - Rajasthan Knowledge Corporation Limited is a Public Limited Company established in Rajasthan as a joint venture of Government of Rajasthan; Maharashtra Knowledge Corporation Limited (MKCL), Pune; University of Rajasthan; Jaipur, Maharana Pratap University of Agriculture and Technology, Udaipur; Vardhaman Mahaveer Open University, Kota; Rajcomp Info Services Ltd. and Centre for e-governance.
        </p>
        
        <p className="text-justify">
          It was incorporated on 25th April 2008 under the Companies Act, 1956 having CIN U 80302 RJ 2008 PLC 026433
        </p>
        
        <blockquote className="border-l-4 border-blue-500 pl-4 my-6 italic bg-blue-50 p-4 rounded">
          <p className="font-semibold">KEY FEATURES</p>
        </blockquote>
      </div>

      {/* Our Company */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
          <i className="fa fa-angle-double-right mr-2"></i>
          Our Company
        </h2>
        
        <p className="text-justify">
          Achariya Technologies Pvt. Ltd. is a Service Provider(SP). A Service Provider is a business entity empaneled by Rajasthan Knowledge Corporation Limited (RKCL) to create and manage RKCL's Authorized Information Technology GyanKendra's (ITGKs) in the state of Rajasthan.
        </p>
        
        <p className="text-justify mt-4">
          Achariya Technologies tied up with RKCL on 1st April 2016.
        </p>
      </div>

      {/* Our Achievement */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
          <i className="fa fa-angle-double-right mr-2"></i>
          Our Achievement
        </h2>
        
        <ul className="list-disc pl-5 space-y-2">
          <li>251+ RKCL Centers</li>
          <li>1 Lakh+ Learner Enrolled</li>
        </ul>
      </div>

      {/* Project Summary */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
          <i className="fa fa-angle-double-right mr-2"></i>
          Project Summary
        </h2>
        
        <p className="font-semibold mb-2">Educational Project :-</p>
        
        <ul className="list-disc pl-8 space-y-2">
          <li>IT Literacy Program = RS-CIT (Rajasthan State Certificate in Information Technology)</li>
          <li>Financial Literacy Program = RS-CFA (Rajasthan State Certificate in Financial Accounting)</li>
          <li>Spoken English and Personality Development = RS-CEE (Rajasthan State Certificate in Employability Enhancement)</li>
        </ul>
      </div>

      <hr className="my-8 border-gray-300" />

      {/* RS-CIT Section */}
      <div className="mb-8">
        <div className="mb-6">
          <Image
            src="/images/project-summery.jpg"
            alt="Bank BC"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
            <i className="fa fa-angle-double-right mr-2"></i>
            RS-CIT Introduction
          </h2>
          
          <p className="text-justify">
            RS-CIT (Rajasthan State Certificate course in Information Technology) has been recognized by Dept. of Information Technology and Communication (DoIT&amp;C), Govt. of Rajasthan to propagate IT Literacy among the people of Rajasthan.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
            <i className="fa fa-angle-double-right mr-2"></i>
            Course Objective
          </h2>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <i className="fa fa-circle text-blue-500 mt-1 mr-2 text-xs"></i>
              <span><strong>Eligibility : </strong> Anyone who is literate &amp; has keen desire to learn Computer &amp; Information Technology</span>
            </li>
            <li className="flex items-start">
              <i className="fa fa-circle text-blue-500 mt-1 mr-2 text-xs"></i>
              <span><strong>Course Duration : </strong> 3 Months or 132 Hours (2 hours per day 1 Hour Practical and 1 Hour Theory)</span>
            </li>
            <li className="flex items-start">
              <i className="fa fa-circle text-blue-500 mt-1 mr-2 text-xs"></i>
              <span><strong>RS-CIT Course New Fees :</strong> Rs 3350 /- only per candidate however for eligible Govt. Employees, the course fees is Rs 2700/- per candidate only.</span>
            </li>
            <li className="flex items-start">
              <i className="fa fa-circle text-blue-500 mt-1 mr-2 text-xs"></i>
              <span><strong>Course Medium :</strong> Hindi &amp; English</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      {/* RS-CFA Section */}
      <div className="mb-8">
        <div className="mb-6">
          <Image
            src="/images/course-objective.jpg"
            alt="Bank BC"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
            <i className="fa fa-angle-double-right mr-2"></i>
            RS-CFA Introduction
          </h2>
          
          <p className="text-justify">
            <strong>RS-CFA (Rajasthan State Certificate in Financial Accounting)</strong> course will increase your knowledge about computer world as well as your Accounting knowledge for personal and professional life.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
            <i className="fa fa-angle-double-right mr-2"></i>
            Course Objective
          </h2>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <i className="fa fa-circle text-blue-500 mt-1 mr-2 text-xs"></i>
              <span>
                <strong>Eligibility :- </strong><br />
                &nbsp;&nbsp;12th Appearing/Pass (Minimum)<br />
                &nbsp;&nbsp;Basic knowledge of Accounts<br />
                &nbsp;&nbsp;Basic Knowledge about Computers or RS-CIT Pass
              </span>
            </li>
            <li className="flex items-start">
              <i className="fa fa-circle text-blue-500 mt-1 mr-2 text-xs"></i>
              <span><strong>Course Duration :</strong> 10 Weeks or 100 Hours (2 hours per day 1 Hour Practical and 1 Hour Theory)</span>
            </li>
            <li className="flex items-start">
              <i className="fa fa-circle text-blue-500 mt-1 mr-2 text-xs"></i>
              <span><strong>RS-CFA New Fees :</strong> Rs 6000/- only per candidate.</span>
            </li>
            <li className="flex items-start">
              <i className="fa fa-circle text-blue-500 mt-1 mr-2 text-xs"></i>
              <span><strong>Certification :</strong> Joint Certification by Tally and RKCL</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      {/* RS-CEE Section */}
      <div className="mb-8">
        <div className="mb-6">
          <Image
            src="/images/course-objective2.jpg"
            alt="Bank BC"
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
            <i className="fa fa-angle-double-right mr-2"></i>
            RS-CEE Introduction
          </h2>
          
          <p className="text-justify">
            <strong>RS-CEE (Rajasthan State Certificate Course in Employability Enhancement Skills)</strong>
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-primary mb-4 flex items-center">
            <i className="fa fa-angle-double-right mr-2"></i>
            Course Objective
          </h2>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <i className="fa fa-circle text-blue-500 mt-1 mr-2 text-xs"></i>
              <span><strong>Course Duration : </strong>3 Months or 120 Hours (100 Hours for English Language Skills and 20 Hours for Personality Development Skills)</span>
            </li>
            <li className="flex items-start">
              <i className="fa fa-circle text-blue-500 mt-1 mr-2 text-xs"></i>
              <span><strong>RS-CEE New Fees :</strong> Rs 4000/- only per candidate.</span>
            </li>
            <li className="flex items-start">
              <i className="fa fa-circle text-blue-500 mt-1 mr-2 text-xs"></i>
              <span><strong>Certification :</strong> Joint certification by RKCL and Education Partner</span>
            </li>
          </ul>
        </div>
      </div>

     <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Tabs for navigation */}
      <div className="flex flex-wrap border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'eligibility' ? 'text-primary border-b-2 border-[#7a0706]' : 'text-gray-500'}`}
          onClick={() => setActiveTab('eligibility')}
        >
          Eligibility Criteria
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'requirements' ? 'text-primary border-b-2 border-[#7a0706]' : 'text-gray-500'}`}
          onClick={() => setActiveTab('requirements')}
        >
          Requirements
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'process' ? 'text-primary border-b-2 border-[#7a0706]' : 'text-gray-500'}`}
          onClick={() => setActiveTab('process')}
        >
          Application Process
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'documents' ? 'text-primary border-b-2 border-[#7a0706]' : 'text-gray-500'}`}
          onClick={() => setActiveTab('documents')}
        >
          Documents
        </button>
      </div>

      {/* Eligibility Criteria Section */}
      {activeTab === 'eligibility' && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
            <i className="fa fa-angle-double-right mr-2"></i>
            New RKCL Center Eligibility Criteria
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">1) Legal Entity</h3>
            <p className="text-gray-700 mb-4">
              इनमे से कोई भी (Individual, Proprietorship, Partnership, Society, Private Limited Company, Public Limited Company, NGO, Trust, LLP etc.)
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">2) इन्फ्रास्ट्रक्चर आवश्यकताएँ</h3>
            <p className="text-gray-700 mb-4">
              ITGK की स्थापना के लिए न्यूनतम इंफ्रास्ट्रक्चर आवश्यकताएं निम्नानुसार है: -
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 mb-6">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-center font-medium">Asset प्रकार</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-medium">Specifications</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-medium">Minimum Criteria</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-center">Space/Area (क्षेत्रफल)</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">क्षेत्रफल (केवल कंप्यूटर लैब व लेक्चर रूम का)</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      न्यूनतम 600 sq. ft.-Urban स्थान पर<br />
                      न्यूनतम 300 sq. ft.-अन्य सभी स्थान पर
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-center" rowSpan={3}>ITGK स्थल पर सुविधाएं</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">कंप्यूटर लैब</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Urban स्थान पर न्यूनतम 10 कंप्यूटर एवं अन्य सभी स्थान पर न्यूनतम 5 कंप्यूटर<br />
                      कंप्यूटर लैपटॉप भी हो सकते हैं व डेस्कटॉप भी
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-center">थ्योरी/लेक्चर रूम</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      शहरी स्थानों में 10-सीटर और अन्य सभी स्थानों पर 5-सीटर<br />
                      उचित वेंटिलेशन और आवश्यक कूलिंग व्यवस्था (फैन, कूलर आर्द)<br />
                      पर्याप्त प्रकाश व्यवस्था<br />
                      कंप्यूटर स्थापित करने के लिए उपयुक्त फनीचर<br />
                      बैठने की आरामदायक व्यवस्था<br />
                      राइटिंग बोर्ड
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-center">रिसेप्शन</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      काउंसलिंग टेबल & 1 कुसी व्यवस्था<br />
                      नोर्टस/डिस्प्ले बोर्ड
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-center"></td>
                    <td className="border border-gray-300 px-4 py-3 text-center">Miscellaneous (अन्य विविध सुविधाए)</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      सुलभ शौचालय व्यवस्था<br />
                      पेयजल व्यवस्था
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-center">डेस्कटॉप</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Dual Core प्रोसेसर 1.6 GHz<br />
                      2 GB रैम<br />
                      80 GB हार्ड डिस्क<br />
                      इन्टरनेट पोटि (10/100/1000 MBPS)<br />
                      साउंड कार्ड<br />
                      कीबोडि और माउस (अनुशंर्सत ब्ांड: लॉर्जटेक, माइिोसॉफ्ट आर्द)<br />
                      हर PC के र्लए माइक (अनुशंसित ब्रांड: Phillips, Intex, iBall आर्द) के साथ हेडफोन ।<br />
                      न्यूनतम 14 इंच SVGA मॉर्नटर या उससे ऊपर (अनुशंसित ब्रांड: LG, Samsung आदि)<br />
                      एंटीवायरस (जैसे Sophos, Quick Heal, AVG आदि)
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      शहरी स्थानों पर न्यूनतम 10 कंप्यूटर और अन्य सभी स्थानों पर न्यूनतम 5 कंप्यूटर।<br />
                      *लैपटॉप बेहतर विकल्प हैं क्युकी :<br />
                      • कम बिजली की खपत<br />
                      • कम जगह चाहिए<br />
                      • संभालने में आसान<br />
                      • र्बजली की र्वफलता के मामले में न्यूनतम 3-4 घंटे का पावर बैकअप उपलब्ध<br />
                      • इनर्बल्ट वेब कैमरा<br />
                      • स्थानांतरित करने में आसानी<br />
                      • वाई-फाई कनेक्टिविटी<br />
                      • मोबाइल हॉटस्पॉट
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-center">LAN# (लोकल एरिया नेटवर्क)</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      10/100 MBPS नेटवकि क्टिच (सभी डेस्कटॉप को इस नेटवर्क स्विच से जोडा जाना चाहिए)<br />
                      (अनुशंसित ब्रांड : D-Link, Linksys आदि) या 100 MBPS Wi-Fi नेटवकि (अनुशंसित ब्रांड: Ruckus, Aruba, Cisco आर्द)<br />
                      इलेक्ट्रिकल और लैन वायररंग एक दूसरे के लंबवत होना चार्हए। यर्द वे एक दूसरे के समानांतर हैं, तो हस्तक्षेप से बचने के लिए उनके बीच 2 फीट की दूरी होनी चार्हए
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-center">इन्टरनेट कनेक्टिविटी</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      कम से कम 2 MBPS ब्रॉडबैंड कनेक्शन (वायद /वायरलेस)<br />
                      (सभी कंप्यूटर इंटरनेट कनेक्शन साझाकरण या प्रॉक्सी सर्वर का उपयोग करके इंटरनेट से कनेक्ट करने में सक्षम होना चार्हए)
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      Rural स्थान पर न्यूनतम 2 Mbps<br />
                      Urban स्थान पर न्यूनतम 4 Mbps
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-center">Peripherals (बाह्य उपकरण)</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      प्रिंटर-न्यूनतम 600 DPI रिजॉल्यूशन (अनुशंसित ब्रांड: HP, Canon, Epson आर्द)<br />
                      स्कैनर# - न्यूनतम 600 DPI रिजॉल्यूशन (अनुशंसित ब्रांड: HP, Kodak आर्द)<br />
                      वेब कैमरा-न्यूनतम 5 मेगापिक्सेल
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      1 प्रिंटर प्रति केंद्र<br />
                      1 वेब-कैम प्रति केंद्र
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-center">पॉवर बैक-अप#</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      UPS (अनुशंसित ब्रांड APC, Microtek, iBall आर्द)<br />
                      या<br />
                      बैटरी बैकअप के साथ इन्वर्टर (ब्रांड APC, Microtek आदि)
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">सभी कंप्यूटर हेतु बैक-अप</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Requirements Section */}
      {activeTab === 'requirements' && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
            <i className="fa fa-angle-double-right mr-2"></i>
            Requirement for ITGK Center (non-mandatory)
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">3) Faculty संख्या व शैक्षणिक योग्यता</h3>
            <p className="text-gray-700 mb-4">
              प्रत्येक ITGK में कम से कम 1 सक्रिय फुल-टाइम फैकल्टी होनी चार्हए। ज्ञान-केंद्र का Owner भी योग्यता होने की स्थिति में फैकल्टी के रूप में कार्य कर सकता है। फैकल्टी की न्युनतम शैक्षणिक योग्यता होनी चाहिए :
            </p>

            <div className="ml-6 mb-6">
              <p className="font-semibold text-gray-800 mb-2">i) किसी मान्यता प्राप्त विश्वविद्यालय से स्नातक (अनिवार्य),</p>
              <p className="mb-2">एवं</p>
              <p className="font-semibold text-gray-800 mb-4">
                ii) निम्नलिखित आई-टी प्रमाणपत्रों में से कोई एक (B.E./B.Tech/BCA/MCA/BSc IT/MSc IT या समकक्ष हेतु गैर-अनिवर्य)),
              </p>
            </div>

            <div className="ml-6 mb-6">
              <p className="mb-2">
                इलेक्ट्रॉनिक विभाग, भारत सरकार के नियत्रन्धीन DOEACC द्वारा संचालित "O" या उच्चतर लेवल प्रमाण-पत्र
              </p>
              <p className="mb-2">या</p>
              <p className="mb-2">
                व्यावसार्यक प्रशिक्षण स्कीम की राष्ट्रीय / राज्य परिषद के अधीन आयोजित कंप्यूटर ऑपरेटर एवं प्रोगार्मिंग सहायक (COPA) / डेटा प्रिपरेशन और कंप्यूटर सॉफ्टवेयर (DPCS) प्रमाण-पत्र
              </p>
              <p className="mb-2">या</p>
              <p className="mb-2">
                भारत में विधि द्वारा स्थापित किसी विश्वविद्यालय से या सरकार द्वारा मान्यता-प्राप्त र्कसी संस्था से कंप्यूटर विज्ञानं / कंप्यूटर एलीकेशन में डिप्लोमा
              </p>
              <p className="mb-2">या</p>
              <p className="mb-2">
                सरकार द्वारा मान्यता प्राप्त किसी पोलिटेक्निकल संस्था से कंप्यूटर विज्ञानं और अभीयांत्रिक में डिप्लोमा
              </p>
              <p className="mb-2">या</p>
              <p className="mb-4">
                वर्धमान महावीर खुला विश्वविद्यालय द्वारा राजस्थान नॉलेज कारपोरेशन लिमिटेड के नियन्त्रअधीन संचालित राजस्थान स्टेट सर्टिर्फकेट इन इनफामेशन टेक्नोलॉजी प्रमाण-पत्र (RS-CIT)
              </p>
              <p className="font-semibold">एवं</p>
            </div>

            <p className="text-gray-700 mb-6">
              3) ITGK के अनुमोदन होने के र्लए एक ऑनलाइन / ऑफलाइन टेस्ट् के आधार पर फैकल्टी मूल्यांकन होगा | फैकल्टी की शैक्षणिक योग्यता के दस्तावेजों का सत्यापन भी किया जाएगा ।
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">नियम व शर्ते;-</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>SP से अपेक्षा है की ऑनलाइन NCR आवेदन प्रक्रिया शुरू करने से पहले AO को सभी र्नयम और शर्ते स्पष्ट् रूप से बता दें।</li>
              <li>AO को RKCL द्वारा अंतिम अनुमोदन से पहले RKCL के किसी भी कोर्स से सम्बंधित किसी की तरह की माकेर्टंग गतिविधियों को करने की अनुमति नहीं है। यदि अंतिम अनुमोदन से पहले एक सत्यापित शिकायत प्राप्त होती है, तो RKCL आवेदन को अस्वीकार कर सकता है और RKCL कारवाई कर सकता है या जांच उपरांत SP पर वितीय जुर्माना भी लगा सकता है।</li>
              <li>ऑनलाइन आवेदन की अंतिम तिथि के भीतर भुगतान करना अनिवार्य है अन्यथा आवेदन को अस्वीकार किया जा सकता है।</li>
              <li>यदि कोई AO मापदंडों का अनुपालन नहीं कर पाता है या किसी भी तरह से पात्र नहीं पाया जाता है, तो AO को RKCL द्वारा अस्वीकार किया जा सकता है। यदि आवेदन को RKCL द्वारा ख़ारिज किया जाता है, तो आवेदन शुल्क में से 1000/- रु. प्रोससिंग शुल्क और GST शुल्क को छोडकर शेष भुगतान आवेदन में AO द्वारा वर्णित बैंक खाते में वापस कर दिया जाएगा ।</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">ITGK Renewal Process</h3>
            <p className="text-gray-700 mb-4">
              ITGK का हर साल रिन्यूअल किया जाएगा ।TGK लॉगिन बनाने की तिथि / ITGK रिन्यूअल की तिथि से हर 12महीने में रिन्यूअल होगा।
            </p>
            <p className="text-gray-700 mb-4">
              ITGK को रिन्यूअल के लिए पात्र होने के लिए RFP / अनुबंध में उल्लेखित SLAs का अनुपालन करना होगा
            </p>
            <p className="text-gray-700 mb-4 italic">
              (नोट: केवल ग्राम-पंचायत स्तर के ITGK के लिए ही 50 प्रवेश का SLA लागू होता है, इसमें वह स्थान सम्मिलित नहीं होंगे जहां पंचायत समिति मुख्यालय या तहसील मुख्यालय में GP स्थित है।)
            </p>
            <p className="text-gray-700 mb-4">
              पात्र ITGK को मान्यता की समाप्ति की तारीख के 3 महीने के भीतर ITGK का रिन्यूअल करना होगा जिसके बाद ITGK का नवीनीकरण नहीं होगा और नए केंद्र पंजीकरण के लिए नए सिरे से आवेदन जमा करना होगा। हालाँकि, ITGK लॉगिन को 12 महीने बाद ही निष्क्रिय किया जाएगा।
            </p>
            <p className="text-gray-700 font-semibold">RKCL के पास अधिकार है -</p>
            <p className="text-gray-700 ml-4">a) किसी भी समय नए केंद्र पंजीकरण (NCR) प्रक्रिया के नियमों और शर्तों को संशोधित करने का;</p>
            <p className="text-gray-700 ml-4">b) किसी भी आवेदक को किसी भी कारण से / कारण बताए बिना, मान्यता देने / अस्वीकार करने का।</p>
          </div>
        </div>
      )}

      {/* Application Process Section */}
      {activeTab === 'process' && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center">
            <i className="fa fa-angle-double-right mr-2"></i>
            NCR Application Form
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">1) चरण I –</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>विधिवत भरा और हस्ताक्षरित आवेदन पत्र</li>
              <li>प्रस्तावित स्थान पर नवीनतम भुगतान की गई बिजली/टेलीफोन बिल कॉपी या रेंट एग्रीमेंट(वर्गफुट में कुल क्षेत्रफल वर्णित होना चाहिए)।</li>
              <li>रद्द किया गया चेक</li>
              <li>
                पासपोर्ट साइज फोटोग्राफ और प्रोपराइटर/सभी पार्टनर/सभी निदेशक/एमडी/कार्यकारी निकाय के सभी सदस्य का पहचान-पत्र (एड्रेस प्रूफ वाला) (अंतिम पृष्ठ पर फोटोग्राफ भी चिपकाएँ)
                <br />PAN कार्ड हेतु (जो भी लागू हो टिक करें)
                <ul className="list-circle pl-6 mt-2">
                  <li>Proprietorship —व्यक्तिगत आवेदक का PAN कार्ड</li>
                  <li>Partnership - साझेदारी फर्म का PAN कार्ड</li>
                  <li>Trust - ट्रस्ट का PAN कार्ड</li>
                  <li>Society — सोसाइटी का PAN कार्ड</li>
                  <li>Cooperative Society — सहकारी समिति का PAN कार्ड</li>
                  <li>Public & Private Ltd. Co. — पब्लिक/प्राइवेट लिमिटेड कंपनी का PAN कार्ड अन्य- PAN कार्ड</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">2) चरण II – सेवा प्रदाता (Service Provider) द्वारा साइट निरीक्षण के समय</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>प्रस्तावित स्थान के नवीनतम भुगतान किये गये बिजली/टेलीफोन बिल की प्रतिलिपि के साथ संपत्ति दस्तावेज (यदि स्वामित्व खुद का हो)|</li>
              <li>यदि प्रस्तावित स्थान किराए पर हो तो उसका रेंट एग्रीमेंट (वर्गफुट में कुल क्षेत्रफल का स्पष्ट उल्लेख होना चाहिए)व साथ में प्रस्तावित स्थान के नवीनतम भुगतान किए गए बिजली बिल की प्रतिलिपि | फर्म हेतु दस्तावेज (जो भी लागू हो टिक करें)
                <ul className="list-circle pl-6 mt-2">
                  <li>Proprietorship: राजस्थान दुकान व स्थापना अधिनियम या बैंक प्रमाण-पत्र</li>
                  <li>Partnership: राजस्थान दुकान व स्थापना अधिनियम और साझेदारी डीड या बैंक प्रमाण-पत्र</li>
                  <li>Trust: पंजीकरण प्रमाण पत्र, ट्रस्ट डीड और कार्यकारी बॉडी की सूची</li>
                  <li>Society: पंजीकरण प्रमाण पत्र, नियम व विनियम और कार्यकारी बॉडी की सूची</li>
                  <li>Cooperative Society: पंजीकरण प्रमाण पत्र, नियम व विनियम और कार्यकारी बॉडी की सूची</li>
                  <li>Public & Private Ltd. Co. Incorporation प्रमाण-पत्र, Memorandum & Article of Association & प्रबंध निदेशक सहित सभी निदेशकों की सूची</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">3) चरण III – DPO (जिला परियोजना अधिकारी) द्वारा AO स्थल निरीक्षण के समय</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>प्रस्तावित स्थान के लिए नवीनतम भुगतान किये गये बिजली/टेलीफोन बिल की प्रतिलिपि के साथ संपत्ति दस्तावेज (यदि स्वामित्व खुद का हो)</li>
              <li>प्रस्तावित स्थान का रेंट एग्रीमेंट (वर्गफुट में कुल स्थान का स्पष्ट उल्लेख करना चाहिए) साथ में प्रस्तावित स्थान के नवीनतम भुगतान किए गए बिजली बिल की प्रतिलिपि (यदि किराए पर हो तो)</li>
              <li>संस्था प्रमुख का पहचान पत्र (आधार कार्ड या ड्राइविंग लाइसेंस या पैन कार्ड)</li>
              <li>फैकल्टी का पहचान पत्र (आधार कार्ड या ड्राइविंग लाइसेंस या पैन कार्ड)</li>
              <li>फैकल्टी के शैक्षणिक योग्यताओं के प्रमाण-पत्र (स्नातक प्रमाणपत्र, आदि)</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">NCR आवेदन फार्म</h3>
            <p className="text-gray-700 mb-4">
              Click Here to <a href="https://Achariyagroup.in/downloads/rkcl_form.pdf" download className="text-primary hover:underline">Download Form</a>
            </p>
          </div>
        </div>
      )}

      {activeTab === 'documents' && (
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
              <span className="bg-blue-100 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-2">1</span>
              चरण I - आवेदन के साथ जमा करने हेतु
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 ml-8">
              <li>विधिवत भरा और हस्ताक्षरित आवेदन पत्र</li>
              <li>प्रस्तावित स्थान पर नवीनतम भुगतान की गई बिजली/टेलीफोन बिल कॉपी या रेंट एग्रीमेंट (वर्गफुट में कुल क्षेत्रफल वर्णित होना चाहिए)</li>
              <li>रद्द किया गया चेक</li>
              <li>
                पासपोर्ट साइज फोटोग्राफ और प्रोपराइटर/सभी पार्टनर/सभी निदेशक/एमडी/कार्यकारी निकाय के सभी सदस्य का पहचान-पत्र (एड्रेस प्रूफ वाला) (अंतिम पृष्ठ पर फोटोग्राफ भी चिपकाएँ)
                <div className="mt-2 ml-4 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">PAN कार्ड हेतु (जो भी लागू हो टिक करें)</h4>
                  <ul className="list-circle pl-6 space-y-1">
                    <li><span className="font-medium">Proprietorship</span> - व्यक्तिगत आवेदक का PAN कार्ड</li>
                    <li><span className="font-medium">Partnership</span> - साझेदारी फर्म का PAN कार्ड</li>
                    <li><span className="font-medium">Trust</span> - ट्रस्ट का PAN कार्ड</li>
                    <li><span className="font-medium">Society</span> - सोसाइटी का PAN कार्ड</li>
                    <li><span className="font-medium">Cooperative Society</span> - सहकारी समिति का PAN कार्ड</li>
                    <li><span className="font-medium">Public & Private Ltd.Co.</span> - पब्लिक/प्राइवेट लिमिटेड कंपनी का PAN कार्ड</li>
                    <li><span className="font-medium">अन्य</span> - PAN कार्ड</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
              <span className="bg-blue-100 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-2">2</span>
              चरण II - सेवा प्रदाता (Service Provider) द्वारा साइट निरीक्षण के समय
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 ml-8">
              <li>प्रस्तावित स्थान के नवीनतम भुगतान किये गये बिजली/टेलीफोन बिल की प्रतिलिपि के साथ संपत्ति दस्तावेज (यदि स्वामित्व खुद का हो)</li>
              <li>यदि प्रस्तावित स्थान किराए पर हो तो उसका रेंट एग्रीमेंट (वर्गफुट में कुल क्षेत्रफल का स्पष्ट उल्लेख होना चाहिए) व साथ में प्रस्तावित स्थान के नवीनतम भुगतान किए गए बिजली बिल की प्रतिलिपि</li>
              <li>
                फर्म हेतु दस्तावेज (जो भी लागू हो टिक करें)
                <div className="mt-2 ml-4 p-4 bg-gray-50 rounded-lg">
                  <ul className="list-circle pl-6 space-y-2">
                    <li><span className="font-medium">Proprietorship:</span> राजस्थान दुकान व स्थापना अधिनियम या बैंक प्रमाण-पत्र</li>
                    <li><span className="font-medium">Partnership:</span> राजस्थान दुकान व स्थापना अधिनियम और साझेदारी डीड या बैंक प्रमाण-पत्र</li>
                    <li><span className="font-medium">Trust:</span> पंजीकरण प्रमाण पत्र, ट्रस्ट डीड और कार्यकारी बॉडी की सूची</li>
                    <li><span className="font-medium">Society:</span> पंजीकरण प्रमाण पत्र, नियम व विनियम और कार्यकारी बॉडी की सूची</li>
                    <li><span className="font-medium">Cooperative Society:</span> पंजीकरण प्रमाण पत्र, नियम व विनियम और कार्यकारी बॉडी की सूची</li>
                    <li><span className="font-medium">Public & Private Ltd. Co.:</span> Incorporation प्रमाण-पत्र, Memorandum & Article of Association & प्रबंध निदेशक सहित सभी निदेशकों की सूची</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
              <span className="bg-blue-100 text-primary rounded-full w-8 h-8 flex items-center justify-center mr-2">3</span>
              चरण III - DPO (जिला परियोजना अधिकारी) द्वारा AC स्थल निरीक्षण के समय
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700 ml-8">
              <li>प्रस्तावित स्थान के लिए नवीनतम भुगतान किये गये बिजली/टेलीफोन बिल की प्रतिलिपि के साथ संपत्ति दस्तावेज (यदि स्वामित्व खुद का हो)</li>
              <li>प्रस्तावित स्थान का रेंट एग्रीमेंट (वर्गफुट में कुल स्थान का स्पष्ट उल्लेख करना चाहिए) साथ में प्रस्तावित स्थान के नवीनतम भुगतान किए गए बिजली बिल की प्रतिलिपि (यदि किराए पर हो तो)</li>
              <li>संस्था प्रमुख का पहचान पत्र (आधार कार्ड या ड्राइविंग लाइसेंस या पैन कार्ड)</li>
              <li>फैकल्टी का पहचान पत्र (आधार कार्ड या ड्राइविंग लाइसेंस या पैन कार्ड)</li>
              <li>फैकल्टी के शैक्षणिक योग्यताओं के प्रमाण-पत्र (स्नातक प्रमाणपत्र, आदि)</li>
            </ul>
          </div>
        </div>
      )}
    </div>
    <div className='bg-primary py-2 text-center text-white font-semibold rounded'>RKCL'S RS-CIT (ITGK)CENTER HELPLINE NO : <a href='tel:890190 3333'>890190 3333</a></div>
    </div>
  );
};

export default RkclSection;