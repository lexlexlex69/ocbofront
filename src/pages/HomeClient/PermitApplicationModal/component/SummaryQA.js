import React from "react";
import { questionsLabels } from "pages/HomeClient/utils/initialValues";
import CustomTable from "./CustomTable";
import {
  barangayFD,
  characterOrOccupancyFD,
  formOwnershipFD,
  leasedSpace,
  methodAcquisitionFD,
  ownershipFD,
  workScopeCheckistFD,
} from "pages/HomeClient/FakeValues/fakedata";
import selectValuesDisplay, {
  selectValuesDisplayVer2,
} from "../../utils/SelectValuesDisplay";

export default function SummaryQA({ values }) {
  console.log(values);
  // console.log(useFormikContext);
  // console.log(values.landOwnershipStatus);
  const fetchstoredValues = values;
  // console.log(
  //   ownershipFD.find((item) => item.id == values.landOwnershipStatus)?.label
  // );
  // console.log(fetchstoredValues);
  // console.log(
  //   values.addInfoworkScopeChecklist.some(
  //     (item) => item.label === "Interior Renovation"
  //   )
  // );
  return (
    <div className="CustomTable">
      <CustomTable>
        <tr>
          <td>Ownership Status</td>
          <td>
            {selectValuesDisplay(ownershipFD, values.landOwnershipStatus)}
          </td>
        </tr>
        {values.landOwnershipMethod !== "0" && (
          <tr>
            <td>Method of lot/property acquisition</td>
            <td>
              {selectValuesDisplay(
                methodAcquisitionFD,
                values.landOwnershipMethod
              )}
            </td>
          </tr>
        )}
        <tr>
          <td>Form of Ownership</td>
          <td>
            {selectValuesDisplay(formOwnershipFD, values.landOwnershipForm)}
          </td>
        </tr>
        <tr>
          <td>Project Title</td>
          <td>{values.projLocProjectTitle.toUpperCase()}</td>
        </tr>
        <tr>
          <td>Project Address</td>
          <td>
            <span>
              {values.projLocLotNo && (
                <p>{`${values.projLocLotNo.toUpperCase()}, `}</p>
              )}
              {values.projLocLotNo && (
                <p>{`${values.projLocBlkNo.toUpperCase()}, `}</p>
              )}
              {values.projLocLotNo && (
                <p>{`${values.projLocStreet.toUpperCase()}, `}</p>
              )}
              {values.projLocLotNo && (
                <p>{`${selectValuesDisplay(
                  barangayFD,
                  values.projLocBarangay
                )}, `}</p>
              )}
              {values.projLocLotNo && (
                <p>{`${values.projLocDisctrict.toUpperCase()}, `}</p>
              )}
              {values.projLocLotNo && <p>{`${values.projLocCity}`}</p>}
            </span>
          </td>
        </tr>
        <tr>
          <td>Project Tct No.</td>
          <td>{values.projLocTctNo}</td>
        </tr>
        <tr>
          <td>Project Tax dec No.</td>
          <td>{values.projLocTaxDecNo}</td>
        </tr>
        <tr>
          <td>{"Applicant Name's"}</td>
          <td>
            <span>
              {values.applicantSurname && (
                <p>{`${values.applicantSurname.toUpperCase()}, `}</p>
              )}
              {values.applicantSurname && (
                <p>{`${values.applicantFirstname.toUpperCase()}, `}</p>
              )}
              {values.applicantSurname && (
                <p>{`${values.applicantMI.toUpperCase()}, `}</p>
              )}
              {values.applicantSurname && (
                <p>{`${values.applicantSuffix.toUpperCase()}, `}</p>
              )}
            </span>
          </td>
        </tr>
        <tr>
          <td>{"Applicant's Address"}</td>
          <td>
            <span>
              {values.applicantAddSubdivision && (
                <p>{`${values.applicantAddSubdivision.toUpperCase()}, `}</p>
              )}
              {values.applicantAddSubdivision && (
                <p>{`${values.applicantAddPurok.toUpperCase()}, `}</p>
              )}
              {values.applicantAddSubdivision && (
                <p>{`${selectValuesDisplay(
                  barangayFD,
                  values.applicantAddBarangay
                )}, `}</p>
              )}
              {values.applicantAddSubdivision && (
                <p>{`${values.applicantAddCity.toUpperCase()}, `}</p>
              )}
              {values.applicantAddSubdivision && (
                <p>{`${values.applicantAddZipCode.toUpperCase()}, `}</p>
              )}
            </span>
          </td>
        </tr>
        <tr>
          <td>{"Applicant's Tel No."}.</td>
          <td>{values.applicantTel}</td>
        </tr>
        {values.authorizeSwitch && (
          <>
            <tr>
              <td>{"Authorized Representative's Name"}</td>
              <td>
                <span>
                  {values.authorizeSurname && (
                    <p>{`${values.authorizeSurname.toUpperCase()}, `}</p>
                  )}
                  {values.authorizeSurname && (
                    <p>{`${values.authorizeFirstname.toUpperCase()}, `}</p>
                  )}
                  {values.authorizeSurname && (
                    <p>{`${values.authorizeMI.toUpperCase()}, `}</p>
                  )}
                  {values.authorizeSurname && (
                    <p>{`${values.authorizeSuffix.toUpperCase()}, `}</p>
                  )}
                </span>
              </td>
            </tr>
            <tr>
              <td>{"Authorized Representative's Address"}</td>
              <td>
                <span>
                  {values.authorizeAddSubdivision && (
                    <p>{`${values.authorizeAddSubdivision.toUpperCase()}, `}</p>
                  )}
                  {values.authorizeAddSubdivision && (
                    <p>{`${values.authorizeAddPurok.toUpperCase()}, `}</p>
                  )}
                  {values.authorizeAddSubdivision && (
                    <p>{`${selectValuesDisplay(
                      barangayFD,
                      values.authorizeAddBarangay
                    )}, `}</p>
                  )}
                  {values.authorizeAddSubdivision && (
                    <p>{`${values.authorizeAddCity.toUpperCase()}, `}</p>
                  )}
                  {values.authorizeAddSubdivision && (
                    <p>{`${values.authorizeAddZipCode.toUpperCase()}, `}</p>
                  )}
                </span>
              </td>
            </tr>
            <tr>
              <td>{"Authorized Representative's Tel No."}.</td>
              <td>{values.applicantTel}</td>
            </tr>
          </>
        )}
        <tr>
          <td>{"Type of Activity"}.</td>
          <td>
            {selectValuesDisplay(
              workScopeCheckistFD,
              values.AddInfoTypeActivity
            )}
          </td>
        </tr>
        <tr>
          <td>{"Scope of Work"}.</td>
          <td>
            {
              <span style={{ display: "flex" }}>
                {values.addInfoworkScopeChecklist.map((val) => (
                  <p key={val.id}>{val.label},</p>
                ))}
              </span>
            }
          </td>
        </tr>
        {values.addInfoworkScopeChecklist.some(
          (item) => item.label === "Interior Renovation"
        ) && (
          <>
            <tr>
              <td>{"Interior Renovation: Unit/Stall Number"}.</td>
              <td>{values.addInfoInteriorUnitStallNumber}</td>
            </tr>
            <tr>
              <td>{"Interior Renovation: Establisment Name"}.</td>
              <td>{values.addInfoInteriorEstabName}</td>
            </tr>
            <tr>
              <td>
                {
                  "Interior Renovation: Does the project involve any structural work?"
                }
                .
              </td>
              <td>{values.addInfoInteriorStructWork}</td>
            </tr>
            <tr>
              <td>
                {
                  "Interior Renovation: Is this an interior renovation within the mall?"
                }
                .
              </td>
              <td>{values.addInfoInteriorRenovationMall}</td>
            </tr>
            {values.addInfoInteriorRenovationMall === "yes" && (
              <tr>
                <td>{"Interior Renovation: Leased Space"}.</td>
                <td>
                  {selectValuesDisplay(
                    leasedSpace,
                    values.addInfoInteriorLeasedSpace
                  )}
                </td>
              </tr>
            )}
            {values.addInfoInteriorRenovationMall === "no" && (
              <>
                <tr>
                  <td>{"Interior Renovation: Building Permit No."}.</td>
                  <td>{values.addInfoInteriorBuildingNo}</td>
                </tr>
                <tr>
                  <td>{"Interior Renovation: Date Issued"}.</td>
                  <td>{values.addInfoInteriorDate}</td>
                </tr>
              </>
            )}
          </>
        )}
        <tr>
          <td>{"Use of Character or Occupancy"}.</td>
          <td>
            <div style={{ display: "flex" }}>
              <p>
                {selectValuesDisplayVer2(
                  characterOrOccupancyFD,
                  values.addInfoCharacterOccupancy
                )}
              </p>
              <p>{`(${values.addInfoCharacterOccupancyFollowUp})`}</p>
            </div>
          </td>
        </tr>

        <tr>
          <td>{"Follow-up Questions"}.</td>
          <td>
            {
              <span style={{ display: "block" }}>
                {values.addInfoFollowUpQuestions.map((val, indx) => (
                  <p style={{ marginBottom: "10px" }} key={val.id}>
                    {`${indx + 1}. ${val.label}.`}
                  </p>
                ))}
              </span>
            }
          </td>
        </tr>
        <tr></tr>
      </CustomTable>
    </div>
  );
}
