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
import SummaryQAContent from "./SummaryQAContent";

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
        <SummaryQAContent values={values} />
      </CustomTable>
    </div>
  );
}
