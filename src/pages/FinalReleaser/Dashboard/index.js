/* eslint-disable padded-blocks */
import React, { useEffect, useState } from "react";
import FinalReleaserTable from "../Common/FinalReleaserTable";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import Breadcrumbs from "components/Common/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import DashboardFilters from "pages/Dashboard/dashboardFilters";

import Pagination from "components/Pagination";
import {
  finalReleaserSlice,
  getFinalReleased,
} from "features/FinalReleaser/finalReleaserSlice";
const FinalReleaserDashboard = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.dateFilter.params);
  const [watcher, setWatcher] = useState(false);
  const updateWatcher = () => setWatcher(!watcher);
  const finalReleaser = useSelector((state) => state.finalReleaser);
  useEffect(() => {
    dispatch(getFinalReleased());
  }, [watcher]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Final Releasing" breadcrumbItem="Dashboard" />
          <Row>
            <Col xs="12">
              <Card>
                <CardHeader></CardHeader>
                <CardBody>
                  <DashboardFilters action={getFinalReleased} forAction={0} />
                  <FinalReleaserTable
                    data={finalReleaser}
                    tableData={finalReleaser.finalReleased.data}
                    displayRelease={false}
                    showAging={true}
                    showDetails={true}
                    displayEdit={true}
                    action={updateWatcher}
                  />
                  <Pagination
                    dataProps={finalReleaser.finalReleased}
                    setDataProps={finalReleaserSlice.actions.setDataProps}
                    setShowLoading={finalReleaserSlice.actions.setShowLoading}
                    forAction={0}
                    isLoading={finalReleaser.isFetching}
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

export default FinalReleaserDashboard;
