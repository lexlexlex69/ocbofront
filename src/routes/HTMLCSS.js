import React from "react";
import { Col, Row } from "reactstrap";
import "./styles/styles.css";

export default function HTMLCSS() {
  return (
    <>
      {/* header */}

      <div
        style={{
          width: "100%",
          backgroundColor: "gray",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <main
          style={{ backgroundColor: "white", width: "95%", margin: "20px" }}
        >
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <section>
              <p>{"(Onsite Version)"}</p>
            </section>
            <section
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="bxulogo.png"
                  style={{
                    width: "15%",
                  }}
                />
                <div style={{ width: "100%", fontSize: ".6rem" }}>
                  <p>REPUBLIC OF THE PIHILIPPINES</p>{" "}
                  <p>CITY GOVERNMENT OF BUTUAN</p>
                </div>
              </div>
            </section>
            <section
              style={{
                border: "1px solid rgba(0, 0, 0, 0.05)",
                padding: "10px",
                fontSize: ".6rem",
              }}
            >
              <p>ANTI-RED TAPE AUTHORITY</p>
              <p> CLIENT SATISFATION MEASUREMENT</p>
              <p> FORM</p>
              <p> PSA Approval No.: ARTA-2242-3</p>
            </section>
          </header>
        </main>
      </div>
    </>
  );
}
