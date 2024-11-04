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

const formOwnershipFD = [
  { id: 1, label: "Individual" },
  { id: 2, label: "Partnership" },
  { id: 3, label: "Corporation" },
  { id: 4, label: "Government" },
];

const barangayFD = [
  { id: 1, label: "Agao Poblacion" },
  { id: 1, label: "Agusan Pequeño" },
  { id: 1, label: "Ambago" },
  { id: 1, label: "Amparo" },
  { id: 1, label: "Ampayon" },
  { id: 1, label: "Anticala" },
  { id: 1, label: "Antongalon" },
  { id: 1, label: "Aupangan" },
  { id: 1, label: "Baan KM 3" },
  { id: 1, label: "Baan Riverside" },
  { id: 1, label: "Babag" },
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

const leasedSpace = [
  { id: 1, label: "SM Butuan" },
  { id: 2, label: "Robinsons Butuan" },
  { id: 3, label: "Gaisano Butuan" },
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

const characterOrOccupancy = [
  {
    id: 1,
    label: "GROUP A",
    desciption: "RESIDENTIAL (DWELLINGS)",
    choices: [
      { id: 1, label: "SINGLE" },
      { id: 2, label: "DUPLEX" },
      { id: 3, label: "RESIDENTIAL R-1, R-2" },
    ],
  },
  {
    id: 2,
    label: "GROUP B",
    desciption: "RESIDENTIAL",
    choices: [
      { id: 1, label: "HOTEL" },
      { id: 2, label: "MOTEL" },
      { id: 3, label: "TOWNHOUSE" },
      { id: 4, label: "DORMITORY" },
      { id: 5, label: "BOARDINGHOUSE/LODGING HOUSE" },
      { id: 6, label: "RESIDENTIAL R-3, R-4, R-5" },
    ],
  },
  {
    id: 3,
    label: "GROUP C",
    desciption: "EDUCATIONAL & RECREATIONAL",
    choices: [
      { id: 1, label: "SCHOOL BUILDING" },
      { id: 2, label: "SCHOOL AUDITORIUM, GYMNASIUM" },
      { id: 3, label: "CIVIC CENTER" },
      { id: 4, label: "CLUB HOUSE" },
      { id: 5, label: "CHURCH, MOSQUE, TEMPLE, CHAPEL" },
    ],
  },
  {
    id: 4,
    label: "GROUP D",
    desciption: "INSTITUTIONAL",
    choices: [
      { id: 1, label: "HOSPITAL OR SIMIAL STRUCTURE" },
      { id: 2, label: "HOME FOR THE AGED" },
      { id: 3, label: "GOVERNMENT OFFICE" },
    ],
  },
  {
    id: 5,
    label: "GROUP E",
    desciption: "COMMERCIAL",
    choices: [
      { id: 1, label: "BANK" },
      { id: 2, label: "STORE" },
      { id: 3, label: "SHOPPING CENTER/ MALL" },
      { id: 4, label: "DRINKING/ DINING ESTABLISHMENT" },
      { id: 5, label: "SHOP (i.e.DRESS SHOP, TAILORING, BABERSHOP, etc." },
    ],
  },
  {
    id: 6,
    label: "GROUP F",
    desciption: "LIGHT INDUSTRIAL",
    choices: [
      {
        id: 1,
        label:
          "FACTORY/ PLANT/ WAREHOUSE (USING INCOMBUSTIBLE/ NON-EXPLOSIVE MATERIALS",
      },
    ],
  },
  {
    id: 7,
    label: "GROUP G",
    desciption: "MEDIUM INDUSTRIAL",
    choices: [
      {
        id: 1,
        label: "STORAGE/ WAREHOUSE (FOR HAZARDOUS/ HIGHLY FLAMMABLE MATERIALS",
      },
      {
        id: 2,
        label: "FACTORY (FOR HA)",
      },
    ],
  },
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
        dependentOn: "ownershipStatus",
        dependentOnName: "id",
        dependeonValue: 3,
        label: "Method of lot/property acquisition",
        name: "methodAcquisition",
        inputType: "select",
        options: "methodAcquisitionOptions",
      },
      {
        row: 3,
        colmd: 12,
        fixedDependentOn: "ownershipStatus",
        fixedDependentOnName: "id",
        fixedDependentOnId: 2,
        fixedDependentSelectId: 2,
        label: "Form of Ownership",
        name: "formOwnership",
        inputType: "select",
        options: "formOwnershipOptions",
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
  formOwnershipFD,
  workScopeCheckistFD,
  followUpQuestionsFD,
  buildingPermitAppicationQuestions,
  barangayFD,
  characterOrOccupancy,
  leasedSpace,
};
