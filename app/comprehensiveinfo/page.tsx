import React from 'react';

const ComprehensiveInfoPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative bg-blue-500 text-white py-16 shadow-lg">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="w-full text-center text-white text-2xl md:text-4xl font-bold">
            Comprehensive Information
          </h1>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8">
        
        {/* B: DOCUMENTS AND INFORMATION */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 bg-blue-400 text-white p-3">
            B: DOCUMENTS AND INFORMATION
          </h2>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-blue-400 text-white">
                <th className="border border-gray-400 p-3 text-left w-16">S.NO.</th>
                <th className="border border-gray-400 p-3 text-left">DOCUMENTS/INFORMATION</th>
                <th className="border border-gray-400 p-3 text-left">DETAILS</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 p-3">1</td>
                <td className="border border-gray-400 p-3">SELF – AFFIDAVIT OF SCHOOL</td>
                <td className="border border-gray-400 p-3">
                  <a 
                    href="/pdfs/self-affidavit.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-400 p-3">2</td>
                <td className="border border-gray-400 p-3">ANNUAL REPORT</td>
                <td className="border border-gray-400 p-3">
                  <a 
                    href="/pdfs/annual-report.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 p-3">3</td>
                <td className="border border-gray-400 p-3">PHYSICAL INFRASTRUCTURE</td>
                <td className="border border-gray-400 p-3">
                  <a 
                    href="/pdfs/physical-infrastructure.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-400 p-3">4</td>
                <td className="border border-gray-400 p-3">PROTECTION OF CHILDREN FROM SEXUAL OFFENCES (POSCO) COMMITTEE</td>
                <td className="border border-gray-400 p-3">
                  <a 
                    href="/pdfs/posco-committee.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 p-3">5</td>
                <td className="border border-gray-400 p-3">SCHOOL TRANSPORT COMMITTEE</td>
                <td className="border border-gray-400 p-3">-</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-400 p-3">6</td>
                <td className="border border-gray-400 p-3">DISASTER MANAGEMENT COMMITTEE</td>
                <td className="border border-gray-400 p-3">
                  <a 
                    href="/pdfs/disaster-management-committee.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 p-3">7</td>
                <td className="border border-gray-400 p-3">GRIEVANCE REDRESSAL COMMITTEE</td>
                <td className="border border-gray-400 p-3">
                  <a 
                    href="/pdfs/grievance-redressal-committee.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-400 p-3">8</td>
                <td className="border border-gray-400 p-3">PREVENTION OF SEXUAL HARASSMENT (POSH) & I C COMMITTEE</td>
                <td className="border border-gray-400 p-3">
                  <a 
                    href="/pdfs/posh-committee.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 p-3">9</td>
                <td className="border border-gray-400 p-3">NO HOMEWORK POLICY FOR CLASS I AND II</td>
                <td className="border border-gray-400 p-3">
                  <a 
                    href="/pdfs/no-homework-policy.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-400 p-3">10</td>
                <td className="border border-gray-400 p-3">PUBLIC MANDATORY DISCLOSURE</td>
                <td className="border border-gray-400 p-3">-</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 p-3">11</td>
                <td className="border border-gray-400 p-3">STAFF STATEMENT</td>
                <td className="border border-gray-400 p-3">
                  <a 
                    href="/pdfs/staff-statement.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-400 p-3">12</td>
                <td className="border border-gray-400 p-3">GRADE-WISE STUDENTS STRENGTH</td>
                <td className="border border-gray-400 p-3">
                  <a 
                    href="/pdfs/grade-wise-students-strength.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 p-3">13</td>
                <td className="border border-gray-400 p-3">ANNUAL PLANNER</td>
                <td className="border border-gray-400 p-3">
                  <a 
                    href="/pdfs/annual-planner.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-400 p-3">14</td>
                <td className="border border-gray-400 p-3">ACADEMIC BOOKLIST</td>
                <td className="border border-gray-400 p-3">
                  <a 
                    href="/pdfs/academic-booklist.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border border-gray-400 p-3">15</td>
                <td className="border border-gray-400 p-3">TRANSFER CERTIFICATE</td>
                <td className="border border-gray-400 p-3">-</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-gray-400 p-3">16</td>
                <td className="border border-gray-400 p-3">SCHOOL SAFETY COMMITTEE (SSC)</td>
                <td className="border border-gray-400 p-3">
                  <a 
                    href="/pdfs/school-safety-committee.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline font-medium"
                  >
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

      </div>
    </div>
  );
};

export default ComprehensiveInfoPage;