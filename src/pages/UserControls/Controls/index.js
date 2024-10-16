/* eslint-disable padded-blocks */
import React, { useEffect, useState } from "react";
import UserControlsTable from "../Common/UserControlsTable";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import Breadcrumbs from "components/Common/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import DashboardFilters from "pages/Dashboard/dashboardFilters";
import axios from "axios";
import AddUserButton from "../Common/AddUserButton";

import Pagination from "components/Pagination";
import { userListSlice, getUserList } from "features/user/userListSlice";
const AssessmentReceiverDashboard = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.dateFilter.params);
  const userList = useSelector((state) => state.userList);
  const [roleOptions, setRoleOptions] = useState();

  useEffect(() => {
    dispatch(getUserList());
  }, []);
  useEffect(() => {
    axios.get("api/get-roles").then(
      (res) => {
        const options = res.data.map((options) => ({
          value: options.id,
          label: options.description,
        }));
        setRoleOptions(options);
      },
      (error) => {}
    );
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="User Controls" breadcrumbItem="Users" />
          <Row>
            <Col xs="12">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <DashboardFilters action={getUserList} forAction={0} />
                  <AddUserButton roleOptions={roleOptions}></AddUserButton>
                  <UserControlsTable
                    data={userList}
                    tableData={userList.users}
                  />
                  <Pagination
                    dataProps={userList.users}
                    setDataProps={userListSlice.actions.setDataProps}
                    setShowLoading={userListSlice.actions.setShowLoading}
                    isLoading={userList.isFetching}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AssessmentReceiverDashboard;
