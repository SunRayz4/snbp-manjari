import React from "react";

export default function Page() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 m-5">
      <div
        className="card text-center shadow-lg p-5 border-primary"
        style={{
          minWidth: "400px",
          borderWidth: "3px",
          borderRadius: "20px",
          background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        }}
      >
        <h1 className="fw-bold display-4 text-primary">
          Content Coming Soon
        </h1>
      </div>
    </div>
  );
}
