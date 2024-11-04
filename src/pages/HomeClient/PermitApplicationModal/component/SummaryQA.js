import React from "react";
import { questionsLabels } from "pages/HomeClient/utils/initialValues";
import CustomTable from "./CustomTable";
import {
  barangayFD,
  formOwnershipFD,
  methodAcquisitionFD,
  ownershipFD,
} from "pages/HomeClient/FakeValues/fakedata";
import selectValuesDisplay from "./SelectValuesDisplay";

export default function SummaryQA({ values }) {
  // console.log(useFormikContext);
  // console.log(values.landOwnershipStatus);
  const fetchstoredValues = values;
  // console.log(
  //   ownershipFD.find((item) => item.id == values.landOwnershipStatus)?.label
  // );
  // console.log(fetchstoredValues);
  return (
    <div className="CustomTable">
      <CustomTable>
        <tr>
          <th>1</th>
          <td>Ownership Status</td>
          <td>
            {selectValuesDisplay(ownershipFD, values.landOwnershipStatus)}
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>Method of lot/property acquisition</td>
          <td>
            {selectValuesDisplay(
              methodAcquisitionFD,
              values.landOwnershipMethod
            )}
          </td>
        </tr>
        <tr>
          <th>3</th>
          <td>Form of Ownership</td>
          <td>
            {selectValuesDisplay(formOwnershipFD, values.landOwnershipForm)}
          </td>
        </tr>
        <tr>
          <th>4</th>
          <td>Project Title</td>
          <td>{values.projLocProjectTitle.toUpperCase()}</td>
        </tr>
        <tr>
          <th>5</th>
          <td>Project Address</td>
          <td>
            <span>
              <p>{`${values.projLocLotNo.toUpperCase()}, `}</p>
              <p>{`${values.projLocBlkNo.toUpperCase()}, `}</p>
              <p>{`${values.projLocStreet.toUpperCase()}, `}</p>
              <p>{`${selectValuesDisplay(
                barangayFD,
                values.projLocBarangay
              )}, `}</p>
              <p>{`${values.projLocDisctrict.toUpperCase()}, `}</p>
              <p>{`${values.projLocCity}`}</p>
            </span>
          </td>
        </tr>
        <tr>
          <th>6</th>
          <td>Project Tct No.</td>
          <td>{values.projLocTctNo}</td>
        </tr>
        <tr>
          <th>7</th>
          <td>Project Tax dec No.</td>
          <td>{values.projLocTaxDecNo}</td>
        </tr>
        <tr>
          <th>8</th>
          <td>Applicant Name</td>
          <td>
            <span>
              <p>{`${values.applicantSurname.toUpperCase()}, `}</p>
              <p>{`${values.applicantFirstname.toUpperCase()}, `}</p>
              <p>{`${values.applicantMI.toUpperCase()}, `}</p>
              <p>{`${values.applicantSuffix.toUpperCase()}, `}</p>
            </span>
          </td>
        </tr>
        <tr>
          <th>9</th>
          <td>Applicant Address</td>
          <td>
            <span>
              <p>{`${values.applicantAddSubdivision.toUpperCase()}, `}</p>
              <p>{`${values.applicantAddPurok.toUpperCase()}, `}</p>
              <p>{`${selectValuesDisplay(
                barangayFD,
                values.applicantAddBarangay
              )}, `}</p>
              <p>{`${values.applicantAddCity.toUpperCase()}, `}</p>
              <p>{`${values.applicantAddZipCode.toUpperCase()}, `}</p>
            </span>
          </td>
        </tr>
        <tr>
          <th>10</th>
          <td>Form of Ownership</td>
          <td>{values.landOwnershipForm}</td>
        </tr>
        <tr>
          <th>11</th>
          <td>Project Title</td>
          <td>{values.projLocProjectTitle}</td>
        </tr>
        {Object.entries(fetchstoredValues).map(([key, value], index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td
              style={{
                maxWidth: "500px",
                minWidth: "400px",
              }}
            >
              {/* {key}
                              {"==="} */}
              {questionsLabels[index]}
            </td>
            <td
              style={{
                maxWidth: "500px",
                minWidth: "400px",
              }}
            >
              {Array.isArray(value) ? (
                <span style={{ display: "flex" }}>
                  {value.map((val) => (
                    <p key={val.id}>{val.label},</p>
                  ))}
                </span>
              ) : (
                value
              )}
              {/* ANSWERS */}
            </td>
          </tr>
        ))}
      </CustomTable>
    </div>
  );
}
