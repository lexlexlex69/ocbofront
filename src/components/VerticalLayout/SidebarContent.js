import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

const SidebarContent = (props) => {
  const ref = useRef();
  const userDetails = useSelector((state) => state.user);
  // console.log(userDetails);
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname;
    const initMenu = () => {
      new MetisMenu("#side-menu");
      let matchingMenuItem = null;
      const ul = document.getElementById("side-menu");
      const items = ul.getElementsByTagName("a");
      // console.log(items);
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i];
          // console.log(matchingMenuItem);
          break;
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };
    initMenu();
  }, [props.location.pathname]);

  useEffect(() => {
    ref.current.recalculate();
  });

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag

        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }

  const checkRole = (roles) => {
    var allowAccess = false;
    roles.map((role) => {
      if (userDetails.roles.includes(role)) {
        return (allowAccess = true);
      }
    });
    // console.log(allowAccess)
    return allowAccess;
  };

  return (
    <React.Fragment>
      <SimpleBar className="h-100" ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              <Link to="/dashboard">
                <i className="fas fa-chart-line"></i>
                <span>{props.t("Analytics")}</span>
              </Link>
            </li>
            <li>
              <Link to="/#" className="has-arrow">
                <i className="fas fa-file-word"></i>
                <span>{props.t("Services")}</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="/services/buildingChecklist">
                    {props.t("Checklist Generator")}
                  </Link>
                </li>
                <li>
                  <Link to="/services/permitApplication">
                    {props.t("Permit Application")}
                  </Link>
                </li>
              </ul>
            </li>
            {checkRole([
              "super_admin",
              "admin",
              "initial_receiver",
              "assessment_receiver",
              "assessment_releaser",
              "complete_receiver",
              "final_releaser",
            ]) && (
              <>
                {checkRole(["super_admin", "admin", "initial_receiver"]) && (
                  <li>
                    <Link to="/#" className="has-arrow">
                      <i className="fas fa-file-word"></i>
                      <span>{props.t("Initial Receiving")}</span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/initial-receiver/dashboard">
                          {props.t("Dashboard")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/initial-receiver/receive">
                          {props.t("For Receiving")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
                {checkRole(["assessment_receiver", "super_admin", "admin"]) && (
                  <li>
                    <Link to="/#" className="has-arrow">
                      <i className="fas fa-file-word"></i>
                      <span>{props.t("Assessment Receiving")}</span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/assessment-receiver/dashboard">
                          {props.t("Dashboard")}
                        </Link>
                      </li>
                      <li>
                        <Link to="/assessment-receiver/for-receiving">
                          {props.t("For Receiving")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}

                {checkRole(["super_admin", "admin", "assessment_releaser"]) && (
                  <li>
                    <Link to="/#" className="has-arrow">
                      <i className="fas fa-th-list"></i>
                      <span>{props.t("Assessment Releasing")}</span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/assessment-releaser/dashboard">
                          {props.t("Dashboard")}
                        </Link>
                      </li>

                      <li>
                        <Link to="/assessment-releaser/for-releasing">
                          {props.t("For Releasing")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
                {checkRole(["super_admin", "admin", "complete_receiver"]) && (
                  <li>
                    <Link to="/#" className="has-arrow">
                      <i className="fas fa-th-list"></i>
                      <span>{props.t("Complete Receiving")}</span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/complete-receiver/dashboard">
                          {props.t("Dashboard")}
                        </Link>
                      </li>

                      <li>
                        <Link to="/complete-receiver/for-receiving">
                          {props.t("For Receiving")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}

                {checkRole(["super_admin", "admin", "final_releaser"]) && (
                  <li>
                    <Link to="/#" className="has-arrow">
                      <i className="fas fa-th-list"></i>
                      <span>{props.t("Final Releasing")}</span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/final-releaser/dashboard">
                          {props.t("Dashboard")}
                        </Link>
                      </li>

                      <li>
                        <Link to="/final-releaser/for-releasing">
                          {props.t("For Releasing")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
                {checkRole(["admin"]) && (
                  <li>
                    <Link to="/summary">
                      <i className="fas fa-th-list"></i>
                      <span>{props.t("Summary Table")}</span>
                    </Link>
                  </li>
                )}

                {checkRole(["super_admin"]) && (
                  <li>
                    <Link to="/#" className="has-arrow">
                      <i className="fas fa-th-list"></i>
                      <span>{props.t("Controls")}</span>
                    </Link>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/usercontrols">
                          {props.t("User Controls")}
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
