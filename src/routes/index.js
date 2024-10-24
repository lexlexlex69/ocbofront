import React from "react";
import { Redirect } from "react-router-dom";

//ITSM Components***********/
import RequestedServices from "../pages/RequestedServices/index";
import Reports from "../pages/Reports/index";
import MultipurposeSMS from "../pages/Tools/MultipurposeSMS/index";
import VaxcertSMS from "../pages/Tools/VaxcertSMS/index";
import Verification from "../pages/UserControls/Verification/index";
import Controls from "../pages/UserControls/Controls/index";
import RequestService from "pages/Services/RequestService/index";
import RequestTracker from "pages/Services/RequestTracker/index";
import CreateUser from "pages/UserControls/CreateUser/index";
//********************** */

// Profile
import UserProfile from "../pages/Authentication/user-profile";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// Dashboard
import Dashboard from "../pages/Dashboard/index";
import Analytics from "pages/Analytics";

import InitialReceiverDashboard from "../pages/InitialReceiver/Dashboard/index";
import Receive from "../pages/InitialReceiver/ForReceiving";
import AssessmentReceiverDashboard from "../pages/AssessmentReceiver/Dashboard/index";
import AssessmentForReceiving from "../pages/AssessmentReceiver/ForReceiving/index";
import AssessmentReleaserDashboard from "../pages/AssessmentReleaser/Dashboard/index";
import AssessmentForReleasing from "../pages/AssessmentReleaser/ForReleasing/index";
import CompleteReceiverDashboard from "../pages/CompleteReceiver/Dashboard/index";
import CompleteForReceiving from "../pages/CompleteReceiver/ForReceiving/index";

import NotificationsPage from "pages/Notification";

import CryptoIcoLanding from "../pages/Crypto/CryptoIcoLanding/index";

import PagesMaintenance from "../pages/Utility/pages-maintenance";
import PagesComingsoon from "../pages/Utility/pages-comingsoon";
import PagesForbidden from "../pages/Utility/pages-forbidden";

import Pages404 from "../pages/Utility/pages-404";
import Pages500 from "../pages/Utility/pages-500";
import FinalReleaserDashboard from "pages/FinalReleaser/Dashboard";
import FinalForReleasing from "pages/FinalReleaser/ForReleasing";
import Summary from "pages/Summary";
import BuildingChecklist from "pages/TestComponent/BuildingChecklist";
import PagesFaqs from "pages/Utility/pages-faqs";
import FormWizard from "pages/Forms/FormWizard";
import Login3 from "pages/AuthenticationInner/Login";
import UiCards from "pages/Ui/UiCards";
import HomeClient from "pages/HomeClient";
import UiModal from "pages/Ui/UiModal";
import FormElements from "pages/Forms/FormElements";
import FormLayouts from "pages/Forms/FormLayouts";

const authProtectedRoutes = [
  { path: "/dashboard", component: Analytics },

  { path: "/services/buildingChecklist", component: BuildingChecklist },
  { path: "/services/permitApplication", component: Receive },

  { path: "/initial-receiver/dashboard", component: InitialReceiverDashboard },
  { path: "/initial-receiver/receive", component: Receive },
  {
    path: "/assessment-receiver/dashboard",
    component: AssessmentReceiverDashboard,
  },
  {
    path: "/assessment-receiver/for-receiving",
    component: AssessmentForReceiving,
  },
  {
    path: "/assessment-releaser/dashboard",
    component: AssessmentReleaserDashboard,
  },
  {
    path: "/assessment-releaser/for-releasing",
    component: AssessmentForReleasing,
  },
  {
    path: "/complete-receiver/dashboard",
    component: CompleteReceiverDashboard,
  },
  {
    path: "/complete-receiver/for-receiving",
    component: CompleteForReceiving,
  },
  {
    path: "/final-releaser/dashboard",
    component: FinalReleaserDashboard,
  },
  {
    path: "/final-releaser/for-releasing",
    component: FinalForReleasing,
  },
  {
    path: "/summary",
    component: Summary,
  },
];

const publicRoutes = [
  { path: "/FormWizard", component: FormWizard },
  { path: "/logout", component: Logout },
  { path: "/login1", component: Login3 },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },

  { path: "/pages-maintenance", component: PagesMaintenance },
  { path: "/pages-forbidden", component: PagesForbidden },
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-500", component: Pages500 },
  { path: "/crypto-ico-landing", component: CryptoIcoLanding },
  { path: "/not-found", component: Pages404 },
];
const testRoutes = [
  { path: "/FormWizard1", component: FormWizard },
  { path: "/UiModal", component: UiModal },
  { path: "/FormElements", component: FormElements },
  { path: "/FormLayouts", component: FormLayouts },
  { path: "/home", component: HomeClient },
];

export { authProtectedRoutes, publicRoutes, testRoutes };
