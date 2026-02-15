import React from 'react';
import { Home } from 'lucide-react';

const MPDPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header - Clean design without image */}
    <div className="relative bg-blue-500 text-white py-16 shadow-lg">
  <div className="container mx-auto px-4 relative z-10">
    
    <h1 className="w-full text-center text-white text-2xl md:text-4xl font-bold">
      MANDATORY PUBLIC DISCLOSURE
    </h1>

  </div>
</div>


      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-8">

      {/* A: GENERAL INFORMATION */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 bg-blue-400 text-white p-3">
          A: GENERAL INFORMATION
        </h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-blue-400 text-white">
              <th className="border border-gray-400 p-3 text-left w-16">S.NO.</th>
              <th className="border border-gray-400 p-3 text-left">INFORMATION</th>
              <th className="border border-gray-400 p-3 text-left">DETAILS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">1</td>
              <td className="border border-gray-400 p-3">NAME OF THE SCHOOL</td>
              <td className="border border-gray-400 p-3">SNBP's International School Manjari</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">2</td>
              <td className="border border-gray-400 p-3">AFFILIATION NO.(IF APPLICABLE)</td>
              <td className="border border-gray-400 p-3">1130820</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">3</td>
              <td className="border border-gray-400 p-3">SCHOOL CODE (IF APPLICABLE)</td>
              <td className="border border-gray-400 p-3">30747</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">4</td>
              <td className="border border-gray-400 p-3">COMPLETE ADDRESS WITH PIN CODE</td>
              <td className="border border-gray-400 p-3">126/2A, NEAR SHIVKRISHNA MANGAL KARYALAYA, Z CORNER, 412307</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">5</td>
              <td className="border border-gray-400 p-3">PRINCIPAL NAME</td>
              <td className="border border-gray-400 p-3">-</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">6</td>
              <td className="border border-gray-400 p-3">PRINCIPAL QUALIFICATION</td>
              <td className="border border-gray-400 p-3">-</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">7</td>
              <td className="border border-gray-400 p-3">SCHOOL EMAIL ID</td>
              <td className="border border-gray-400 p-3">snbpkeshavnagar@gmail.com</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">8</td>
              <td className="border border-gray-400 p-3">CONTACT DETAILS (LANDLINE/MOBILE)</td>
              <td className="border border-gray-400 p-3">+91 9373914029 / 8956351916 / 8446534553</td>
            </tr>
          </tbody>
        </table>
      </section>

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
              <td className="border border-gray-400 p-3">COPIES OF AFFILIATION / UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">2</td>
              <td className="border border-gray-400 p-3">COPIES OF SOCIETIES / TRUST / COMPANY REGISTRATION / RENEWAL CERTIFICATE, AS APPLICABLE</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">3</td>
              <td className="border border-gray-400 p-3">COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">4</td>
              <td className="border border-gray-400 p-3">COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT'S RENEWAL IF APPLICABLE</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">5</td>
              <td className="border border-gray-400 p-3">COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">6</td>
              <td className="border border-gray-400 p-3">COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">7</td>
              <td className="border border-gray-400 p-3">COPY OF SELF CERTIFICATION BY SCHOOL</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">8</td>
              <td className="border border-gray-400 p-3">COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">9</td>
              <td className="border border-gray-400 p-3">COPY OF WATER TESTING REPORT</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">10</td>
              <td className="border border-gray-400 p-3">COPY OF CERTIFICATE OF LAND (Annex 'B')</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* C: RESULTS AND ACADEMICS */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 bg-blue-400 text-white p-3">
          C: RESULTS AND ACADEMICS
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
              <td className="border border-gray-400 p-3">FEE STRUCTURE OF THE SCHOOL</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">2</td>
              <td className="border border-gray-400 p-3">ANNUAL ACADEMIC CALENDER</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">3</td>
              <td className="border border-gray-400 p-3">LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">4</td>
              <td className="border border-gray-400 p-3">LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">5</td>
              <td className="border border-gray-400 p-3">LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABILITY</td>
              <td className="border border-gray-400 p-3 text-blue-600">View</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* D: STAFF (TEACHING) */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 bg-blue-400 text-white p-3">
          D: STAFF (TEACHING)
        </h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-blue-400 text-white">
              <th className="border border-gray-400 p-3 text-left w-16">S.NO.</th>
              <th className="border border-gray-400 p-3 text-left">INFORMATION</th>
              <th className="border border-gray-400 p-3 text-left">DETAILS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">1</td>
              <td className="border border-gray-400 p-3">TOTAL NO. OF TEACHERS</td>
              <td className="border border-gray-400 p-3">80</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">2</td>
              <td className="border border-gray-400 p-3">PRINCIPAL</td>
              <td className="border border-gray-400 p-3">01</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">3</td>
              <td className="border border-gray-400 p-3">PGT</td>
              <td className="border border-gray-400 p-3">24</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">4</td>
              <td className="border border-gray-400 p-3">TGT</td>
              <td className="border border-gray-400 p-3">46</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">5</td>
              <td className="border border-gray-400 p-3">PRT</td>
              <td className="border border-gray-400 p-3">10</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">6</td>
              <td className="border border-gray-400 p-3">TEACHERS SECTION RATIO</td>
              <td className="border border-gray-400 p-3">40:2</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">7</td>
              <td className="border border-gray-400 p-3">DETAILS OF SPECIAL EDUCATOR</td>
              <td className="border border-gray-400 p-3">None</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">8</td>
              <td className="border border-gray-400 p-3">LIBRARIAN</td>
              <td className="border border-gray-400 p-3">01</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">9</td>
              <td className="border border-gray-400 p-3">DETAILS OF COUNSELLOR AND WELLNESS TEACHER</td>
              <td className="border border-gray-400 p-3">01</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* E: SCHOOL INFRASTRUCTURE */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 bg-blue-400 text-white p-3">
          E: SCHOOL INFRASTRUCTURE
        </h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-blue-400 text-white">
              <th className="border border-gray-400 p-3 text-left w-16">S.NO.</th>
              <th className="border border-gray-400 p-3 text-left">INFORMATION</th>
              <th className="border border-gray-400 p-3 text-left">DETAILS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">1</td>
              <td className="border border-gray-400 p-3">TOTAL CAMPUS AREA IN THE SCHOOL (IN SQUARE MTR)</td>
              <td className="border border-gray-400 p-3">60 R (4000 Sqft)</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">2</td>
              <td className="border border-gray-400 p-3">NO. AND SIZE OF CLASSROOMS(IN SQ. MTR)</td>
              <td className="border border-gray-400 p-3">16 (560 Sq. Ft)</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">3</td>
              <td className="border border-gray-400 p-3">NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LAB (IN SQ. MTR)</td>
              <td className="border border-gray-400 p-3">Lab: 58.43 SQ.MTR / Comp: - / Library: 74.42 SQ.MTR (860 Sq. Ft)</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">4</td>
              <td className="border border-gray-400 p-3">INTERNET FACILITY(Y/N)</td>
              <td className="border border-gray-400 p-3">YES</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">5</td>
              <td className="border border-gray-400 p-3">NO. OF GIRLS TOILETS</td>
              <td className="border border-gray-400 p-3">16 (10 + 02 CWSN)</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">6</td>
              <td className="border border-gray-400 p-3">NO. OF BOYS TOILETS</td>
              <td className="border border-gray-400 p-3">16 (10 + 02 CWSN)</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">7</td>
              <td className="border border-gray-400 p-3">No of CWSN GIRLS TOILETS</td>
              <td className="border border-gray-400 p-3">02</td>
            </tr>
            <tr className="bg-white">
              <td className="border border-gray-400 p-3">8</td>
              <td className="border border-gray-400 p-3">No of CWSN BOYS TOILETS</td>
              <td className="border border-gray-400 p-3">02</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3">9</td>
              <td className="border border-gray-400 p-3">LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL</td>
              <td className="border border-gray-400 p-3">
                <a 
                  href="https://www.youtube.com/watch?v=SNBP's International School Manjri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* RESULT CLASS: X (Placeholder for future data) */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 bg-blue-400 text-white p-3">
          RESULT CLASS: X
        </h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-blue-400 text-white">
              <th className="border border-gray-400 p-3 text-left">S.NO.</th>
              <th className="border border-gray-400 p-3 text-left">YEAR</th>
              <th className="border border-gray-400 p-3 text-left">NO. OF REGISTERED STUDENT</th>
              <th className="border border-gray-400 p-3 text-left">NO OF STUDENTS PASSED</th>
              <th className="border border-gray-400 p-3 text-left">PASS PERCENTAGE</th>
              <th className="border border-gray-400 p-3 text-left">REMARK</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3"></td>
              <td className="border border-gray-400 p-3"></td>
              <td className="border border-gray-400 p-3"></td>
              <td className="border border-gray-400 p-3"></td>
              <td className="border border-gray-400 p-3"></td>
              <td className="border border-gray-400 p-3"></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* RESULT CLASS: XII (Placeholder for future data) */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 bg-blue-400 text-white p-3">
          RESULT CLASS: XII
        </h2>
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-blue-400 text-white">
              <th className="border border-gray-400 p-3 text-left">S.NO.</th>
              <th className="border border-gray-400 p-3 text-left">YEAR</th>
              <th className="border border-gray-400 p-3 text-left">NO. OF REGISTERED STUDENT</th>
              <th className="border border-gray-400 p-3 text-left">NO OF STUDENTS PASSED</th>
              <th className="border border-gray-400 p-3 text-left">PASS PERCENTAGE</th>
              <th className="border border-gray-400 p-3 text-left">REMARK</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-400 p-3"></td>
              <td className="border border-gray-400 p-3"></td>
              <td className="border border-gray-400 p-3"></td>
              <td className="border border-gray-400 p-3"></td>
              <td className="border border-gray-400 p-3"></td>
              <td className="border border-gray-400 p-3"></td>
            </tr>
          </tbody>
        </table>
      </section>
      </div>
    </div>
  );
};

export default MPDPage;