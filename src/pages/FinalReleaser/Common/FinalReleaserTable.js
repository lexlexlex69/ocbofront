/* eslint-disable padded-blocks */
import React, { useState, useEffect } from "react";
import TableLoader from "components/Loaders/TableLoaders";
import moment from "moment";
import { useDispatch } from "react-redux";
import ReleaseButton from "./ReleaseButton";
import { Table, Badge } from "reactstrap";
import EditButton from "components/Common/Buttons/EditButton";
import DetailsButton from "components/Common/Buttons/DetailsButton";

const FinalReleaserTable = ({
  data,
  tableData,
  displayRelease,
  displayEdit,
  api,
  showAging,
  showDetails,
  action,
}) => {
  var openModal = false;
  var businessPermit = false;
  var plateNo = false;
  const [sortedData, setSortedData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  useEffect(() => {
    setSortedData(
      _.orderBy(tableData, [sortConfig.key], [sortConfig.direction])
    );
  }, [tableData, sortConfig]);

  const sortData = (key) => {
    let direction = "asc";

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    setSortedData(_.orderBy(tableData, [key], [direction]));
    setSortConfig({ key, direction });
  };

  return (
    <>
      <div className="tableFixHead">
        <Table hover>
          <thead
            style={{
              backgroundColor: "white",
            }}
          >
            <tr>
              <th
                style={{
                  width: "10%",
                  cursor: "pointer",
                }}
                onClick={() => sortData("control_no")}
              >
                Control No.
              </th>
              <th
                style={{
                  width: "20%",
                  cursor: "pointer",
                }}
                onClick={() => sortData("name")}
              >
                Business Name
              </th>
              <th
                style={{
                  width: "20%",
                  cursor: "pointer",
                }}
                onClick={() => sortData("permit_type.name")}
              >
                Type
              </th>

              <th
                style={{
                  width: "10%",
                  cursor: "pointer",
                }}
                onClick={() => sortData("gender_type.gender_type")}
              >
                Gender - Type
              </th>
              <th
                style={{
                  width: "10%",
                  cursor: "pointer",
                }}
                onClick={() => sortData("business_code")}
              >
                Business Code
              </th>

              <th
                style={{
                  width: "10%",
                  cursor: "pointer",
                }}
                onClick={() => sortData("business_permit")}
              >
                Business Permit
              </th>
              <th
                style={{
                  width: "10%",
                  cursor: "pointer",
                }}
                onClick={() => sortData("plate_no")}
              >
                PLate No.
              </th>
              <th
                style={{
                  width: "10%",
                  cursor: "pointer",
                }}
                onClick={() => sortData("owner")}
              >
                Owner
              </th>
              <th
                style={{
                  width: "10%",
                  cursor: "pointer",
                }}
                onClick={() => sortData("status")}
              >
                Status
              </th>
              <th
                style={{
                  width: "15%",
                  cursor: "pointer",
                }}
                onClick={() => sortData("created_at")}
              >
                Date
              </th>
              {showAging ? (
                <th
                  style={{
                    width: "15%",
                    textAlign: "center",
                    ursor: "pointer",
                  }}
                  onClick={() => sortData("aging_from_complete_receiving")}
                >
                  From Complete Receiving
                </th>
              ) : null}

              {displayRelease || showDetails || displayEdit ? (
                <th
                  style={{
                    width: "15%",
                    textAlign: "center",
                  }}
                >
                  Action
                </th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {data.isFetching ? (
              <TableLoader row={10} col={10} />
            ) : (
              sortedData &&
              (sortedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={9}
                    style={{
                      textAlign: "center",
                    }}
                  >
                    No record found
                  </td>
                </tr>
              ) : (
                sortedData.map((items, index) => {
                  items.permit_type.name === "new" ||
                  items.permit_type.name === "renew"
                    ? !items.business_code ||
                      !items.business_permit ||
                      !items.plate_no
                      ? (openModal = true)
                      : (openModal = false)
                    : (openModal = false);

                  items.business_permit
                    ? (businessPermit = false)
                    : (businessPermit = true);
                  items.plate_no ? (plateNo = false) : (plateNo = true);
                  return (
                    <tr key={items.id}>
                      <td>{items.control_no}</td>
                      <td>{items.name}</td>
                      <td>{items.permit_type.name}</td>
                      <td>{items.gender_type.gender_type}</td>
                      <td>{items.business_code}</td>

                      <td>{items.business_permit}</td>
                      <td>{items.plate_no}</td>
                      <td>{items.owner}</td>
                      <td>{items.status}</td>
                      <td>
                        <h5>
                          <Badge color={"success"}>
                            {moment(items.created_at).format(
                              "MMMM D, YYYY, h:mm:ss a"
                            )}
                          </Badge>
                        </h5>
                      </td>
                      {showAging ? (
                        <td>
                          <h5>
                            <Badge color={items.color}>
                              {items.aging_from_complete_receiving}
                            </Badge>
                          </h5>
                        </td>
                      ) : null}

                      {displayRelease ? (
                        <td>
                          <ReleaseButton
                            api={api}
                            id={items.id}
                            openModal={openModal}
                            businessPermit={businessPermit}
                            plateNo={plateNo}
                          />
                        </td>
                      ) : null}
                      <td>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {showDetails ? (
                            <DetailsButton stages={items.business_stages} />
                          ) : null}
                          {displayEdit ? (
                            <EditButton
                              control_no={items.control_no}
                              business_permit={items.business_permit}
                              api={"api/edit"}
                              action={action}
                              business_id={items.id}
                              stage={"final_releasing"}
                              plate_no={items.plate_no}
                            />
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  );
                })
              ))
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default FinalReleaserTable;
