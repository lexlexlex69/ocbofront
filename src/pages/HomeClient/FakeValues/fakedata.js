const ownershipFD = [
  { id: 1, label: "I am the owner" },
  { id: 2, label: "I am the co-owner" },
  { id: 3, label: "I am not the owner" },
];

const methodAcquisitionFD = [
  { id: 1, label: "I bought the lot/property" },
  { id: 2, label: "I am the heir of the registered owner" },
  { id: 3, label: "I am the co-heir of the registered owner" },
  { id: 4, label: "I am the tenant/lessee of the property" },
  { id: 5, label: "I am the awardee of this property" },
];

const formOwnership = [
  { id: 1, label: "Individual" },
  { id: 2, label: "Partnership" },
  { id: 3, label: "Corporation" },
  { id: 4, label: "Government" },
];

const workScopeCheckistFD = [
  { id: 1, label: "New Construction" },
  { id: 2, label: "Interior Renovation" },
  { id: 3, label: "Occupancy" },
  { id: 4, label: "Renovation" },
  { id: 5, label: "Addition" },
  { id: 6, label: "Extension" },
  { id: 7, label: "Erection" },
  { id: 8, label: "Conversion" },
  { id: 9, label: "Repair" },
  { id: 10, label: "Moving" },
  { id: 11, label: "Raising" },
  { id: 12, label: "Demolition" },
  { id: 13, label: "Accessory building structure" },
  { id: 14, label: "Alteration" },
  { id: 15, label: "As-Built" },
];

const followUpQuestionsFD = [
  { id: 1, label: "Without any electrical installation or alteration" },
  {
    id: 2,
    label: "Without any water closet installation or other plumbing fixtures",
  },
  {
    id: 3,
    label:
      "Without any internet, telephone, cctv or other electronic installation",
  },
  {
    id: 4,
    label:
      "Without any split type ACU and other mechanical installation or alteration",
  },
  {
    id: 5,
    label:
      "No water collection and distribution system, Sewage treatment plan and other sanitary facilities",
  },
  { id: 6, label: "Not located in front or abutting a national road/highway" },
  { id: 7, label: "No adverse health hazard or environmental impact" },
  { id: 8, label: "No existing building to be demolished" },
  { id: 9, label: "The applicant is the one who will follow up" },
  {
    id: 10,
    label:
      "Proposed bldg is less than 12meters in height and/or less than 4 storey",
  },
  { id: 11, label: "Application is for indigenous permit " },
  { id: 12, label: "A fence will be constructed along with the building" },
  { id: 13, label: "The structure is less than 3-storey" },
];

const buildingPermitAppicationQuestions = [
  {
    header: "LAND OWNERSHIP",
    field: [
      {
        row: 1,
        colmd: 12,
        label: "Ownership Status",
        name: "ownershipStatus",
        inputType: "select",
        options: "ownershipOptions",
      },
      {
        row: 2,
        colmd: 12,
        label: "Method of lot/property acquisition",
        name: "methodAcquisition",
        inputType: "select",
        options: "methodAcquisitionOptions",
      },
    ],
  },
  {
    header: "PROJECT LOCATION",
    field: [
      {
        row: 1,
        colmd: 6,
        label: "Project Title",
        name: "projectTitle",
        inputType: "text",
      },
      {
        row: 1,
        colmd: 3,
        label: "Lot No",
        name: "lotNo",
        inputType: "text",
      },
      {
        row: 1,
        colmd: 3,
        label: "Blk No",
        name: "blkNo",
        inputType: "text",
      },
      {
        row: 2,
        colmd: 6,
        label: "Tct No",
        name: "tctNo",
        inputType: "text",
      },
      {
        row: 2,
        colmd: 3,
        label: "Street",
        name: "street",
        inputType: "text",
      },
      {
        row: 2,
        colmd: 3,
        label: "Barangay",
        name: "barangay",
        inputType: "select",
        options: "barangayOptions",
      },
    ],
  },
];
export {
  ownershipFD,
  methodAcquisitionFD,
  formOwnership,
  workScopeCheckistFD,
  followUpQuestionsFD,
};
