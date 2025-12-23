import { bankCommissions } from "@/lib/utils";
import React from "react";

const BankBcCommission = () => {
 

  const sections = [
    {
      title: "Retail Loans",
      rows: [
       {
     "no": 45,
    "product": "Home Loan & Mortgage Loans",
    "commission": "0.20% of the loan amount on conversion of leads. Take over Loans: Additional payout of 0.04% of loan amount. Payout to be paid after minimum disbursement of 20% of the sanctioned limit."
   },
        {
          no: 46,
          product: (
            <>
              Education Loan
            </>
          ),
          commission: "0.20% of the loan amount on conversion of leads*,* Payout to be paid after minimum disbursement of 20% of the sanctioned limit",
        },
        {
          no: 47,
          product: "Auto Loans (4 Wheelers & 2 Wheelers)",
          commission: "@ 0.20% of loan amount (disbursed amount) on Car (New and Pre owned) & Two Wheelers",
        },
      ],
    },
    {
      title: "Credit Card",
      rows: [
        { no: 48, product: "Commission on Application Login", commission: "Rs. 24/-" },
        { no: "", product: "Commission on Credit Card Approval", commission: "Rs. 24/-" },
        
        {
          no: "",
          product:
            "Commission on Activation of Credit Card (to be paidin next quarter basis Rs.20 90 days activation period)",
          commission: "Rs. 20/-",
        },
        { no: "", product: "Hence Gross Total Commission", commission: "Rs. 64/-" },
      ],
      footer: "Add on card (i.e. credit card applied for a separate family member with the same application form) to be counted as additional application and will be eligible for incentive as above. ** Existing BOB credit card holders will not be considered as Lead and hence will not be covered under commission",
    },
    {
      title: "Current Account",
      rows: [
        {
          no: 49,
          product:
            "Current Account with monthly minimum balance as applicable to Rural/Semi-Urban/Urban/Metro",
          commission: "Rs. 40/-",
        },
        {
          no: "",
          product:
            "Quarterly average balance of Rs.2.0 lacs with digital transaction i.e. Mobile Banking, Net Banking, Internet Banking",
          commission: "Rs. 160/-",
        },
        {
          no: "",
          product:
            "Quarterly average balance of Rs.5.0 lacs with digital transaction i.e. Mobile Banking, Net Banking, Internet Banking",
          commission: "Rs. 400/-",
        },
      ],
    },
    {
      title: "Mutual Funds",
      rows: [
        {
          no: 50,
          product:
            "Commission for sourcing of Mutual Fund leads shall be advised separately",
          commission: "—",
        },
      ],
    },
    {
      title: "Agriculture Gold Loan",
      rows: [
        {
          no: 51,
          product: (
            <>
              Gold Loan
            </>
          ),
          commission: "0.08% of loan amount subject to minimum of ~- 80 & maximum of~- 800 per account",
        },
        { no: 52, product: "BKCC Lead Generation", commission: "0.40% of loan amount subject to a minimum of~- 20/- and maximum ~ 4,000/-. The incentive shall be" },
      ],
    },
    {
      title: "Agriculture Loans: Tractor / Four Wheeler and Two Wheeler finance to Farmers",
      rows: [
        {
          no: 53,
          product: (
            <div className="overflow-x-auto">
              <table className="min-w-[300px] border border-black text-xs">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-black px-2 py-1">Product & Scheme Codes in Finacle</th>
                    <th className="border border-black px-2 py-1">No. of Cases disbursed in the month</th>
                    <th className="border border-black px-2 py-1">Incentive</th>
                    <th className="border border-black px-2 py-1">Amount to be paid on disbursement (50% of Incentive)</th>
                    <th className="border border-black px-2 py-1">On submission of PDD within 60 days of disbursement (10% of Incentive)</th>
                    <th className="border border-black px-2 py-1">After completion of 1 year if account remains standard (40% of Incentive)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black px-2 py-1" rowSpan={3}>Tractors (LA-434, LA-435, LA-436)</td>
                    <td className="border border-black px-2 py-1">1–2</td>
                    <td className="border border-black px-2 py-1">2400</td>
                    <td className="border border-black px-2 py-1">1,200</td>
                    <td className="border border-black px-2 py-1">240</td>
                    <td className="border border-black px-2 py-1">960</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1">3–4</td>
                    <td className="border border-black px-2 py-1">3200</td>
                    <td className="border border-black px-2 py-1">1600</td>
                    <td className="border border-black px-2 py-1">320</td>
                    <td className="border border-black px-2 py-1">1,280</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1">5 & above</td>
                    <td className="border border-black px-2 py-1">1200</td>
                    <td className="border border-black px-2 py-1">2,000</td>
                    <td className="border border-black px-2 py-1">400</td>
                    <td className="border border-black px-2 py-1">1600</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1">LA-402</td>
                    <td className="border border-black px-2 py-1">NA</td>
                    <td className="border border-black px-2 py-1">1,200</td>
                    <td className="border border-black px-2 py-1">750</td>
                    <td className="border border-black px-2 py-1">150</td>
                    <td className="border border-black px-2 py-1">600</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1">Four Wheeler (LA-427)</td>
                    <td className="border border-black px-2 py-1">NA</td>
                    <td className="border border-black px-2 py-1">1,200</td>
                    <td className="border border-black px-2 py-1">600</td>
                    <td className="border border-black px-2 py-1">120</td>
                    <td className="border border-black px-2 py-1">480</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-2 py-1">Two Wheeler (LA-416)</td>
                    <td className="border border-black px-2 py-1">NA</td>
                    <td className="border border-black px-2 py-1">400</td>
                    <td className="border border-black px-2 py-1">320 (64% of incentive)</td>
                    <td className="border border-black px-2 py-1">100 (16% of incentive)</td>
                    <td className="border border-black px-2 py-1">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
          commission: null,
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Bank BC Commission Chart</h2>

      {/* Commissions Table */}
      <div className="overflow-x-auto shadow-lg  mb-8">
        <table className="min-w-full border border-gray-200 rounded-lg text-sm">
          <thead className="bg-primary text-white uppercase text-sm">
            <tr>
              <th className="px-4 py-2 border font-bold">Sl. No.</th>
              <th className="px-4 py-2 border font-bold">Products Available at BC Point</th>
              <th className="px-4 py-2 border font-bold">Commission</th>
            </tr>
          </thead>
        <tbody>
  {bankCommissions.map((row, index) => (
    <tr key={index} className="hover:bg-blue-50 transition duration-200">
      <td className="px-4 py-2 border text-center">{index + 1}</td>
      <td className="px-4 py-2 border">{row.product}</td>
      <td className="px-4 py-2 border">
        {/* If commission is a string (old structure) */}
        {typeof row.commission === 'string' ? (
          <div dangerouslySetInnerHTML={{ __html: row.commission }} />
        ) : (
          /* If commission is an object (new structured format) */
          <div className="space-y-2">
            <p className="font-semibold">{row.commission.description}</p>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {row.commission.rules?.map((rule, ruleIndex) => (
                <li key={ruleIndex}>{rule}</li>
              ))}
            </ul>
            <div className="mt-2">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-1">Average Balance Range</th>
                    <th className="border border-gray-300 px-2 py-1">Commission</th>
                  </tr>
                </thead>
                <tbody>
                  {row.commission.tiers?.map((tier, tierIndex) => (
                    <tr key={tierIndex}>
                      <td className="border border-gray-300 px-2 py-1">{tier.range}</td>
                      <td className="border border-gray-300 px-2 py-1 text-right">₹{tier.commission.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>

      {/* Sections */}
      <div>
        {sections.map((section, sIndex) => (
          <div key={sIndex} className="mb-6">
            <h3 className="font-bold text-center bg-primary text-white py-2 border border-black">
              {section.title}
            </h3>

            {/* Only wrap last section's table for horizontal scroll */}
            {section.title === "Agriculture Loans: Tractor / Four Wheeler and Two Wheeler finance to Farmers" ? (
              <div className="overflow-x-auto">
                <table className="w-full border border-black text-sm text-left mt-2">
                  <tbody>
                    {section.rows.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-100 transition-colors">
                        <td className="border border-black px-3 py-2 text-center">{row.no}</td>
                        <td className="border border-black px-3 py-2">{row.product}</td>
                        <td className="border border-black px-3 py-2">{row.commission}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <table className="w-full border border-black text-sm text-left mt-2">
                <tbody>
                  {section.rows.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-100 transition-colors">
                      <td className="border border-black px-3 py-2 text-center">{row.no}</td>
                      <td className="border border-black px-3 py-2">{row.product}</td>
                      <td className="border border-black px-3 py-2">{row.commission}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {section.footer && (
              <p className="text-right font-semibold mt-2">{section.footer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BankBcCommission;
