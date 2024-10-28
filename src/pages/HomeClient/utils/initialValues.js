import moment from "moment";

const todayDate = moment(new Date()).format("yyyy-MM-DD");

const initialValuesBuildingApp = {
  ownershipStatus: "",
  methodAcquisition: "",
  formOwnership: "",
  projectTitle: "",
  lotNo: "",
  blkNo: "",
  tctNo: "",
  street: "",
  barangay: "",
  taxDecNo: "",
  disctrict: "",
  city: "",
  workScopeChecklist: [],
  followUpChecklist: [],
  structuralWork: "",
  interiorRenovation: "",
  interiorRenovationDate: todayDate,
  authorizedSwitch: false,
};

export { initialValuesBuildingApp };
