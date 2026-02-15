import React from "react";
import { Data } from "./Data";

export default function Page() {
  return (
    <div className="container my-5">
      {/* Enhanced Header */}
      <div className="text-center mb-5">
        <h1 className="display-1 fw-bold text-primary mb-3">
          PFA
        </h1>
        <div className="mx-auto bg-primary" style={{ width: "100px", height: "4px" }}></div>
       
      </div>

      {/* Enhanced Table */}
      <div className="shadow-lg rounded-4 overflow-hidden">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="bg-primary bg-gradient">
              <tr>
                <th className="text-black fw-bold py-4 ps-4 fs-5" style={{ width: "15%" }}>
                  Sr No
                </th>
                <th className="text-black fw-bold py-4 fs-5">
                  Title
                </th>
              </tr>
            </thead>
            <tbody>
              {Data.map((item, index) => (
                <tr 
                  key={item.id}
                  className={index % 2 === 0 ? "table-light" : ""}
                >
                  <td className="ps-4 py-3 align-middle">
                    <span className="badge bg-primary bg-gradient rounded-pill px-3 py-2 fs-6">
                      {item.id}
                    </span>
                  </td>
                  <td className="py-3 align-middle">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none text-dark fw-semibold fs-6 d-inline-flex align-items-center gap-2"
                    >
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="text-primary"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                      </svg>
                      {item.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

     
    </div>
  );
}