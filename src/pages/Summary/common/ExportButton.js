import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import * as XLSX from "xlsx";
import { Button, Spinner } from "reactstrap";
import { useSelector } from "react-redux";
const ExportButton = (params) => {
  const dateFilter = useSelector((state) => state.dateFilter.params);
  const [isLoading, setIsLoading] = useState(false);
  const exportDocument = (data) => {
    // return
    const toBeExported = data.map((item) => {
      return {
        "Business Code .": item.business_code,
        "Business Name": item.business_name,
        Owner: item.owner,
        Type: item.type,
        Status: item.status,
        "Initial Received": moment(item.business_stages[0].created_at).format(
          "MMMM D, YYYY, h:mm:ss a"
        ),
        "Assessment Received": item.business_stages[1]?.created_at
          ? moment(item.business_stages[1].created_at).format(
              "MMMM D, YYYY, h:mm:ss a"
            )
          : "NONE",
        "Assessment Released": item.business_stages[2]?.created_at
          ? moment(item.business_stages[2].created_at).format(
              "MMMM D, YYYY, h:mm:ss a"
            )
          : "NONE",
        "Complete Received": item.business_stages[3]?.created_at
          ? moment(item.business_stages[3].created_at).format(
              "MMMM D, YYYY, h:mm:ss a"
            )
          : "NONE",
        "Final Released": item.business_stages[4]?.created_at
          ? moment(item.business_stages[4].created_at).format(
              "MMMM D, YYYY, h:mm:ss a"
            )
          : "NONE",
        "Initial Received - Assessment Released": item.durationStage1to3,
        "Complete Received - Final Released": item.durationStage4to5,
        "Total Duration": item.durationStage1to5,
      };
    });
    // return
    const worksheet = XLSX.utils.json_to_sheet(toBeExported);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    const fileName =
      "BPLD Summary " + dateFilter.date_from + "-" + dateFilter.date_to;
    XLSX.writeFile(workbook, fileName + ".xlsx");
  };

  const { keyword, status, date_from, date_to } = params.params;
  // console.log(keyword);

  const fetchDataToBeExported = () => {
    setIsLoading(true);
    axios({
      url: "api/summary",
      method: "GET",
      params: {
        keyword: keyword,
        status: status,
        date_from: date_from,
        date_to: date_to,
        export: 1,
      },
    }).then(
      function (res) {
        console.log(res);
        exportDocument(res.data);
        setIsLoading(false);
      },
      function (error) {
        setIsLoading(false);
      }
    );
  };

  return (
    <Button
      type="button"
      color="warning"
      className="btn-sm btn-rounded"
      onClick={(e) => {
        fetchDataToBeExported();
      }}
      style={{ marginBottom: "2px" }}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Spinner size="sm">Loading...</Spinner>
          <span> Exporting...</span>
        </>
      ) : (
        <>
          <i className="fas fa-file-export"></i> Export
        </>
      )}
    </Button>
  );
};
export default ExportButton;
