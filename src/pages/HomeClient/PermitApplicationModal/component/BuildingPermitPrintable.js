import React, { useRef } from "react";

import { generatedChecklistFD } from "pages/HomeClient/FakeValues/generatedChecklist";
import GeneratedChecklistCard from "./GeneratedChecklistCard";
import { questionsLabels } from "pages/HomeClient/utils/initialValues";
import { storedValues } from "pages/HomeClient/FakeValues/storedDataFD";
import selectValuesDisplay, {
  selectValuesDisplayVer2,
} from "pages/HomeClient/utils/SelectValuesDisplay";
import {
  characterOrOccupancyFD,
  formOwnershipFD,
  leasedSpace,
  methodAcquisitionFD,
  ownershipFD,
  workScopeCheckistFD,
} from "pages/HomeClient/FakeValues/fakedata";
import SummaryQAContent from "./SummaryQAContent";
import { useReactToPrint } from "react-to-print";
export default function BuildingPermitPrintable({ values }) {
  const fetchstoredValues = storedValues;
  return (
    <>
      <div className="BuildingPermitPrintable">
        <header>
          <img src={"bxulogo.png"} />

          <div>
            <p>Republic of the Philippines</p>
            <p>Butuan City</p>
            <p>DEPARTMENT OF THE BUILDING OFFICIAL</p>
            <p>ONE-STOP SHOP</p>
            <p>DOCUMENTARY REQUIREMENTS FOR BUILDING PERMIT</p>
          </div>
          <img src={"bxulogo.png"} />
        </header>
        <nav>
          <span>
            <p>Applicant Name: </p>
            <p>Date of Application: </p>
          </span>
          <p>Address: </p>
        </nav>
        <div className="container-container">
          <div className="Printable-container">
            {generatedChecklistFD.map((list) => (
              <div className="" key={list.id}>
                <GeneratedChecklistCard title={list.title} data={list.data} />
              </div>
            ))}
          </div>

          <p className="questionsAnswers">Questions and Answers Summary</p>
          <div>
            <table style={{ width: "100%" }} className="CustomTable">
              <SummaryQAContent values={values} />
            </table>
          </div>
        </div>
        <footer>This checklist was generated using the online tool.</footer>
      </div>
    </>
  );
}
